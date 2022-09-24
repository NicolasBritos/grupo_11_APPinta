import '../Assets/css/Header.css';

function Header() {
  return (
    <div className="Header">
      <div className="Header-title col-6">
        <h3>Dashboard</h3>
      </div>
      <div className="Header-account col-6">
        <div>
          <p><i className="bi bi-person-circle"></i></p>
        </div>
      </div>
    </div>
  );
}

export default Header;
