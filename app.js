const express = require("express");
const ejs = require("ejs");
const bodyparser = require("body-parser");

const app = express();

app.use(express.static("public"));

app.use(bodyparser.urlencoded({extended : true}));

app.set("view engine" , "ejs");

app.get("/",function(req,res){
    res.render("intro");
});


app.get("/contact" , function(req,res){
    res.render("contact")
});


app.get("/team",function(req,res){
    res.render("team");
})
// app.get("/images" , function(req,res){
//     res.render("masonary");
// });


app.get("/monsary" , function(req,res){
    res.render("monsary");
});

app.post("/contact" , function(req,res){
    const email = req.body.email;
    const mailto_link = "mailto:" + email;
    window = window.open(mailto_link , "emailWindow");
    res.redirect("/");
});

app.listen(process.env.PORT || 3000 , function(){
    console.log("server running at 3000");
})


