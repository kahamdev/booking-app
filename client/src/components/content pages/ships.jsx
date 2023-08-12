import React,{useState} from 'react'
import '../content styles/ships.css'
import {MdOutlineAirplaneTicket} from 'react-icons/md'
import ship from '../content images/ship photos/ship01.jpg'
import { Button } from 'react-bootstrap'
import  Header  from '../content navbar/header';
import  Footer from '../content navbar/footer';
import Modal from 'react-bootstrap/Modal';


const Ships = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     <nav>
    <Header/>  
    </nav>
    <div className='shipRoad'>
       <h1 className='pt-5 text-white'>Hi,welcome to ship booking services.</h1>
    </div>
    <div className='bgShip'>
         <div className='container'>
              <h1 className='pt-5'>Visit your favorite location</h1>
              <p className='pt-3'>By booking ship now with us <MdOutlineAirplaneTicket style={{fontSize:'30px'}}/></p>
         </div>
    </div>

    <div className='shipContainer'>
          <div className='left_shipContainer'>
               
                <img src={ship} alt='ship'/>
          </div>
          <div className='right_shipContainer'>
                <div className='container'>
                <h1>Book Ship Tickets</h1>
                <form>
                    <label>From</label>
                    <select className='form-control'>
                       <option>Choose Source</option>
                       <option value='daresalaam'>Dar es Salaam</option>
                       <option value='zanzibar'>Zanzibar </option>
                       <option value='tanga'>Tanga</option>
                     </select> 
                      <br></br>
                    <label>To</label>
                    <select className='form-control'>
                       <option>Choose Destination</option>
                       <option value='zanzibar'>Zanzibar</option>
                       <option value='daresalaam'>Dar es Salaam  </option>
                       <option value='mombasa'>Mombasa</option>
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

export default Ships