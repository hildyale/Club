import React, { Component } from 'react';
import './Inicio.css';
import firebase from 'firebase';

class Inicio extends Component {
  constructor (){
    super()
    this.database = firebase.database().ref().child('Datos').child('bienvenidos')
    this.database2 = firebase.database().ref().child('Entrenadores')
    this.state = {
      name : '',
      entrenadores : []
    }
  }

 componentWillMount () {
   this.database.on('value', snapshot => {
     this.setState({
       name : snapshot.val()
     })
   })

   this.database2.on('value', snapshot => {
    this.setState({
      entrenadores : snapshot.val()
    })
  })
   console.log('componentWillMount')
   
 }
 
  render() {
    const entrenadores = this.state.entrenadores
     const lista = entrenadores.map((entrenador) =>
     <p key={entrenador.id.toString()}><li>
        {entrenador.nombre}
        </li></p>
     )



    return (
    <div className="Inicio">
      <h1>Bienvenidos</h1>
      <p>
       {this.state.name}
      </p>
      <br/>
      <h1>Nuestros entrenadores </h1>
      <ul >{lista}</ul>
    </div>
    );
  }
}

export default Inicio;
