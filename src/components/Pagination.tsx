import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {apiResponce} from "../models/apiResponce";
import {getProducts} from "../services/api.service";

const Pagination = () => {

    let [query, setQuery] = useSearchParams({'page': '1'});
    const [apiResponce, setApiResponce] = useState<apiResponce | undefined>();

    const [flag, setFlag] = useState<boolean>(false)

    const prevPage = () => {
        let page = query.get('page');
        if (page && +page > 1) {
            let currentPage = +page;
            currentPage--;
            setQuery({page: currentPage.toString()});
        }
    };

    const nextPage = () => {
        let page = query.get('page');
        if (page ) {
            let currentPage = +page;
            currentPage++;
            setQuery({page: currentPage.toString()});
        }
    };

    let page = query.get('page') || '1';

    useEffect(() => {
        getProducts(+page).then(value => {
            setApiResponce(value);
            if (value.products.length >0){

            let lastID = value.products[value.products.length-1].id;
            if (lastID >= value.total){
                setFlag(true)
            }else {
                setFlag(false)
            }

            }
        });
    }, [page]);

    return (
        <div>
            <button onClick={prevPage} disabled={+page === 1}>Prev</button>
            <button onClick={nextPage} disabled={flag}>Next</button>
        </div>
    );
};

export default Pagination;