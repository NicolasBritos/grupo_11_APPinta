import { useEffect, useState } from 'react';
import '../../Assets/css/Products.css';
import Product from './Product.js';
import Request from '../../Utils/Request.js';
import Categories from '../Categories/Categories';

function Products() { 
    const url = 'http://localhost:3000/api/products';
    let [stateProducts, setProducts] = useState([]);

    const loadProducts = async () => {
        Request(url, setProducts);
    }

    useEffect(() => {
        loadProducts();
    }, []);

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
            </div>
        </div>
    )
}

export default Products;