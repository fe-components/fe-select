import path from 'path'
const base = path.join(__dirname, '..')
const pkg = `${base}/package.json`
const src = `${base}/src`
const dist = `${base}/lib`

let lint = [
  `${base}/src/**/*.js`,
  `${base}/webpack/**/*.js`
]

// Read ignore lint config from package.json
try {
  let ignore = require(pkg).standard.ignore
  ignore.map((item) => lint.push(`!${base}/${item}`))
} catch (e) {}

export default {
  base,
  pkg,
  src,
  dist,
  lint,
  webpack: `${base}/webpack`,
  node_modules: `${base}/node_modules`
}
