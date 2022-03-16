import fs from "fs-extra";
import { build } from "esbuild";
import vue from "esbuild-plugin-vue3";
import { sassPlugin as sass } from "esbuild-sass-plugin";
import { nodeExternalsPlugin } from "esbuild-node-externals";

await fs.remove("dist/pigment");
await fs.remove("dist/docs");

Promise.all([
  build({
    entryPoints: ["src/index.ts"],
    outfile: "/dist/pigment-ui/pigment-ui.js",
    bundle: true,
    platform: "node",
    format: "esm",
    minify: false,
    plugins: [vue(), sass(), nodeExternalsPlugin()],
    external: ["vue", "prismjs"],
    target: "node15",
  }),

  // build({
  //   entryPoints: ["docs/index.ts"],
  //   outdir: "dist/docs",
  //   bundle: true,
  //   metafile: true,
  //   minify: true,
  //   plugins: [
  //     inlineImportPlugin(),
  //     vue(),
  //     sass(),
  //     copy({ src: "./docs/public", dest: "./dist/docs" }),
  //   ],
  // }),
])
  .then(() => {
    console.log("Build Successful");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
