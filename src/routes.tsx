import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {Box, color, Spinner} from '@chakra-ui/react';
import React, {lazy, Suspense, useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import GridLoader from 'react-spinners/GridLoader';

export default function routes() {

  const [isLoading, setIsLoading] = useState(true);

  const wait = (time: number) => new Promise(resolve => setTimeout(resolve, time));
  useEffect(() => {
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
        <Suspense fallback={<div style={{padding: 4, backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', fontSize: '16px'}}>
          <p> Loading...</p> </div>}>
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
                    <Route path="/products" element={<PAGES.PRODUCT />} >
                      <Route path="server" element={<PAGES.SERVER />} />
                      <Route path="devices" element={<PAGES.DEVICE />} />
                      <Route path="parts" element={<PAGES.PART />} />
                      <Route path="audiovisuel" element={<PAGES.AUDIV />} />
                      <Route path="other" element={<PAGES.PART />} />
                    </Route>

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

  )
}
