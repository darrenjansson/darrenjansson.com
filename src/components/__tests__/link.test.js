import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import Link from '../link.svelte';

describe('Link', () => {
	it('renders an anchor with the provided href', () => {
		render(Link, { props: { href: '/about' } });
		const link = screen.getByRole('link');
		expect(link).toHaveAttribute('href', '/about');
	});

	it('applies the passed class prop', () => {
		render(Link, { props: { href: '/test', class: 'c-nav__link' } });
		const link = screen.getByRole('link');
		expect(link).toHaveClass('c-link');
		expect(link).toHaveClass('c-nav__link');
	});

	it('renders with the gradient effect span', () => {
		const { container } = render(Link, { props: { href: '/test' } });
		const effect = container.querySelector('.c-link__effect');
		expect(effect).toBeInTheDocument();
		expect(effect.style.backgroundImage).toContain('linear-gradient');
	});

	it('calls onclick handler when clicked', async () => {
		const handleClick = vi.fn();
		render(Link, { props: { href: '/test', onclick: handleClick } });
		const link = screen.getByRole('link');
		await fireEvent.click(link);
		expect(handleClick).toHaveBeenCalledOnce();
	});

	it('spreads rest props onto the anchor', () => {
		render(Link, { props: { href: '/test', target: '_blank', rel: 'noopener' } });
		const link = screen.getByRole('link');
		expect(link).toHaveAttribute('target', '_blank');
		expect(link).toHaveAttribute('rel', 'noopener');
	});
});
