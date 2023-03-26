import '@fontsource/inter/600.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/raleway/700.css';
import '@fontsource/righteous/400.css';
import '@fontsource/roboto/700.css';
import '@fontsource/rubik-moonrocks/400.css';

import { EmailIcon, InfoIcon, LinkIcon, PhoneIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Text,
  Textarea,
  useToast,
  VStack,
} from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import { EnvelopeSimple, Globe, LinkedinLogo, MapPinLine, Phone, TwitterLogo } from 'phosphor-react';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal';

import BackToTopButton from '../components/BackToTopButton/BackToTopButton';
import Footer from '../components/Footer/Footer';
import WhatsAppButton from '../components/WhatsApp/WhatsAppButton';
import Layout from '../layout/Layout';
import SimpleLayout from '../layout/SimpleLayout';

const sr = ScrollReveal();


interface FormState {
  from_name: string,
  to_name: string,
  message: string
}

// type FormState = {
//   from_name: string,
//   to_name: string,
//   message: string

// }

const Contact: React.FC = () => {

  const {t} = useTranslation();
  useEffect(() => {
            sr.reveal('.contactf', {
                rotate: {x: 0, y: 20, z: 0},
                duration: 800,
            },);
        }, []);
 // const form = useRef();

  const [formState, setFormState] = useState<FormState>({

    from_name: "",
    to_name: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormState>>({
    from_name: "",
    to_name: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormState((prevState) => ({...prevState, [name]: value}));
  };

  const toast = useToast();


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm(formState);
    if(Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }


    try {
      const emailResult = await emailjs.sendForm(
        "service_7l5qci6", "template_ybyzxm7",
        e.currentTarget as HTMLFormElement,
        "b8pJCYyLwxo1IYfh-"
      );
      if(emailResult.text === "OK") {
        toast({
          title: "Message sent",
          status: "success",
          description: 'Your message has been sent successfully.',
          duration: 5000,
          position:'top-right',
          isClosable: true,
        });
        setFormState({
          from_name: "",
          to_name: "",
          message: "",
        });
        setErrors({ 
          from_name: "",
          to_name: "",
          message: "",
        });
      } else {
        throw new Error("Email send failed");
      }

    } catch(error) {
      toast({
        title: "Error sending message",
        description: "Please try again later",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }

  };


  const validateForm = (formState: FormState): Partial<FormState> => {
    const errors: Partial<FormState> = {};

    if(!formState.from_name) {
      errors.from_name = "Please enter your name";
    }

    if(!formState.to_name) {
      errors.to_name = "Please enter the recipient's name";
    }
    if(!formState.to_name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.to_name)) {
      errors.to_name = "Please enter a valid email address";
    }
    if(!formState.message) {
      errors.message = "Please enter a message";
    }
    return errors
  };


    return (
 <Box bg={"white"} pt={10} mt={-10}>
<Layout>

       
<Stack  minH={'100vh'} direction={{ base: 'column', md: 'row' }}>           
  <Flex px={2} flex={1} align={'center'} justify={'center'}>
        
        <Box  alignItems="flex-start"> 
          <VStack alignItems="center" maxW={"full"} bg={'red.800'} > 
            
               <Text display={'flex'}  fontWeight={500} fontSize={'md'} textAlign={"center"} p={2} px={20}  color={'gray.200'}><Phone size={22} /> {t('ContactFormH')}</Text>
            </VStack>
            <Text pt={2} fontSize={'sm'} textAlign={'start'}>{t('ContactText0')}</Text> 
    
                <VStack mt={10} spacing={3} alignItems="flex-start">
                  <Box  pt={2}>
                      <Text fontSize={ 20 } mb={1} color={ "gray.800" }>
                      Angola
                      </Text>
                      <Text fontSize={'sm'}>
                        Distrito Ingombota Rua Bartolomeu Dias Zona 4 Casa N 1 Luanda / Angola  
                      </Text>
                      <Text color={"blue.700"} fontSize={'sm'}>
                      <Link> +244 931 901 243</Link>
                      </Text>
                      <Text color={"blue.700"} >
                        info@fdgroup.company
                      </Text>
                      
                    </Box>
                    <Box>
                    <Text fontSize={ 20 } color={ "gray.800" }>
                      Morocco
                    </Text>
                      <Text fontSize={'sm'}>
                         10 rue liberté Etg 3 Apt 5 CA Al Hiba, Casablanca
                      </Text>
                      <Text fontSize={'sm'}>
                     <Link color={"blue.700"} >+212 772 276 887</Link> 

                      </Text>
                      <Text color={"blue.700"} >
                        info@fdgroup.company
                      </Text>
                      
                    </Box>
                  </VStack> 

                <HStack  pt={4} >
                    <Link href={'https://www.linkedin.com/company/fd-group-sarl/'}   target="_blank"><IconButton aria-label="facebook" variant="ghost" size="lg" isRound={true}
                      _hover={{color:"blue.400",
                    bg: 'gray.800'}} icon={<LinkedinLogo size="28px" />} /></Link>
                  
                    <Link href={'https://twitter.com/FDGROUP2'} target="_blank"> <IconButton aria-label="github" variant="ghost" size="lg" isRound={true} _hover={{color:"blue.400",bg: 'gray.800'}} icon={<TwitterLogo size="28px" />} /></Link>
                    <Link href={'https://www.fdgroup.company/'} target="_blank"> 
                    <IconButton aria-label="discord" variant="ghost" size="lg" isRound={true} _hover={{color:"blue.400",bg: 'gray.800'}} icon={<Globe size="28px" />} /></Link>
                </HStack>

        </Box>
  </Flex>


<Flex px={2} flex={1} align={'center'} justify={'center'}>

  <Stack spacing={2} w={'full'} maxW={'md'}>
          <form onSubmit={handleSubmit}>
            <FormControl mb={3} id="from_name" isInvalid={!!errors.from_name}>
              <FormLabel >{t('ContactText1')}</FormLabel>

                    <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement children={<InfoIcon color="gray.800" />} />
                          <Input 
                            name="from_name" value={formState.from_name} onChange={handleInputChange}
                            type="text"
                            size="md"
                            placeholder="Your name" />
                    </InputGroup>
                      {errors.from_name && (<FormErrorMessage>{errors.from_name}</FormErrorMessage>)}
                  </FormControl>

                  <FormControl mb={3} id="to_name" isInvalid={!!errors.to_name}>
                        <FormLabel > {t('ContactText2')} </FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement children={<EmailIcon color="gray.800" />} />
                          <Input 
                            type="email" value={formState.to_name}
                            name="to_name" onChange={handleInputChange}

                            size="md"
                            placeholder="exemple@fdgroup.company"
                          />

                        </InputGroup>  
                        {errors.to_name && (<FormErrorMessage>{errors.to_name}</FormErrorMessage>)}
                    </FormControl>
                      

                    <FormControl mb={3}  id="message" isInvalid={!!errors.message}>
                        <FormLabel> {t('ContactText3')} </FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300'
                          }}
                          name="message" value={formState.message} onChange={handleInputChange}
                          placeholder="Enter your message here"
                        />
                        {errors.message && (<FormErrorMessage>{errors.message}</FormErrorMessage>)}
                  </FormControl>
                      
      <Stack spacing={6} py={6}>
        <Button colorScheme={'blue'} variant={'solid'}
          type="submit" bg={'gray.600'}
          color="white"
          _hover={{
            bg: 'red.400',
            cursor: 'pointer'
          }}>
          {t('ContactBtn')}
        </Button>
      </Stack>
      </form>
    </Stack>   
  </Flex>
 </Stack>
 <WhatsAppButton />
 <BackToTopButton />

</Layout>
</Box>
    );
}

export default Contact;