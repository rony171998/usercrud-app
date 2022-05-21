import React from 'react';

const UserList = ({users}) => {
    return (
        <div>
            holaa
            {
                users.map(users=>{
                    <div  key={users.id}>
                        hola2
                        <p><b>Nombre: </b>{users.first_name}</p>
                        <p><b>Apellido: </b>{users.last_name}</p>
                        <p><b>Email: </b>{users.email}</p>
                        <p><b>Fecha de Nacimiento: </b>{users.birthday}</p>
                        <p><b>Contraseña: </b>{users.password}</p>
                        <button>Eliminar</button>
                        <button>Editar</button>
                    </div>
                })
            }
        </div>
            
    );
};

export default UserList;