import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../styles/abcLuxPayment.css'
const AbcLuxPayment = () => {
  return (
    <>
        <div className='container'>
             <div className='payForm'>
                  <h5 className='text-center mb-3'>Payment Personal Details</h5>
                  <hr></hr>
                  <div className='button-group mb-3'>
                       <Button style={{width:'45%'}} variant='info' size='lg'>Paypal</Button>
                         &nbsp; or &nbsp;
                       <Button style={{width:'45%'}} variant='danger' size='lg'>Selcom</Button>
                  </div>
                  <Form>
                     <Form.Group className='mb-3' controlId='formCardName'>
                          <Form.Label>Card Holder Name</Form.Label>
                          <Form.Control type='' placeholder='KAHAM MLAU' autoFocus></Form.Control>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formCardNumber'>
                          <Form.Label>Card Holder Number</Form.Label>
                          <Form.Control type='number' placeholder='1536 8694 2056 1836'></Form.Control>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formCardCode'>
                          <Form.Label>Security Code Number</Form.Label>
                          <Form.Control type='number' placeholder='659'></Form.Control>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formCardDate'>
                          <Form.Label>Expiration Date</Form.Label>
                          <Form.Control type='number' placeholder='01-12-2023'></Form.Control>
                    </Form.Group>
                    <Button className='w-100' variant='primary' size='lg'>Pay Now</Button>
                  </Form>
             </div>  
        </div>
    </>
  )
}

export default AbcLuxPayment