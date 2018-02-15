import React, { Component } from 'react';
import './Elclub.css';
import firebase from 'firebase';

class Elclub extends Component {
  constructor (){
    super()
    this.database = firebase.database().ref().child('Datos')
    this.state = {
      data : []
    }
  }

 componentWillMount () {
   this.database.on('value', snapshot => {
     this.setState({
       data : snapshot.val()
     })
   })
   console.log('componentWillMount')
 }
 
  render() {
    const data = this.state.data;
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
      <img className="imagen" src="../images/elclub.jpg" alt="valores"></img>
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
