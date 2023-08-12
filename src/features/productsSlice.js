import { toast } from "react-hot-toast";

const { createSlice } = require("@reduxjs/toolkit");

const productsSlice=createSlice({
    name:'products',
    initialState:{addedProducts:[]},
    reducers:{
        addtocart:(state,action)=>{
          const isExist=state.addedProducts.find(product=>product.id===action.payload.id)
          if(!isExist){
            state.addedProducts.push(action.payload)
            toast.success('Product added successfullly')
          }
          else{
            toast.error('Product has been added already')
          }
        },
        removeItem:(state,action)=>{
            state.addedProducts=state.addedProducts.filter(product=>product.id!==action.payload)
            toast.success('Product removed Successfully')
        },
        confirmedOrder:(state)=>{
          state.addedProducts=[]
        }
    }
})

export const{addtocart,removeItem,confirmedOrder}=productsSlice.actions
export default productsSlice.reducer