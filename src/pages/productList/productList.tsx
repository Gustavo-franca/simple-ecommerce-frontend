import React from 'react';
import Header from '../../components/header';
import ProductItem from '../../components/ProductItem';
import { Container } from './styles';
import { useSearchBarState } from '../../contexts/searchBar';

const ProductList = () => {
  const { products } = useSearchBarState();

  return (
    <>
      <Header />
      <Container>
        {products?.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Container>
    </>
  );
};

export default ProductList;
