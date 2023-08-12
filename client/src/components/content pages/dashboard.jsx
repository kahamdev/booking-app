import React,{useEffect,useState}  from 'react'
import axios from 'axios'
import  Header  from '../content navbar/header';
import  Footer from '../content navbar/footer';

axios.defaults.withCredentials=true
let myRender=true

const Dashboard = () => {

  const [user,setUser]= useState()
  
  const refreshedToken=async()=>{
      const getResp=await axios
      .get("http://localhost:8000/api/data/refresh",{
        withCredentials:true
      })
      .catch(err=>console.log(err))

      const data=getResp.data
      return data
  }

  const sendData=async()=>{
        const getResp=await axios
        .get('http://localhost:8000/api/data/dashboard',{
          withCredentials:true
        })
        .catch(err=>console.log(err))
        const data=getResp.data
        return data
  }
  
  useEffect(()=>{
    if(myRender){
      myRender=false
      sendData().then((data)=>setUser(data.user))
    }
    let interval=setInterval(()=>{
      refreshedToken().then(data=>setUser(data.username))
    },1000*29)
    return ()=>clearInterval(interval)

},[])
  return (
    <> 
       <nav>
           <Header/>
       </nav>
       <div className='dashboard'>
       {user && <h1>{user.username}</h1>}
       </div>
       <footer>
        <Footer/>
      </footer>
       
    </>
  )
}

export default Dashboard