import { IconButton, useColorModeValue } from '@chakra-ui/react';
import { UploadSimple } from 'phosphor-react';
import React from 'react';


const BackToTopButton: React.FC = () => {
  
  
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <IconButton
      aria-label="Back to Top" 
      icon={<UploadSimple size={32} />}
      onClick={handleClick}
      position="fixed"
      bottom="4"
      right="4"
      borderRadius="50%"
      bg={"red.300"}
      color={"gray.800"}
      size="lg"
   
      transition="all 0.2s ease-in-out"
      _hover={{ transform: "scale(1.2)" }}
      _active={{ transform: "scale(0.9)" }}
    />
  );
};

export default BackToTopButton;
