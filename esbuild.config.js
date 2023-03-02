/* eslint-disable no-console */
const file = process.argv?.[2];

console.log(`esbuild config entry file: ${file}`);

require('esbuild')
  .build({
    entryPoints: [`${file}.js`],
    bundle: true,
    logLevel: 'warning',
    platform: 'node',
    target: 'node14',
    minify: true,
    outfile: `${file}.out.js`
  })
  .catch(() => process.exit(99));
