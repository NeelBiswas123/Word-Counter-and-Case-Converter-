import './App.css';

import { useState } from 'react';
import About from './About';
import Navbar from './Navbar';
import Textutils from "./Textutils";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Alert from './Alert';

function App() {

  // this is for darkmode func
  const [mode, setMode] = useState("light")

  const toggleMode = () => {
      
      
      if(mode ==="light"){
        console.log("dark mode enable");
        
      setMode("dark")
      document.body.style.backgroundColor = "black"
      // document.title="dark mode "
      
      
      
    }
    else {
      console.log("light mode enable");
      
      setMode("light")
      document.body.style.backgroundColor = "white"
      // document.title="light mode "
     
      }
  }


  // this is for alert func 

  const [alert,setAlert]=useState()
  
      function ShowAlert(message,type){
        setAlert(
         { msg : message,
          type : type}
        )
        setTimeout(() => {
          setAlert(null)
        }, 1500);
      }
    


  return (
    <div className="App">

      
      <Router>
      <Navbar title ="textUtils" mode = {mode}  toggleMode={toggleMode} />
      <Alert  alert={alert}/>
        <Routes>
        <Route path="/" element={
                  <Textutils showalert={ShowAlert} heading="Welcome to Case Converter" mode={mode}/>} />

          <Route path="/about" exact element={<About  mode={mode}/>} />
          <Route path="/textutils" element={<Textutils showalert={ShowAlert} heading="Welcome to Case Converter" mode={mode}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
