import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const [submission, setSubmission] = useState(false)
  const {register, handleSubmit, formState : {errors}} = useForm()

  const onSubmit = (values) =>{
    console.log(values);
    setSubmission(true)
  }
  return (
    <><h1 className='head'>Registration Form</h1>
      <div className='app'>
        
        <div className='Container'>
          
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
        {submission && <p>Regristration Successfull!</p>}
        
        <lable>First Name :   </lable>
        <input type='text' name='firstName' {...register("firstName", {required: 'First name is required'})} className='first'></input>
        {errors.firstName && <p>{errors.firstName.message}</p>}

        <lable>Last Name : </lable>
        <input type='text' name='lastName' {...register("lastName", {required: 'Last name is required' })}className='last'></input>
        {errors.lastName && <p>{errors.lastName.message}</p>}

        <lable>Email : </lable>
        <input type='text' name='email' {...register("email", {required: 'Email is required',
          pattern: {value : /^\S+@\S+$/i, message : "Invalid email"},})}className='email'></input>
        {errors.email && <p>{errors.email.message}</p>}

        <lable>Password : </lable>
        <input type='password' name='password' {...register("password", 
        {required: 'Password is required',
        minLength: {value: 5, message : "Password must be of more than 4 characters"},
        maxLength: {value: 20, message: "Password should not be more than 20 characters"}})}className='pass'></input>
        {errors.password && <p>{errors.password.message}</p>}

      <input type ='submit' value="Submit" className='button'/>
       </form>
       </div>
      
      </div>
    </>
  )
}

export default App
