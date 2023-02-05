const express=require("express");
const bodyparser=require("body-parser");
const app =express();
var items=[];
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.get("/",function(req,res){
    var today=new Date();

    var options={
        weekday: "long",
        day:"numeric",
        month:"long"
    };
   var day=today.toLocaleTimeString("en-US",options);


    res.render("list", {kindOfDay: day,newitem: items});
})
app.post("/",function(req,res){
   var item = req.body.newitem;
   items.push(item);
  res.redirect("/");
});
app.listen(3000,function(){
    console.log("server started on 3000");
})