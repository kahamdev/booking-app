import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'
import Home from './components/content pages/home';
import {HashRouter as Router,Routes,Route} from 'react-router-dom';

import Buses from './components/content pages/buses'
import Flights from './components/content pages/flights'
import Trains from './components/content pages/trains'
import Ships from './components/content pages/ships'
import Hotels from './components/content pages/hotels'
import Helps from './components/content pages/helper'
import Error from './components/content pages/error'
// import Login from './components/content pages/login'
import Logout from './components/content pages/logout'
import Register from './components/content pages/register'
import Admin from './components/content pages/admin'
import Dashboard from './components/content pages/dashboard'
import DarDom from './components/content regions/dardom/dardom';
import DarDom2 from './components/content regions/dardom/dardom2';
import DarAru from './components/content regions/dararu/dararu';
import DarTang from './components/content regions/dartang/dartang';
import AbcHome from './components/content buses/abc bus/abc pages/abcHome';
import ShabibyHome from './components/content buses/shabiby bus/shabiby pages/shabibyHome'
import HomeDomDar from './components/content buses/abc bus/abc routes/domDar/pages/homeDomDar'
import AbcLuxury from './components/content buses/abc bus/abc routes/domDar/pages/abcLuxury'
import AbcLuxPerson from './components/content buses/abc bus/abc routes/domDar/pages/abcLuxPerson'
import AbcLuxPayment from './components/content buses/abc bus/abc routes/domDar/pages/abcLuxPayment'
import AbcRouteNotFound from './components/content buses/abc bus/abc routes/domDar/pages/notFound'
function App() {
 

  return (
    <> 
    <ToastContainer position='top-center' />
    <Router>
     
        <Routes>
             <Route path='' element={<Home/>}/>
             {/* <Route path='/login' element={<Login/>}/> */}
             <Route path='/logout' element={<Logout/>}/>
             <Route path='/register' element={<Register/>}/>
             <Route path='/admin' element={<Admin/>}/>
             <Route path='/dashboard' element={<Dashboard/>}/>
             <Route path='/buses' element={<Buses/>}/>
             <Route path='/flights' element={<Flights/>}/>
             <Route path='/trains' element={<Trains/>}/>
             <Route path='/ships' element={<Ships/>}/>
             <Route path='/hotels' element={<Hotels/>}/>
             <Route path='/helper' element={<Helps/>}/>
             <Route path='/dardom' element={<DarDom/>}/>
             <Route path='/dardom2' element={<DarDom2/>}/>
             <Route path='/dararu' element={<DarAru/>}/>
             <Route path='/dartang' element={<DarTang/>}/>
             <Route path='/abcHome' element={<AbcHome/>}/>
             <Route path='/shabibyHome' element={<ShabibyHome/>}/>
             <Route path='/homeDomDar' element={<HomeDomDar/>}/>
             <Route path='/abcLuxury' element={<AbcLuxury/>} />
             <Route path='/abcLuxPerson' element={<AbcLuxPerson/>} />
             <Route path='/abcLuxPayment' element={<AbcLuxPayment/>} />
             <Route path='/abcroutenotfound' element={<AbcRouteNotFound />}/>
             <Route path='*' element={<Error/>}/>
        </Routes>
  
    </Router>
    
    </>
  );
}

export default App;
