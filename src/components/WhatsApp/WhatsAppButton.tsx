import { CheckCircleIcon } from '@chakra-ui/icons';
import { Box, Button, IconButton } from '@chakra-ui/react';
import { WhatsappLogo } from 'phosphor-react';

const WhatsAppButton = () => {
  const phoneNumber = "+212657226746"; // Replace with your phone number
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <>
      
    <IconButton
    as="a" 
    href={whatsappLink}
    target="_blank" w={50}  h={50}
    rel="noopener noreferrer"
    colorScheme="green" 
    position="fixed"
    bottom="4" mb={20}
    right="4"
    borderRadius="50%"
    transition="all 0.2s ease-in-out"
    _hover={{ transform: "scale(1.2)" }}
    _active={{ transform: "scale(0.9)" }}
    icon={<WhatsappLogo size={32}/>}
  />
   
    </>





  );



};

export default WhatsAppButton;
