'use client'
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row?._id}
        </TableCell>
        <TableCell>{row?.phoneNumber}</TableCell>
        <TableCell>{row?.orderTime}</TableCell>
        <TableCell>{
            Math.floor(row?.products?.reduce((sum, product) => sum + product.price, 0))
            }</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
               Full Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Product Name</TableCell>
                    <TableCell>Model no</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row?.products?.map((product,i) => (
                    <TableRow key={i}>
                      <TableCell component="th" scope="row">
                        {product?.name}
                      </TableCell>
                      <TableCell>{product?.model}</TableCell>
                      <TableCell>{product?.category}</TableCell>
                      <TableCell>
                       {product?.price}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const OrdersListTable = ({orders}) => {
    const tableHeads=['OrderID','Product Name','Order Time','Total Price']
    return (
        <TableContainer component={Paper} className='mt-12'>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              {
                tableHeads.map((head,i)=>
                <TableCell key={i}>{head}</TableCell>
                )
              }   
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <Row key={order._id} row={order} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default OrdersListTable;