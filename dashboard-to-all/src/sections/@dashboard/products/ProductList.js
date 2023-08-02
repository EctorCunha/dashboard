import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Grid, styled } from '@mui/material';

const StyledProductImg = styled('img')({
  top: 0,
  width: '13vw',
  height: '15vh',
  objectFit: 'cover',
  borderRadius: '9px'
});

const StyledTitlePrice = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column'
});

const StyledTitle = styled('p')({
  fontSize: '1.2rem',
  width: '10vw',
  wordWrap: 'break-word'
});

const ProductList = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setAllProducts(response.data.products);
      } catch (error) {
        console.error('Ocorreu um erro ao buscar os produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  console.log(allProducts);

  return (
    <Grid container spacing={3}>
      {allProducts.map((product) => (
        <Box sx={{ border: '1px solid red', borderRadius: '9px', margin: '1rem' }} key={product.id}>
          <StyledProductImg src={product.thumbnail} alt={product.name} />
          <StyledTitlePrice>
            <StyledTitle>{product.title}</StyledTitle>
            <StyledTitle>R$ {product.price},00</StyledTitle>
          </StyledTitlePrice>
        </Box>
      ))}
    </Grid>
  );
};

export default ProductList;
