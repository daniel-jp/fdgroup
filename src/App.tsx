import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {Box} from '@chakra-ui/react';
import React, {Suspense, lazy, useEffect, useRef, useState} from 'react';
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
      await new Promise(resolve => setTimeout(resolve, 2000));
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
                    <Route exact path="/" element={<Home />} />
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
