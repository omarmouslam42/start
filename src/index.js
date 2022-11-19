import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './Nav';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Components/home/home.css'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import About from './Components/about/About';
import Home from './Components/home/Home';
// import Parent from './Components/parent/Parent';
import Portfolio from './Components/portfolio/Portfolio';
import Contact from './Components/contact/Contact';



const router = createBrowserRouter([
  {path: "", element: <Nav />,children :[
  {path: "", element: <Home />},
  {path: "home", element: <Home />},
  {path: "portfolio", element: <Portfolio />},
  {path: "about", element: <About />},
  {path: "contact", element: <Contact />}
  ]},
  {path: "*", element: <h2>4 0 4</h2>},
  
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
)


reportWebVitals();
