import React from 'react'
import {FaBus,FaTrain,FaShip,FaHotel} from 'react-icons/fa'
import {MdFlight,MdHelp} from 'react-icons/md'
import busImage from '../content images/bus photos/bus02.jpg'
import flightImage from '../content images/flight photos/flight03.jpg'
import trainImage from '../content images/train photos/train03.jpg'
import shipImage from '../content images/ship photos/ship03.jpg'
import hotelImage from '../content images/hotel photos/hotel03.jpg'
import helpImage from '../content images/help photos/help02.png'
import {Link} from 'react-router-dom'
import '../content styles/home.css';
import  Header  from '../content navbar/header';


const Home = () => {
 
  return (
    <div className='containerHome'>
    <nav>
    <Header/>  
    </nav>
         <div className='ripple-1'>TBS</div>
         <div className='headerHome'>
              <h1 className='pt-5 mb-3'>Welcome to Tanzania Booking Services (TBS)</h1>
              <p className='mb-3'>This system allows you to book in any of the following services. </p>
         </div>
         <div className='cardHome mt-5'>
           <Link to='/buses' style={{textDecoration:'none'}}>
           <div className='cardItem-1'>
                  <h3><FaBus style={{color:"rgb(0,0,87)", fontSize:"1.5em"}}/>&ensp;Bus Booking Services</h3>
                  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                  &ensp;&ensp;&ensp;&ensp;
                  <img src={busImage} alt='busImage'/>
                  <p>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;We provide  quality  bus services.</p>
              </div>
           </Link>
             
             <Link to='/flights' style={{textDecoration:'none'}}>
             <div className='cardItem-2'>
                 <h3><MdFlight style={{color:"rgb(0,0,87)", fontSize:"1.5em",textAlign:"center"}}/>&ensp;Flight Booking Services</h3>
                 &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                  &ensp;&ensp;&ensp;&ensp;
                  <img src={flightImage} alt='flightImage'/>
                 <p>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;We provide  quality flight services.</p>
              </div>
             </Link>

              <Link to='/trains' style={{textDecoration:'none'}}>
              <div className='cardItem-3'>
              <h3><FaTrain style={{color:"rgb(0,0,87)", fontSize:"1.5em"}}/>&ensp;Train Booking Services</h3>
              &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                  &ensp;&ensp;&ensp;&ensp;
                  <img src={trainImage} alt='trainImage'/>
              <p>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;We provide  quality  train services.</p>
              </div>
              </Link>
              
         </div>

         <div className='cardHome mt-3'>
             <Link to='/ships' style={{textDecoration:'none'}}>
             <div className='cardItem-1'>
                  <h3><FaShip style={{color:"rgb(0,0,87)", fontSize:"1.5em"}}/>&ensp;Ship Booking Services</h3>
                  &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                  &ensp;&ensp;&ensp;&ensp;
                  <img src={shipImage} alt='shipImage'/>
                  <p>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;We provide  quality  ship services.</p>
              </div>
             </Link>
              

              <Link to='/hotels' style={{textDecoration:'none'}}>
              <div className='cardItem-2'>
                 <h3><FaHotel style={{color:"rgb(0,0,87)", fontSize:"1.5em"}}/>&ensp;Hotel Booking Services</h3>
                 &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                  &ensp;&ensp;&ensp;&ensp;
                  <img src={hotelImage} alt='hotelImage'/>
                 <p>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;We provide  quality  hotel services.</p>
              </div>
              </Link>
             
             <Link to='/helper' style={{textDecoration:'none'}}>
             <div className='cardItem-3'>
              <h3><MdHelp style={{color:"rgb(0,0,87)", fontSize:"1.5em"}}/>&ensp;Movies Booking Services</h3>
              &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                  &ensp;&ensp;&ensp;&ensp;
                  <img src={helpImage} alt='helpImage'/>
               <p>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;We provide  quality  movies services.</p>
              </div>
             </Link>
           
         </div>

    
    </div>
    
    
  )

}


export default Home