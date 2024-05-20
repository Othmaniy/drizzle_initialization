
import { usertable } from './../../src/db/schema/userschema';
import { db } from "../../src/db/db";
import { eq } from 'drizzle-orm';
import { Request,Response } from 'express';
export const createaccount =async (req:Request,res:Response)=>{
    const {name,lname,password} =req.body;
const finduser =  await db.select().from(usertable).where(eq(usertable.name,name));
if(finduser.length>0){
    return res.status(409).json({message:"user already exists"})
}
try{
    const insertuser = await db.insert(usertable).values({
        name:`${name}`,
        lastname:`${lname}`,
        password:`${password}`
    })
    console.log(insertuser[0].affectedRows);
    if(insertuser[0].affectedRows==1){
        
        return res.status(200).json({message:"user created sucessfully "})
    }
    return res.status(409).json({message:"failed to create user"})
}
catch(error){
    console.log(error);
    return res.status(409).json({message:"failed to create user"})
}



}

// module.exports={
//     createaccount
// }