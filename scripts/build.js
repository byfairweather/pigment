import fs from "fs-extra";
import path from "path";
import { build } from "esbuild";
import vue from "esbuild-plugin-vue3";
import { sassPlugin as sass } from "esbuild-sass-plugin";
import { htmlPlugin } from "@craftamap/esbuild-plugin-html";

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
    minify: true,
    metafile: true,
    plugins: [
      vue(),
      sass(),
      htmlPlugin({
        files: [
          {
            entryPoints: ["docs/index.ts"],
            filename: "index.html",
            title: "Pigment Docs",
          },
        ],
      }),
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
