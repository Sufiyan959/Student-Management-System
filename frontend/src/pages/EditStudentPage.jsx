import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSpinner, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import StudentForm from '../components/StudentForm';
import { getStudentById, updateStudent } from '../utils/api';

const EditStudentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const data = await getStudentById(id);
        setStudent(data);
        setError(null);
      } catch (error) {
        setError('Failed to load student data. Please try again later.');
        console.error('Error fetching student:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchStudent();
  }, [id]);
  
  const handleSubmit = async (studentData) => {
    try {
      await updateStudent(id, studentData);
      navigate('/students', { state: { message: 'Student updated successfully!' } });
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError('Failed to update student. Please try again.');
      }
      console.error('Error updating student:', error);
    }
  };
  
  if (loading) {
    return (
      <div className="container fade-in">
        <div className="text-center my-5">
          <FontAwesomeIcon icon={faSpinner} spin size="3x" className="text-primary mb-3" />
          <p>Loading student data...</p>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="container fade-in">
        <div className="alert alert-danger d-flex align-items-center mt-3" role="alert">
          <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
          {error}
        </div>
      </div>
    );
  }
  
  return (
    <div className="container fade-in">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="d-flex align-items-center mb-4">
            <FontAwesomeIcon 
              icon={faEdit} 
              className="me-3" 
              size="2x" 
              style={{ color: 'var(--primary-color)' }} 
            />
            <h2 className="mb-0">Edit Student</h2>
          </div>
          
          <div className="card shadow">
            <div className="card-body p-4">
              {student && (
                <StudentForm 
                  student={student} 
                  onSubmit={handleSubmit} 
                  isEditing={true} 
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStudentPage; 