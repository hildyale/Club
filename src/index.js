import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter , Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import Inicio from './Components/Inicio';
import Elclub from './Components/Elclub';
import Sedes from './Components/Sedes';
import Contacto from './Components/Contacto';
import Page404 from './Components/Page404';
import Inscripcion from './Components/Inscripcion';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase';
const config = {
  apiKey: 'AIzaSyAem0OdWnC0hMBBJWmWQKns1sksvqFEc0c',
  authDomain: 'club-f25db.firebaseapp.com',
  databaseURL: 'https://club-f25db.firebaseio.com',
  projectId: 'club-f25db',
  storageBucket: 'club-f25db.appspot.com',
  messagingSenderId: '277637292062'
};
firebase.initializeApp(config);


//ReactDOM.render((<App/>), document.getElementById('root'));

ReactDOM.render((
  <BrowserRouter>
  <App>
    <Switch>
      <Route exact path="/" component={Inicio}/>
      <Route path="/Inicio" component={Inicio}/>
      <Route path="/Elclub" component={Elclub}/>
      <Route path="/Sedes" component={Sedes}/>
      <Route path="/Contacto" component={Contacto}/>
      <Route path="/Inscripcion" component={Inscripcion}/>
      <Route component={Page404}/> 
    </Switch>
    </App>
  </BrowserRouter>
), document.getElementById('root')); 

registerServiceWorker();
