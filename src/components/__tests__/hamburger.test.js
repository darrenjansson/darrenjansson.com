import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import Hamburger from '../hamburger.svelte';

describe('Hamburger', () => {
	afterEach(() => {
		document.body.className = '';
	});

	it('renders a menu link pointing to /menu', () => {
		render(Hamburger);
		const link = screen.getByRole('link', { name: 'Menu' });
		expect(link).toHaveAttribute('href', '/menu');
	});

	it('renders three hamburger lines', () => {
		const { container } = render(Hamburger);
		const lines = container.querySelectorAll('.hamburger__line');
		expect(lines).toHaveLength(3);
	});

	it('toggles nav-open class on body when clicked', async () => {
		const { container } = render(Hamburger);
		const button = container.querySelector('.hamburger');
		await fireEvent.click(button);
		expect(document.body.classList.contains('nav-open')).toBe(true);
		await fireEvent.click(button);
		expect(document.body.classList.contains('nav-open')).toBe(false);
	});

	it('toggles nav on Enter key press', async () => {
		const { container } = render(Hamburger);
		const button = container.querySelector('.hamburger');
		await fireEvent.keyDown(button, { key: 'Enter' });
		expect(document.body.classList.contains('nav-open')).toBe(true);
	});
});
