import React, { useEffect,useState } from 'react';
import "./UserForm.css"

const UserForm = ({addUser,userSelected,updateUser,deselectUser}) => {
    const [first_name,setfirst_name]=useState("")
    const [last_name,setlast_name]=useState("")
    const [email,setemail]=useState("")
    const [birthday,setbirthday]=useState("")
    const [password,setpassword]=useState("")

    useEffect(() => {
        if (userSelected !== null) {
            setfirst_name(userSelected.first_name)
            setlast_name(userSelected.last_name)
            setemail(userSelected.email)
            setbirthday(userSelected.birthday)
            setpassword(userSelected.password)
        }else {
            reset();
        }

    }, [userSelected])
    const submit=()=>{
        const user ={
            first_name: first_name,
            last_name: last_name,
            email: email,
            birthday: birthday,
            password: password
        }
        if (userSelected !== null) {
            alert("actualizando a "+user.first_name);
            updateUser(user)
            deselectUser()
        }else{
            alert("registrando a "+user.first_name);
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
            <h1>New User</h1>
            <div>
                <label htmlFor="first_name" className="form-label">
                first_name
                </label>
                <input 
                type="text"
                className='form-input'
                id='first_name'
                onChange={e=> setfirst_name(e.target.value)}
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
                onChange={e=> setlast_name(e.target.value)}
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
                onChange={e=> setemail(e.target.value)}
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
                onChange={e=> setbirthday(e.target.value)}
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
                onChange={e=> setpassword(e.target.value)}
                />
            </div>
            <button>Submit</button>
        </form>
    );
};

export default UserForm;