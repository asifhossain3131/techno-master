import DbConnect from '@/services/DbConnect';
import { NextResponse } from 'next/server';

export const GET=async(request)=> {
  if (request.method === 'GET') {
    try {
      const db = await DbConnect();
      const productsCollection=db.collection('products')
       const result=await productsCollection.find().toArray()
      return NextResponse.json({message: 'User found successfully', successful:1,products:result })
    } catch (error) {
      // res.status(500).json({ message: 'Error posting data', error: error.message });
    }
  } else {
    // res.status(405).json({ message: 'Method Not Allowed' });
  }
}