import React from 'react'
import  Header  from '../../content navbar/header';
import  Footer from '../../content navbar/footer';
import './dartang.css';
import shabibyBus from '../../content images/region photos/dar-dom buses/shabiby.jpg';
import kimbinyikoBus from '../../content images/region photos/dar-dom buses/kimbinyiko.jpg';
import abcBus from '../../content images/region photos/dar-dom buses/abc.jpg';
import bmBus from '../../content images/region photos/dar-dom buses/bm.jpg';
import chilohaBus from '../../content images/region photos/dar-dom buses/chiloha.jpg';
import {BsStarFill,BsStarHalf,BsStar} from 'react-icons/bs';
import { Button } from 'react-bootstrap';
const DarTang = () => {
  return (
    <>
    <nav>
    <Header/>  
    </nav>
    <div className='container'>
         <div className='dar-container'>
            <div className='left-dar-container'>
                <div className='top'>
                     <h3>Daresalaam / Tanga Region</h3>
                     <hr></hr>
                </div> 
                <div className='middle'>
                     <h5>Some available buses between these regions</h5>
                </div> 
                <div className='bottom'>
                     <p>You are required to select your favourite company bus for booking services.</p>
                </div>  
            </div>
            <div className='right-dar-container'>
                 <div className='right-dar-container-item1'>
                      <div className='left p-3'>
                           <img src={abcBus} width="120" height="100" alt="imagebus"/> 
                      </div> 
                      <div className='middle p-3'>
                           <h3>ABC luxury bus</h3>
                           <p> ABC bus company provide quality bus travelling for their customers. </p>
                           <p>3.5 <BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarHalf/> <BsStar/> stars &emsp; <Button>Book now</Button></p>
                      </div> 
                      <div className='right p-2'>
                           
                      </div>
                 </div>

                 <div className='right-dar-container-item2'>
                      <div className='left p-3'>
                           <img src={bmBus} width="120" height="100" alt="imagebus"/> 
                      </div> 
                      <div className='middle p-3'>
                           <h3>BM coach bus</h3>
                           <p> BM bus company provide quality bus travelling for their customers. </p>
                           <p>3.8 <BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarHalf/> <BsStar/> stars &emsp; <Button>Book now</Button></p>
                      </div> 
                      <div className='right p-2'>
                      
                      </div>
                 </div>
                
                 <div className='right-dar-container-item3'>
                      <div className='left p-3'>
                           <img src={chilohaBus} width="120" height="100" alt="imagebus"/> 
                      </div> 
                      <div className='middle p-3'>
                           <h3>Chiloha safari bus</h3>
                           <p> Chiloha bus company provide quality bus travelling for their customers. </p>
                           <p>3.2 <BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarHalf/> <BsStar/> stars &emsp; <Button>Book now</Button></p>
                      </div> 
                      <div className='right p-2'>
                          
                      </div>
                 </div>

                 <div className='right-dar-container-item4'>
                      <div className='left p-3'>
                           <img src={kimbinyikoBus} width="120" height="100" alt="imagebus"/> 
                      </div> 
                      <div className='middle p-3'>
                           <h3>Kimbinyiko INT coach</h3>
                           <p> Kimbinyiko bus company provide quality bus travelling for their customers. </p>
                           <p>4.3 <BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarHalf/> stars &emsp; <Button>Book now</Button></p>
                      </div> 
                      <div className='right p-2'>
                       
                      </div>
                 </div>

                 <div className='right-dar-container-item5'>
                      <div className='left p-3'>
                           <img src={shabibyBus} width="120" height="100" alt="imagebus"/> 
                      </div> 
                      <div className='middle p-3'>
                           <h3>Shabiby Line bus</h3>
                           <p> Shabiby bus company provide quality bus travelling for their customers. </p>
                           <p>4.5 <BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarHalf/> stars &emsp; <Button>Book now</Button></p>
                      </div> 
                      <div className='right p-2'>
                          
                      </div>
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

export default DarTang;