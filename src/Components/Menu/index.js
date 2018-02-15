import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

class Menu extends Component {
  render() {
    return (
    <div className="menu">
        <div>
        <div><span>ClubDeportivo</span></div>
        <Link to="/Inicio">Inicio</Link>
        <Link to="/Elclub">El club</Link>
        <div className="dropdownk">
          <Link className="dropbtnk"  to="/Sedes" >Sedes</Link>
            <div className="dropdown-contentk">
            <div><a className="sub" href="#">Link 2</a> </div>
            <div><a className="sub" href="#">Link 1</a> </div>
            <div> <a className="sub" href="#">Link 3</a> </div>
            </div>
        </div>
        <Link to="/Inscripcion">Inscripcion</Link>
        <Link to="/Contacto">Contacto</Link>
        </div>
    </div>
    );
  }
}

export default Menu;
