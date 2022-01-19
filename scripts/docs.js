import fs from "fs-extra";
import path from "path";
import { build } from "esbuild";
import vue from "esbuild-plugin-vue3";
import server from "live-server";
import { sassPlugin as sass } from "esbuild-sass-plugin";
import copy from "esbuild-copy-static-files";
import inlineImportPlugin from "esbuild-plugin-inline-import";

await fs.remove("dist/docs");

build({
  entryPoints: ["docs/index.ts"],
  outdir: "dist/docs",
  bundle: true,
  metafile: true,
  watch: true,
  plugins: [
    inlineImportPlugin(),
    vue(),
    sass(),
    copy({ src: "./docs/public", dest: "./dist/docs" }),
  ],
})
  .then((result) => {
    server.start({
      host: "127.0.0.1",
      port: 8181,
      root: "dist/docs",
      open: true,
      logLevel: 1,
      file: "index.html",
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
