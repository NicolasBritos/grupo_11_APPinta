import  { CORE_URL }  from '../../Constants/Urls.js';

function Product(props) {

    const urlImg = CORE_URL + "/img/products/" + props.product.img;
    
    const deleteItem = (e) => {
        alert('Funcionalidad a implementar');
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