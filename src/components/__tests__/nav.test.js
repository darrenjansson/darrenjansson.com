import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Nav from '../nav.svelte';

describe('Nav', () => {
	it('renders four navigation links', () => {
		render(Nav);
		const links = screen.getAllByRole('link');
		expect(links).toHaveLength(4);
	});

	it('renders links with correct hrefs', () => {
		render(Nav);
		expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '/about');
		expect(screen.getByText('Skills').closest('a')).toHaveAttribute('href', '/skills');
		expect(screen.getByText('Work').closest('a')).toHaveAttribute('href', '/work');
		expect(screen.getByText('Contact').closest('a')).toHaveAttribute('href', '/contact');
	});

	it('applies has-animation class when animate is true', () => {
		const { container } = render(Nav, { props: { animate: true } });
		const nav = container.querySelector('nav');
		expect(nav).toHaveClass('has-animation');
	});

	it('does not apply has-animation class by default', () => {
		const { container } = render(Nav);
		const nav = container.querySelector('nav');
		expect(nav).not.toHaveClass('has-animation');
	});
});
