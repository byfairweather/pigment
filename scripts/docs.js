import fs from "fs-extra";
import { build } from "esbuild";
import vue from "esbuild-plugin-vue3";
import server from "live-server";
import { sassPlugin as sass } from "esbuild-sass-plugin";
import { htmlPlugin } from "@craftamap/esbuild-plugin-html";

await fs.remove("dist/docs");

build({
  entryPoints: ["docs/index.ts"],
  outdir: "dist/docs",
  bundle: true,
  metafile: true,
  watch: true,
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
})
  .then((result) => {
    server.start({
      host: "127.0.0.1",
      port: 8181,
      root: "dist/docs",
      open: true,
      logLevel: 1,
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
