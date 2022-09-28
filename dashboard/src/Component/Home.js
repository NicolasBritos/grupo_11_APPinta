import '../Assets/css/Home.css';
import { Link } from 'react-router-dom';
import Payments from './Payments/Payments';

function Home() {

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
                                    <div className="col-10">
                                        <span>Usuarios</span>   
                                    </div>
                                    <div className="col-2">
                                        <i className="bi bi-arrow-right-short"></i>
                                    </div>
                                </div>
                            </Link>
                            <Link className="col-12 card opt" to="/products">
                                <div className="row">
                                    <div className="col-10">
                                        <span>Productos</span>   
                                    </div>
                                    <div className="col-2">
                                        <i className="bi bi-arrow-right-short"></i>
                                    </div>
                                </div>
                            </Link>
                            <Link className="col-12 card opt" to="/categories">
                                <div className="row">
                                    <div className="col-10">
                                        <span>Categorias</span>   
                                    </div>
                                    <div className="col-2">
                                        <i className="bi bi-arrow-right-short"></i>
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
  