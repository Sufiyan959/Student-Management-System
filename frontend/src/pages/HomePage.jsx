import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUserPlus, faListAlt } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  return (
    <div className="container fade-in">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center mb-5">
          <FontAwesomeIcon 
            icon={faGraduationCap} 
            size="4x" 
            className="mb-4" 
            style={{ color: 'var(--primary-color)' }} 
          />
          <h1 className="display-4 fw-bold mb-4">Student Management System</h1>
          <p className="lead mb-5">
            A comprehensive solution to manage student records efficiently.
            Add, view, edit, and delete student information with ease.
          </p>
        </div>
      </div>
      
      <div className="row justify-content-center gy-4">
        <div className="col-md-4">
          <div className="card h-100 text-center">
            <div className="card-body d-flex flex-column">
              <FontAwesomeIcon 
                icon={faListAlt} 
                size="3x" 
                className="mb-3 mt-3" 
                style={{ color: 'var(--primary-color)' }} 
              />
              <h3 className="card-title mb-3">View Students</h3>
              <p className="card-text flex-grow-1">
                Access a complete list of all students with their details and enrollment status.
              </p>
              <Link to="/students" className="btn btn-primary mt-3">
                View List
              </Link>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card h-100 text-center">
            <div className="card-body d-flex flex-column">
              <FontAwesomeIcon 
                icon={faUserPlus} 
                size="3x" 
                className="mb-3 mt-3" 
                style={{ color: 'var(--primary-color)' }} 
              />
              <h3 className="card-title mb-3">Add New Student</h3>
              <p className="card-text flex-grow-1">
                Register a new student by filling out a simple form with all required information.
              </p>
              <Link to="/students/add" className="btn btn-success mt-3">
                Add Student
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 