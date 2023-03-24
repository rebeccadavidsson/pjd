import firebase from '../firebase/firebaseClient';
import getStripe from './initializeStripe';

export async function createCheckoutSession(uid: string) {
    const firestore = firebase.firestore();

    const checkoutSessionRef = await firestore
        .collection('users')
        .doc(uid)
        .collection('checkout_sessions')
        .add({
            price: "price_1MgrG5ButUMW85H00Pa8cJBs",
            success_url: window.location.origin,
            cancel_url: window.location.origin,
            mode: "payment",
        });

    checkoutSessionRef.onSnapshot(async (snap: any) => {
        const { sessionId } = snap?.data();
        if (sessionId) {
            const stripe = await getStripe();
            stripe?.redirectToCheckout({ sessionId });
        }
    });
}
