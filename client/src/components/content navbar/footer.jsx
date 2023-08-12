import React from 'react'


const Footer = () => {
  
const footer={
    backgroundColor:'#115173',
    padding:'10px',
    borderTop:'1px solid #cccc'
}
  return (
    <>
       <div style={footer}>
           <p className='text-white text-center'>All &copy; rights are reserved in this system.</p>
       </div>
    </>
  )
}
export default Footer;
