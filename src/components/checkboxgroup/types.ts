import { ReactNode } from 'react';

export type Options = {
  primary: string;
  secondary?: string | ReactNode;
  value: string;
  imgUrl?: string;
};
