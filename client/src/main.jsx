import React from 'react';

import ReactDOM from 'react-dom/client';

/*----------------------------------------------------------------------------*/

import 'bootstrap/dist/css/bootstrap.min.css';

import "./styles/style.scss" // Import stylů pro celou aplikaci

/*----------------------------------------------------------------------------*/

import Home from './routes/Home';

import Malls from './routes/ShoppingMalls';

import About from './routes/About';

import MallDetail from './routes/ShoppingMallDetail';

/*----------------------------------------------------------------------------*/

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element:  <Home />,
  },
  {
    path: "/shoppingMalls",
    element:  <Malls />,
  },
  {
    path: "/shoppingMalls/:id",
    element: <MallDetail />,
  },
  {
    path: "/about",
    element:  <About />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
