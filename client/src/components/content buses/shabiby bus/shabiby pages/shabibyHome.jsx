import React from 'react'
import  Header  from '../../../content navbar/header';
import  Footer from '../../../content navbar/footer';
import { Button } from 'react-bootstrap';
import '../shabiby style/shabibyHome.css';
import {FaTicketAlt} from 'react-icons/fa';

const AbcHome = () => {
  return (
    <>
    <nav>
    <Header/>  
    </nav>
    
    <div className='shabibyHome'>
         <div className='shabibyHome-top'>
            <div className='container pt-5 '>
            <h1 className='pt-5'>Welcome to Shabiby line coach</h1> 
              <p className='pt-3'>You are required to select source location, destination location and date below</p>
              <div className='shabibyForm pt-2'>
                   <form>
                       
                          <input type="text" name="from" placeholder="source"/>
                          <input type="text" name="to" placeholder="destination"/>
                          <input type="date" name="date"/>
                          <Button style={{padding:"10px",width:"150px"}}><FaTicketAlt/>&nbsp;search ticket</Button>
                   </form>
              </div>
            </div>
         </div>
         <div className='shabibyHome-section pt-3'>
             <div className='container'>
             <h3 className='text-center'>Our Bus Routes</h3>
              <div className='shabibyRoute'>
                   <div className='shabibyRoute1'>
                   <div className='section text-white text-center'>Daresalaam Route</div>
                        <p className='pt-2'>Dar-es-Salaam to Dodoma</p>
                   </div>
                   <div className='shabibyRoute2'>
                   <div className='section text-white text-center'>Daresalaam Route</div>
                       <p className='pt-2'>Dar-es-Salaam to Morogoro</p>
                  </div>
                  <div className='shabibyRoute3'>
                  <div className='section text-white text-center'>Daresalaam Route</div>
                       <p className='pt-2'>Dar-es-Salaam to Chalinze</p>
                  </div>
              </div>
              <div className='shabibyRoute'>
                   <div className='shabibyRoute1'>
                   <div className='section text-white text-center'>Morogoro Route</div>
                        <p className='pt-2'>Morogoro to Dodoma</p>
                   </div>
                   <div className='shabibyRoute2'>
                   <div className='section text-white text-center'>Morogoro Route</div>
                       <p className='pt-2'>Morogoro to Chalinze</p>
                  </div>
                  <div className='shabibyRoute3'>
                      <div className='section text-white text-center'>Morogoro Route</div>
                       <p className='pt-2'>Morogoro to Dar-es-Salaam</p> 
                  </div>
              </div>

              <div className='shabibyRoute'>
                   <div className='shabibyRoute1'>
                   <div className='section text-white text-center'>Chalinze Route</div>
                        <p className='pt-2'>Chalinze to Dodoma</p>
                   </div>
                   <div className='shabibyRoute2'>
                   <div className='section text-white text-center'>Chalinze Route</div>
                       <p className='pt-2'>Chalinze to Morogoro</p>
                  </div>
                  <div className='shabibyRoute3'>
                  <div className='section text-white text-center'>Chalinze Route</div>
                       <p className='pt-2'>Chalinze to Dar-es-Salaam</p>
                  </div>
              </div>

              <div className='shabibyRoute'>
                   <div className='shabibyRoute1'>
                   <div className='section text-white text-center'>Dodoma Route</div>
                        <p className='pt-2'>Dodoma to Morogoro</p>
                   </div>
                   <div className='shabibyRoute2'>
                   <div className='section text-white text-center'>Dodoma Route</div>
                       <p className='pt-2'>Dodoma to Chalinze</p>
                  </div>
                  <div className='shabibyRoute3'>
                  <div className='section text-white text-center'>Dodoma Route</div>
                       <p className='pt-2'>Dodoma to Dar-es-Salaam</p>
                  </div>
              </div>
             
             <br></br>
             <br></br>
             <br></br>


             </div>
              
         </div>
    </div>
     

    <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default AbcHome;