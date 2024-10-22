import React from 'react';
import Products from "../components/Products";
import Pagination from "../components/Pagination";

const ProductsPage = () => {
    return (
        <div>
            <Pagination/>
            <Products/>
        </div>
    );
};

export default ProductsPage;