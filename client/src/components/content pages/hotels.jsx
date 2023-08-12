import React,{useState} from 'react'
import '../content styles/hotels.css'
import {MdOutlineAirplaneTicket} from 'react-icons/md'
import hotel from '../content images/hotel photos/hotel01.jpg'
import { Button } from 'react-bootstrap'
import  Header  from '../content navbar/header';
import  Footer from '../content navbar/footer';
import Modal from 'react-bootstrap/Modal';

const Hotels = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <nav>
    <Header/>  
    </nav>
     <div className='hotelPack'>
       <h1 className='pt-5 text-white'>Hi,welcome to tanzania hotel services.</h1>
    </div>
    <div className='bgHotel'>
         <div className='container'>
              <h1 className='pt-5'>Enjoy your holiday confortably</h1>
              <p className='pt-3'>By booking hotel now with us <MdOutlineAirplaneTicket style={{fontSize:'30px'}}/></p>
         </div>
    </div>

    <div className='hotelContainer'>
          <div className='left_hotelContainer'>
               
                <img src={hotel} alt='hotel'/>
          </div>
          <div className='right_hotelContainer'>
                <div className='container'>
                <h1>Book Hotel Tickets</h1>
                <form>
                    <label>From</label>
                    <select className='form-control'>
                       <option>Choose Category</option>
                       <option value='adult'>Adult</option>
                       <option value='children'>Children </option>
                       <option value='both'>Adult & Children</option>
                     </select> 
                      <br></br>
                    <label>To</label>
                    <select className='form-control'>
                       <option>Choose Room</option>
                       <option value='1'>1 Room</option>
                       <option value='2'>2 Rooms</option>
                       <option value='3'>3 Rooms</option>
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

export default Hotels