import { ObjectId } from "mongodb"
import DbConnect from "./DbConnect"
import 'server-only'

export const getProductsFromDb=async()=>{
    const db=await DbConnect()
    const productsCollection=db.collection('products')
   return await productsCollection.find().toArray()
}

export const getSingleProductFromDb=async(id)=>{
    const db=await DbConnect()
    const productsCollection=db.collection('products')
   return await productsCollection.findOne({_id:new ObjectId(id)})
}