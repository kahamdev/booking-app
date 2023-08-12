import React from 'react'
import  Header  from '../content navbar/header';
import  Footer from '../content navbar/footer';
import '../content styles/helper.css'
const helper = () => {
  return (
    <>
     <nav>
    <Header/>  
    </nav>
     <div className='container'>
          <div className='helpContainer'>
               <div className='leftHelp'>
                    <h1><u>Instruction steps for booking sevices.</u></h1>
                    <div className='busInstruction'>
                     <h3>For bus booking services.</h3> 
                     <ol>
                        <li>Select route by choose source , destination and date.</li>
                        <li>Choose bus company category ie shabiby, kimbinyiko....</li>
                        <li>Select seat for choosen bus company</li>
                        <li>Prepare to make payment for your ticket</li>
                        <li>Print your ticket after complete,thanks</li>
                     </ol>
                    </div>
                    <div className='flightInstruction'>
                     <h3>For flight booking services.</h3> 
                     <ol>
                        <li>Select route by choose source , destination and date.</li>
                        <li>Choose bus company category ie shabiby, kimbinyiko....</li>
                        <li>Select seat for choosen bus company</li>
                        <li>Prepare to make payment for your ticket</li>
                        <li>Print your ticket after complete,thanks</li>
                     </ol>
                    </div>

                    <div className='trainInstruction'>
                     <h3>For train booking services.</h3> 
                     <ol>
                        <li>Select route by choose source , destination and date.</li>
                        <li>Choose bus company category ie shabiby, kimbinyiko....</li>
                        <li>Select seat for choosen bus company</li>
                        <li>Prepare to make payment for your ticket</li>
                        <li>Print your ticket after complete,thanks</li>
                     </ol>
                    </div>

                    <div className='shipInstruction'>
                     <h3>For ship booking services.</h3> 
                     <ol>
                        <li>Select route by choose source , destination and date.</li>
                        <li>Choose bus company category ie shabiby, kimbinyiko....</li>
                        <li>Select seat for choosen bus company</li>
                        <li>Prepare to make payment for your ticket</li>
                        <li>Print your ticket after complete,thanks</li>
                     </ol>
                    </div>

                    <div className='hotelInstruction'>
                     <h3>For hotel booking services.</h3> 
                     <ol>
                        <li>Select route by choose source , destination and date.</li>
                        <li>Choose bus company category ie shabiby, kimbinyiko....</li>
                        <li>Select seat for choosen bus company</li>
                        <li>Prepare to make payment for your ticket</li>
                        <li>Print your ticket after complete,thanks</li>
                     </ol>
                    </div>
               </div>

               <div className='rightHelp pt-5'>
                     
                          <h3><u>Ask Help Desk</u></h3>
                         <p>Mobile 1:+255678359402</p>
                         <p>Email 1:help@gmail.com</p>
                         <p>Mobile 2:+255754356503</p>
                         <p>Email 2:help@yahoo.com</p>
                         <p>Mobile 3:+255624356509</p>
                         <p>Email 3:help@twitter.com</p>
                         <p>Address: P.O BOX 115173</p>
                   
               </div>
          </div>
     </div>
     <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default helper