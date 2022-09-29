import { useEffect, useState } from 'react';
import '../../Assets/css/Products.css';
import Product from './Product.js';
import Request from '../../Utils/Request.js';
import Pagination from '../../Utils/Pagination.js';

function Products() { 
    let pagination = Pagination();
    const url = 'http://localhost:3000/api/products';
    const [stateProducts, setProducts] = useState([]);
    const loadProducts = async () => {
        Request(url + pagination.url, setProducts);
    }

    useEffect(() => {
        loadProducts();
    }, []);

    const nextPage = (e) => {
        const size = pagination.size;
        const start = pagination.start + size;
        pagination = Pagination(start, size);
        Request(url + pagination.url, setProducts);
    }

    const previousPage = (e) => {
        const size = pagination.size;
        const start = pagination.start - size;
        pagination = Pagination(start, size);
        Request(url + pagination.url, setProducts);
    }
    
    return (
        <div className="Products container">
            <div className="product-header row">
                <div className="col-12">
                    <h4>Productos</h4>
                </div>
            </div>
            <div className="product-list row justify-content-start">
               {
                 stateProducts && stateProducts.map((product, idx) => {
                        return <Product key={idx} product={product} />                    
                 })
               }
               <div className="to-left" onClick={previousPage}>
                    <i className="bi bi-chevron-compact-left"></i>
               </div>
               <div className="to-right" onClick={nextPage}>
                    <i className="bi bi-chevron-compact-right"></i>
               </div>
            </div>
        </div>
    )
}

export default Products;