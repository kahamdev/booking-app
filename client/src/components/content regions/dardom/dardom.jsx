import React from 'react'
import  Header  from '../../content navbar/header';
import  Footer from '../../content navbar/footer';
import './dardom.css';
import shabibyBus from '../../content images/region photos/dar-dom buses/shabiby.jpg';
import kimbinyikoBus from '../../content images/region photos/dar-dom buses/kimbinyiko.jpg';
import abcBus from '../../content images/region photos/dar-dom buses/abc.jpg';
import bmBus from '../../content images/region photos/dar-dom buses/bm.jpg';
import chilohaBus from '../../content images/region photos/dar-dom buses/chiloha.jpg';
import {BsStarFill,BsStarHalf,BsStar,BsSearch} from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const DarDom = () => {
     const shabibyNavigator=useNavigate();
     const abcNavigator=useNavigate();
     const navigate=useNavigate()

   
   
     
     const handleNext=()=>{
          navigate('/dardom2')
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
                    <img style={imgSearch} src={abcBus}  alt="search"/>
                    <BsSearch  color='blue'/>
                    </form>
                    
                </div>

                              <div  className='right-dar-container-item1  mb-5'>
                                <div className='left p-3'>
                                     <img style={{borderRadius:'10px'}} src={abcBus} width="120" height="100" alt="imagebus"/> 
                                </div> 
                                <div  className='middle p-3'>
                                     <h3>ABC luxury bus</h3>
                                     <p> ABC bus company provides quality  travelling experience to their customers. </p>
                                     <p>3.5 <BsStarFill color='yellow'/> <BsStarFill color='yellow'/> <BsStarFill color='yellow'/> <BsStarHalf color='yellow'/> <BsStar color='yellow'/> stars &emsp;
                                      <Button onClick={()=>{abcNavigator('/abcHome')}}>Book now</Button></p>
                                </div> 
                               
                                <div  className='right p-2'>
                                      <span style={{borderRadius:'50px',backgroundColor:'#cccc',padding:'10px'}}>01</span>
                                </div>
                              </div>
          
                           <div  className='right-dar-container-item2 mb-5'>
                                <div className='left p-3'>
                                     <img style={{borderRadius:'10px'}} src={bmBus} width="120" height="100" alt="imagebus"/> 
                                </div> 
                                <div className='middle p-3'>
                                     <h3>BM coach bus</h3>
                                     <p>BM bus company provides quality  travelling experience to their customers.  </p>
                                     <p>3.8 <BsStarFill color='yellow'/> <BsStarFill color='yellow'/> <BsStarFill color='yellow'/> <BsStarHalf color='yellow'/> <BsStar color='yellow'/> stars &emsp; <Button>Book now</Button></p>
                                </div> 
                                <div className='right p-2'>
                                <span style={{borderRadius:'50px',backgroundColor:'#cccc',padding:'10px'}}>02</span>
                                </div>
                           </div>
                          
                           <div className='right-dar-container-item3 mb-5'>
                                <div className='left p-3'>
                                     <img style={{borderRadius:'10px'}} src={chilohaBus} width="120" height="100" alt="imagebus"/> 
                                </div> 
                                <div className='middle p-3'>
                                     <h3>Chiloha safari bus</h3>
                                     <p>Chiloha bus company provides quality  travelling experience to their customers. </p>
                                     <p>3.2 <BsStarFill color='yellow'/> <BsStarFill color='yellow'/> <BsStarFill color='yellow'/> <BsStarHalf color='yellow'/> <BsStar color='yellow'/> stars &emsp; 
                                     <Button>Book now</Button></p>
                                </div> 
                                <div className='right p-2'>
                                <span style={{borderRadius:'50px',backgroundColor:'#cccc',padding:'10px'}}>03</span>
                                </div>
                           </div>
          
                           <div className='right-dar-container-item4 mb-5'>
                                <div className='left p-3'>
                                     <img style={{borderRadius:'10px'}} src={kimbinyikoBus} width="120" height="100" alt="imagebus"/> 
                                </div> 
                                <div className='middle p-3'>
                                     <h3>Kimbinyiko INT coach</h3>
                                     <p> Kimbinyiko bus company provides quality  travelling experience to their customers.  </p>
                                     <p>4.3 <BsStarFill color='yellow'/> <BsStarFill color='yellow'/> <BsStarFill color='yellow'/> <BsStarFill color='yellow'/> <BsStarHalf color='yellow'/> stars &emsp; <Button>Book now</Button></p>
                                </div> 
                                <div className='right p-2'>
                                <span style={{borderRadius:'50px',backgroundColor:'#cccc',padding:'10px'}}>04</span>
                                </div>
                           </div>
          
                           <div className='right-dar-container-item5 mb-5'>
                                <div className='left p-3'>
                                     <img style={{borderRadius:'10px'}} src={shabibyBus} width="120" height="100" alt="imagebus"/> 
                                </div> 
                                <div className='middle p-3'>
                                     <h3>Shabiby Line bus</h3>
                                     <p> Shabiby bus company provides quality  travelling experience to their customers.  </p>
                                     <p>4.5 <BsStarFill color='yellow'/> <BsStarFill color='yellow'/> <BsStarFill color='yellow'/> <BsStarFill color='yellow' /> <BsStarHalf color='yellow'/> stars &emsp; 
                                     <Button onClick={()=>{shabibyNavigator('/shabibyHome')}}>Book now</Button></p>
                                </div> 
                                <div className='right p-2'>
                                <span style={{borderRadius:'50px',backgroundColor:'#cccc',padding:'10px'}}>05</span>
                                </div>
                           </div>

                
                <div style={{float:'right'}}>
                 <Button disabled>previous</Button>&emsp;
                 <Button onClick={handleNext}>next to</Button>
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

export default DarDom