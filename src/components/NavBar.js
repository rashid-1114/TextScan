import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
  const buttonStyle = {
    borderRadius: '50%',
    width: '30px',
    height: '30px'
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <div className="container-fluid" style={{ marginLeft: '20px', marginRight: '20px' }}>
        {/* Use Link for navigation */}
        <Link to="/" className="navbar-brand">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Use Link for navigation */}
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            {/* Use Link for navigation */}
            <li className="nav-item">
              <Link to="/About" className="nav-link active" aria-current="page">About</Link>
            </li>
          </ul>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" onClick={props.redmode} className="btn btn-primary" style={buttonStyle}></button>
            <button type="button" onClick={props.redmode} className="btn btn-success" style={buttonStyle}></button>
            <button type="button" onClick={props.redmode} className="btn btn-danger" style={buttonStyle}></button>
          </div>
          <div className={`form-check form-switch mx-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.darkmode} type="checkbox" id="switch" />
            <label className="form-check-label" htmlFor="switch">Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired
};
