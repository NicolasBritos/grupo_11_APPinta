import { useState, useEffect } from 'react';
import '../Assets/css/Home.css';
import { Link } from 'react-router-dom';
import Payments from './Payments/Payments';
import { CORE_URL } from '../Constants/Urls';
import Request from '../Utils/Request';

function Home() {
    const endpoint = '/api/home-dashboard';
    const url = CORE_URL + endpoint;
    const initialState = {
        users: null,
        products: null,
        categories: null
    }
    const [stateHome, setHome] = useState(initialState);
    
    const loadHomeData = async () => {
        Request(url, setHome);
    }

    useEffect(() => {
        loadHomeData();
    }, []);

    return (
      <div className="Home row">
            <div className="Home-header col-12 d-flex justify-content-start">
                <h4>Hola Alejandro! gestiona tu negocio desde aquí</h4>
            </div>
            <div className="Home-content col-12">
                <div className="row">
                    <div className="col-12 col-md-8 card">
                        <div className="row card-title">
                            <div className="col-12">
                                <h4>Pagos</h4>
                            </div>
                        </div>
                        <Payments />
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="row">
                            <Link className="col-12 card opt" to="/users">
                                <div className="row">
                                    <div className="col-10 opt-title">
                                        <span>
                                            Usuarios
                                        </span>   
                                        <span className="title-count">
                                            ({ stateHome.users && stateHome.users.count })
                                        </span>
                                    </div>
                                    <div className="col-2">
                                        <i className="bi bi-arrow-right-short"></i>
                                    </div>
                                    <div className="col-12 opt-info">
                                        <span className="last-created">Último creado: { stateHome.users && stateHome.users.last.name } { stateHome.users && stateHome.users.last.surname }</span>
                                    </div>
                                </div>
                            </Link>
                            <Link className="col-12 card opt" to="/products">
                                <div className="row">
                                    <div className="col-10 opt-title">
                                        <span>Productos</span>
                                        <span className="title-count">
                                            ({ stateHome.products && stateHome.products.count })
                                        </span>   
                                    </div>
                                    <div className="col-2">
                                        <i className="bi bi-arrow-right-short"></i>
                                    </div>
                                    <div className="col-12 opt-info">
                                        <span className="last-created">Último creado: { stateHome.products && stateHome.products.last.name }</span>
                                    </div>
                                </div>
                            </Link>
                            <Link className="col-12 card opt" to="/categories">
                                <div className="row">
                                    <div className="col-10 opt-title">
                                        <span>Categorias</span>  
                                        <span className="title-count">
                                            ({ stateHome.categories && stateHome.categories.count })
                                        </span>   
                                    </div>
                                    <div className="col-2">
                                        <i className="bi bi-arrow-right-short"></i>
                                    </div>
                                    <div className="col-12 opt-info">
                                        <span className="last-created">Último creado: { stateHome.categories && stateHome.categories.last.title }</span>
                                    </div>
                                </div>
                            </Link>
                            <Link className="col-12 card opt" to="/shopping">
                                <div className="row">
                                    <div className="col-10">
                                        <span>Compras</span>   
                                    </div>
                                    <div className="col-2">
                                        <i className="bi bi-arrow-right-short"></i>
                                    </div>
                                </div>
                            </Link>
                        
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
  }
  
  export default Home;
  