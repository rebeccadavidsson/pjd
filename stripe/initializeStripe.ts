import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Stripe | null;

const initializeStripe = async () => {
    if (!stripePromise) {
        stripePromise = await loadStripe(
            process.env.STRIPE_PUBLIC_KEY ?? ''
        )
    }
    return stripePromise;
}
export const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
export default initializeStripe;
