import React, { Component } from 'react';
import './Inscripcion.css';
import firebase from 'firebase';

class Inscripcion extends Component {
  constructor (){
    super()
    this.database = firebase.database().ref().child('Estudiantes');
    this.state = {
      name : '',
      lastname: '',
      bday:'',
      email: '',
      id:'',
      place:'',
      addres:'',
      tel:'',
      cel:'',
      comuna:'1',
      estrato:'1',
      school:'',
      eps:'',
      pname:'',
      pjob:'',
      mname:'',
      mjob:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var input = event.target.id;
    this.setState({[input]: event.target.value});
    //console.log(input+' -- '+event.target.value);
    //console.log(this.state);
  }

  handleSubmit(event) {
    console.log(this.state);
    this.database.push(this.state);
    event.preventDefault();
  }

 
 
  render() {
    return (
    <div className="Inscripcion">
      <h1>Inscripcion</h1>
      <br/>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" id="name"  placeholder="Nombre" value={this.state.name} onChange={this.handleChange} maxLength="40" pattern=".{3,}" required title="minimo 3 carácteres" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="lastname" placeholder="Apellidos" value={this.state.lastname} onChange={this.handleChange} maxLength="40" pattern=".{3,}" required title="minimo 3 carácteres" />
          </div>
          <div className="form-group">
            <label>Fecha de Nacimiento
            <input type="date" className="form-control" id="bday" value={this.state.bday} onChange={this.handleChange} placeholder="Fecha de Nacimiento" min="1980-01-01" required />
            </label>
          </div>
          <div className="form-group">
            <input type="email" className="form-control" id="email" value={this.state.email} onChange={this.handleChange} aria-describedby="emailHelp" placeholder="Email" maxLength="100" pattern=".{5,}" required title="minimo 5 carácteres"/>
          </div>
          <div className="form-group">
            <input type="number" className="form-control" id="id" value={this.state.id} onChange={this.handleChange} placeholder="Documento de identidad" min="100000" max="100000000000000" required />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="place" value={this.state.place} onChange={this.handleChange} placeholder="Barrio" pattern=".{3,}" maxLength="40" required title="minimo 3 carácteres"/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="addres" value={this.state.addres} onChange={this.handleChange} placeholder="Direccion" pattern=".{5,}" maxLength="40" required title="minimo 5 carácteres"/>
          </div>
          <div className="form-group">
            <input type="number" className="form-control" id="tel" value={this.state.tel} onChange={this.handleChange} placeholder="Telefono Fijo" min="1000000" max="100000000000" required />
          </div>
          <div className="form-group">
            <input type="number" className="form-control" id="cel" value={this.state.cel} onChange={this.handleChange} placeholder="Telefono Movil" min="1000000000" max="100000000000000" required />
          </div>
          <div className="form-group">
             <label >Comuna:</label>
            <select className="form-control" id="comuna" value={this.state.comuna}  onChange={this.handleChange} title="Comuna">
              <optgroup label="Zona 1 - Nororiental">
              <option value="1">Comuna 1 - Popular</option>
              <option value="2">Comuna 2 - Santa Cruz</option>
              <option value="3">Comuna 3 - Manrique</option>
              <option value="4">Comuna 4 - Aranjuez</option>
              </optgroup>
              <optgroup label="Zona 2 - Noroccidental">
              <option value="5">Comuna 5 - Castilla</option>
              <option value="6">Comuna 6 - Doce de octubre</option>
              <option value="7">Comuna 7 - Robledo</option>
              </optgroup>
              <optgroup label="Zona 3 - Centro oriental">
              <option value="8">Comuna 8 - Villa Hermosa</option>
              <option value="9">Comuna 9 - Buenos Aires</option>
              <option value="10">Comuna 10 - La Candelaria</option>
              </optgroup>
              <optgroup label="Zona 4 - Centro occidental">
              <option value="11">Comuna 11 - Laureles—Estadio</option>
              <option value="12">Comuna 12 - La América</option>
              <option value="13">Comuna 13 - San Javier</option>
              </optgroup>
              <optgroup label="Zona 1 - Suroriental">
              <option value="14">Comuna 14 - Poblado</option>
              </optgroup>
              <optgroup label="Zona 1 - Suroccidental">
              <option value="15">Comuna 15 - Guayabal</option>
              <option value="16">Comuna 16 - Belén</option>
              </optgroup>
            </select>
          </div>

          <div className="form-group">
             <label>Estrato:</label>
            <select className="form-control" id="estrato" value={this.state.estrato}  onChange={this.handleChange} title="Estrato">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="school" value={this.state.school} onChange={this.handleChange} placeholder="Nombre Del Establecimiento Educativo" pattern=".{5,}" maxLength="40" required title="minimo 5 carácteres"/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="eps" value={this.state.eps} onChange={this.handleChange} placeholder="EPS" pattern=".{5,}" maxLength="40" required title="minimo 5 carácteres"/>
          </div>
          <label>Padres</label>
          <div className="form-group">
            <label>Padre: </label>
            <div className="row">
              <div className="col">
                <input type="text" className="form-control" id="pname" value={this.state.pname} onChange={this.handleChange} placeholder="Nombre" pattern=".{3,}" maxLength="40" required title="minimo 3 carácteres"/>
              </div>
              <div className="col">
               <input type="text" className="form-control" id="pjob" value={this.state.pjob} onChange={this.handleChange} placeholder="Ocupacion" pattern=".{5,}" maxLength="40" required title="minimo 5 carácteres"/>         
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>Madre: </label>
            <div className="row">
              <div className="col">
            <input type="text" className="form-control" id="mname" value={this.state.mname} onChange={this.handleChange} placeholder="Nombre" pattern=".{3,}" maxLength="40" required title="minimo 3 carácteres"/>
            </div>
              <div className="col">
            <input type="text" className="form-control" id="mjob" value={this.state.mjob} onChange={this.handleChange} placeholder="Ocupacion" pattern=".{5,}" maxLength="40" required title="minimo 5 carácteres"/>         
            </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Inscribirse</button>
        </form>
    </div>
    );
  }
}

export default Inscripcion;
