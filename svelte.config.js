import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */

const config = {
    preprocess: preprocess(),

    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        // adapter: adapter(),
        adapter: adapter({
            // if true, will split your app into multiple functions
            // instead of creating a single one for the entire app
            split: false
        }),
        target: '#svelte',
    }
};

export default config;
