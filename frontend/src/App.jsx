import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import StudentListPage from './pages/StudentListPage';
import AddStudentPage from './pages/AddStudentPage';
import EditStudentPage from './pages/EditStudentPage';
import { Component } from 'react';

function App() {
  return (
    <>
      <Navbar />
      <div className="container py-3">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/students" element={<StudentListPage />} />
          <Route path="/students/add" element={<AddStudentPage />} />
          <Route path="/students/edit/:id" element={<EditStudentPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App; 


class Greet extends Component{
  constructor(props){
    super(props)
    this.state={
      name:"sami"
    }
  }
}