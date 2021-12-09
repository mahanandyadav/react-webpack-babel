const {dirname} =require('path')
const path=require('path')

module.exports={
    entry:'./src/app.js',
   
    module:{
        rules:[{
            loader:'babel-loader',
            test:/\js$/,
            exclude:/node_modules/
        }]
    },
    devtool:'eval-cheap-source-map',
    devServer:{
        contentBase:path.join(__dirname,'public'),
        
    }
}