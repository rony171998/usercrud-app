import React from 'react';



const UserList = ({ users, removeUser, selectUser }) => {

    return (
     <>
            {
                users.length === 0 ?
                    <div className="col-md-4">
                        <h1>There's no users to show, add a user please.</h1>
                    </div>
                    :

                    <div className="col-md-8">
                        <h3>USERS</h3>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Birthday</th>
                        
                                </tr>
                                
                            </thead>
                            {
                                users.map(users => (

                                    <tbody key={users.id}>
                                        <tr>
                                        <td className="userData" name="name">{users.first_name} {users.last_name}</td>
                                        <td className="userData" name="address">{users.email}</td>
                                        <td id="tdAge" className="userData" name="age">{users.birthday}</td>
                                        <td align="center">
                                        <button className="btn btn-success form-control" onClick={() => selectUser(users)}>EDIT</button>
                                        </td>
                                        <td align="center">    
                                            <button className="btn btn-danger" onClick={() => removeUser(users.id)}>DELETE USER</button>
                                        </td>
                                    </tr>
                                    </tbody>
                                    /*
                                    <div key={users.id} className="userList">
                                        <p><b>Nombre: </b>{users.first_name}<b> </b>{users.last_name}</p>
                                        <p><b>Email: </b>{users.email}</p>
                                        <p><b>Fecha de Nacimiento: </b>{users.birthday}</p>
                                        <p><b>Contraseña: </b>{users.password}</p>
                                        <button className="card_button" onClick={() => removeUser(users.id)}>Eliminar</button>
                                        <button className="card_button" onClick={() => selectUser(users)}>Editar</button>
                                    </div>
                                    */
                                ))
                            }

                        </table>
                    </div>
            }

</>

    );
};

export default UserList;