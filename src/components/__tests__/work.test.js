import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Work from '../work.svelte';

const defaultProps = {
	title: 'Test Project',
	color: '#ff0000',
	logo: '/images/test-logo.svg',
	logoWidth: 100,
	logoHeight: 50,
	logoSpacingX: 20,
	logoSpacingY: 40
};

describe('Work', () => {
	it('renders the title in an h1', () => {
		render(Work, { props: defaultProps });
		expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Test Project');
	});

	it('renders subtitle as link when both subtitle and link are provided', () => {
		render(Work, {
			props: {
				...defaultProps,
				subtitle: 'A cool site',
				link: 'https://example.com'
			}
		});
		const subtitle = screen.getByRole('heading', { level: 2 });
		expect(subtitle).toHaveTextContent('A cool site');
		const link = subtitle.querySelector('a');
		expect(link).toHaveAttribute('href', 'https://example.com');
	});

	it('renders subtitle as plain text when no link is provided', () => {
		render(Work, {
			props: {
				...defaultProps,
				subtitle: 'A cool site'
			}
		});
		const subtitle = screen.getByRole('heading', { level: 2 });
		expect(subtitle).toHaveTextContent('A cool site');
		expect(subtitle.querySelector('a')).toBeNull();
	});

	it('renders no subtitle when neither subtitle nor link are provided', () => {
		render(Work, { props: defaultProps });
		expect(screen.queryByRole('heading', { level: 2 })).not.toBeInTheDocument();
	});

	it('renders the logo background with correct color', () => {
		const { container } = render(Work, { props: defaultProps });
		const article = container.querySelector('.c-work__article');
		expect(article).toHaveStyle('background-color: #ff0000');
	});
});
