const  webpack =require("webpack")
const HtmlWebpackPlugin =require('html-webpack-plugin');

module.exports={
    entry:__dirname+"/main.js",
    output:{
        filename:"bundle[hash].js",
        path:`${__dirname}/dist`
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:"babel"
            },
            {
                test:/\.css$/,
                loader:"style!css!postcss"
            }
        ]
    },
    postcss:[require("autoprefixer")({ browsers: ['last 10 versions'] })],
    devtool:"eval-source-map",
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings:false
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template:"public/template.html"
        })
    ]
}