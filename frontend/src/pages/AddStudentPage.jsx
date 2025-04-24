import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import StudentForm from '../components/StudentForm';
import { createStudent } from '../utils/api';

const AddStudentPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  
  const handleSubmit = async (studentData) => {
    try {
      await createStudent(studentData);
      navigate('/students', { state: { message: 'Student added successfully!' } });
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError('Failed to add student. Please try again.');
      }
      console.error('Error adding student:', error);
    }
  };
  
  return (
    <div className="container fade-in">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="d-flex align-items-center mb-4">
            <FontAwesomeIcon 
              icon={faUserPlus} 
              className="me-3" 
              size="2x"
              style={{ color: 'var(--primary-color)' }} 
            />
            <h2 className="mb-0">Add New Student</h2>
          </div>
          
          {error && (
            <div className="alert alert-danger d-flex align-items-center" role="alert">
              <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
              {error}
            </div>
          )}
          
          <div className="card shadow">
            <div className="card-body p-4">
              <StudentForm onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudentPage; 