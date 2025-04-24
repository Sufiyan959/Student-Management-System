import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faIdCard, faUser, faEnvelope, faCalendarAlt, 
  faGraduationCap, faCalendarPlus, faCheck, faSave,
  faUserEdit
} from '@fortawesome/free-solid-svg-icons';

const StudentForm = ({ student, onSubmit, isEditing = false }) => {
  const currentYear = new Date().getFullYear();
  
  const [formData, setFormData] = useState({
    studentId: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    department: '',
    enrollmentYear: currentYear,
    isActive: true
  });
  
  const [errors, setErrors] = useState({});
  
  useEffect(() => {
    if (isEditing && student) {
      // Format date to YYYY-MM-DD for input
      const formattedDob = student.dob ? new Date(student.dob).toISOString().split('T')[0] : '';
      
      setFormData({
        ...student,
        dob: formattedDob
      });
    }
  }, [isEditing, student]);
  
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    
    if (!formData.studentId) {
      newErrors.studentId = 'Student ID is required';
    } else if (!alphanumericRegex.test(formData.studentId)) {
      newErrors.studentId = 'Student ID must be alphanumeric';
    }
    
    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    }
    
    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    
    if (!formData.dob) {
      newErrors.dob = 'Date of birth is required';
    }
    
    if (!formData.department) {
      newErrors.department = 'Department is required';
    }
    
    if (!formData.enrollmentYear) {
      newErrors.enrollmentYear = 'Enrollment year is required';
    } else if (formData.enrollmentYear < 2000 || formData.enrollmentYear > currentYear) {
      newErrors.enrollmentYear = `Enrollment year must be between 2000 and ${currentYear}`;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };
  
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="row mb-4">
          <div className="col-md-6">
            <label htmlFor="studentId" className="form-label">
              <FontAwesomeIcon icon={faIdCard} className="me-2" />
              Student ID
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faIdCard} />
              </span>
              <input
                type="text"
                className={`form-control ${errors.studentId ? 'is-invalid' : ''}`}
                id="studentId"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                disabled={isEditing}
                placeholder="Enter student ID"
              />
              {errors.studentId && <div className="invalid-feedback">{errors.studentId}</div>}
            </div>
          </div>
          
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              Email
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                type="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
          </div>
        </div>
        
        <div className="row mb-4">
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
              <FontAwesomeIcon icon={faUser} className="me-2" />
              First Name
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                type="text"
                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
              />
              {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
            </div>
          </div>
          
          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">
              <FontAwesomeIcon icon={faUser} className="me-2" />
              Last Name
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                type="text"
                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
              />
              {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
            </div>
          </div>
        </div>
        
        <div className="row mb-4">
          <div className="col-md-6">
            <label htmlFor="dob" className="form-label">
              <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
              Date of Birth
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </span>
              <input
                type="date"
                className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
              {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
            </div>
          </div>
          
          <div className="col-md-6">
            <label htmlFor="department" className="form-label">
              <FontAwesomeIcon icon={faGraduationCap} className="me-2" />
              Department
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faGraduationCap} />
              </span>
              <select
                className={`form-select ${errors.department ? 'is-invalid' : ''}`}
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
              >
                <option value="">Select Department</option>
                <option value="Mechanical Engineering">Mechanical Engineering</option>
                <option value="Electrical Engineering">Electrical Engineering</option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                <option value="Chemical Engineering">Chemical Engineering</option>
                <option value="Aerospace Engineering">Aerospace Engineering</option>
                <option value="Electronics & Communication Engineering">Electronics & Communication Engineering</option>
                <option value="Information Technology">Information Technology</option>
              </select>
              {errors.department && <div className="invalid-feedback">{errors.department}</div>}
            </div>
          </div>
        </div>
        
        <div className="row mb-4">
          <div className="col-md-6">
            <label htmlFor="enrollmentYear" className="form-label">
              <FontAwesomeIcon icon={faCalendarPlus} className="me-2" />
              Enrollment Year
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faCalendarPlus} />
              </span>
              <input
                type="number"
                className={`form-control ${errors.enrollmentYear ? 'is-invalid' : ''}`}
                id="enrollmentYear"
                name="enrollmentYear"
                min="2000"
                max={currentYear}
                value={formData.enrollmentYear}
                onChange={handleChange}
              />
              {errors.enrollmentYear && <div className="invalid-feedback">{errors.enrollmentYear}</div>}
            </div>
          </div>
          
          <div className="col-md-6 d-flex align-items-center mt-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="isActive"
                name="isActive"
                checked={formData.isActive}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="isActive">
                <FontAwesomeIcon icon={faCheck} className="me-2" />
                Active Student
              </label>
            </div>
          </div>
        </div>
        
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="submit" className="btn btn-primary px-4 py-2">
            <FontAwesomeIcon icon={isEditing ? faUserEdit : faSave} className="me-2" />
            {isEditing ? 'Update Student' : 'Add Student'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm; 