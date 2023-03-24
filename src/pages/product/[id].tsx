import { Product } from '../../models/models';
import { stripe } from '../../../stripe/initializeStripe';
import { formatProductData, getPriceFromUnit, getProducts } from '../../utils/utils';
import RootLayout from '../_layout';
import FrameSelect from '../../components/FrameSelect';

export default function ProductPage({product}: { product: Product }) {

    return (
        <RootLayout>
            <div className="container mt-8">
                <div className={'flex gap-x-2 justify-between w-100 relative'}>
                    <img src={product.src} alt={product.name} className={'w-3/5 shadow'}/>
                    <div className={'mt-2 w-1/5 flex flex-col justify-between text-right'}>
                        <div>
                            <p className={'text-xl font-bold'}>{product?.name}</p>
                            <p className={'text-gray-600 text-md'}>{product?.description}</p>
                            <p className={'text-gray-600 text-xs'}>{product?.meta?.dimension}</p>

                            <div className={'mt-4'}>
                                <FrameSelect />
                            </div>

                            <p className={'text-xl text-gray-800'}>€ {getPriceFromUnit(product?.unit_amount)}</p>
                            <div className={'flex justify-end mt-8'}>
                                <button
                                    className={'text-right bg-gray-100 w-fit text-black font-bold py-2 px-4 rounded brown-button'}
                                    type="button">BESTEL
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={'vertical-line'}></div>
                </div>
            </div>
        </RootLayout>
    )

}

export const getStaticProps = async ({params}: { params: { id: string } }) => {
    const data = await stripe.products.retrieve(params.id);
    const price = await stripe.prices.retrieve(data?.default_price);
    const product = formatProductData(price, data);

    return {
        props: {
            product: product
        },
    };
};

export async function getStaticPaths() {
    const products = await getProducts();
    return {
        paths: products.map((_product) => {
            return {
                params: {id: _product.priceId},
            }
        }),
        fallback: true,
    }
}
