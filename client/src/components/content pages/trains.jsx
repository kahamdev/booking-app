import React,{useState} from 'react'
import '../content styles/trains.css'
import {MdOutlineAirplaneTicket} from 'react-icons/md'
import train from '../content images/train photos/train01.jpg'
import { Button } from 'react-bootstrap'
import  Header  from '../content navbar/header';
import  Footer from '../content navbar/footer';
import Modal from 'react-bootstrap/Modal';

const Trains = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     <nav>
    <Header/>  
    </nav>
    <div className='trainRoad'>
       <h1 className='pt-5 text-white'>Hi,welcome to train booking services.</h1>
    </div>
    <div className='bgTrain'>
         <div className='container'>
              <h1 className='pt-5'>Choose your route to travel</h1>
              <p className='pt-3'>By booking train now with us <MdOutlineAirplaneTicket style={{fontSize:'30px'}}/></p>
         </div>
    </div>

    <div className='trainContainer'>
          <div className='left_trainContainer'>
               
                <img src={train} alt='train'/>
          </div>
          <div className='right_trainContainer'>
                <div className='container'>
                <h1>Book Train Tickets</h1>
                <form>
                    <label>From</label>
                    <select className='form-control'>
                       <option>Choose Source</option>
                       <option value='daresalaam'>Dar es Salaam</option>
                       <option value='kigoma'>Kigoma</option>
                       <option value='dodoma'>Dodoma</option>
                     </select> 
                      <br></br>
                    <label>To</label>
                    <select className='form-control'>
                       <option>Choose Destination</option>
                       <option value='kigoma'>Kigoma</option>
                       <option value='daresalaam'>Dar es Salaam </option>
                       <option value='singida'>Singida</option>
                     </select>
                    <label>Date</label>
                    <input className='form-control' type='date'/><br></br>
                    <Button onClick={handleShow} className='form-control' style={{backgroundColor:'#115173'}} size='lg'>Search For Ticket</Button>
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

export default Trains