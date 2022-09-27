import '../Assets/css/Home.css';
import { Link } from 'react-router-dom';

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
                        <div className="row card-body">
                            <div className="col-12">

                                <div className="row item">
                                    <div className="item-icon col-5 name">
                                        <span className="text-muted">Carla Diaz</span>
                                    </div>
                                    <div className="item-title col-5 date">
                                        <span className="text-muted">Martes 30 18:50</span>
                                    </div>
                                    <div className="item-title col-2 price">
                                        <span className="text-success">$ 3000</span>
                                    </div>
                                </div>

                                <div className="row item">
                                    <div className="item-icon col-5 name">
                                        <span className="text-muted">Nicolas Britos</span>
                                    </div>
                                    <div className="item-title col-5 date">
                                        <span className="text-muted">Martes 30 19:30</span>
                                    </div>
                                    <div className="item-title col-2 price">
                                        <span className="text-success">$ 350</span>
                                    </div>
                                </div>

                                <div className="row item">
                                    <div className="item-icon col-5 name">
                                        <span className="text-muted">Alejandro Soares</span>
                                    </div>
                                    <div className="item-title col-5 date">
                                        <span className="text-muted">Miércoles 30 10:05</span>
                                    </div>
                                    <div className="item-title col-2 price">
                                        <span className="text-success">$ 250</span>
                                    </div>
                                </div>

                                <div className="row item">
                                    <div className="item-icon col-5 name">
                                        <span className="text-muted">Francisco Gianotti</span>
                                    </div>
                                    <div className="item-title col-5 date">
                                        <span className="text-muted">Miércoles 30 11:25</span>
                                    </div>
                                    <div className="item-title col-2 price">
                                        <span className="text-success">$ 3000</span>
                                    </div>
                                </div>

                                <div className="row item">
                                    <div className="item-icon col-5 name">
                                        <span className="text-muted">John Doe</span>
                                    </div>
                                    <div className="item-title col-5 date">
                                        <span className="text-muted">Miércoles 30 11:26</span>
                                    </div>
                                    <div className="item-title col-2 price">
                                        <span className="text-success">$ 2950</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
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
  