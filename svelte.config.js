import adapter from "@sveltejs/adapter-auto";
import houdini from "houdini-preprocess";
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [houdini()],
  kit: {
    vite: {
      resolve: {
        alias: {
          $houdini: path.resolve(".", "$houdini")
        }
      },
      server: {
        fs: {
          allow: ["."]
        }
      }
    },
    adapter: adapter(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte"
  }
};

export default config;
