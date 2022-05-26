import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from './UserList';
import UserForm from './UserForm';
import Modal from './Modal';


const UsersCrud = () => {

    const [modal, setModal] = useState(false);
    const [users, setUsers] = useState([])
    const [userSelected, setUserSelected] = useState(null)

    useEffect(() => {
        axios.get("https://users-crud1.herokuapp.com/users/")
            .then(res => setUsers(res.data))
            .catch(error => console.log(error.response));

    }, [])
    const getUser = () => {
        axios.get("https://users-crud1.herokuapp.com/users/")
            .then(res => setUsers(res.data))
            .catch(error => console.log(error.response));
    }
    const addUser = (user) => {
        axios.post("https://users-crud1.herokuapp.com/users/", user)
            .then((res) => alert(res.statusText), getUser())
            .catch(error => console.log(error.response));
        getUser()
    }
    const removeUser = (id) => {
        axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
            .then((res) => alert(res.statusText), getUser())
            .catch(error => console.log(error.response));
        getUser()

    }
    const updateUser = (user) => {
        axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
            .then((res) => alert(res.statusText), getUser())
            .catch(error => console.log(error.response));
        getUser()

    }
    const selectUser = (users) => {
        setUserSelected(users)
        setModal(!modal)
    }
    const deselectUser = () => {
        setUserSelected(null)
    };
    const modalOpen = () => {
        setModal(!modal)
    }
    const modalClose = () => {
        setModal(!modal)
    }

    return (

        <div className="main">
            <div className="container">
                <div className="row">
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
                    <Modal
                        userSelected={userSelected}
                        updateUser={updateUser}
                        deselectuser={deselectUser}
                        getUser={getUser}
                        modalOpen={modalOpen}
                        modalClose={modalClose}
                    />

                </div>
            </div>
        </div>
    );
};

export default UsersCrud;