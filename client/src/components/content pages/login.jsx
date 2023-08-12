// import React,{useState} from 'react'
// import { Button } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
// import {useNavigate} from 'react-router-dom'
// import '../content styles/form.css'
// import { useDispatch } from 'react-redux/es/exports'


// const Login = () => {
//   const dispatch=useDispatch()
//   const redirect_to=useNavigate()
//   const [login,setLogin]=useState({
//     username:'',
//     password:''
//   })

  
//   const handleChange=(e)=>{
//         setLogin((spread)=>({
//           ...spread,
//           [e.target.name]:e.target.value
//         }))
//   }

//   const sendData=async()=>{
//      const getResp=await axios
//      .post('http://localhost:8000/api/data/login',{
//       username:login.username,
//       password:login.password
//      })
//      .catch(err=>console.log(err))
//      const data=await getResp.data
//      return data
//   }

//   const handleSubmit=(e)=>{
//     e.preventDefault()
//     sendData().then(dispatch(authActions.login())).then(()=>redirect_to('/dashboard'))
//     console.log('button clicked')
//   }

//   const loginSubmit=()=>{
//     // const [companyName,conpanyEmail,username,password]=register
//     // if(companyName && conpanyEmail && username && password){
//     //   alert('registered')
//     // }
//   }

//   return (
//     <>  
//       <div className='container'>
//       <div className='loginContainer'>
//           <form method='post' onSubmit={handleSubmit}>
//              <h3 className='text-center'>Sign In</h3>
//              <label>Username:</label>
//              <input className='form-control' type='text' name='username' value={login.username} onChange={handleChange} required/><br></br>
//              <label>Password:</label>
//              <input className='form-control' type='password' name='password' value={login.password} onChange={handleChange} required/><br></br>
//              <Button onClick={loginSubmit} type='submit' className='form-control mb-3' variant='success'>Sign In</Button>
//              if you don't have an account?&nbsp;<Link to='/register'>register</Link>
//           </form>
//         </div>
//       </div>
        
//     </>
//   )
// }

// export default Login