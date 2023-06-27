const {
    build
} = require('esbuild')
const glob = require('glob')

// node_modulesを含めない
const entryPoints = glob.sync('./test-layer/lib/**/*.ts')
const {
    nodeExternalsPlugin
} = require('esbuild-node-externals')

build({
    entryPoints,
    bundle: true,
    platform: 'node',
    outbase: "test-layer",
    outdir: "./.layers/test-layer",
    allowOverwrite: true,
    target: "node18",
    tsconfig: "./tsconfig.json",
    plugins: [nodeExternalsPlugin()]
})