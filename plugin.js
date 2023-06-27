let layyerExternalPlugin = {
    name: 'layer-external',
    setup(build) {
        // レイヤーに含むモジュールを外部パスとする
        build.onResolve({
            filter: /(opt)/
        }, args => {
            return {
                path: args.path,
                external: true
            }
        })
    },
};


module.exports = [layyerExternalPlugin];