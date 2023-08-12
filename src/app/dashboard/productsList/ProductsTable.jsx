'use client'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Link from 'next/link';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const ProductsTable = ({products}) => {
    const tableHeads=['Name','Category','Model no','Brand','Price','Details']
    return (
        <TableContainer component={Paper} className='mt-12'>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {
                tableHeads.map((head,i)=>
                <TableCell key={i}>{head}</TableCell>
                )
            } 
          </TableRow>
        </TableHead>
        <TableBody>
          {products?.map((product) => (
            <TableRow
              key={product?._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product?.item_name}
              </TableCell>
              <TableCell>{product?.category}</TableCell>
              <TableCell>{product?.model_no}</TableCell>
              <TableCell>{product?.brand_name}</TableCell>
              <TableCell>${product?.price}</TableCell>
              <TableCell>
              <Link href={`/products/${product?._id}`}>
              <Button variant="text">View</Button>
              </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
};

export default ProductsTable;