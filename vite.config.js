import { sveltekit } from '@sveltejs/kit/vite';
import path from "path";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
    resolve: {
        alias: {
            //s$lib: path.resolve("./src/lib"),
            $mydir: path.resolve("./src/mydir")
        }
    }
};

export default config;
