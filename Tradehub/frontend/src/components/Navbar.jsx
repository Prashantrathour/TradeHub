import React from "react";
import { NavLink, Link as RouterLink } from "react-router-dom";
import tradehubImage from "../images/unnamed (1).jpg";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  useDisclosure,
  useBreakpointValue,
  Drawer as ChakraDrawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isTablet = useBreakpointValue({ base: false, md: true });

  return (
    <>
      <Box
        bg="black"
        color="white"
        px={4}
        py={2}
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1}
      >
        <Flex
          alignItems="center"
          justifyContent={!isTablet ? "space-between" : "space-between"}
        >
          <NavLink to={"/"}>
            <Flex alignItems="center" cursor={"pointer"}>
              <Image
                bg={"white"}
                width={"50px"}
                src={tradehubImage}
                alt="logo"
              />
              <Heading color={"goldenrod"} size="md">
                TRADEHUB
              </Heading>
            </Flex>
          </NavLink>
          {!isMobile && (
            <>
              <NavLinks />
              <AuthButtons />
            </>
          )}
          {isMobile && (
            <IconButton
              icon={<HamburgerIcon />}
              aria-label="Open Menu"
              variant="outline"
              colorScheme="white"
              onClick={onOpen}
            />
          )}
        </Flex>
      </Box>
      {isMobile && <MobileDrawer isOpen={isOpen} onClose={onClose} />}
    </>
  );
};

const NavLinks = () => (
  <Flex justifyContent={"space-between"} width={"30%"} m>
    <Menu isLazy>
      <MenuButton as={Button} colorScheme="white">
        Stocks
      </MenuButton>
      <MenuList color={"gold"} fontWeight={"600"} bg={"black"}>
        <MenuItem
          as={RouterLink}
          to="/invest"
          border={"1px solid gray"}
          p="5px"
          borderRadius={"2xl"}
          bg={"black"}
        >
          Invest
        </MenuItem>
        <MenuItem
          as={RouterLink}
          to="/stocksellpage/A"
          border={"1px solid gray"}
          p="5px"
          borderRadius={"2xl"}
          bg={"black"}
        >
         Sell your Stocks
        </MenuItem>
        <MenuItem
          as={RouterLink}
          to="/stocks/allstocks"
          border={"1px solid gray"}
          p="5px"
          borderRadius={"2xl"}
          bg={"black"}
        >
          All Services
        </MenuItem>
      </MenuList>
    </Menu>
    <NavButton to="/snacks">Snacks</NavButton>
    <NavButton to="/learn">Learn</NavButton>
    <NavButton to="/support">Support</NavButton>
  </Flex>
);

const NavButton = ({ to, children }) => (
  <Button as={RouterLink} to={to} variant="ghost" colorScheme="white" ml={2}>
    {children}
  </Button>
);

const AuthButtons = () => (
  <Box>
    <Flex alignItems="center" boxSizing={"content-box"} margin={"auto"}>
      <NavLink to={"/login"}>
      <Button variant="ghost" colorScheme="white" mr={2}>
        Login
      </Button>
    </NavLink>
    <NavLink to="/demateaccount"> <Button colorScheme="orange">Create Demat Account</Button></NavLink>
    </Flex>
  </Box>
);
const AuthButtonsmob = () => (
  <Box alignItems="center" p="5px" margin={"auto"}>
    <Flex>
    <NavLink to={"/login"}>
      <Button variant="ghost" colorScheme="white" mr={2}>
        Login
      </Button>
     </NavLink>
    </Flex>
    <Box>
      <NavLink to="/demateaccount">
      <Button
        overflow={"hidden"}
        textOverflow={"ellipsis"}
        whiteSpace={"nowrap"}
        colorScheme="orange"
      >
        {" "}
        Create Demat Account
      </Button></NavLink>
    </Box>
  </Box>
);

const MobileDrawer = ({ isOpen, onClose }) => (
  <ChakraDrawer isOpen={isOpen} placement="left" onClose={onClose}>
    <DrawerOverlay>
      <DrawerContent bg="gray.800" color="white">
        <DrawerCloseButton color="white" />
        <DrawerHeader>Menu</DrawerHeader>
        <DrawerBody>
          <Stack spacing={4}>
          
            <Menu isLazy>
              <MenuButton as={Button} colorScheme="white">
                Stocks
              </MenuButton>
              <MenuList color={"gold"} fontWeight={"600"} bg={"black"}>
                <MenuItem
                  as={RouterLink}
                  to="/invest"
                  border={"1px solid gray"}
                  p="5px"
                  borderRadius={"2xl"}
                  bg={"black"}
                >
                  Invest
                </MenuItem>
                <MenuItem
                  as={RouterLink}
                  to="/stocksellpage/A"
                  border={"1px solid gray"}
                  p="5px"
                  borderRadius={"2xl"}
                  bg={"black"}
                >
                 stocksellpage
                </MenuItem>
                <MenuItem
                  as={RouterLink}
                  to="/stocks/allstocks"
                  border={"1px solid gray"}
                  p="5px"
                  borderRadius={"2xl"}
                  bg={"black"}
                >
                  All Services
                </MenuItem>
              </MenuList>
            </Menu>
            <NavButton to="/snacks">Snacks</NavButton>
            <NavButton to="/learn">Learn</NavButton>
            <NavButton to="/support">Support</NavButton>
            <AuthButtonsmob />
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </DrawerOverlay>
  </ChakraDrawer>
);

export default Navbar;
