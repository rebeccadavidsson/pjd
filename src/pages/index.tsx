'use client';
import React, { useCallback } from 'react';
import useWindowDimensions from '../utils/useWindowDimensions';
import Stripe from 'stripe';

import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import useStatus from '../../stripe/useStatus';
import Login from '../components/login';
import { createCheckoutSession } from '../../stripe/createCheckoutSession';
import RootLayout from './_layout';
import Gallery, { RenderImageProps } from 'react-photo-gallery-next';
import { stripe } from '../../stripe/initializeStripe';
import { MetaData, Product } from '../models/models';
import { GalleryImage } from '../components/galleryImage';
import { formatProductData, getProducts } from '../utils/utils';

// const auth = getAuth();

type Props = {
    photo: Product,
    index: string;
}

export default function Home({products}: any) {

    // const [user, userLoading] = useAuthState(auth);
    // const currentStatus = useStatus(user);

    const imageRenderer = useCallback(
        ({photo, index}: Props) => {
            return (
                <GalleryImage
                    key={`photo-` + index}
                    product={photo}
                />
            );
        },
        []
    ) as any as React.ComponentType<RenderImageProps>;

    return (
        <RootLayout>
            <div className={'yellow-line-vertical'}></div>
            <div className={'yellow-line-vertical3'}></div>

            {/*<div>*/}
            {/*    {!user && userLoading && <h1>Loading...</h1>}*/}
            {/*    {!user && !userLoading && <Login/>}*/}
            {/*    {user && !userLoading &&*/}
            {/*        <div>*/}
            {/*            <h1>Hello {user.email}</h1>*/}
            {/*            {currentStatus}*/}
            {/*            <button onClick={() => createCheckoutSession(user?.uid)}>Check</button>*/}
            {/*        </div>*/}
            {/*    }*/}
            {/*</div>*/}

            <div className="container mt-8" id="products-gallery">
                <div className={"flex justify-end text-gray-800 text-xs mb-4 mt-2"}>
                    <button aria-label={'sorteer'} className={'flex'}>
                        <span>SORTEER</span>
                        <img src={'sort.svg'} className={'sort ml-2'}/>
                    </button>
                </div>
                <Gallery photos={products} direction={"column"} margin={6} renderImage={imageRenderer}/>
            </div>

        </RootLayout>
    );
}

// Next.js will pre-render this page at build time using the props returned by getStaticProps.
export const getStaticProps = async () => {
    const products = await getProducts();

    return {
        props: {
            products: products.filter((product: Product) => product.src),
        },
    };
};
