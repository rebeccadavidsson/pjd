import Stripe from 'stripe';
import { MetaData, Product } from '../models/models';
import { stripe } from '../../stripe/initializeStripe';

export function formatProductData(price: Stripe.Price, data: any) {
    return {
        id: price.id,
        priceId: data.id,
        name: data.name,
        unit_amount: price.unit_amount ?? 0,
        description: data.description,
        src: data.images && data.images[0] ? data.images[0] : null,
        width: 0,
        height: 0,
        meta: {
            dimension: data?.metadata?.afmeting
        } as MetaData
    } as Product;
}

export async function getProducts(): Promise<Product[]> {
    const {data: prices} = await stripe.prices.list();
    const products = await Promise.all(
        prices.map((async (price: Stripe.Price) => {
            const data = await stripe.products.retrieve(price.product);
            return formatProductData(price, data);
        }))
    );
    return products;
}


export const getPriceFromUnit = (amount: number) => {
    return amount / 100 ?? 0;
}
