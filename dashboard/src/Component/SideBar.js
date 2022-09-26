import { Link } from "react-router-dom";
import "../Assets/css/SideBar.css";
import BeerAnimation from '../Assets/css/animations/BeerAnimation.css';
import SideBarTitleAnimation from '../Assets/css/animations/SideBarTitleAnimation.css';
import beer from '../Assets/img/beer.png';


function SideBar() {
  return (
    <div className="SideBar">
        
      <div className="SideBar-header">
        <Link className="header-title" to="/">
          <img className="rotate-scale-up" src={beer} alt="beer" />
          <h1 className="tracking-in-expand">APPINTA</h1>
        </Link>
      </div>
      <div className="SideBar-content">
        <ul className="nav-links" id="">
            <li className="nav-item active"></li>

            <li className="nav-item active">
            <Link className="nav-link custom-link" to="/products">
                <span>Productos</span>
            </Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link custom-link" to="/categories">
                <span>Categorias</span>
            </Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link custom-link" to="/users">
                <span>Usuarios</span>
            </Link>
            </li>
            
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
