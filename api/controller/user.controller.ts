
import { usertable } from './../../src/db/schema/userschema';
import { db } from "../../src/db/db";
import { eq } from 'drizzle-orm';
import { Request,Response } from 'express';
import bcrypt from "bcrypt";
export const createaccount =async (req:Request,res:Response)=>{
    const {name,lname,password,role} =req.body;
    const saltRounds =10;

    const salt =bcrypt.genSaltSync(saltRounds);

    const hashedpassword = bcrypt.hashSync(req.body.password,salt)
   
const finduser =  await db.select().from(usertable).where(eq(usertable.name,name));
if(finduser.length>0){
    return res.status(409).json({message:"user already exists please login"})
}
try{
    const result = await db.insert(usertable).values({
        name:`${name}`,
        lastname:`${lname}`,
        password:`${hashedpassword}`,
        role:role
    })
    console.log(result);
    // console.log(result[0].affectedRows);
    if(result[0].affectedRows==1){
        
        return res.status(200).json({message:"user created sucessfully "})
    }
    return res.status(409).json({message:"failed to create user"})
}
catch(error){
    console.log(error);
    return res.status(409).json({message:"failed to create user"})
}

}
//login function
export const login =async(req:Request,res:Response)=>{
    try{
        const name = req.body.name;
        console.log(req.body);
        const finduser =await db.select().from(usertable).where(eq(usertable.name,name));
        if(finduser.length==0){
          return res.status(404).json({
            message:"user not found "
          })
        }
        console.log("login function");
        console.log(finduser);
        console.log("req passwors");
        console.log(req.body.password);
        console.log("result password");
        console.log(finduser);
        // console.log(finduser[0].password);
    const checkpassword = bcrypt.compareSync(req.body.password,finduser[0].password)
     if(!checkpassword){
        return res.status(403).json({
            message:"invalid credentials"
        })
     }
    return res.status(200).json({
        message:"succcessfully logged in"
    })

    }
    catch(error){
        console.log(error);
    }



}
// module.exports={
//     createaccount
// }