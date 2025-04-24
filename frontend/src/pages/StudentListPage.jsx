import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserPlus, faEdit, faTrash, faSpinner, 
  faSearch, faExclamationTriangle, faCheckCircle, 
  faTimesCircle, faListAlt 
} from '@fortawesome/free-solid-svg-icons';
import { getStudents, deleteStudent } from '../utils/api';

const StudentListPage = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  const fetchStudents = async () => {
    setLoading(true);
    try {
      const data = await getStudents();
      setStudents(data);
      setError(null);
    } catch (error) {
      setError('Failed to load students. Please try again later.');
      console.error('Error fetching students:', error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchStudents();
  }, []);
  
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await deleteStudent(id);
        setSuccessMessage('Student deleted successfully!');
        fetchStudents(); // Refresh the list
        
        // Clear success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      } catch (error) {
        setError('Failed to delete student. Please try again.');
        console.error('Error deleting student:', error);
      }
    }
  };
  
  // Format date to a readable format
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Filter students based on search term
  const filteredStudents = students.filter(student => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      student.studentId.toLowerCase().includes(searchTermLower) ||
      student.firstName.toLowerCase().includes(searchTermLower) ||
      student.lastName.toLowerCase().includes(searchTermLower) ||
      student.email.toLowerCase().includes(searchTermLower) ||
      student.department.toLowerCase().includes(searchTermLower)
    );
  });
  
  return (
    <div className="container fade-in">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>
          <FontAwesomeIcon icon={faListAlt} className="me-2" style={{ color: 'var(--primary-color)' }} />
          Student List
        </h2>
        <Link to="/students/add" className="btn btn-success">
          <FontAwesomeIcon icon={faUserPlus} className="me-2" /> Add New Student
        </Link>
      </div>
      
      {successMessage && (
        <div className="alert alert-success d-flex align-items-center" role="alert">
          <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
          {successMessage}
        </div>
      )}
      
      {error && (
        <div className="alert alert-danger d-flex align-items-center" role="alert">
          <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
          {error}
        </div>
      )}

      <div className="card mb-4">
        <div className="card-body">
          <div className="input-group">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search by name, ID, email or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      {loading ? (
        <div className="text-center my-5">
          <FontAwesomeIcon icon={faSpinner} spin size="3x" className="text-primary mb-3" />
          <p>Loading students...</p>
        </div>
      ) : filteredStudents.length === 0 ? (
        <div className="alert alert-info d-flex align-items-center" role="alert">
          <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
          {searchTerm ? 'No students match your search criteria.' : 'No students found. Click "Add New Student" to create one.'}
        </div>
      ) : (
        <div className="student-table">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Enrollment Year</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student._id}>
                    <td>{student.studentId}</td>
                    <td>{`${student.firstName} ${student.lastName}`}</td>
                    <td>{student.email}</td>
                    <td>{student.department}</td>
                    <td>{student.enrollmentYear}</td>
                    <td>
                      {student.isActive ? (
                        <span className="badge bg-success">
                          <FontAwesomeIcon icon={faCheckCircle} className="me-1" /> Active
                        </span>
                      ) : (
                        <span className="badge bg-secondary">
                          <FontAwesomeIcon icon={faTimesCircle} className="me-1" /> Inactive
                        </span>
                      )}
                    </td>
                    <td>
                      <Link 
                        to={`/students/edit/${student._id}`} 
                        className="btn btn-sm btn-primary btn-action"
                        title="Edit Student"
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </Link>
                      <button
                        onClick={() => handleDelete(student._id)}
                        className="btn btn-sm btn-danger btn-action"
                        title="Delete Student"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentListPage; 