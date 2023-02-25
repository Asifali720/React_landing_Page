import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="/" className="nav-link active" aria-current="page">Home</a>
              </li>
              <li className="nav-item">
                <a href="/about" className="nav-link" >{props.about}</a>
              </li>
            </ul>
            {/* <div className="class btn btn-primary rounded mx-2" onClick={()=>{props.toggleStyle('primary')}}></div>
            <div className="class btn btn-success rounded mx-2" onClick={()=>{props.toggleStyle('success')}}></div>
            <div className="class btn btn-danger rounded mx-2"  onClick={()=>{props.toggleStyle('danger')}}></div>
            <div className="class btn btn-warning rounded mx-2" onClick={()=>{props.toggleStyle('warning')}}></div> */}
            <div className={`form-check form-switch text-${props.mode === 'light'?'Dark' :'light'}`}>
              <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleStyle} id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btnText}</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
Navbar.protoType = {
  title: PropTypes.string,
  about: PropTypes.string
}
Navbar.defaultProps = {
  title: 'set title',
  about: 'set text'
}