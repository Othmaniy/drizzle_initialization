import { json } from "stream/consumers";
import { db } from "../../src/db/db";
import { questions } from "../../src/db/schema/userschema";
import { Request,Response } from 'express';
import { eq } from "drizzle-orm";

export const createquestion =async(req:Request,res:Response)=>{
    const {question,userId} = req.body;
    try{
        const result = await db.insert(questions).values({
            user_id:userId,
            questions:question
    
        }) 
        if(result[0].affectedRows==1){
            return res.status(200).json({message:"question created sucessfully"})
        }
    }
    catch(error){
        console.log(error);
        return res.status(404).json({message:"failed to create question"})
    }
   


}

export const getsinglequestion =async(req:Request,res:Response)=>{
    const questionid=req.params.id;
    console.log(questionid);;
    const questionidint=parseInt(questionid)
    try{
        const getquestion =  await db.select().from(questions).where(eq(questions.question_id,questionidint));
        if(getquestion.length>0){
            return res.status(200).json({
                data:getquestion[0]
            })
        }
        else{
            return res.status(404).json({
                message:"question not found"
            })
        }
      
    }
    catch(error){
        console.log(error);
        return res.status(500).json({ message: "Failed to retrieve question" });
    }
}
