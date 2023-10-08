/*
import Server from '../pages/Server';

import Server from '../pages/Server';

import Server from './pages/Server';

import Server from '../pages/Server';


import FdSuport from './components/Home/FdSuport';
import About from './pages/About';
import Audiovisuel from './pages/Audiovisuel';
import Contact from './pages/Contact';
import Devices from './pages/Devices';
import Error from './pages/Error/error_404';
import Home from './pages/home';
import Others from './pages/Others';
import Parts from './pages/Parts';
import Products from './pages/Products';
import Server from './pages/Server';
import Services from './pages/Services';




export const routes = [
  {

    path: "/",

    element: <Home />,
    errorElement: <Error />,


  },
  {

    path: "/about",
    element: <About />,
    errorElement: <Error />,
  },

  {

    path: "/products",
    element: <Products />,
    errorElement: <Error />,
    children: [



    ]

  }, {
    path: "/services",
    element: <Services />,
    errorElement: <Error />,
  },

  {
    path: "/contact",
    element: <Contact/>,
    errorElement: <Error />,
  },


  {
    path: "/products/servers",
    element: <Server />,
  },

  {
    path: "/products/devices",
    element: <Devices />
  },

  {
    path: "/products/parts",
    element: <Parts />,
  },
  {
    path: "/products/audiovisuel",
    element: <Audiovisuel />,
  },

  {
    path: "/products/other",
    element: <Others />,
  },

];

*/


export const routes = [

  {
    id: 'home_id',
    path: '/'
  },
  {
    id: 'about_id',
    path: '/about'
  },

  {
    id: 'products_id',
    path: '/products',

    submenu: [
      {path: '/products/server'},
      {path: '/products/devices'},
      {path: '/products/parts'},
      {path: '/products/audiovisuel'},
      {path: '/products/other'},
    ],
  },

  {
    id: 'services_id',
    path: '/services'
  },
  {
    id: 'contact_id',
    path: '/contact'
  }


]