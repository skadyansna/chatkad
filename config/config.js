/**
 * Created by kadyan on 15-08-25.
 */
//Based on the value of the Envirnoment variable set it either runs the development mode or the production mode for the application.
module.exports=require('./'+ (process.env.NODE_ENW ||'development')+'.json');