export interface Product {
    id: string;
    name: string;
    unit_amount: number;
    description?: string;
    src: string;
    width?: number;
    meta?: MetaData;
    priceId: string;
}

export interface MetaData {
    dimension?: string;
}
