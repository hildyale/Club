import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component {

	constructor(){
		super()
    this.state = {
			showMask: 'hiddenMask',
			showDrawer: 'hiddenDrawer'
		}

		this.show = this.show.bind(this);
		this.hide = this.hide.bind(this);
	}

  render() {
		const path = window.location.pathname
    var active = [];
    switch (path) {
      case "/Inicio" :
        active[0] = "active";
       break;
      case "/Elclub":
				active[1] = "active";
				break;
			case "/Otro1":
				active[2] = "active";
				break;
			case "/Inscripcion":
				active[3] = "active";
				break;
			case "/Estudiantes":
				active[4] = "active";
        break;
      default:
        break;
    }

    return (
      <div className="Navbar">
        <nav id="nav">
						<ul className="links">
							<li className={active[0]}><Link to="Inicio">Inicio</Link></li>
							<li className={active[1]}><Link to="Elclub">Elclub</Link></li>
							<li className={active[2]}><Link to="Otro1">Otro1</Link></li>
							<li className={active[3]}><Link to="Inscripcion">Inscripcion</Link></li>
							<li className={active[4]}><Link to="Estudiantes">Estudiantes</Link></li>
						</ul>
						<ul className="icons">
							<li><a href="" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
							<li><a href="" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
							<li><a href="" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
							<li><a href="" className="icon fa-github"><span className="label">GitHub</span></a></li>
						</ul>
					</nav>
					<div className="bg" ></div>
					<a onClick={this.show} id="navPanelToggle">Menu</a>
					<div id="navDrawer" className={this.state.showDrawer}>
						<nav>
							<ul className="links">
								<li className={active[0]}><Link onClick={this.hide} to="Inicio">Inicio</Link></li>
								<li className={active[1]}><Link onClick={this.hide} to="Elclub">Elclub</Link></li>
								<li className={active[2]}><Link onClick={this.hide} to="Otro1">Otro1</Link></li>
								<li className={active[3]}><Link onClick={this.hide} to="Inscripcion">Inscripcion</Link></li>
								<li className={active[4]}><Link onClick={this.hide} to="Estudiantes">Estudiantes</Link></li>
							</ul>
						</nav>
						<span onClick={this.hide} className="close"></span>
					</div>
					<div id="maskDrawer" onClick={this.hide} className={this.state.showMask}/>
      </div>
    );
	}
	
	show(){
		this.setState({
			showMask: 'showMask',
			showDrawer: 'showDrawer'
		})
	}

	hide(){
		this.setState({
			showMask: 'hiddenMask',
			showDrawer: 'hiddenDrawer'
		})
	}

}

export default Navbar;
