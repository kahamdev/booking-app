import React,{useState} from 'react'
import '../content styles/flights.css'
import {MdOutlineAirplaneTicket} from 'react-icons/md'
import flight from '../content images/flight photos/flight03.jpg'
import { Button } from 'react-bootstrap'
import  Header  from '../content navbar/header';
import  Footer from '../content navbar/footer';
import Modal from 'react-bootstrap/Modal';

const Flights = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <nav>
    <Header/>  
    </nav>
    <div className='flightRoad'>
       <h1 className='pt-5 text-white'>Hi,welcome to flight booking services.</h1>
    </div>
      <div className='bgFlight'>
           <div className='container'>
                <h1 className='pt-5'>Visit your favorite location</h1>
                <p className='pt-3'>By booking flight now with us <MdOutlineAirplaneTicket style={{fontSize:'30px'}}/></p>
           </div>
      </div>

      <div className='flightContainer'>
          <div className='left_flightContainer'>
               
                <img src={flight} alt='flight'/>
          </div>
          <div className='right_flightContainer'>
                <div className='container'>
                <h1>Book Flight Tickets</h1>
                <form>
                    <label>From</label>
                    <select className='form-control'>
                       <option>Choose Source</option>
                       <option value='daresalaam'>Dar es Salaam</option>
                       <option value='zanzibar'>Zanzibar </option>
                       <option value='arusha'>Arusha</option>
                     </select> 
                      <br></br>
                    <label>To</label>
                    <select className='form-control'>
                       <option>Choose Destination</option>
                       <option value='zanzibar'>Zanzibar </option>
                       <option value='arusha'> Arusha</option>
                       <option value='daresalaam'>Dar es Salaam</option>
                     </select>
                    <label>Date</label>
                    <input className='form-control' type='date'/><br></br>
                    <Button onClick={handleShow} className='form-control' style={{backgroundColor:'#115173'}}  size='lg'>Search For Ticket</Button>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{color:'#115173'}}
        >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
        <p>This page is undermaintenace thanks</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>close</Button>
        </Modal.Footer>
      </Modal>
                </form>
                </div>
                
               
          </div>
    </div>
    <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default Flights