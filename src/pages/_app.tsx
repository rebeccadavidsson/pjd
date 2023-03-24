import '../../assets/tailwind.css';
import '../styles/globals.css'

import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react';
import Head from 'next/head';
import { getProducts } from '../utils/utils';
import App from 'next/app'

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <Head>
            <title>Philipsdingen</title>
        </Head>
        <Component {...pageProps} />
    </>
}


// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx: any) => {
    // Calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps: any = await App.getInitialProps(ctx)

    // Fetch global site settings from Strapi
    const products = await getProducts()
    // Pass the data to our page via props
    return {...appProps, pageProps: {products, path: ctx?.router?.route}}
}

export default MyApp;
