import  { CORE_URL }  from '../../Constants/Urls.js';
import { STATUS } from '../../Constants/Status.js';
import Request from '../../Utils/Request.js';

function Product(props) {

    const urlImg = CORE_URL + "/img/products/" + props.product.img;
    
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
        <div className="product-item col-12 col-md-6 col-lg-4" data-id={props.product.id}>
            <div className="item-wrapper">
                <div className="product-item-img">
                    <img src={urlImg} />
                </div>
                <div className="product-item-body">
                    <p className="name">{props.product.name}</p>
                    <p className="price">$ {props.product.price}</p>
                    <p className="stock">Stock: {props.product.stock}</p>
                    
                </div>
                <div className="options">
                    <i className="bi bi-pencil-square edit-icon" onClick={editItem}></i>
                    <i className="bi bi-trash3 delete-icon" onClick={deleteItem}></i>
                </div>
                <div className="category">
                        <span className="bage-category" data-category-id={props.product.category.id}>{props.product.category.title}</span>
                </div>
            </div>
        </div>
    )
}

export default Product;