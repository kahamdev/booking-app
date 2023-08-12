import React,{useState,useEffect} from 'react';
import { NavLink} from 'react-router-dom';
import './nav.css';
import {Button} from 'react-bootstrap'
import {HiMenuAlt3} from 'react-icons/hi'
import logo from './logo.jpg'




function Header() {
  
    const [toggleMenu,setToggleMenu]=useState(false);

    const [screenWidth,setScreenWidth]=useState(window.innerWidth);

    const toggleNav =()=>{
        setToggleMenu(!toggleMenu)
    }

    useEffect(()=>{
      const changeWidth=()=>{
          setScreenWidth(window.innerWidth);
      }

      window.addEventListener('resize',changeWidth)

      return ()=>{
          window.removeEventListener('resize',changeWidth)
      }
  })
  
  return (
     <div className='mainHeader'>
         <div className='headerContainer'>
         &ensp;&ensp;
          <img src={logo} alt='logo' width='50' height='50' style={{borderRadius:'50px'}}/>&ensp;
          <h5 className='text-light mt-2'>TBS</h5>
          
        <div className='headerMenu'>
        {(toggleMenu ||screenWidth >768) &&(
            <ul>
              <li>
              <NavLink to='/' style={({ isActive }) =>
   isActive
    ? {
         color: '#fff',
          border:'1px solid white',
          padding:'5px',
         borderRadius:'10%',
           textDecoration:'none'
        }
      : { textDecoration:'none',color:'#fff' }
      }>Home</NavLink></li>
              <li>
              <NavLink to='/buses' style={({ isActive }) =>
   isActive
    ? {
         color: '#fff',
         border:'1px solid white',
          padding:'5px',
         borderRadius:'10%',
           textDecoration:'none'
        }
      : { textDecoration:'none',color:'#fff' }
      }>Buses</NavLink></li>

              <li>
              <NavLink to='/flights' style={({ isActive }) =>
   isActive
    ? {
         color: '#fff',
         border:'1px solid white',
          padding:'5px',
         borderRadius:'10%',
           textDecoration:'none'
        }
      : { textDecoration:'none',color:'#fff' }
      }>Flights</NavLink></li>
              <li>
              <NavLink to='/trains' style={({ isActive }) =>
   isActive
    ? {
          color: '#fff',
          border:'1px solid white',
          padding:'5px',
          borderRadius:'10%',
          textDecoration:'none'
        }
      : { textDecoration:'none',color:'#fff' }
      }>Trains</NavLink></li>
              <li>
              <NavLink to='/ships' style={({ isActive }) =>
   isActive
    ? {
         color: '#fff',
         border:'1px solid white',
          padding:'5px',
         borderRadius:'10%',
           textDecoration:'none'
        }
      : { textDecoration:'none',color:'#fff' }
      }>Ships</NavLink></li>
              <li>
              <NavLink to='/hotels' style={({ isActive }) =>
   isActive
    ? {
         color: '#fff',
         border:'1px solid white',
          padding:'5px',
         borderRadius:'10%',
           textDecoration:'none'
        }
      : { textDecoration:'none',color:'#fff' }
      }>Hotels</NavLink></li>

<li>
              <NavLink to='/hotels' style={({ isActive }) =>
   isActive
    ? {
         color: '#fff',
         border:'1px solid white',
          padding:'5px',
         borderRadius:'10%',
           textDecoration:'none'
        }
      : { textDecoration:'none',color:'#fff' }
      }>Movies</NavLink></li>

         
            </ul>
            )}
         
     
        </div>

        <a className='mt-2' href='http://127.0.0.1:8000/admin'><Button>login</Button></a>

        <div className='headerButton'>
              <Button onClick={toggleNav} className='toggleButton' style={{backgroundColor:'#115173',border:'none'}}><HiMenuAlt3 style={{fontSize:'26px'}}/></Button>
        </div>
     </div>
     </div>
     

  )
}
export default Header;

