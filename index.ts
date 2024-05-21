import express from "express";
import userrouter from "./api/router/user.router"
import questionRouter from "./api/router/question.router"
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use("/api/users",userrouter)
app.use("/api/questions",questionRouter)
app.listen(3000,()=>{
    console.log("listening to port yuio jjkk ithink ");
})
