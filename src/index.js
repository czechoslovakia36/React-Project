import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Checkout from './Checkout';
import Home from './Home';
import Header from './Header';


// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:{<><Header/><Home/></>}
  
  
//   }
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


{/* <RouterProvider  router={router} /> */}

<BrowserRouter>
<App/>
</BrowserRouter>

 
  </React.StrictMode>
);

