/** @type {import('@sveltejs/kit').Config} */
import vercel from '@sveltejs/adapter-vercel';
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#test',
		adapter: vercel(),
	}
};

export default config;
