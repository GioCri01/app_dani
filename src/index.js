import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { HomePage } from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DetailProdacts from './components/DetailProdacts/DetailProdacts';
import { ParallaxProvider } from 'react-scroll-parallax';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <HomePage/>,
        
      },
      {
        path: "/detail/:id",
        element: <DetailProdacts/>,
        
      },
    ],
  
  },
  // {
  //   path: "/detail",
  //   element: <DetailProdacts/>,
  // },
]);

root.render(
  <React.StrictMode>  
      <RouterProvider router={router} /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
