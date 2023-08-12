import React ,{useState}from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import '../content styles/form.css'

const Register = () => {
  const redirect_to=useNavigate()
  const [register,setRegister]=useState({
    companyName:'',
    companyEmail:'',
    username:'',
    password:''
  })

  
  const handleChange=(e)=>{
        setRegister((spread)=>({
          ...spread,
          [e.target.name]:e.target.value
        }))
  }

  const sendData=async()=>{
     const getResp=await axios
     .post('http://localhost:8000/api/data/register',{
      companyName:register.companyName,
      companyEmail:register.companyEmail,
      username:register.username,
      password:register.password
     })
     .catch(err=>console.log(err))
     const data=await getResp.data
     return data
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    sendData().then(()=>redirect_to('/login'))
    console.log('button clicked')
  }

  const registerSubmit=()=>{
    // const [companyName,conpanyEmail,username,password]=register
    // if(companyName && conpanyEmail && username && password){
    //   alert('registered')
    // }
  }
  return (
    <>  
    <div className='container'>
    <div className='registerContainer'>
        <form method='post' onSubmit={handleSubmit}>
           <h3 className='text-center'>Sign Up</h3>
           <label>Company Name:</label>
           <input className='form-control' type='text' name='companyName' value={register.companyName} onChange={handleChange} required/><br></br>
           <label>Company Email:</label>
           <input className='form-control' type='email' name='companyEmail' value={register.companyEmail} onChange={handleChange} required/><br></br>
           <label>Username:</label>
           <input className='form-control' type='text' name='username'  value={register.username} onChange={handleChange} required/><br></br>
           <label>Password:</label>
           <input className='form-control' type='password' name='password'  value={register.password} onChange={handleChange} required/><br></br>
           <Button onClick={registerSubmit} type='submit' className='form-control mb-3' variant='success'>Sign Up</Button>
           if you have an account?&nbsp;<Link to='/login'>Sign In</Link>
        </form>
      </div>
    </div>
      
  </>
  )
}

export default Register