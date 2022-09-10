import React from 'react'


export const Nav = () => {
  return (
      <>
          
      <nav className="navbar navbar-expand-lg  ">
  <div className="container-fluid">
    <a className="navbar-brand text-white font-bold" href="#"> History of Computers</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pre - Generation
          </a>
          <ul className="dropdown-menu bg-dark">
            <li><a className="dropdown-item  text-white" href="#">Abacus</a></li>
            <li><a className="dropdown-item text-white" href="#">Napier's Bones</a></li>
            {/* <li><hr className="dropdown-divider text-white"/></li> */}
                                  <li><a className="dropdown-item text-white" href="#">Leibnitz wheel</a></li>
                                  <li><a className="dropdown-item text-white" href="#">Difference Engine</a></li>
                                  <li><a className="dropdown-item text-white" href="#">Tabulating Machine</a></li>
                                  <li><a className="dropdown-item text-white" href="#">Differential Analyzer</a></li>
                                  <li><a className="dropdown-item text-white" href="#">Mark 1</a></li>

          </ul>
                          </li>
                          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Generation
          </a>
          <ul className="dropdown-menu bg-dark">
            <li><a className="dropdown-item  text-white" href="#">First Generation Computers</a></li>
            <li><a className="dropdown-item text-white" href="#">Second Generation Computers</a></li>
            {/* <li><hr className="dropdown-divider text-white"/></li> */}
                                  <li><a className="dropdown-item text-white" href="#">Third Generation Computers</a></li>
                                  <li><a className="dropdown-item text-white" href="#">Fourth Generation Computers</a></li>
                                  <li><a className="dropdown-item text-white" href="#">Fourth Generation Computers</a></li>
                                  
          </ul>
                          </li>    
       
      </ul>
      
    </div>
  </div>
</nav>
      
      </>
  )
}
