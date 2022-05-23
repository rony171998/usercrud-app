import React from 'react';
import "./UserList.css"

const UserList = ({ users, removeUser, selectUser }) => {
    return (
        <div>
            {
                users.length === 0 ? 
                <div>
                   <h1>La lista esta vacia</h1> 
                </div>       
                :
                <div className='todalista'>
                    
                    {
                        users.map(users => (
                            <div key={users.id} className="userList">
                                <p><b>Nombre: </b>{users.first_name}<b> </b>{users.last_name}</p>
                                <p><b>Email: </b>{users.email}</p>
                                <p><b>Fecha de Nacimiento: </b>{users.birthday}</p>
                                <p><b>Contraseña: </b>{users.password}</p>
                                <button onClick={() => removeUser(users.id)}>Eliminar</button>
                                <button onClick={() => selectUser(users)}>Editar</button>
                            </div>
                        ))
                    }
                </div>
                    
            }



        </div>

    );
};

export default UserList;