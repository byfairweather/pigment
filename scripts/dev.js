import fs from "fs-extra";
import { build } from "esbuild";
import vue from "esbuild-plugin-vue3";
import server from "live-server";
import { sassPlugin as sass } from "esbuild-sass-plugin";
import { htmlPlugin } from "@craftamap/esbuild-plugin-html";

await fs.remove("dist/dev");

build({
  entryPoints: ["dev/index.ts"],
  outdir: "dist/dev",
  bundle: true,
  format: "esm",
  metafile: true,
  watch: true,
  plugins: [
    vue(),
    sass(),
    htmlPlugin({
      files: [
        {
          entryPoints: ["dev/index.ts"],
          filename: "index.html",
          title: "Pigment Dev",
        },
      ],
    }),
  ],
})
  .then((result) => {
    console.log("Running at http://localhost:8080");
    server.start({
      host: "127.0.0.1",
      port: 8080,
      root: "dist/dev",
      open: true,
      logLevel: 1,
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
