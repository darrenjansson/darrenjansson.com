import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import Lists from '../lists.svelte';

describe('Lists', () => {
	it('renders the correct number of list groups', () => {
		const { container } = render(Lists, {
			props: {
				lists: [
					['Item 1', 'Item 2'],
					['Item 3', 'Item 4']
				]
			}
		});
		const groups = container.querySelectorAll('.c-list__item');
		expect(groups).toHaveLength(2);
	});

	it('renders all items within each sub-array as li elements', () => {
		const { container } = render(Lists, {
			props: {
				lists: [
					['React', 'Angular', 'Svelte'],
					['CSS', 'HTML']
				]
			}
		});
		const items = container.querySelectorAll('li');
		expect(items).toHaveLength(5);
		expect(items[0].textContent).toBe('React');
		expect(items[2].textContent).toBe('Svelte');
		expect(items[3].textContent).toBe('CSS');
	});

	it('handles an empty array without crashing', () => {
		const { container } = render(Lists, { props: { lists: [] } });
		const groups = container.querySelectorAll('.c-list__item');
		expect(groups).toHaveLength(0);
	});

	it('handles a single list group', () => {
		const { container } = render(Lists, {
			props: { lists: [['Only item']] }
		});
		const items = container.querySelectorAll('li');
		expect(items).toHaveLength(1);
		expect(items[0].textContent).toBe('Only item');
	});
});
