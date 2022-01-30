import * as stream from 'stream';

export interface QueryProduct {
  description?: string;
  title?: string;
}

export type CartProduct = {
  id: string;
};

export type CartResponse = {
  id: string;
  products: CartProduct[];
};
