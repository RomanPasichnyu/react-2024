import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {getProducts} from "../services/api.service";
import {IProduct} from "../models/apiResponce";
import Product from "./Product";

const Products = () => {

    const [products, setProducts] = useState<IProduct[]>([])
    let [query] = useSearchParams({page: '1'});

    useEffect(() => {
        const page = query.get('page') || 1
        getProducts(+page).then((value) => setProducts(value.products))
    }, [query]);


    return (
        <div>
            {products.map(product => <Product key={product.id} product={product}/>)}
        </div>
    );
};

export default Products;