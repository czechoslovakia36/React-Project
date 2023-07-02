import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reducer,{initialState} from './reducer';
import { StateProvider } from './StateProvider';


import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';



// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:{<><Header/><Home/></>}
  
  
//   }
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  


<StateProvider initialState={initialState} reducer={reducer}>

<BrowserRouter>
<App/>
</BrowserRouter>
</StateProvider>


 
);

