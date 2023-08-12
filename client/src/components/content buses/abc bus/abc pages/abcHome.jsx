import React,{useState,useEffect} from 'react'
import  Header  from '../../../content navbar/header';
import  Footer from '../../../content navbar/footer';
import { Button } from 'react-bootstrap';
import '../abc styles/abcHome.css';
import {FaTicketAlt} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const AbcHome = () => {
  const navigate=useNavigate();
  const [item,setItem]=useState({source:"",destination:"",date:""})
  const [data,setData]=useState([])
  const getAbcRouteSelection=async()=>{
        try{
            const response=await fetch('http://127.0.0.1:8000/api/my-api/abc-route-selection/',{
               method:'GET',
               headers:{
                    'Content-Type':'application/json'
               }
            })
            if(!response.status===200){
                console.log('Invalid bad request')
          }
          const result=await response.json()
          return setData(result)
        }
        catch(err){
          console.log(err)
        }
  }
  useEffect(() => { getAbcRouteSelection()}, [])
  const handleChange=(e)=>{
     const {name,value} = e.target
     setItem( prev => ({ ...prev,[name]:value}))
   }

  const handleSubmit = (e)=>{
           e.preventDefault()
           if(item.source===data.map(x=>x.source).toString() && item.destination===data.map(x=>x.destination).toString() && item.date===data.map(x=>x.date).toString()){
               console.log('predict now')
               navigate('/homeDomDar')
           }
           else{
               console.log('invalid prediction')
               navigate('/abcroutenotfound')
           }
  }

  return (
    <>
    <nav>
    <Header/>  
    </nav>
    
    <div className='abcHome'>
         <div className='abcHome-top'>
            <div className='container pt-5 '>
            <h1 className='pt-5 mb-2'>Welcome to ABC luxury bus</h1> 
              <p className='pt-3 text-show'>You are required to select source location, destination location and date below</p>
              <div className='pt-2'>
                   
                  <div className='form-items'>
                    <form className='form-pack' onSubmit={handleSubmit}>
                         <select className='form-select'  name='source' value={item.source}  onChange={handleChange}>
                              <option>Source</option>
                              <option value="chalinze">Chalinze</option>
                              <option value="Daresalaam">Dar es Salaam</option>
                              <option value="Dodoma">Dodoma</option>
                              <option value="morogoro">Marogoro</option>
                          </select>
                          <select className='form-select' name='destination' value={item.destination} onChange={handleChange}>
                              <option>Destination</option>
                              <option value="morogoro">Marogoro</option>
                              <option value="Dodoma">Dodoma</option>
                              <option value="Daresalaam">Dar es Salaam</option>
                          </select>
                          <input value={item.date} className='form-select' type="date" name="date" onChange={handleChange}/>

                          <Button type='submit'  style={{padding:"10px",width:"150px"}}><FaTicketAlt/>&nbsp;search ticket</Button>
                    </form>
                          
                  </div>
                        
                   
              </div>
            </div>
         </div>
         <div className='abcHome-section pt-3'>
             <div className='container'>
             <h3 className='text-center'>Our Bus Routes</h3>
              <div className='busRoute'>
                   <div className='busRoute1'>
                   <div className='section text-white text-center'>Daresalaam Route</div>
                        <p className='pt-2'>Dar-es-Salaam to Dodoma</p>
                   </div>
                   <div className='busRoute2'>
                   <div className='section text-white text-center'>Daresalaam Route</div>
                       <p className='pt-2'>Dar-es-Salaam to Morogoro</p>
                  </div>
                  <div className='busRoute3'>
                  <div className='section text-white text-center'>Daresalaam Route</div>
                       <p className='pt-2'>Dar-es-Salaam to Chalinze</p>
                  </div>
              </div>
              <div className='busRoute'>
                   <div className='busRoute1'>
                   <div className='section text-white text-center'>Morogoro Route</div>
                        <p className='pt-2'>Morogoro to Dodoma</p>
                   </div>
                   <div className='busRoute2'>
                   <div className='section text-white text-center'>Morogoro Route</div>
                       <p className='pt-2'>Morogoro to Chalinze</p>
                  </div>
                  <div className='busRoute3'>
                      <div className='section text-white text-center'>Morogoro Route</div>
                       <p className='pt-2'>Morogoro to Dar-es-Salaam</p> 
                  </div>
              </div>

             <div className='busRoute'>
                   <div className='busRoute1'>
                   <div className='section text-white text-center'>Chalinze Route</div>
                        <p className='pt-2'>Chalinze to Dodoma</p>
                   </div>
                   <div className='busRoute2'>
                   <div className='section text-white text-center'>Chalinze Route</div>
                       <p className='pt-2'>Chalinze to Morogoro</p>
                  </div>
                  <div className='busRoute3'>
                  <div className='section text-white text-center'>Chalinze Route</div>
                       <p className='pt-2'>Chalinze to Dar-es-Salaam</p>
                  </div>
              </div> 

              <div className='busRoute'>
                   <div className='busRoute1'>
                   <div className='section text-white text-center'>Dodoma Route</div>
                        <p className='pt-2'>Dodoma to Morogoro</p>
                   </div>
                   <div className='busRoute2'>
                   <div className='section text-white text-center'>Dodoma Route</div>
                       <p className='pt-2'>Dodoma to Chalinze</p>
                  </div>
                  <div className='busRoute3'>
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


// onChange={handleChange}

// onClick={()=>navigate('/homeDomDar')} 