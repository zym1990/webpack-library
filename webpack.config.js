//开发环境与生产环境可写在一个文件，也可分别写在多个文件，根据env配置加载不同文件
const commonConfig = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename:'webpack-numbers.js',
        library: 'webpackNumbers',
        libraryTarget:'umd'
    },
    //配置外部依赖
    externals:{
        lodash:{
            commonjs:'lodash',
            commonjs2:'lodash',
            amd:'lodash',
            root:'_'
        }
    }
};

module.exports = commonConfig;