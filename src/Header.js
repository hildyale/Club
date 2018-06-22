import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
  render() {
    return (
			<div id="header">
				<div id="banner"></div>
				<div id="bannerSmall">
					<h1  className="logo" >Club Deportivo<br />
					El Sueño Del Pibe</h1>
				</div>
			</div>
    );
  }
}

export default Header;
