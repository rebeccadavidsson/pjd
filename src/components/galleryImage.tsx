import Link from 'next/link';
import { Product } from '../models/models';
import { getPriceFromUnit } from '../utils/utils';

type Props = {
    product: Product,
    key: any;
};

export const GalleryImage = ({product, key}: Props) => {

    return (
        <>

            <div key={key} className={'mt-4 mb-4 m-0 gridContainer'}>
                <Link href={`/product/${product.priceId}`}>
                    <img alt={product.name} src={product.src}/>
                    <div className={'mt-2 flex justify-between'}>
                        <div>
                            <p className={'text-xl text-gray-800'}>{product?.name}</p>
                            <p className={'text-gray-600'}>{product?.description}</p>
                            <p className={'text-gray-600'}>{product?.meta?.dimension}</p>
                        </div>
                        <div>
                            <span className={'text-xl'}>€ {getPriceFromUnit(product?.unit_amount)}</span>
                        </div>
                    </div>
                </Link>
            </div>

        </>
    )
}
