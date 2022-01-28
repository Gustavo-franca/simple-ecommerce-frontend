import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import ProductItem from '../../components/ProductItem';
import { Product } from '../../types';
import { Container } from './styles';
import { useApplicationContext } from '../../contexts/application';
import ProductClient from '../../clients/product';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchString, setSearchString] = useState<string>('');
  const { config } = useApplicationContext();

  useEffect(() => {
    if (config && products && products.length == 0)
      new ProductClient({ config })
        .getProducts({ description: searchString, title: searchString })
        .then((data) => setProducts(data));
  }, [config, products, searchString]);
  return (
    <>
      <Header requestProduct={(value) => setSearchString(value)} />
      <Container>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Container>
    </>
  );
};

export default ProductList;
