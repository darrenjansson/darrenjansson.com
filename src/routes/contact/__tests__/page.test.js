import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import ContactPage from '../+page.svelte';

const getField = (container, name) => container.querySelector(`[name="${name}"]`);

describe('Contact Page', () => {
	beforeEach(() => {
		vi.stubGlobal('fetch', vi.fn());
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it('renders all three form fields and a submit button', () => {
		const { container } = render(ContactPage);
		expect(getField(container, 'name')).toBeInTheDocument();
		expect(getField(container, 'email')).toBeInTheDocument();
		expect(getField(container, 'message')).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument();
	});

	it('shows required errors when submitting with empty fields', async () => {
		render(ContactPage);
		const button = screen.getByRole('button', { name: /send/i });
		await fireEvent.click(button);

		const errors = screen.getAllByText(/is required/i);
		expect(errors).toHaveLength(3);
		errors.forEach((error) => {
			expect(error).not.toHaveAttribute('hidden');
		});
	});

	it('treats whitespace-only values as empty', async () => {
		const { container } = render(ContactPage);

		const nameInput = getField(container, 'name');
		const emailInput = getField(container, 'email');
		const messageInput = getField(container, 'message');

		await fireEvent.input(nameInput, { target: { value: '   ' } });
		await fireEvent.input(emailInput, { target: { value: '  ' } });
		await fireEvent.input(messageInput, { target: { value: '  ' } });

		const button = screen.getByRole('button', { name: /send/i });
		await fireEvent.click(button);

		const errors = screen.getAllByText(/is required/i);
		expect(errors).toHaveLength(3);
		errors.forEach((error) => {
			expect(error).not.toHaveAttribute('hidden');
		});
	});

	it('calls fetch with correct data when form is valid', async () => {
		const mockFetch = vi.fn().mockResolvedValue({ ok: true });
		vi.stubGlobal('fetch', mockFetch);

		const locationMock = { href: '' };
		Object.defineProperty(window, 'location', {
			value: locationMock,
			writable: true,
			configurable: true
		});

		const { container } = render(ContactPage);

		await fireEvent.input(getField(container, 'name'), { target: { value: 'Darren' } });
		await fireEvent.input(getField(container, 'email'), { target: { value: 'darren@test.com' } });
		await fireEvent.input(getField(container, 'message'), { target: { value: 'Hello there' } });

		const button = screen.getByRole('button', { name: /send/i });
		await fireEvent.click(button);

		expect(mockFetch).toHaveBeenCalledOnce();
		expect(mockFetch).toHaveBeenCalledWith(
			'/contact/success',
			expect.objectContaining({
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
			})
		);

		const body = mockFetch.mock.calls[0][1].body;
		expect(body).toContain('name=Darren');
		expect(body).toContain('email=darren%40test.com');
		expect(body).toContain('message=Hello+there');
		expect(body).toContain('form-name=Contact');
	});

	it('shows error message when fetch fails', async () => {
		const mockFetch = vi.fn().mockRejectedValue(new Error('Network error'));
		vi.stubGlobal('fetch', mockFetch);

		const { container } = render(ContactPage);

		await fireEvent.input(getField(container, 'name'), { target: { value: 'Darren' } });
		await fireEvent.input(getField(container, 'email'), { target: { value: 'darren@test.com' } });
		await fireEvent.input(getField(container, 'message'), { target: { value: 'Hello' } });

		const button = screen.getByRole('button', { name: /send/i });
		await fireEvent.click(button);

		await vi.waitFor(() => {
			expect(screen.getByText(/there was an error/i)).not.toHaveAttribute('hidden');
		});
	});

	it('shows error message when response is not ok', async () => {
		const mockFetch = vi.fn().mockResolvedValue({ ok: false });
		vi.stubGlobal('fetch', mockFetch);

		const { container } = render(ContactPage);

		await fireEvent.input(getField(container, 'name'), { target: { value: 'Darren' } });
		await fireEvent.input(getField(container, 'email'), { target: { value: 'darren@test.com' } });
		await fireEvent.input(getField(container, 'message'), { target: { value: 'Hello' } });

		const button = screen.getByRole('button', { name: /send/i });
		await fireEvent.click(button);

		await vi.waitFor(() => {
			expect(screen.getByText(/there was an error/i)).not.toHaveAttribute('hidden');
		});
	});
});
