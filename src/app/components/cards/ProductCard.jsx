'use client'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Link from 'next/link';

const ProductCard = ({product}) => {
    const{_id,item_name,category,price,description,image,imported_from,features,model_no,brand_name,warranty}=product
    return (
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
          className='h-[250px]'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {item_name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description.slice(0,80)}....
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to cart
        </Button>
         <Link href={`/products/${_id}`}>
         <Button size="small" color="primary">
          View Details
        </Button>
         </Link>
      </CardActions>
    </Card>
    );
};

export default ProductCard;