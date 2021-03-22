
const express=require("express");

const bodyParser=require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"\\calculator.html");
});

app.post("/",function(req,res){
    var n1=Number(req.body.n1);
    var n2=Number(req.body.n2);
    var ans= n1+n2;
    res.send("Sumation is "+ans);
})

app.get("/bmi-calculator",function(req,res){
    res.sendFile(__dirname+"\\bmi.html");
});

app.post("/bmi-calculator",function(req,res){
    var weight=parseFloat(req.body.weight);
    var height=parseFloat(req.body.height);
    var bmi=weight/(height*height);
    res.send("<h3>Your BMI is "+bmi+"</h3>");
});

app.listen(3000,function(){
    console.log("Server started on port 3000");
})