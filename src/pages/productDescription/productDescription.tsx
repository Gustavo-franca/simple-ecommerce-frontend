import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import { Product } from '../../types';
import { Container } from './styles';
import ProductImg from './productImg';
import ProductInformation from './productInformation';
import { useParams } from 'react-router-dom';
import { useApplicationContext } from '../../contexts/application';
import ProductClient from '../../clients/product';
import LoadingBox from '../../components/loadingBox';

const ProductDescription = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const { config } = useApplicationContext();
  useEffect(() => {
    if (config && !product && id)
      new ProductClient({ config })
        .getProduct({ id })
        .then((data) => setProduct(data));
  }, [config, product]);

  return (
    <>
      <Header />
      {!product ? (
        <LoadingBox />
      ) : (
        <Container>
          <ProductImg urls={product.images} />
          <ProductInformation product={product} />
        </Container>
      )}
    </>
  );
};

export default ProductDescription;
