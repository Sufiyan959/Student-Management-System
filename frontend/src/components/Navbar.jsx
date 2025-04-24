import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGraduationCap, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <FontAwesomeIcon icon={faGraduationCap} className="me-2" />
          Student Management System
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/">
                <FontAwesomeIcon icon={faHome} className="me-1" /> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/students">
                <FontAwesomeIcon icon={faGraduationCap} className="me-1" /> Students
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/students/add">
                <FontAwesomeIcon icon={faUserPlus} className="me-1" /> Add Student
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 