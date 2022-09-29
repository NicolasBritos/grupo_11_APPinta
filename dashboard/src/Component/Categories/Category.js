import  { CORE_URL }  from '../../Constants/Urls.js';

function Category(props) {

    const urlImg = CORE_URL + props.category.img;
    
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