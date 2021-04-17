import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarMenu = () => {
      return (
            <div>
                  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <div className="container">
                              <NavLink className="navbar-brand" to="/">React User</NavLink>
                              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                              </button>
                              <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                          <li className="nav-item">
                                                <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                                          </li>
                                          <li className="nav-item">
                                                <NavLink className="nav-link" to="/about">About</NavLink>
                                          </li>
                                          <li className="nav-item">
                                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                          </li>
                                    </ul>
                              </div>
                              <NavLink to="/users/add" className="btn btn-outline-light" style={{"width":"130px"}}>Add User</NavLink>
                        </div>
                  </nav>
            </div>
      )
}

export default NavbarMenu
