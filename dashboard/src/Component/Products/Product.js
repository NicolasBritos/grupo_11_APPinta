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
                    <p className="name">{props.product.name} Productos</p>
                </div>
            </div>
        </div>
    )
}

export default Product;