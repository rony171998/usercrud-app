import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from './Componets/UserList';
import UserForm from './Componets/UserForm';

const UsersCrud = () => {

    
    useEffect(()=>{
        axios.get("https://users-crud1.herokuapp.com/users/")
        .then(res=>setUsers(res.data))
        .catch(error => console.log(error.response));
        
    },[])
    const getUser =()=>{
        axios.get("https://users-crud1.herokuapp.com/users/")
        .then(res => setUsers(res.data))
        .catch(error => console.log(error.response));
    }
    const addUser =(user)=>{
        axios.post("https://users-crud1.herokuapp.com/users/",user)
        .then((res)=> alert(res.statusText),getUser())
        .catch(error => console.log(error.response));
    }
    const removeUser=(id)=>{
        axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
        .then((res)=> alert(res.statusText),getUser())
        .catch(error => console.log(error.response));
        getUser()
        
    }
      const updateUser=(user)=>{
        axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`,user)
        .then((res)=> alert(res.statusText),getUser())
        .catch(error => console.log(error.response));
        
    }
    const selectUser=(users)=>{
        setUserSelected(users)
    }
    const deselectUser = () =>{
         setUserSelected(null)
        };

    const [users,setUsers]=useState([])
    const [userSelected,setUserSelected]=useState(null)
    
    return (
        <div className='userCrud'>

            <UserForm 
            addUser={addUser} 
            userSelected={userSelected}
            updateUser={updateUser}
            deselectuser={deselectUser}
            getUser={getUser}
            />
            <UserList 
            users={users}
            removeUser={removeUser}
            selectUser={selectUser}
            />
        </div>
    );
};

export default UsersCrud;