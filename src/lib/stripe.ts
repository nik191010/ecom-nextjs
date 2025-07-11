import Stripe from 'stripe';
// Getting data from stripe using the env. variable
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
