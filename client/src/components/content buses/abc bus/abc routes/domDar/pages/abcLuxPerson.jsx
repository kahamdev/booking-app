import React,{useState,useEffect} from 'react'
import  Header  from '../../../../../content navbar/header';
import  Footer from '../../../../../content navbar/footer';
import '../styles/abcLuxPerson.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Payment from '../images/payment.jpg';
import Ticket from '../images/ticket2.jpg';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import {RiSendPlaneFill} from 'react-icons/ri'
import { toast } from 'react-toastify';
import {SEND_API_URL,GET_API_URL} from '../../../../../constants/API_URL'


const AbcLuxPerson = () => {

  const navigate=useNavigate()
  const [mydata,setMydata]=useState([])

  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const data={ firstname:" ", lastname:" ",phone:" ",email:" " ,gender:""}
  const [item,setItem]=useState(data)

  const handleChange = (e)=>{
       const {name,value}=e.target
       setItem(prevInfo=>({...prevInfo,[name]:value}))
  }

  const sendItem = async() =>{
       await fetch(SEND_API_URL,{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(item)
       })
  }

  const getItem = async() =>{
    try{
      const response=await fetch(GET_API_URL,{
         method:'GET',
         headers:{
              'Content-Type':'application/json'
         }
      })
      if(!response.status===200){
          console.log('Invalid bad request')
    }
    const result=await response.json()
    return setMydata(result)
  }
  catch(err){
    console.log(err)
  }
  }
  useEffect(() => { getItem() }, [])

  
  const handleSubmit=async(e)=>{
    e.preventDefault()
    if(item.firstname===''|| item.lastname==='' || item.phone==='' || item.email==='' || item.gender===''){
      console.log('Field must not be empty')
      toast.error('Item fields must not be empty',{position:toast.POSITION.TOP_RIGHT,className:'mytoast'})
    }
    else{
       if(sendItem()){
        toast.success('details are recorded successful',{position:toast.POSITION.TOP_RIGHT,className:'mytoast'})
        setItem(
          {
            firstname:'',
            lastname:'',
            phone:'',
            email:'',
            gender:''
          }
        )
       }
    }
   
  }

  const print_me=()=>{
    const f=document.getElementById('print')
    f.contentWindow.focus()
    f.contentWindow.print()
  }
  
 const print = () => {
      if(window.alert('Do you want to print now?')){
         print_me()
      }
 }




  
  return (
    <>    
          <nav>
            <Header/>
          </nav>
              <div className='person-form container mt-5'> 
              <div className='person-form-right'>
              <h5 className='mb-3 mt-3 text-light'>Personal Information Details</h5>
     <Form onSubmit={handleSubmit} >
   
      <Form.Group className="mb-3" controlId="formGridFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="" name="firstname" placeholder="Enter your first name"  onChange={handleChange} value={item.firstname} autoFocus/>
      </Form.Group>

       
     <Form.Group className="mb-3" controlId="formGridLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="" name="lastname" placeholder="Enter your last name" onChange={handleChange}  value={item.lastname} />
      </Form.Group>
    

      <Form.Group className="mb-3" controlId="formGridPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number" name="phone"  placeholder="+255710457396" onChange={handleChange} value={item.phone} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control name="email" placeholder="atme@gmail.com" onChange={handleChange} value={item.email}/>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridRegion">
          <Form.Label>Gender</Form.Label>
          <Form.Select defaultValue="Choose..." name="gender" onChange={handleChange} value={item.gender}>
            <option>Select your gender</option>
            <option option='male'>Male</option>
            <option option='female'>Female</option>
            <option option='other'>Other</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Button className='mt-3' variant="primary" type="submit" style={{backgroundColor:'green',width:'100%'}}>
        Send now &ensp;<RiSendPlaneFill style={{color:'#ffff',fontSize:'36px'}}/>
      </Button>
    </Form>
        </div>
        <div className='person-form-left'>
             <div className='right-div1'>
             <h5 className=' text-light text-center p-2' style={{backgroundColor:'#115173'}}>Review your ticket</h5>
              <img className='mb-3' src={Ticket} alt='ticket' width='100%' height='200px'/>
             <Button className='mb-3' variant="primary" onClick={handleShow}>
             Preview Ticket
            </Button>
             </div>
    
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{color:'#115173'}}
      >
        <Modal.Header closeButton>
          <Modal.Title>My Bus Ticket</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           {mydata.map(md=>{
            return (
              <div key={md.id}>
                    <h5>Full Name:&nbsp;{md.firstname+" "+md.lastname}</h5>
                   <h5>Mobile Phone:&nbsp;{md.phone}</h5>
                   <h5>Email Address:&nbsp;{md.email}</h5>

              </div>
            )
           })}
           {/* <h5>Due Date:&nbsp;None<sup>th</sup>sep 2022</h5>
           <h5>Route pathway:&nbsp;None to None</h5>
           <h5>Seat Order:&nbsp;Null</h5>
           <h5>Bus Type:&nbsp;Null</h5>
           <h5>Duration Time:&nbsp; Null</h5>
           <h5>Price Amount:&nbsp;Null</h5> */}
           {/* react-to-print library */}
           {/* also create printPage.jsx  */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={print} >Print now</Button>
        </Modal.Footer>
      </Modal>

     
            <div className='right-div2'>
            <h5 className='text-light text-center p-2' style={{backgroundColor:'#115173'}}>Review your payment</h5>
             <img className='mb-3' src={Payment} alt='payment' width='100%' height='200px'/>
             <Button onClick={()=>{navigate('/abcLuxPayment')}}>Make Payment</Button>
            </div>
        </div>
    
         </div>
         <br></br>
         <br></br>
          <footer>
              <Footer/>
          </footer>
    </>

  )
}

export default AbcLuxPerson