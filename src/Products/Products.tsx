import React, {FC} from 'react';
import {apiProductsResp} from "../data";
import Product from "../Product/Product";
export interface IProductModel {
    "id": number,
    "title": string,
    "description": string,
    "thumbnail": string,
}
const Products:FC = () => {
    const products: IProductModel[] = apiProductsResp;
    return (
        <div>
            {products.map((product: IProductModel) => <Product key={product.id} product={product}/>)}
        </div>
    );
};

export default Products;