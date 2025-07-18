'use server';

import { stripe } from '@/lib/stripe';
import { CartItemI } from '../../../store/cart-store';
import { redirect } from 'next/navigation';

// Checkout logic for Stripe
const checkoutAction = async (formData: FormData): Promise<void> => {
  const itemsJson = formData.get('items') as string;
  const items = JSON.parse(itemsJson);
  const line_items = items.map((item: CartItemI) => ({
    price_data: {
      currency: 'cad',
      product_data: { name: item.name },
      unit_amount: item.price,
    },
    quantity: item.quantity,
  }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items,
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout`,
  });
  redirect(session.url!);
};

export default checkoutAction;
