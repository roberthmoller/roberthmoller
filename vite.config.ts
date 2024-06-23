import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	base: process.env.NODE_ENV === 'production' ? '/roberthmoller' : '',
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
