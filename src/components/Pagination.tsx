import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {apiResponce} from "../models/apiResponce";
import {getProducts} from "../services/api.service";

const Pagination = () => {

    let [query, setQuery] = useSearchParams({'page': '1'});
    const [apiResponce, setApiResponce] = useState<apiResponce | undefined>();

    let totalPages = apiResponce ? Math.ceil(apiResponce.total/50) : 0;
    console.log(totalPages)

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
        if (page && +page < totalPages) {
            let currentPage = +page;
            currentPage++;
            setQuery({page: currentPage.toString()});
        }
    };

    let page = query.get('page') || '1';

    useEffect(() => {
        getProducts(+page).then(value => {
            setApiResponce(value);
        });
    }, [page]);

    return (
        <div>
            <button onClick={prevPage} disabled={+page === 1}>Prev</button>
            <button onClick={nextPage} disabled={+page >= totalPages}>Next</button>
        </div>
    );
};

export default Pagination;