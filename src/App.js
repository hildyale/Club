import React, { Component } from 'react';
import Menu43 from './Components/Menu';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
   static propTypes = {
     children: PropTypes.object.isRequired 
   };

  render() {
    const { children } = this.props;

    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="App-contenido">
          <Menu43></Menu43>  
          <div className="main">{children}</div>
        </div>
       
        <div className="limpiador"><p>hola</p></div>
      </div>
    );
  }
}

export default App;
