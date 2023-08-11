import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {Box, color} from '@chakra-ui/react';
import React, {lazy, Suspense, useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import GridLoader from 'react-spinners/GridLoader';

//import {createBrowserRouter, createRoutesFromElements, Route, Routes} from 'react-router-dom';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const wait = (time: number) => new Promise(resolve => setTimeout(resolve, time));
  useEffect(() => {
    // Aguarde 100ms antes de definir isLoading como false após o primeiro carregamento
    wait(1000).then(() => setIsLoading(false));
  }, []);
  const PAGES = {
    HOME: lazy(() => {

      return wait(1000).then(() => import('./pages/home')).finally(() => setIsLoading(false));
    }),
    ABOUT: lazy(() => {

      return wait(1000).then(() => import('./pages/About')).finally(() => setIsLoading(false));
    }),
    PRODUCT: lazy(() => {

      return wait(1000).then(() => import('./pages/Products')).finally(() => setIsLoading(false));
    }),
    DEVICE: lazy(() => {

      return wait(1000).then(() => import('./pages/Devices')).finally(() => setIsLoading(false));
    }),
    SERVER: lazy(() => {

      return wait(1000).then(() => import('./pages/Server')).finally(() => setIsLoading(false));
    }),
    PART: lazy(() => {

      return wait(1000).then(() => import('./pages/Parts')).finally(() => setIsLoading(false));
    }),
    AUDIV: lazy(() => {

      return wait(1000).then(() => import('./pages/Audiovisuel')).finally(() => setIsLoading(false));
    }),
    OTHER: lazy(() => {
      return wait(1000).then(() => import('./pages/Others')).finally(() => setIsLoading(false));
    }),
    SERVICE: lazy(() => {

      return wait(1000).then(() => import('./pages/Services')).finally(() => setIsLoading(false));
    }),
    CONTACT: lazy(() => {
      return wait(1000).then(() => import('./pages/Contact')).finally(() => setIsLoading(false));
    }),

  };


  return (

    <div className='App'>
      <Box bg={"gray.800"}>
        <Suspense fallback={<div style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', fontSize: '24px'}}>Loading...</div>}>
          {isLoading ? (
            <Box display="flex"
              justifyContent="center"
              alignItems="center"
              height="100vh">

              <GridLoader color="#dd1a78"
                loading={isLoading} size={12}
                aria-label="Loading Spinner"
                data-testid="loader" />
            </Box>
          ) : (

            <Box>
              <Router>
                <Routes>
                  <Route path="/" element={<PAGES.HOME />} />
                  <Route path="/about" element={<PAGES.ABOUT />} />
                  <Route path="/products" element={<PAGES.PRODUCT />} />
                  <Route path="/products/server" element={<PAGES.SERVER />} />
                  <Route path="/products/devices" element={<PAGES.DEVICE />} />
                  <Route path="/products/parts" element={<PAGES.PART />} />
                  <Route path="/products/audiovisuel" element={<PAGES.AUDIV />} />
                  <Route path="/products/other" element={<PAGES.PART />} />
                  <Route path="/services" element={<PAGES.SERVICE />} />
                  <Route path="/contact" element={<PAGES.CONTACT />} />
                  <Route path="*" element={<p> NOT FOUND</p>}></Route>
                </Routes>
              </Router>
            </Box>
          )}
        </Suspense>
      </Box>
    </div>

  );
}
export default App;





/*

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {Box} from '@chakra-ui/react';
import React, {lazy, Suspense, useEffect, useRef, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GridLoader from 'react-spinners/GridLoader';

import About from './pages/About';
import Audiovisuel from './pages/Audiovisuel';
import Contact from './pages/Contact';
import Devices from './pages/Devices';
import Home from './pages/home';
import Others from './pages/Others';
import Parts from './pages/Parts';
import Products from './pages/Products';
import Server from './pages/Server';
import Services from './pages/Services';



function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate fetching data from an API with a delay of 3 seconds
      await new Promise(resolve => setTimeout(resolve, 3200));
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className='App'>

   <Box bg={"gray.800"}>
      {isLoading ? (
        <Box  display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh">

        <GridLoader color="#dd1a78" 
              loading={isLoading} size={12}
              aria-label="Loading Spinner"
              data-testid="loader" />
            </Box>
          ) : (
      
        <Box>
                <Router>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/server" element={<Server />} />
                    <Route path="/products/devices" element={<Devices />} />
                    <Route path="/products/parts" element={<Parts />} />
                    <Route path="/products/audiovisuel" element={<Audiovisuel />} />
                    <Route path="/products/other" element={<Others />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </Router>
       
        </Box>
      )}
        </Box>
      </div>
    </>

  );
}

export default App;
*/


