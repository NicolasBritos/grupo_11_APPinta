import  { CORE_URL }  from '../../Constants/Urls.js';

function User(props) {

    const urlImg = CORE_URL + "/img/users/"+ props.user.avatar;
    
    return (
        <div className="user-item col-12 col-md-6 col-lg-4">
            <div className="item-wrapper">
                <div className="user-item-img">
                    <img src={urlImg} />
                </div>
                <div className="user-item-body">
                    <p className="title">Id: {props.user.id}</p>
                    <p className="products">Nombre: {props.user.name}</p>
                    <p className="products">Apellido: {props.user.surname}</p>
                    <p className="products">Email: {props.user.email}</p>
                </div>
            </div>
        </div>
    )
}

export default User;