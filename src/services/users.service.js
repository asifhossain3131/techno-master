import DbConnect from "./DbConnect"
import 'server-only'

export const getUsersFromDb=async()=>{
    const db=await DbConnect()
    const usersCollection=db.collection('users')
   return await usersCollection.find().toArray()
}