import { CheckoutProduct } from '../../contexts/checkout/types';

export interface FinishCheckout {
  products: CheckoutProduct[];
}
