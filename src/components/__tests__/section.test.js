import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Section from '../section.svelte';

describe('Section', () => {
	it('renders an h1 when title prop is provided', () => {
		render(Section, { props: { title: 'About' } });
		expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('About');
	});

	it('omits h1 when no title prop', () => {
		render(Section);
		expect(screen.queryByRole('heading', { level: 1 })).not.toBeInTheDocument();
	});

	it('applies color class when color prop is provided', () => {
		const { container } = render(Section, { props: { color: 'blue' } });
		const section = container.querySelector('section');
		expect(section).toHaveClass('c-section--blue');
	});

	it('applies c-section--top class when top is true', () => {
		const { container } = render(Section, { props: { top: true } });
		const section = container.querySelector('section');
		expect(section).toHaveClass('c-section--top');
	});

	it('applies c-section--stretch class when stretch is true', () => {
		const { container } = render(Section, { props: { stretch: true } });
		const section = container.querySelector('section');
		expect(section).toHaveClass('c-section--stretch');
	});

	it('does not apply optional classes by default', () => {
		const { container } = render(Section);
		const section = container.querySelector('section');
		expect(section).not.toHaveClass('c-section--top');
		expect(section).not.toHaveClass('c-section--stretch');
	});
});
