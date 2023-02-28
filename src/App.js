// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
// import { Switch, Route } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

// const renderLink = path => <Link to={`/${path}`}>{path}</Link>;
function App() {
  const [mode, setMode] = useState('light')
  const [btnText, setBtnText] = useState('Dark Mode')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 4000);
  }
  // let bgClassRemove = () =>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-primary')
  // }
  let toggleStyle = () => {
    // bgClassRemove()
    // document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark')
      setBtnText('Light Mode')
      document.body.style.backgroundColor = 'black'
      showAlert('Dark mode is enabled', 'success')
      document.title = 'TextUtile-Dark'
    }
    else {
      setMode('light')
      setBtnText('Dark Mode')
      document.body.style.backgroundColor = 'white'
      showAlert('light mode is enabled', 'success')
      document.title = 'TextUtile-light'
      //   setInterval(() => {
      //     document.title = 'install'
      //   },1000);
      //   setInterval(() => {
      //     document.title = 'amazing'
      //   },1500);       
    }
  }
  return (
    <>
      <Navbar title="UtilesText" about="About the App" mode={mode} toggleStyle={toggleStyle} btnText={btnText} />
      <Alert alert={alert} />
      {/* <Navbar/> */}
      <div className="container my-3">
        <Switch>
          <Route exact path="/">
            <TextForm heading="Type Text Here" mode={mode} showAlert={showAlert} />
          </Route>
          <Route path="/about">
            <About mode={mode} />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
