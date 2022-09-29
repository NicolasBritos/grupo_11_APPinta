import  { CORE_URL }  from '../../Constants/Urls.js';
import { STATUS } from '../../Constants/Status.js';
import Request from '../../Utils/Request.js';

function Category(props) {

    const urlImg = CORE_URL + props.category.img;
    
    const cbDelete = (data) => {
 
        if (data.status === STATUS.SUCCESS) {
            const id = data.object.id;
            const divItem = document.querySelector('[data-id="' + id + '"]');
            divItem.setAttribute('style', 'display: none;');

        }
    }

    const deleteItem = (e) => {
        const confirmation = window.confirm('Are you sure you want to delete this product?');

        if (confirmation) {
            const divItem = e.target.closest('.product-item');
            const idItem = divItem.getAttribute('data-id');
            const urlDelete = CORE_URL + '/api/products/' + idItem;
            const options = {
                method: 'DELETE',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Request-Method': 'DELETE'
                }
            }

            Request(urlDelete, cbDelete, options);
        }
    }

    const editItem = (e) => { 
        alert('Funcionalidad a implementar');
    }

    return (
        <div className="category-item col-12 col-md-6 col-lg-4">
            <div className="item-wrapper">
                <div className="category-item-img">
                    <img src={urlImg} />
                </div>
                <div className="category-item-body">
                    <p className="title">{props.category.title}</p>
                    <p className="products">{props.category.numberProducts} Productos</p>
                </div>
                <div className="options">
                    <i className="bi bi-pencil-square edit-icon"></i>
                    <i className="bi bi-trash3 delete-icon"></i>
                </div>
            </div>
        </div>
    )
}

export default Category;