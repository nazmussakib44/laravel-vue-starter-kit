module.exports = {
    publicPath: '/',
    lintOnSave: true,
    filenameHashing: false,
    chainWebpack: config => {
        config.optimization.delete('splitChunks'),
            config.optimization.minimize(false)
    }
};