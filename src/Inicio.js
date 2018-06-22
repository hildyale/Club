import React, { Component } from 'react';
import './Inicio.css';


class Inicio extends Component {
  render() {
    let datos = "";
    let entrenadores = [];
    if(typeof this.props.datos.bienvenidos !== 'undefined'){
      datos = this.props.datos.bienvenidos
    }

    if(typeof this.props.entrenadores !== 'undefined'){
      entrenadores = this.props.entrenadores
    }

    const lista = entrenadores.map((entrenador) =>
      <p key={entrenador.id.toString()}><li>
      {entrenador.nombre}
      </li></p>
    )

    const lista2 = entrenadores.map((entrenador) =>
      <tr key={entrenador.id.toString()}>
      <td>{entrenador.nombre}</td>
      </tr>
    )

    return (
    <div className="Inicio">
      <h1>Bienvenidos</h1>
      <p>
      {datos}
      </p>
      <br/>
      <h1>Nuestros entrenadores </h1>
      <ul >{lista}</ul>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th><h4>Nuestros entrenadores</h4></th>
            </tr>
          </thead>
          <tbody>
            {lista2}
          </tbody>
        </table>
      </div>
    </div>
    );
  
  }
}

export default Inicio;
