import React,{useState} from 'react'
import '../content styles/buses.css'
import {MdOutlineAirplaneTicket} from 'react-icons/md'
import bus from '../content images/bus photos/bus01.jpg'
import  Header  from '../content navbar/header';
import  Footer from '../content navbar/footer';
import {useNavigate} from 'react-router-dom';
const Buses = () => {
  const [data,setData]=useState("")
  const navigate=useNavigate();
 const handleChange=(e)=>{
       setData((spread)=>({
        ...spread,
        [e.target.name]:e.target.value
       }
       ))
       console.log(e.target.value)
       const redirect_to=e.target.value
       if (redirect_to==='daresalaam') {
           navigate('/dardom')
       }
       
 }

  return (
    <>
     <nav>
    <Header/>  
    </nav>
    <div className='busRoad'>
    <h1 className='pt-5 text-white'>Hi,welcome to bus booking services.</h1>
    </div>
    <div className='bgBus'>
         <div className='container'>
              <h1 className='pt-5'>Travel together by choose your route</h1>
              <p className='pt-3'>By booking bus now with us <MdOutlineAirplaneTicket style={{fontSize:'30px'}}/></p>
         </div>
    </div>
    <div className='busContainer'>
          <div className='left_busContainer'>
               
                <img src={bus} alt='bus'/>
          </div>
          <div className='right_busContainer'>
                <div className='container'>
                <div className='form-select-bus'>
                <form>
                <h1 className="mt-3">Bus Booking Tickets</h1>
                    <h5>Choose location area to see available buses </h5>
                    <p><span className='text-danger'>*</span>&nbsp;select your region below</p>
                    <select onChange={handleChange} name='select' value={data.value} className='form-control'>
                       <option>Select Region</option>
                       <option value='arusha'>Arusha</option>
                       <option value='daresalaam'>Dar es Salaam</option>
                       <option value='dodoma'>Dodoma </option>
                       <option value='iringa'>Iringa</option>
                       <option value='kilimanjaro'>Kilimanjaro </option>
                       <option value='lindi'>Lindi </option>
                       <option value='morogoro'>Morogoro </option>
                       <option value='mbeya'>Mbeya</option>
                       <option value='ruvuma'>Ruvuma</option>
                       <option value='shinyanga'>Shinyanga</option>
                       <option value='tanga'>Tanga </option>
                      
                     </select> 
                      <br></br>
                </form>
                </div>
                
                </div>
                
               
          </div>
    </div>
    <footer>
      <Footer/>
    </footer>
  </>
  )
}

export default Buses