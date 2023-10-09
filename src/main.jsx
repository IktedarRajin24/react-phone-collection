/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home.jsx';
import About from './component/About/About.jsx';
import Phones from './component/Phones/Phones.jsx';
import Samsung from './component/Samsung/Samsung.jsx';
import Apple from './component/Apple/Apple.jsx';
import Contact from './component/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element : <Home></Home>,
    children:
    [
      {
        path : 'about',
        element: <About></About>
      },
      {
        path : 'phones',
        element: <Phones></Phones>,
        // loader: ()=>fetch('phones.json'),
        children:[
          {
            path: 'samsung',
            element: <Samsung></Samsung>,
            loader: ()=> fetch('https://openapi.programming-hero.com/api/phones?search=samsung')
          },
          {
            path: 'apple',
            element: <Apple></Apple>,
            loader: ()=> fetch('https://openapi.programming-hero.com/api/phones?search=iphonen')
          }
        ]
      },
      {
        path : 'contact',
        element: <Contact></Contact>
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
