import React, { Component } from 'react';

class Estudiantes extends Component {
    render() {
        let estudiantes = [];

        if(typeof this.props.estudiantes !== 'undefined'){
            estudiantes = this.props.estudiantes
            console.log(estudiantes)
        }

        const lista = Object.values(estudiantes).map((estudiante) =>
           <tr key={estudiante.id.toString()}>
                <td>{estudiante.name}</td>
                <td>{estudiante.lastname}</td>
                <td>{estudiante.email}</td>
                <td>{estudiante.bday}</td>
                <td>{estudiante.addres}</td>
                <td>{estudiante.comuna}</td>
                <td>{estudiante.estrato}</td>
                <td>{estudiante.tel}</td>           
            </tr>
        )

        return (
            <div>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                            <th><h4>Nombre</h4></th>
                            <th><h4>Apellidos</h4></th>
                            <th><h4>Email</h4></th>
                            <th><h4>Fecha Nacimiento</h4></th>
                            <th><h4>Direccion</h4></th>
                            <th><h4>Comuna</h4></th>
                            <th><h4>Estrato</h4></th>
                            <th><h4>Telefono</h4></th>
                            </tr>
                        </thead>
                        <tbody>
                            {lista}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Estudiantes;