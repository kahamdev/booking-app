import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {MdEventSeat} from 'react-icons/md'
import {VscWorkspaceTrusted} from 'react-icons/vsc'
import {FaSms,FaLuggageCart} from 'react-icons/fa'
import  Header  from '../../../../../content navbar/header';
import  Footer from '../../../../../content navbar/footer';
import '../styles/abcLuxury.css';
import abcLuxury from '../images/abcLuxury.jpg';
import { Button } from 'react-bootstrap';


const AbcLuxury = () => {
  const [boardingPoint,setBoardingPoint]=useState({start:" ",end:" "})


  const handleBoarding=(e)=>{
       const{name,value}=e.target
       setBoardingPoint(prevData=>({...prevData,[name]:value}))
  }


  const [seat1,setSeat1]=useState(false)
  const handleSeat1=()=>{
       setSeat1(!seat1)
  }
  const [seat2,setSeat2]=useState(false)
  const handleSeat2=()=>{
       setSeat2(!seat2)
  }
  const navigate=useNavigate();



  return (
    <>    
          <nav>
            <Header/>
          </nav>
          <div className='container'>
                <div className='sideAll'>
                <div className='leftSide mt-5'>
                      <div className='left-div1'>
                      <h5 className=' text-light text-center p-2' style={{backgroundColor:'#115173'}}>Seat Selection</h5>
                      <table className='table table-bordered'>
                          <thead>
                              <tr>
                                <th>Available</th>
                                <th>Reserved</th>
                                <th>Processed</th>
                              </tr>
                          </thead>
                          <tbody>
                                <tr>
                                  <td><MdEventSeat color=''  size='25px'/></td>
                                  <td><MdEventSeat color='green'  size='25px'/></td>
                                  <td><MdEventSeat color='blue'  size='25px'/></td>
                                </tr>
                          </tbody>
                      </table>
                      </div>
                      <div className='left-div2'>
                      <h5 className=' text-light text-center mt-2 p-2' style={{backgroundColor:'#115173'}}>Bus type: Luxury</h5>
                      <img src={abcLuxury}  alt='luxury'/>
                      </div>
                      
                     <div className='left-div3'>
                     <h5 className=' text-light text-center mt-2 p-2' style={{backgroundColor:'#115173'}}>Boarding Points</h5>
                      <form className='form-group'>
                         <select className='' name='start' onChange={handleBoarding} value={boardingPoint.start}>
                              <option>Starting Point</option>
                              <option value='mbezi'>Mbezi Terminal</option>
                              <option value='ubungo'>Ubungo Terminal</option>
                              <option value='shekilango'>Shekilango</option>
                         </select>
                         <select className='' name='end'  onChange={handleBoarding} value={boardingPoint.end}>
                              <option>Ending Point</option>
                              <option value='nanenane'>Nanenane</option>
                              <option value='sabasaba'>Sabasaba</option>
                              <option value='cbe'>CBE</option>
                         </select>
                       
                     </form>
                     </div>
                   
                </div>
                <div className='middleSide mt-3'>
                  <div className='middleSide-content'>
                  <div className='middleSide-lines'>
                  <div className='line-1'>

                      <div className='seat1'>
                      <input type='checkbox' checked={seat1} onChange={handleSeat1}/>
                      </div>
                     
                     &ensp;
                     <div className='seat2'>
                          <input type='checkbox' checked={seat2} onChange={handleSeat2} />
                     </div>
                     &emsp; &emsp; &emsp; &emsp;
                     <div className='seat3'>
                          <input type='checkbox' />
                     </div>
                     &ensp;
                     <div className='seat4'>
                          <input type='checkbox' />
                     </div>
                   </div>
                   <div className='line-2'>
                     <div className='seat1'>
                          <input type='checkbox' />
                     </div>
                     &ensp;
                     <div className='seat2'>
                          <input type='checkbox' />
                     </div>
                     &emsp; &emsp; &emsp; &emsp;
                     <div className='seat3'>
                          <input type='checkbox' />
                     </div>
                     &ensp;
                     <div className='seat4'>
                          <input type='checkbox' />
                     </div>
                    </div>
                    <div className='line-3'>
                     <div className='seat1'>
                          <input type='checkbox' />
                     </div>
                     &ensp;
                     <div className='seat2'>
                          <input type='checkbox' />
                     </div>
                     &emsp; &emsp; &emsp; &emsp;
                     <div className='seat3'>
                          <input type='checkbox' />
                     </div>
                     &ensp;
                     <div className='seat4'>
                          <input type='checkbox' />
                     </div>
                    </div>
                    <div className='line-4'>
                     <div className='seat1'>
                          <input type='checkbox' />
                     </div>
                     &ensp;
                     <div className='seat2'>
                          <input type='checkbox' />
                     </div>
                     &emsp; &emsp; &emsp; &emsp;
                     <div className='seat3'>
                          <input type='checkbox' />
                     </div>
                     &ensp;
                     <div className='seat4'>
                          <input type='checkbox' />
                     </div>
                    </div>
                    <div className='line-5'>
                     <div className='seat1'>
                          <input type='checkbox' />
                     </div>
                     &ensp;
                     <div className='seat2'>
                          <input type='checkbox' />
                     </div>
                     &emsp; &emsp; &emsp; &emsp;
                     <div className='seat3'>
                          <input type='checkbox' />
                     </div>
                     &ensp;
                     <div className='seat4'>
                          <input type='checkbox' />
                     </div>
                    </div>
                    <div className='line-6'>
                     <div className='seat1'>
                          <input type='checkbox' />
                     </div>
                     &ensp;
                     <div className='seat2'>
                          <input type='checkbox' />
                     </div>
                     &emsp; &emsp; &emsp; &emsp;
                     <div className='seat3'>
                          <input type='checkbox' />
                     </div>
                     &ensp;
                     <div className='seat4'>
                          <input type='checkbox' />
                     </div>
                    </div>
                    <div className='line-7'>
                     <div className='seat1'>
                          <input type='checkbox' />
                     </div>
                     &ensp;
                     <div className='seat2'>
                          <input type='checkbox' />
                     </div>
                     &emsp; &emsp; &emsp; &emsp;
                     <div className='seat3'>
                          <input type='checkbox' />
                     </div>
                     &ensp;
                     <div className='seat4'>
                          <input type='checkbox' />
                     </div>
                    </div>
                    <div className='line-8'>
                     <div className='seat1'>
                          <input type='checkbox' />
                     </div>
                     &ensp;
                     <div className='seat2'>
                          <input type='checkbox' />
                     </div>
                     &emsp; &emsp; &emsp; &emsp;
                     <div className='seat3'>
                          <input type='checkbox' />
                     </div>
                     &ensp;
                     <div className='seat4'>
                          <input type='checkbox' />
                     </div>
                    </div>
                    <div className='line-9'>
                     <div className='seat1'>
                          <input type='checkbox' />
                     </div>
                     &ensp;
                     <div className='seat2'>
                          <input type='checkbox' />
                     </div>
                     &emsp; &emsp; &emsp; &emsp;
                     <div className='seat3'>
                          <input type='checkbox' />
                     </div>
                     &ensp;
                     <div className='seat4'>
                          <input type='checkbox' />
                     </div>
                    </div>
                    <div className='line-10'>
                     <div className='seat1'>
                          <input type='checkbox' />
                     </div>
                     &ensp;
                     <div className='seat2'>
                          <input type='checkbox' />
                     </div>
                     &emsp; &emsp; &emsp; &emsp;
                     <div className='seat3'>
                          <input type='checkbox' />
                     </div>
                     &ensp;
                     <div className='seat4'>
                          <input type='checkbox' />
                     </div>
                     &ensp;
                     <div className='seat4'>
                          <input type='checkbox' />
                     </div>
                    </div>
                  
                  </div>
                  </div>
                 
                   
                    
                </div>
                <div className='rightSide mt-5'>
                     <div className='right-div1'>
                     <h5 className=' text-light text-center p-2' style={{backgroundColor:'#115173'}}>Some thing to note</h5>
                     <p>The seat price does not include the luggage <FaLuggageCart color='blue'/> price.</p>
                     <hr></hr>
                     <p>After finishing your payment, we will notify you via SMS <FaSms color='blue'/> message.</p>
                     <hr></hr>
                     <p>Trust us <VscWorkspaceTrusted color='blue'/>, we will ensure you get better services.</p>
                     </div>
                     <div className='right-div2'>
                     <h5 className=' text-light text-center p-2' style={{backgroundColor:'#115173'}}>Profile Time Table</h5>
                     <p>&nbsp;Bus Route:&ensp;Dar to Dom</p>
                     <p>&nbsp;Selected Seat:&ensp;{seat1?"01":"null"}&ensp;{seat2?"02":" "}</p>
                     <p>&nbsp;Price Amount:&ensp; {seat1?"30000":"null"}&ensp;{seat2?"30000":" "}</p>
                     <p>&nbsp;Start Point:&ensp;{boardingPoint.start}</p>
                     <p>&nbsp;Ending Point:&ensp;{boardingPoint.end}</p>
                     </div>
                     <div className='right-div3 mt-3'>
                     <Button onClick={()=>navigate('/abcLuxPerson')}>Reserve</Button>
                     &emsp; &emsp; &emsp;
                     <Button style={{backgroundColor:'red'}}>Cancel</Button>
                     </div>
                </div>
                   
                </div>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            
            
          </div>
          
         
          <footer>
              <Footer/>
          </footer>
    </>

  )
}

export default AbcLuxury