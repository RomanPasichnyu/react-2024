import React, {FC} from 'react';
import {IProductModel} from "../Products/Products";

interface IProps{
   product:IProductModel
}

const Product:FC<IProps> = ({product }) => {
    let {id, title, thumbnail,description} = product;
    return (
        <div>
            <p>{id}</p>
            <h2>{title}</h2>
            <p>{description}</p>
            <img src={thumbnail} alt={title}/>
        </div>
    );
};

export default Product;