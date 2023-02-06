import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
//import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: { immutable: true },
	kit: {
		adapter: adapter(),
		files: { assets: 'static' },
	},
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	//preprocess: vitePreprocess(),
	preprocess: [
		preprocess({
			postcss: false
		})
	]
};

export default config;
