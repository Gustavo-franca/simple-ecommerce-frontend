import React from 'react';
import Header from '../../components/header';
import ProductItem from '../../components/ProductItem';
import { Product } from '../../types';
import { Container } from './styles';

const products: Product[] = [
  {
    name: 'Celular',
    price: 1800.25,
    id: 'IPHONE_BETA_XYZ',
    description: 'O melhor celular para você',
    previousPrice: 2500.25,
    rate: 4.5,
    shippingPrice: 0,
    stock: 500,
    imgURL:
      'https://a-static.mlcdn.com.br/618x463/iphone-11-apple-64gb-preto-61-12mp-ios/magazineluiza/155610500/2815c001fcdff11766fcb266dca62daf.jpg'
  },
  {
    name: 'Celular',
    price: 1800.25,
    id: 'IPHONE_BETA_XYZ',
    description: 'O melhor celular para você',
    previousPrice: 2500.25,
    rate: 4.5,
    shippingPrice: 0,
    stock: 500,
    imgURL:
      'https://a-static.mlcdn.com.br/618x463/iphone-11-apple-64gb-preto-61-12mp-ios/magazineluiza/155610500/2815c001fcdff11766fcb266dca62daf.jpg'
  },
  {
    name: 'Celular',
    price: 1800.25,
    id: 'IPHONE_BETA_XYZ',
    description: 'O melhor celular para você',
    previousPrice: 2500.25,
    rate: 4.5,
    shippingPrice: 0,
    stock: 500,
    imgURL:
      'https://a-static.mlcdn.com.br/618x463/iphone-11-apple-64gb-preto-61-12mp-ios/magazineluiza/155610500/2815c001fcdff11766fcb266dca62daf.jpg'
  }
];
const ProductList = () => {
  return (
    <>
      <Header />
      <Container>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
        z
      </Container>
    </>
  );
};

export default ProductList;
