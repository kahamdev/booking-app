import React from 'react'
import  Header  from '../../content navbar/header';
import  Footer from '../../content navbar/footer';
import './dardom2.css';
import tashriffBus from '../../content images/region photos/dar-dom buses/tashriff.jpg';
import newforceBus from '../../content images/region photos/dar-dom buses/newforce.jpg';
import aboodBus from '../../content images/region photos/dar-dom buses/abood.jpg';
import extraluxuryBus from '../../content images/region photos/dar-dom buses/extraluxury.jpg';
import machameBus from '../../content images/region photos/dar-dom buses/machame.jpg';
import {BsStarFill,BsStarHalf,BsStar,BsSearch} from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const DarDom2 = () => {
     const shabibyNavigator=useNavigate();
     const abcNavigator=useNavigate();
     const navigate=useNavigate()
     const handlePrev=()=>{
          navigate('/dardom')
     }
     const imgSearch={
          padding:'10px',
         marginLeft:'-60px',
         width:'10px',
         height:'10px'
          

     }

  return (
    <>
    <nav>
    <Header/>  
    </nav>
    <div className='container'>
         <div className='dar-container'>
            <div className='left-dar-container'>
                <div className='top'>
                     <h3>Daresalaam Available Buses</h3>
                     <hr></hr>
                </div> 
                <div className='middle'>
                     <h5>Some available buses within this region</h5>
                </div> 
                <div className='bottom'>
                     <p>You are required to select your favourite company bus for booking services.</p>
                </div>  
            </div>
            <div className='right-dar-container'>
                 <div className='form mb-5'>
                    <form className='form-item'>
                    <input className='form-input' type='text'  placeholder='search for bus .....' />
                    <img style={imgSearch} src={aboodBus} alt="search"/>
                    <BsSearch  color='blue'/>
                    </form>
                    
                </div>
                 <div  className='right-dar-container-item1  mb-5'>
                      <div className='left p-3'>
                           <img style={{borderRadius:'10px'}} src={aboodBus} width="120" height="100" alt="imagebus"/> 
                      </div> 
                      <div  className='middle p-3'>
                           <h3>Abood luxury bus</h3>
                           <p>Abood bus company provides quality  travelling experience to their customers.  </p>
                           <p>3.5 <BsStarFill color='yellow'/> <BsStarFill color='yellow'/> <BsStarFill color='yellow'/> <BsStarHalf color='yellow'/> <BsStar color='yellow'/> stars &emsp;
                            <Button onClick={()=>{abcNavigator('/abcHome')}}>Book now</Button></p>
                      </div> 
                     
                      <div  className='right p-2'>
                      <span style={{borderRadius:'50px',backgroundColor:'#cccc',padding:'10px'}}>06</span> 
                      </div>
                 </div>

                 <div className='right-dar-container-item2 mb-5'>
                      <div className='left p-3'>
                           <img style={{borderRadius:'10px'}} src={newforceBus} width="120" height="100" alt="imagebus"/> 
                      </div> 
                      <div className='middle p-3'>
                           <h3>NewForce bus company</h3>
                           <p> NewForce bus company provides quality  travelling experience to their customers.  </p>
                           <p>3.8 <BsStarFill color='yellow'/> <BsStarFill color='yellow'/> <BsStarFill color='yellow'/> <BsStarHalf color='yellow'/> <BsStar color='yellow'/> stars &emsp; <Button>Book now</Button></p>
                      </div> 
                      <div className='right p-2'>
                      <span style={{borderRadius:'50px',backgroundColor:'#cccc',padding:'10px'}}>07</span>
                      </div>
                 </div>
                
                 <div className='right-dar-container-item3 mb-5'>
                      <div className='left p-3'>
                           <img style={{borderRadius:'10px'}} src={machameBus} width="120" height="100" alt="imagebus"/> 
                      </div> 
                      <div className='middle p-3'>
                           <h3>Machame express bus</h3>
                           <p>Machame bus company provides quality  travelling experience to their customers.  </p>
                           <p>3.2 <BsStarFill color='yellow'/> <BsStarFill color='yellow'/> <BsStarFill color='yellow'/> <BsStarHalf color='yellow'/> <BsStar color='yellow'/> stars &emsp; 
                           <Button>Book now</Button></p>
                      </div> 
                      <div className='right p-2'>
                      <span style={{borderRadius:'50px',backgroundColor:'#cccc',padding:'10px'}}>08</span>
                      </div>
                 </div>

                 <div className='right-dar-container-item4 mb-5'>
                      <div className='left p-3'>
                           <img style={{borderRadius:'10px'}} src={extraluxuryBus} width="120" height="100" alt="imagebus"/> 
                      </div> 
                      <div className='middle p-3'>
                           <h3>Extra luxury coach</h3>
                           <p> Extra  bus company provides quality  travelling experience to their customers.  </p>
                           <p>4.3 <BsStarFill color='yellow'/> <BsStarFill color='yellow'/> <BsStarFill color='yellow'/> <BsStarFill color='yellow'/> <BsStarHalf color='yellow'/> stars &emsp; <Button>Book now</Button></p>
                      </div> 
                      <div className='right p-2'>
                      <span style={{borderRadius:'50px',backgroundColor:'#cccc',padding:'10px'}}>09</span>
                      </div>
                 </div>

                 <div className='right-dar-container-item5 mb-5'>
                      <div className='left p-3'>
                           <img style={{borderRadius:'10px'}} src={tashriffBus} width="120" height="100" alt="imagebus"/> 
                      </div> 
                      <div className='middle p-3'>
                           <h3>Tashriff Express bus</h3>
                           <p> Tashriff bus company provides quality  travelling experience to their customers. </p>
                           <p>4.5 <BsStarFill color='yellow'/> <BsStarFill color='yellow'/> <BsStarFill color='yellow'/> <BsStarFill color='yellow' /> <BsStarHalf color='yellow'/> stars &emsp; 
                           <Button onClick={()=>{shabibyNavigator('/shabibyHome')}}>Book now</Button></p>
                      </div> 
                      <div className='right p-2'>
                      <span style={{borderRadius:'50px',backgroundColor:'#cccc',padding:'10px'}}>10</span> 
                      </div>
                 </div>
                <div style={{float:'right'}}>
                 <Button onClick={handlePrev}>previous</Button>&emsp;
                 <Button disabled>next to</Button>
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

export default DarDom2