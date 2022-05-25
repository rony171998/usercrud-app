import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';


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
       
        <div className="col-md-4">
                <h3>{titleform} User</h3>
                <form onSubmit={handleSubmit(submit)}>
                    <div className="form-group">
                        <input
                    type="text"
                    placeholder="First Name"
                    className='form-control'
                    id='first_name-input'
                    {...register("first_name")}
                />
                    </div>
                    <div className="form-group">
                        <input
                    type="text"
                    placeholder="Last Name"
                    className='form-control'
                    id='last_name-input'
                    {...register("last_name")}
                />
                    </div>
                    <div className="form-group">
                        <input
                    type="text"
                    placeholder="Email"
                    className='form-control'
                    id='email-input'
                    {...register("email")}
                />
                    </div>
                    <div className="form-group">
                    <input
                    type="date"
                    placeholder="Birthday"
                    className='form-control'
                    id='birthday-input'
                    {...register("birthday")}
                />
                    </div>
                    <div className="form-group">
                    <input
                    type="password"
                    placeholder="Password"
                    className='form-control'
                    id='password-input'
                    {...register("password")}
                />
                    </div>
                    <button className="btn btn-primary form-control" type="submit">SUBMIT</button>
                    {/* <button onClick={resetfiel}>Limpiar</button> */}
                </form>
            </div>
         
    );
};

export default UserForm;