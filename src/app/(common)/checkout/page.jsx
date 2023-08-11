'use client'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const rows = ['Product','Model no','Category','Price','Delete'];

import { useDispatch, useSelector } from "react-redux";
import { removeItem } from '@/features/productsSlice';

const CheckoutPage = () => {
    const addedProducts=useSelector(state=>state?.cartProducts?.addedProducts)
    const dispatch=useDispatch()
    return (
        <div>
           <h1 className="text-2xl text-center mt-4 mb-8 font-semibold">Cart products: {addedProducts?.length}</h1>
           <div>
            {
                addedProducts?.length>0? <TableContainer component={Paper} className='w-10/12 mx-auto'>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                        {
                            rows.map((row,i)=>
                                <TableCell key={i}>{row}</TableCell>
                                )
                        }
                     
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {addedProducts.map((product) => (
                      <TableRow
                        key={product.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {product.name}
                        </TableCell>
                        <TableCell>{product?.model}</TableCell>
                        <TableCell>{product?.category}</TableCell>
                        <TableCell>${product?.price}</TableCell>
                        <TableCell>
                        <button onClick={()=>dispatch(removeItem(product?.id))}><DeleteOutlineIcon></DeleteOutlineIcon></button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
                :
                <p className="text-center text-red-700 text-lg">You have not added products yet</p>
            }
           </div>
        </div>
    );
};

export default CheckoutPage;