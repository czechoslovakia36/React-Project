
import './App.css';

import Header from './Header';

import Home from './Home';

import Checkout from './Checkout';


import { Route,Routes,Router } from 'react-router';

function App() {




  return (
   
    
  
 
  <Routes>
<Route path="/" element={<><Header/><Home/></>}/>
 <Route path="checkout" element={<><Header/><Checkout/></>}/>

</Routes>


  
  
  )
}

export default App;
