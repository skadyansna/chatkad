/**
 * Created by kadyan on 15-08-24.
 */
module.exports=function(express,app) {
    var router=express.Router();
    router.get('/',function(req,res,next){
        res.render('index',{title:'welcome to ChatKad'});
    })
    router.get('/chatrooms',function(req,res,next){
        res.render('chatrooms',{title:'chatrooms'});
    })
    router.get('/setcolor',function(req,res){
        req.session.favColor='red';
        res.send("setting favourite color");
    })
        router.get('/getcolor',function(req,res){
        res.send('favorite color'+ (req.session.favColor===undefined?"not found":req.session.favColor));
    })
    app.use('/',router);
}
