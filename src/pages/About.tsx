import '@fontsource/inter/600.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/raleway/700.css';
import '@fontsource/righteous/400.css';
import '@fontsource/roboto/700.css';

import { AddIcon, CheckCircleIcon, PhoneIcon, WarningIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  SpaceProps,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { Tag } from '@chakra-ui/tag';
import { ArrowRight, CheckCircle, CircleWavyQuestion, Eye } from 'phosphor-react';
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ScrollReveal from 'scrollreveal';

import BackToTopButton from '../components/BackToTopButton/BackToTopButton';
import Logo from '../components/fdgLogo';
import WhatsAppButton from '../components/WhatsApp/WhatsAppButton';
import Layout from '../layout/Layout';



interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}
const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={ 2 } marginTop={ props.marginTop }>
      { props.tags.map((tag) => {
        return (
          <Tag size={ "md" } pl={ "4" } variant="solid" bg={ "gray.600" } key={ tag }>
            { tag }
          </Tag>
        );
      }) }
    </HStack>
  );
};
interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={ `Avatar of ${props.name}` }
      />
      <Text fontWeight="medium">{ props.name }</Text>
      <Text>—</Text>
      <Text>{ props.date.toLocaleDateString() }</Text>
    </HStack>
  );
};


let sr = ScrollReveal();
function About() {

  const topRef = useRef<HTMLDivElement>(null);
  if(topRef.current) {
    topRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
  }


  useEffect(() => {

    sr.reveal(".about1", {
      rotate: {x: 0, y: 20, z: 0},
      duration: 800,

    },);

    sr.reveal(".about2", {
      rotate: {x: 0, y: 50, z: 0},
      duration: 900
    });

    sr.reveal(".about3", {
      rotate: {x: 0, y: 50, z: 0},
      duration: 1000
    });
    sr.reveal(".about4", {
      origin: 'bottom',
      distance: '100px',
      duration: 2000,
      opacity: 0,

    });

    sr.reveal(".about5", {
      origin: 'bottom',
      distance: '200px',
      duration: 2000,
      opacity: 0,
    });

    sr.reveal(".about6", {
      origin: 'bottom',
      distance: '200px',
      duration: 2000,
      opacity: 0,
    });


    sr.reveal(".about7", {
      origin: 'bottom',
      distance: '200px',
      duration: 2000,
      opacity: 0,
    });


    sr.reveal(".about8", {
      origin: 'bottom',
      distance: '300px',
      duration: 2000,
      opacity: 0,
    });


    sr.reveal(".about9", {
      origin: 'bottom',
      distance: '400px',
      duration: 2000,
      opacity: 0,
    });

  }, []);


  const {t} = useTranslation();

  return (
    <Box bg={"gray.200"} pt={10} mt={-10}>
      <div ref={topRef} />
      <Layout>

        <Box overflowY={"hidden"} overflowX={"hidden"}  fontFamily={"'Inter', sans-serif"} color={"gray.600"}>
       
        <Box textAlign="center" h={"full"} pb={4} bg={ useColorModeValue('white', 'gray.900') }>

          <Flex 
         
              h={ "70px" } 
              w={260}              
              maxW={ "full" }
              bg={"red.800"}
             justify={'end'}
              alignItems={ "center" }
              fontSize={ "2xl" } color={"gray.800"}
              fontWeight={ "bold" }
              boxShadow={"8px 0px"}>
      <Text color={"white"}  m={4} textTransform={'uppercase'}> {t("heaAboutUs")} </Text> 
      </Flex>
            <Stack align={'center'} mt={10} >
              <Text display={'flex'} fontWeight={'bold'}>{t("WhoWe")}  <CircleWavyQuestion size={ 20 } /></Text>
              <Text  textAlign={'center'}  fontSize="md" color={"gray.800"}
                fontWeight={'bord'}>{t("QualityText")}</Text>
            </Stack>
       </Box>
    
      <Box as={ "section" }>
          
           {/* // Futer 1 */ }
          <Flex bg={"white"} py={4}
            marginTop={ { base: "1", sm: "4" } } 
            display="flex"
            flexDirection={ { base: "column", sm: "row" } }
            justify={"space-between"}>

              <Box mb={8} p={3} className="about4" visibility={"hidden"} 
                    display="flex" flex="1" flexDirection="column"
                    justifyContent="center" marginTop={ { base: "3", sm: "0" } }>
                    <Flex alignItems={ "center" } gap={ 2 }>
                      <BlogTags  tags={ ["Our vision"] } />
                      <Eye color={ "#1A202C" } size={ 32 } />
                    </Flex>
                    <Heading marginTop="1">
                      <Link   fontSize="md"
                      fontWeight={'bord'} textDecoration="none" _hover={ { textDecoration: "none" } }>
                        {t("Founded1")}
                      </Link>
                    </Heading>
                    <Text
                      textAlign={ "justify" }
                      marginTop="2"
                      color={ useColorModeValue("gray.600", "gray.200") }
                      fontSize="sm"
                      fontWeight={'bord'}>
                      {t("Abaut1")}
                    </Text>
                    <Button
                      top={ 6 }
                      as={'a'}
                      bg="white"
                      fontSize="md"
                      border={ "1px solid #1A202C" }
                      textAlign={ "justify" }
                      w={250}
                      maxW={ "full" }
                      _hover={ {
                        cursor:"pointer",
                        bg: "red.900",
                        color: "white",
                      }}>
                    <Text display="flex"> {t("Learn")} <ArrowRight size={22} /></Text> 
                    </Button>
             </Box>

              
              <Box className="about4" w={'full'}  visibility={"hidden"} display="flex" flex="1"
               position="relative" alignItems="center" px={3}>
                
                  <Image
                  w={630}
                    maxW={ "full" }
                    src={ "/publ../../assets/about/Imagem1.png" }
                    alt="some good alt text"
                    objectFit="contain"/>
            </Box>
          </Flex>


          {/* // Futer 2 */ }
         <Flex bg={"white"} py={4} className="about5"
            marginTop={ { base: "1", sm: "4" } } 
            display="flex"
            flexDirection={ { base: "column", sm: "row" } }
            justify={"space-between"}>

            <Box className="about4" w={'full'}  visibility={"hidden"} display="flex" flex="1"
               position="relative" alignItems="center" px={3}>
                  <Image
                   w={630}
                   maxW={ "full" }
                    src={ `${"/publ../../assets/about/Imagem2.png"}` }
                    alt="some good alt text"
                    objectFit="contain"/>
              
         
            </Box>

            <Box 
              className="about6" visibility={"hidden"} 
              display="flex"  p={3}
              flex="1"
              flexDirection="column"
              justifyContent="center"
              marginTop={ { base: "3", sm: "0" } }>
              <Flex alignItems={ "center" } gap={ 2 }>
                <BlogTags tags={ ["Our operates"] } />
                <Eye color={ "#1A202C" } size={ 32 } />
              </Flex>
              <Heading marginTop="1">
                <Link  fontSize="md"
                fontWeight={'bord'} textDecoration="none" _hover={ { textDecoration: "none" } }>
                  {t("FDGroup1")}
                </Link>
              </Heading>
              <Text
              fontSize="sm"
              fontWeight={'bord'}                marginTop="2"
                textAlign={ "justify" }
                color={ useColorModeValue("gray.600", "gray.200") }>
                {t("About2")}
              </Text>
            </Box>
          </Flex>

          {/* // Futer 3 */ }

          <Flex bg={"white"} py={4} className="about5"
            marginTop={ { base: "1", sm: "4" } } 
            display="flex"
            flexDirection={ { base: "column", sm: "row" } }
            justify={"space-between"}>
              
             <Box className="about7" visibility={"hidden"} p={2} 
              display="flex" mx={2} 
              flex="1"
              flexDirection="column"
              justifyContent="center"
              marginTop={ { base: "3", sm: "0" } }>

              <Flex alignItems={ "center" } gap={ 2 }>
                <BlogTags tags={ ["Our Solutions"] } />
                <Eye color={ "#1A202C" } size={ 32 } />
              </Flex>
              <Heading marginTop="1">
                <Link fontSize={ "sm" } fontWeight={'bold'} textDecoration="none" _hover={ { textDecoration: "none" } }>
                  {t("Mission")}
                </Link>
              </Heading>
              <Text
              
                marginTop="2"
                color={ useColorModeValue("gray.700", "gray.200") }
                textAlign={ "justify" }
                fontSize={ "sm" } >
                {t("About3")} 
              </Text>
            </Box>
            
            <Box className="about8" w={'full'}  visibility={"hidden"} display="flex" flex="1"
               position="relative" alignItems="center" px={3}>
                  <Image
                    w={630}
                    maxW={ "full" }
                    src={ "../../assets/about/Imagem4.png" }
                    alt="some good alt text"
                    objectFit="contain"
                  />
     
            </Box>
          </Flex>

          

        <VStack  h={'full'} mt={4} mb={14} p={6} bg={"blue.800"}  
             spacing="2" alignItems="flex-start" className="about9" visibility={"hidden"}> 
            <Box mb={14}>
            <Flex gap={ 4 } fontWeight={'bold'} alignItems={ "center" }>
              <Text color={"gray.200"} fontSize={'lg'}> {t("Text0")}  </Text>
              <Logo />
            </Flex>

            <Box color={"gray.200"} fontSize="sm">{t("Text1")} {t("TextIn")}

              <Text fontSize="sm" pt={4} >{t("Text2")}</Text>
            
            </Box>

            <Text fontSize={'md'} textAlign={"center"}  display={'flex'} color="red.400"><CheckCircle size={22}/> {t("TextList1")} </Text>
            <Text fontSize={'md'} textAlign={"center"}  display={'flex'} color="red.400"><CheckCircle size={22}/> {t("TextList2")}</Text>
            <Text fontSize={'md'} textAlign={"center"}  display={'flex'}  color="red.400"><CheckCircle size={22}/> {t("TextList3")}</Text>
            <Text fontSize={'md'} textAlign={"center"}  display={'flex'}  color="red.400"><CheckCircle size={22}/> {t("TextList4")}</Text>
            <Text color={"gray.200"} pt={2}  fontSize="sm">{t("Text4")}</Text>
            </Box>
        </VStack>
        
    
       </Box>
      </Box>

      <WhatsAppButton />
      <BackToTopButton />

      </Layout>
    </Box>
  );
}

export default About;
