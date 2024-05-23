import express from "express";
import userrouter from "./api/router/user.router"
import questionRouter from "./api/router/question.router"
import answerRouter from "./api/router/anwer.router"
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use("/api/users",userrouter)
app.use("/api/questions",questionRouter)
app.use("/api/answers",answerRouter)
app.listen(3000,()=>{
    console.log("listening to port yuio jjkk ithink ");
})
