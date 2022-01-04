import fs from "fs-extra";
import { build } from "esbuild";
import vue from "esbuild-plugin-vue3";
import server from "live-server";
import { sassPlugin as sass } from "esbuild-sass-plugin";
import copy from "esbuild-copy-static-files";

await fs.remove("dist/dev");

build({
  entryPoints: ["dev/index.ts"],
  outdir: "dist/dev",
  bundle: true,
  format: "esm",
  metafile: true,
  watch: true,
  plugins: [vue(), sass(), copy({ src: "./docs/public", dest: "./dist/dev" })],
})
  .then((result) => {
    server.start({
      host: "127.0.0.1",
      port: 8080,
      root: "dist/dev",
      open: true,
      logLevel: 1,
      file: "index.html",
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
