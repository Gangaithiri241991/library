import logo from './logo.svg';
import './App.css';
import NavBar from './component/navbar';
import Login from './component/login';
import Home from './component/home'
import Students from './component/students'
import AddStudents from './component/addstudents';
import EditStudents from './component/editstudents';
import {Route, Routes, useNavigate} from 'react-router-dom';
import SignUp from './component/signup'
import {useState,useEffect} from 'react'
function App() {

  const [students, setStudents] = useState([]);
  const navigate =  useNavigate()
  useEffect(()=>{
    const getStudentDetails = async()=>{
      const res = await fetch(`https://newstudents-2.onrender.com/students/all`, {
        method: "GET",
        headers : {
          "x-auth-token" : localStorage.getItem("token")
        }
      }); 
      const data = await res.json();
      setStudents(data.data)
    }
    if(!localStorage.getItem("token")){
      navigate("/login")
    }else {
      getStudentDetails()
    }

  }, [])
  return (
    <div className="App">
      <NavBar/>
      
      <Routes>
          <Route exact path="/" element ={<Home/>}/>
          <Route path="/students" element ={<Students
          students={students}
          setStudents={setStudents}
          />}/>
      <Route
         path="/login"
         element ={<Login/>}
         />
        <Route
         path="/signup"
         element ={<SignUp/>}
         />
        <Route
          path="/add-student"
          element ={<AddStudents
            students={students}
            setStudents={setStudents}
          />}
          />

         <Route
         path="/edit/:id"
         element ={<EditStudents
             students={students}
            setStudents={setStudents}
         />}
         />
         </Routes>
    </div>
  );
}

export default App;
