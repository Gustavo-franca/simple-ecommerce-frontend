import { ProductImgContainer, ImgStyled, ImgContainer } from './styles';
import React from 'react';

interface ProductImgProps {
  urls: string[];
}

const ProductImg = ({ urls }: ProductImgProps) => {
  return (
    <ProductImgContainer>
      {urls.map((url, index) => (
        <ImgContainer key={`${index}:${url}`}>
          <ImgStyled src={url} />
        </ImgContainer>
      ))}
    </ProductImgContainer>
  );
};

export default ProductImg;
