import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/main.css';
import './assets/css/noscript.css';
import App from './App';
import Inicio from './Inicio';
import Elclub from './Elclub';
import Otro1 from './Otro1';
import Page404 from './Page404'
import Inscripcion from './Inscripcion'
import Estudiantes from './Estudiantes'
import { Route } from 'react-router';
import { BrowserRouter , Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: 'AIzaSyAem0OdWnC0hMBBJWmWQKns1sksvqFEc0c',
    authDomain: 'club-f25db.firebaseapp.com',
    databaseURL: 'https://club-f25db.firebaseio.com',
    projectId: 'club-f25db',
    storageBucket: 'club-f25db.appspot.com',
    messagingSenderId: '277637292062'
  };
firebase.initializeApp(config);
let datos = {};
let entrenadores = {};
let estudiantes = {};
ReactDOM.render(
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path="/" render={(props) => <Inicio {...props} datos={datos} />}/>
                <Route path="/Inicio" render={(props) => <Inicio {...props} datos={datos} />} />
                <Route path="/Elclub" render={(props) => <Elclub {...props} datos={datos} />}/>
                <Route path="/Inscripcion" render={(props) => <Inscripcion/>}/>
                <Route path="/Inscripcion" render={(props) => <Estudiantes/>}/>
                <Route path="/Otro1" component={Otro1}/>
                <Route component={Page404}/> 
            </Switch>
        </App>
    </BrowserRouter>, document.getElementById('root'));

const databaseRef = firebase.database().ref();
const database = firebase.database();
databaseRef.on('value', snapshot => {
    snapshot = snapshot.val()
    datos = snapshot.Datos;
    entrenadores = snapshot.Entrenadores;
    estudiantes = snapshot.Estudiantes;
    ReactDOM.render(
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact path="/" render={(props) => <Inicio {...props} datos={datos} entrenadores={entrenadores}/>}/>
                    <Route path="/Inicio" render={(props) => <Inicio {...props} datos={datos} entrenadores={entrenadores}/>} />
                    <Route path="/Elclub" render={(props) => <Elclub {...props} datos={datos} />}/>
                    <Route path="/Inscripcion" render={(props) => <Inscripcion {...props} database={database}/>}/>
                    <Route path="/Estudiantes" render={(props) => <Estudiantes {...props} estudiantes={estudiantes}/>}/>
                    <Route path="/Otro1" component={Otro1}/>
                    <Route component={Page404}/> 
                </Switch>
            </App>
        </BrowserRouter>, document.getElementById('root'));
})


registerServiceWorker();


