import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import "./UserForm.css"

const UserForm = ({ addUser, userSelected, updateUser, deselectUser,getUser }) => {
    
    const [titleform, setTitleForm] = useState("")
    const { register, handleSubmit, reset } = useForm();


    useEffect(() => {
        if (userSelected !== null) {
            setTitleForm("Edit")

            reset({
                first_name: (userSelected.first_name),
                last_name: (userSelected.last_name),
                email: (userSelected.email),
                birthday: (userSelected.birthday),
                password: (userSelected.password)
            })

        } else {
            setTitleForm("Add")
        }

    }, [userSelected,reset])
    const submit = data => {
        
        const user = {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            birthday: data.birthday,
            password: data.password
        }
        if (userSelected !== null) {
            updateUser(user)
            
            //deselectUser()
            
            console.log(userSelected)
        } else {
            addUser(user)
        
        }
        resetfiel()
        getUser()
        

    }
    const defaultValues = {
        first_name: "",
        last_name: "",
        email: "",
        birthday: "",
        password: ""
    }
    

   const resetfiel = data => { 
        setTitleForm("Add")
         
        reset(defaultValues)

        //deselectUser()    
    }

    return (
        
        <form onSubmit={handleSubmit(submit)} className="userForm">
            <h1>{titleform} User</h1>
            <div>
                <label htmlFor="first_name-input" className="form-label">
                    first_name
                </label>
                <input
                    type="text"
                    className='form-input'
                    id='first_name-input'
                    {...register("first_name")}
                />
            </div>
            <div>
                <label htmlFor="last_name-input" className="form-label">
                    last_name
                </label>
                <input
                    type="text"
                    className='form-input'
                    id='last_name-input'
                    {...register("last_name")}
                />
            </div>
            <div>
                <label htmlFor="email-input" className="form-label">
                    email
                </label>
                <input
                    type="text"
                    className='form-input'
                    id='email-input'
                    {...register("email")}
                />
            </div>
            <div>
                <label htmlFor="birthday-input" className="form-label">
                    birthday
                </label>
                <input
                    type="date"
                    className='form-input'
                    id='birthday-input'
                    {...register("birthday")}
                />
            </div>
            <div>
                <label htmlFor="password-input" className="form-label">
                    password
                </label>
                <input
                    type="password"
                    className='form-input'
                    id='password-input'
                    {...register("password")}
                />
            </div>
            <button>Submit</button>
            {/* <button onClick={resetfiel}>Limpiar</button> */}
           
        </form>
    );
};

export default UserForm;