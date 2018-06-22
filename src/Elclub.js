import React, { Component } from 'react';
import './Elclub.css';

class Elclub extends Component {
  render() {
    const data = this.props.datos;
    return (
    <div className="Elclub">
    <h1>HISTORIA DEL CLUB</h1>
       <p>
       {data.historia}
      </p>
      <br/>
      <h1>MISION</h1>
       <p>
       {data.mision}
      </p>
      <br/>
      <h1>VISION</h1>
       <p>
       {data.vision}
      </p>
      <div id="imagen"></div>
      <br/>
      <h1>PRINCIPIOS</h1>
       <p>
       {data.principios}
      </p>
      <br/>
    </div>
    );
  }
}

export default Elclub;
