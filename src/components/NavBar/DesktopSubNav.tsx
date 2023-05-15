import '@fontsource/raleway/700.css';

import {Box, Flex, Icon, Menu, Link, MenuButton, MenuItem, MenuList, Stack, Text, useDisclosure} from '@chakra-ui/react';
import { CaretCircleDoubleRight, CaretDown } from 'phosphor-react';
import React, {useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';
import {NavLink as RouteLink} from 'react-router-dom';


const DesktopSubNav = () => {
  const {t} = useTranslation()
  const {isOpen, onOpen} = useDisclosure();

  const [activeLink, setActiveLink] = useState<string | null>(null);
  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
  }, []);

  return (
    <>


      <Menu>
       
        <MenuButton>
          <Flex align={'center'}> <Text fontWeight={"bold"} >{t("home2")} </Text>
          <CaretDown color='white' size={20}/> 
          </Flex>
        </MenuButton>
   
        <MenuList mb={4} w={{base: 280, sm:  375, md: 500}}
        
        color={"gray.600"}  maxW={'full'}>
          <Text p={3} fontSize={'2xl'} fontWeight={'bold'} color={'red.800'} >{t("home2")} 
          </Text>
          <MenuItem _hover={{bg: "pink.50"}} fontSize={"sm"}>
            <Link to="/products/server" _activeLink={{color: "red.900"}} as={RouteLink}
              onClick={() => setActiveLink("/server")} color={"gray.400"}
              _hover={{textDecoration: "none", color: "red.600"}} role={"group"}>

              <Stack direction={"row"} align={"center"} spacing={{base:0, md:30, lg:90}}>
                <Box>
                  <Text fontWeight={'bold'} fontSize={'lg'} transition={"all .3s ease"} _groupHover={{color: "pink.400"}}>{t("childrenLab0")}</Text>
                  <Text fontSize={'sm'}>{t("childrenSubLab0")}</Text>
                </Box>

                <Flex transition={"all .3s ease"} transform={"translateX(-10px)"} opacity={0}
                  _groupHover={{opacity: "100%", transform: "translateX(0)"}} 
                  justify={"flex-end"}
                  align={"center"} flex={1}>
                  <Icon color={"pink.400"} w={5} h={5} as={CaretCircleDoubleRight} />
                </Flex>
              </Stack>
            </Link>
          </MenuItem>
          <MenuItem _hover={{bg: "pink.50"}}>
            <Link to="/products/devices" _activeLink={{color: "red.900"}} as={RouteLink}
              onClick={() => setActiveLink("/devices")} color={"gray.400"}
              _hover={{textDecoration: "none", color: "red.600"}} role={"group"}>
              <Stack direction={"row"} align={'center'} spacing={{base:0, md:40, lg:210}} >
                <Box>
                  <Text fontWeight={'bold'} transition={"all .3s ease"} _groupHover={{color: "pink.400"}}>{t("childrenLab1")}</Text>
                  <Text fontSize={'sm'}>{t("childrenSubLab1")}</Text>
                </Box>
                <Flex transition={"all .3s ease"} transform={"translateX(-10px)"} opacity={0}
                  _groupHover={{opacity: "100%", transform: "translateX(0)"}} justify={"flex-end"}
                  align={"center"} flex={1}>
                  <Icon color={"pink.400"} w={5} h={5} as={CaretCircleDoubleRight} />
                </Flex>
              </Stack>
            </Link>

          </MenuItem>
          <MenuItem _hover={{bg: "pink.50"}}>
            <Link to="/products/parts" _activeLink={{color: "red.900"}} as={RouteLink}
              onClick={() => setActiveLink("/parts")} color={"gray.400"}
              _hover={{textDecoration: "none", color: "red.600"}} role={"group"}>
              <Stack direction={"row"} align={"center"} spacing={{base:0, md:30, lg:150}}>
                <Box>
                  <Text fontWeight={'bold'} transition={"all .3s ease"} _groupHover={{color: "pink.400"}}>{t("childrenLab2")}</Text>
                  <Text fontSize={'sm'}>{t("childrenSubLab2")}</Text>
                </Box>
                <Flex transition={"all .3s ease"} transform={"translateX(-10px)"} opacity={0}
                  _groupHover={{opacity: "100%", transform: "translateX(0)"}} justify={"flex-end"}
                  align={"center"} flex={1}>
                  <Icon color={"pink.400"} w={5} h={5} as={CaretCircleDoubleRight} />
                </Flex>
              </Stack>
            </Link>
          </MenuItem>


          <MenuItem _hover={{bg: "pink.50"}}>
            <Link to="/products/audiovisuel" _activeLink={{color: "red.900"}} as={RouteLink}
              onClick={() => setActiveLink("/audiovisuel")} color={"gray.400"}
              _hover={{textDecoration: "none", color: "red.600"}} role={"group"}>

              <Stack direction={"row"} align={"center"} spacing={{base:0, md:40, lg:230}}>
                <Box>
                  <Text fontWeight={'bold'} transition={"all .3s ease"} _groupHover={{color: "pink.400"}}>{t("childrenLab3")}</Text>
                  <Text fontSize={'sm'}>{t("childrenSubLab3")}</Text>
                </Box>
                <Flex transition={"all .3s ease"} transform={"translateX(-10px)"} opacity={0}
                  _groupHover={{opacity: "100%", transform: "translateX(0)"}} justify={"flex-end"}
                  align={"center"} flex={1}>
                  <Icon color={"pink.400"} w={5} h={5} as={CaretCircleDoubleRight} />
                </Flex>
              </Stack>
            </Link>
          </MenuItem>
          <MenuItem _hover={{bg: "pink.50"}}>
            <Link to="/products/other" _activeLink={{color: "red.900"}} as={RouteLink}
              onClick={() => setActiveLink("/other")} color={"gray.400"}
              _hover={{textDecoration: "none", color: "red.600"}}
              role={"group"}>

              <Stack direction={"row"} align={"center"} spacing={{base:0, md:40, lg:280}}>
                <Box>
                  <Text fontWeight={'bold'} transition={"all .3s ease"} _groupHover={{color: "pink.400"}}>{t("childrenLab4")}</Text>
                  <Text fontSize={'sm'}>{t("childrenSubLab4")}</Text>
                </Box>
                <Flex transition={"all .3s ease"} transform={"translateX(-10px)"} opacity={0}
                  _groupHover={{opacity: "100%", transform: "translateX(0)"}} justify={"flex-end"}
                  align={"end"} flex={1}>
                  <Icon color={"pink.400"} w={5} h={5} as={CaretCircleDoubleRight} />
                </Flex>
              </Stack>
            </Link>
          </MenuItem>
        </MenuList>
     
      </Menu>

    </>
  );
}
export default DesktopSubNav;