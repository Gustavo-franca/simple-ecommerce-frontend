import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import ProductItem from '../../components/ProductItem';
import { Product } from '../../types';
import { Container } from './styles';
import { useApplicationContext } from '../../contexts/application';
import ProductClient from '../../clients/product';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { config } = useApplicationContext();
  console.log(products);
  useEffect(() => {
    if (config && products && products.length == 0)
      new ProductClient({ config })
        .getProducts({})
        .then((data) => setProducts(data));
  }, [config, products]);
  return (
    <>
      <Header />
      <Container>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Container>
    </>
  );
};

export default ProductList;
