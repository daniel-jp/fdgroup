import './i18n';

import { ChakraProvider } from '@chakra-ui/react';
import {Spinner, useTimeout} from '@chakra-ui/react';
import * as React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
); 
