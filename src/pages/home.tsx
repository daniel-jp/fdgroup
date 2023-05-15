import '@fontsource/inter/600.css';

import { Box, Flex } from '@chakra-ui/react';
import {useRef, useState} from 'react';

import BackToTopButton from '../components/BackToTopButton/BackToTopButton';
import Footer from '../components/Footer/Footer';
import ProdCard from '../components/Home/FdCard';
import FdCarousel from '../components/Home/FdCarousel';
import Marque from '../components/Home/FdMarque';
import Suport from '../components/Home/FdSuport';
import Testimo from '../components/Home/FdTestimo';
import SwiperCard from '../components/Home/SwiperCard';
import NavBar from '../components/NavBar/NavBar';
import WhatsAppButton from '../components/WhatsApp/WhatsAppButton';
import SimpleLayout from '../layout/SimpleLayout';


export default function Home() {

  const topRef = useRef<HTMLDivElement>(null);
  if(topRef.current) {
    topRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
  return (
    <Box as="main" margin="0" padding="0" bg={"gray.100"} overflowY={"hidden"} overflowX={"hidden"} >
      <div ref={topRef} />
      <NavBar />
      <FdCarousel />
      <SimpleLayout>
      <Flex display={'block'} fontFamily={"'Inter', sans-serif"} color={"gray.600"} overflowY={"hidden"} mb={20} overflowX={"hidden"}>
        <Box mt={4}><Suport /></Box>
        <Box mt={4}><ProdCard /></Box>
        <Box mt={4}><SwiperCard /></Box>
        <Box mt={4}><Testimo /></Box>
        </Flex>
      </SimpleLayout>
      <Marque />
      <WhatsAppButton/>
      <BackToTopButton />
      <Footer />

    </Box> 
  );
}
