import DbConnect from "@/services/DbConnect"
import { NextResponse } from "next/server"

export const POST=async(req)=>{
    if(req.method==="POST"){
        try {
            const cart=await req.json()
            const db=await DbConnect()
            const orderCollection=db.collection('orders')
            const result=await orderCollection.insertOne(cart)
            return NextResponse.json({message: 'user inserted successfully',insertedId: result.insertedId })
        } catch (error) {
            return NextResponse.json({message:'Something went wrong'})
        }
    }
    else{
        return NextResponse.json({message:'Please provide a post method'})
    }
}