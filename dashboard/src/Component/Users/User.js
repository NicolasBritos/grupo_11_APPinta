import  { CORE_URL }  from '../../Constants/Urls.js';

function User(props) {

    const urlImg = CORE_URL + "/img/users/"+ props.user.avatar;

    const deleteItem = (e) => {
        alert('Funcionalidad a implementar');
    }

    const editItem = (e) => { 
        alert('Funcionalidad a implementar');
    }
    
    return (
        <div className="user-item col-12 col-md-6 col-lg-4" data-user-id={props.user.id}>
            <div className="item-wrapper">
                <div className="user-item-img">
                    <img src={urlImg} />
                </div>
                <div className="user-item-body">
                    <p className="title">{props.user.name} {props.user.surname}</p>
                    <p className="products">    {props.user.email}</p>
                </div>
                <div className="options">
                    <i className="bi bi-pencil-square edit-icon" onClick={editItem}></i>
                    <i className="bi bi-trash3 delete-icon"  onClick={deleteItem}></i>
                </div>
            </div>
        </div>
    )
}

export default User;