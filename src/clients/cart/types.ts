import * as stream from 'stream';

export interface QueryProduct {
  description?: string;
  title?: string;
}

export type CartAPIProduct = {
  id: string;
  quantity: number;
};

export type CartResponse = {
  id: string;
  products: CartAPIProduct[];
};
