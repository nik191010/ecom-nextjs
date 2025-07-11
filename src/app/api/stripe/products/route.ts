import { stripe } from '@/lib/stripe';
import { NextResponse } from 'next/server';

// In order to get information about products in
// the Navbar('client component'), we need to use
// this request which gets infromation from Zustand
// or the env. variables won't be avaibale
export async function GET() {
  const products = await stripe.products.list({
    expand: ['data.default_price'],
  });
  return NextResponse.json(products);
}
