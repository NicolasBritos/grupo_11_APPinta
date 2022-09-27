import  { CORE_URL }  from '../../Constants/Urls.js';

function Product(props) {

    const urlImg = CORE_URL + props.product.img;
    
    return (
        <div className="product-item col-12 col-md-6 col-lg-4">
            <div className="item-wrapper">
                <div className="product-item-img">
                    <img src={urlImg} />
                </div>
                <div className="product-item-body">
                    <p className="title">{props.product.title}</p>
                    <p className="products">{props.product.id} Productos</p>
                </div>
            </div>
        </div>
    )
}

export default Product;