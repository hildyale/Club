import React, { Component } from 'react';
import './App.css';
import Footer from './Footer'
import PropTypes from 'prop-types';
import Header from './Header'
import Navbar from './Navbar'


class App extends Component {

	static propTypes = {
		children: PropTypes.object.isRequired 
	};

  render() {
		const { children } = this.props;
    return (
      <div id="wrapper">
				<Header/>
				<Navbar/>
        <div id="main">
          {children}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
