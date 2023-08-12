import React from 'react'
import  Header  from '../../../../../content navbar/header';
import  Footer from '../../../../../content navbar/footer';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
    <>
        <nav>
           <Header/>  
           </nav>
      <div className='container'>
          <div className='header mt-5'>
                <h2 style={{color:"#115173",padding:"10px",backgroundColor:"#cccc"}}>The route is not found , try to check other &ensp;<Link style={{color:'black',textDecoration:'none'}} to='/abcHome'>routes</Link></h2>
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
                        <tr>
                            <td>No bus type</td>
                            <td>Not yet</td>
                            <td>Null</td>
                            <td>Null</td>
                            <td>Null</td>
                            <td>No action</td>
                        </tr>
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
             <br></br>
             <br></br>
      <footer>
             <Footer/>
      </footer>
            
    </>
  )
}

export default NotFound