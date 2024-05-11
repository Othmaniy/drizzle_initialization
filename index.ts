import express from "express";

const app = express();

app.get("/",(req,res)=>{
    res.send("welcom to ts ")

})
app.get("/ch",(req,res)=>{
    res.send("kjshgfg")
})

app.listen(3000,()=>{
    console.log("listening to port ");
})

