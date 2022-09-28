import { useEffect, useState } from 'react';
import '../../Assets/css/Categories.css';
import Category from './Category.js';
import Request from '../../Utils/Request.js';
import { CORE_URL } from '../../Constants/Urls.js';

function Categories() {
    const url = CORE_URL + '/api/categories';
    const [stateCategories, setCategories] = useState([]);

    const loadCategories = async () => {
        Request(url, setCategories);
    }

    useEffect(() => {
        loadCategories();
    }, []);

    return (
        <div className="Categories container">
            <div className="category-header row">
                <div className="col-12">
                    <h4>Categorias</h4>
                </div>
            </div>
            <div className="category-list row justify-content-start">
               {
                 stateCategories && stateCategories.map((category, idx) => {
                    return <Category key={idx} category={category} />
                 })
               }
            </div>
        </div>
    )
}

export default Categories;