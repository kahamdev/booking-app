import React,{useState,useEffect} from 'react'
import { Button } from 'react-bootstrap'
import  Header  from '../../../../../content navbar/header';
import  Footer from '../../../../../content navbar/footer';
import { useNavigate } from 'react-router-dom';


const HomeDomDar = () => {
    const navigate=useNavigate()
  const [detail,setDetail]=useState([])
  async function getAbcRouteDetail(){
  try {
    const response = await fetch('http://127.0.0.1:8000/api/my-api/abc-route-detail/',{
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    });
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json();
    setDetail(result)
    console.log(result)
  } 
  catch (err) { console.log(err);}
}

  useEffect( ()=> {getAbcRouteDetail()},[])

  return (
    <>
        <nav>
           <Header/>  
           </nav>
      <div className='container'>
          <div className='header mt-5'>
                <h2 style={{color:"#115173",padding:"10px",backgroundColor:"#cccc"}}>Selected Route:Dar es Salaam - Dodoma</h2>
          </div>

          <div className='main'>
               <table className='table table-bordered table-striped'>
                   <thead>
                       <tr>
                          <th>Bus Type</th>
                          <th>Bus Class</th>
                          <th>Arrival Time</th>
                          <th>Departure Time</th>
                          <th>Price Amount</th>
                          <th>View Action</th>
                       </tr>
                   </thead>
                   <tbody>
                       {detail.map( m => {
                          return (
                            <tr key={m.id}>
                                <td>{m.busType}</td>
                                <td>{m.busClass}</td>
                                <td>{m.arrival}</td>
                                <td>{m.departure}</td>
                                <td>{m.price}</td>
                                <td><Button onClick={()=>navigate('/abcLuxury')}>Select Seat</Button></td>
                            </tr>
                          )
                       })}
                   </tbody>
               </table> 
          </div>

          <div className='footer'>
           
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
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
      <footer>
             <Footer/>
             </footer>
            
    </>
  )
}

export default HomeDomDar