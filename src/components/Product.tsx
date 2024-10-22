import React, {FC} from 'react';
import {IProduct} from "../models/apiResponce";

type IProps = {
    product: IProduct
}

const Product: FC<IProps> = ({product}) => {
    return (
        <div>
            <p>ID:{product.id}</p>
            <p>Title:{product.title}</p>
            <p>Price:{product.price}</p>
            <p>Description: {product.description}</p>
            <hr/>
        </div>
    );
};

export default Product;