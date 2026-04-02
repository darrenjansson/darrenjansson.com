import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { getYears, closeNav, toggleNav } from '../helpers.svelte';

describe('getYears', () => {
	const currentYear = new Date().getFullYear();

	it('returns word strings for 1-9 years', () => {
		expect(getYears(currentYear - 1)).toBe('one');
		expect(getYears(currentYear - 3)).toBe('three');
		expect(getYears(currentYear - 5)).toBe('five');
		expect(getYears(currentYear - 9)).toBe('nine');
	});

	it('returns a number for 10+ years', () => {
		expect(getYears(currentYear - 10)).toBe(10);
		expect(getYears(currentYear - 15)).toBe(15);
		expect(getYears(currentYear - 20)).toBe(20);
	});

	it('returns exact number at the boundary of 10', () => {
		expect(getYears(currentYear - 9)).toBe('nine');
		expect(getYears(currentYear - 10)).toBe(10);
	});
});

describe('closeNav', () => {
	beforeEach(() => {
		document.body.classList.add('nav-open');
	});

	afterEach(() => {
		document.body.className = '';
	});

	it('removes nav-open class from body', () => {
		expect(document.body.classList.contains('nav-open')).toBe(true);
		closeNav();
		expect(document.body.classList.contains('nav-open')).toBe(false);
	});

	it('does nothing if nav-open is not present', () => {
		document.body.classList.remove('nav-open');
		closeNav();
		expect(document.body.classList.contains('nav-open')).toBe(false);
	});
});

describe('toggleNav', () => {
	afterEach(() => {
		document.body.className = '';
	});

	it('adds nav-open class when not present', () => {
		toggleNav();
		expect(document.body.classList.contains('nav-open')).toBe(true);
	});

	it('removes nav-open class when present', () => {
		document.body.classList.add('nav-open');
		toggleNav();
		expect(document.body.classList.contains('nav-open')).toBe(false);
	});
});
