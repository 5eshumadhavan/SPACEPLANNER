import React from 'react'

function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" style={{backgroundColor:""}}>
  <div className="container">
    <a className="navbar-brand" href="/">Space Planner Interiors</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>
      <div className="d-flex" role="search">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 hstack gap-3">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Designs
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <button type="button" className="btn btn-primary">Contact us</button>
      </ul>
      </div>
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar