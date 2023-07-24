import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Textbox from './components/Textbox';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  const showalert=(message,type)=>{
          setAlert({message: message,
            type: type});
          setTimeout(() => {
            setAlert(null);
          }, 1500); 

          };

  const darkmode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = '#010f26';
      showalert("Dark mode enabled","success")
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showalert("Light mode enabled","success")
    }
  }
  const [rmode, setRmode] = useState('light');
  const redmode=()=>{
    if (rmode === 'light') {
      setRmode('dark');
      document.body.style.backgroundColor = 'red';
      showalert("Dark mode enabled","success")
    } else {
      setRmode("light");
      document.body.style.backgroundColor = 'white';
      showalert("Light mode enabled","success")
    }
  };

  

  return (
    // <>
    // <Router>
    //   <NavBar title="TextScan" mode={mode} darkmode={darkmode} rmode={rmode} redmode={redmode}/>
    //   <Alert alert={alert}/>
    //   <div className="container my-1">
    //   <Routes>
    //     <Route path='/About'>
    //     <About/>
    //     </Route>
    //     <Route path='/'>
    //     <Textbox showalert={showalert} heading="Enter text here" mode={mode} />
    //     </Route>
    //   </Routes>
    //   </div>
    //   </Router>
    // </>
    <>
    <Router>
      <NavBar title="TextScan" mode={mode} darkmode={darkmode} rmode={rmode} redmode={redmode} />
      <Alert alert={alert} />
      <div className="container my-1">
        <Routes>
          {/* exact keyword is used to match exact path
          like user/     .....if you want to go for user may it goes for user/home
          like user/home
          */}
          <Route exact path="/About" element={<About mode={mode}/>} />
          <Route exact path="/" element={<Textbox showalert={showalert} heading="Enter text here" mode={mode} />} />
        </Routes>
      </div>
    </Router>
  </>
  );
}

export default App;
