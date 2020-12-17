import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products =[
    { id: 1, name: 'Shoe', description: 'Running Shoes.', price: '$20', image: 'https://cdn.pixabay.com/photo/2014/06/18/18/42/running-shoe-371625_960_720.jpg'},
    { id: 2, name: 'Lenovo', description: 'Lenovo Thinkpad.', price: '$500', image: 'https://cdn.pixabay.com/photo/2020/03/01/10/26/laptop-4892244_960_720.jpg'},

]

const Products = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />            
            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}

            </Grid>
        </main>  
    )
}

export default Products;