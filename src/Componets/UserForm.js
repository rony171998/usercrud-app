import React, { useEffect, useState } from 'react';
import "./UserForm.css"

const UserForm = ({ addUser, userSelected, updateUser, deselectUser }) => {
    const [first_name, setfirst_name] = useState("")
    const [last_name, setlast_name] = useState("")
    const [email, setemail] = useState("")
    const [birthday, setbirthday] = useState("")
    const [password, setpassword] = useState("")
    const [titleform, setTitleForm] = useState("")


    useEffect(() => {
        if (userSelected !== null) {
            setfirst_name(userSelected.first_name)
            setlast_name(userSelected.last_name)
            setemail(userSelected.email)
            setbirthday(userSelected.birthday)
            setpassword(userSelected.password)
            setTitleForm("Edit")
        } else {
            setTitleForm("Add")
            reset();
        }

    }, [userSelected])
    const submit = () => {
        const user = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            birthday: birthday,
            password: password
        }
        if (userSelected !== null) {
            updateUser(user)
            deselectUser()
        } else {
            addUser(user)
            reset()
        }

    }

    const reset = () => {
        setfirst_name("")
        setlast_name("")
        setemail("")
        setbirthday("")
        setpassword("")
    };

    return (
        <form onSubmit={submit} className="userForm">
            <h1>{titleform} User</h1>
            <div>
                <label htmlFor="first_name" className="form-label">
                    first_name
                </label>
                <input
                    type="text"
                    className='form-input'
                    id='first_name'
                    onChange={e => setfirst_name(e.target.value)}
                    value={first_name}
                />
            </div>
            <div>
                <label htmlFor="last_name" className="form-label">
                    last_name
                </label>
                <input
                    type="text"
                    className='form-input'
                    id='last_name'
                    onChange={e => setlast_name(e.target.value)}
                    value={last_name}
                />
            </div>
            <div>
                <label htmlFor="email" className="form-label">
                    email
                </label>
                <input
                    type="text"
                    className='form-input'
                    id='email'
                    onChange={e => setemail(e.target.value)}
                    value={email}
                />
            </div>
            <div>
                <label htmlFor="birthday" className="form-label">
                    birthday
                </label>
                <input
                    type="date"
                    className='form-input'
                    id='birthday'
                    onChange={e => setbirthday(e.target.value)}
                    value={birthday}
                />
            </div>
            <div>
                <label htmlFor="password" className="form-label">
                    password
                </label>
                <input
                    type="password"
                    className='form-input'
                    id='password'
                    onChange={e => setpassword(e.target.value)}
                    value={password}
                />
            </div>
            <button>Submit</button>
        </form>
    );
};

export default UserForm;