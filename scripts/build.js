import fs from "fs-extra";
import path from "path";
import { build } from "esbuild";
import vue from "esbuild-plugin-vue3";
import { sassPlugin as sass } from "esbuild-sass-plugin";
import copy from "esbuild-copy-static-files";
import inlineImportPlugin from "esbuild-plugin-inline-import";

await fs.remove("dist/pigment");
await fs.remove("dist/docs");

Promise.all([
  build({
    entryPoints: ["src/index.ts"],
    outfile: "/dist/pigment/pigment.js",
    bundle: true,
    format: "esm",
    minify: true,
    plugins: [vue(), sass()],
    external: ["vue"],
  }),

  build({
    entryPoints: ["docs/index.ts"],
    outdir: "dist/docs",
    bundle: true,
    metafile: true,
    minify: true,
    plugins: [
      inlineImportPlugin(),
      vue(),
      sass(),
      copy({ src: "./docs/public", dest: "./dist/docs" }),
    ],
  }),
])
  .then(() => {
    console.log("Build Successful");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
