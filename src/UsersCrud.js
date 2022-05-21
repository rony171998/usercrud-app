import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from './Componets/UserList';
import UserForm from './Componets/UserForm';

const UsersCrud = () => {

    
    useEffect(()=>{
        axios.get("https://users-crud1.herokuapp.com/users/")
        .then(res=>setUsers(res.data))
    },[])
    const getUser =()=>{
        axios.get("https://users-crud1.herokuapp.com/users/")
        .then(res=>setUsers(res.data))
    }
    const [users,setUsers]=useState([])
    console.log(users);
    return (
        <div className='userCrud'>

            <h1>Users Crud</h1>
            <UserForm getUser={getUser()}/>
            <UserList users={users}/>
        </div>
    );
};

export default UsersCrud;