import  { CORE_URL }  from '../../Constants/Urls.js';

function Product(props) {

    const urlImg = CORE_URL + "/img/products/" + props.product.img;
    
    return (
        <div className="product-item col-12 col-md-6 col-lg-4">
            <div className="item-wrapper">
                <div className="product-item-img">
                    <img src={urlImg} />
                </div>
                <div className="product-item-body">
                    <p className="name">Nombre: {props.product.name}</p>
                    <p className="name">Precio: {props.product.price}</p>
                    <p className="name">Stock: {props.product.stock}</p>
                    
                </div>
                <div className="options">
                    <i className="bi bi-pencil-square edit-icon"></i>
                    <i className="bi bi-trash3 delete-icon"></i>
                </div>
                <div className="category">
                        <span className="bage-category" data-category-id={props.product.category.id}>{props.product.category.title}</span>
                </div>
            </div>
        </div>
    )
}

export default Product;