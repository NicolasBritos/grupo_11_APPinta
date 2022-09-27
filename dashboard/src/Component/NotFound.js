import { Link } from 'react-router-dom';
import '../Assets/css/NotFound.css';
import notFound from '../Assets/img/not-found.png';

function NotFound() {
    return (
      <div className="NotFound">
        <img src={notFound} alt="Image not Found" />
        <Link to="/">Home</Link>
      </div>
    );
  }
  
  export default NotFound;
  