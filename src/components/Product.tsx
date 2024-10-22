import React, {FC} from 'react';
import {IProduct} from "../models/apiResponce";

type IProps = {
    product: IProduct
}

const Product: FC<IProps> = ({product}) => {
    return (
        <div>
            <p>ID:{product.id}</p>
        </div>
    );
};

export default Product;