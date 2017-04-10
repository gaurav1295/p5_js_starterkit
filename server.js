var express=require("express");

var app=express();
var server=app.listen(3000,serverListen);
app.use(express.static("public"));

function serverListen(){
  console.log("you are connected to server");
}
