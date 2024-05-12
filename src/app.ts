
import { json } from "stream/consumers"
import { db } from "./db/db"
import { usertable } from "./db/schema/userschema"
const runquery=async()=>{
//    const result = await db.insert(usertable).values({
//         name:"tet1",
//         lastname:"hdeu",
//         password:"123456",
        

//     })
const result =await db.select().from(usertable);

    console.log(result);
    console.log(JSON.stringify(result))

}
runquery();