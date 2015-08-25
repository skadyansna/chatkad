/**
 * Created by kadyan on 15-08-24.
 */
var express = require('express'),
    app= express(),
    path=require('path'),
    cookieParser=require('cookie-parser'),
    session=require('express-session'),
    config=require('./config/config.js'),
    ConnectMongo=require('connect-mongo')(session)

//our views to be found under the directory and then the view folder
app.set('views',path.join(__dirname,'views'));
//template engine for displaying
app.engine('html',require('hogan-express'));
app.set('view engine','html');
app.use(express.static(path.join(__dirname,'public')));// all the static files the css files
app.use(cookieParser());

var env=process.env.NODE_ENV||'development';

if (env==='development')
{   //development specific
    app.use(session({secret:config.sessionSecret,saveUninitialized:true, resave:true}));
}
else
{
    //production specific
    //Creates a new instance in the database and when run the records are stored in the database.
    app.use(session({secret:config.sessionSecret,
    store:new ConnectMongo({
        url:config.dbURL,
        stringify:true
    })
    }))
}
//for exporting the routes file here
require('./routes/routes.js')(express,app);


//The server is listening to client request on port 3000
app.listen(3000,function(){
  console.log("server running");
    console.log('mode:'+env);
})