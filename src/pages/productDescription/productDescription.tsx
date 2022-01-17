import React from 'react';
import Header from '../../components/header';
import { Product } from '../../types';
import { Container } from './styles';
import ProductImg from './productImg';
import ProductInformation from './productInformation';

const product: Product = {
  name: 'Celular',
  price: 1800.25,
  id: 'IPHONE_BETA_XYZ',
  description: 'O melhor celular para você',
  previousPrice: 2500.25,
  rate: 4.5,
  shippingPrice: 0,
  stock: 500,
  imgURL:
    'https://a-static.mlcdn.com.br/618x463/iphone-11-apple-64gb-preto-61-12mp-ios/magazineluiza/155610500/2815c001fcdff11766fcb266dca62daf.jpg',
  images: [
    'https://a-static.mlcdn.com.br/618x463/iphone-11-apple-64gb-preto-61-12mp-ios/magazineluiza/155610500/2815c001fcdff11766fcb266dca62daf.jpg',
    'https://a-static.mlcdn.com.br/618x463/iphone-11-apple-64gb-preto-61-12mp-ios/magazineluiza/155610500/2815c001fcdff11766fcb266dca62daf.jpg'
  ]
};

const ProductDescription = () => {
  return (
    <>
      <Header />
      <Container>
        <ProductImg urls={product.images} />
        <ProductInformation product={product} />
      </Container>
    </>
  );
};

export default ProductDescription;
