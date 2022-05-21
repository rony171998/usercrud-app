import axios from 'axios';
import React, { useState } from 'react';

const UserForm = ({getUser}) => {
    const [first_name,setfirst_name]=useState("")
    const [last_name,setlast_name]=useState("")
    const [email,setemail]=useState("")
    const [birthday,setbirthday]=useState("")
    const [password,setpassword]=useState("")
    const submit=()=>{
        const user ={
            first_name: first_name,
            last_name: last_name,
            email: email,
            birthday: birthday,
            password: password
        }
        axios.post("https://users-crud1.herokuapp.com/users/",user).
        then(() => getUser())
      .catch((error) => console.log(error.response));
    }
    return (
        <form onSubmit={submit}>
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