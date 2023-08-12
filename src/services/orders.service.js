import 'server-only'
import DbConnect from "./DbConnect"

export const getOrdersFromDb=async()=>{
    const db=await DbConnect()
    const ordersCollection=db.collection('orders')
   return await ordersCollection.find().toArray()
}