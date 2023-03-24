import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Stripe | null;

const initializeStripe = async () => {
    if (!stripePromise) {
        stripePromise = await loadStripe(
            "pk_test_51JNBUnButUMW85H07myROuZxJvcnldPaa6lr8ffVvWzGbxW9CEulzNHXuDQa9wAVUpBqDaYt4HTAyawbcIxv9WTW001bSDNZ62"
        )
    }
    return stripePromise;
}
export const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
export default initializeStripe;
