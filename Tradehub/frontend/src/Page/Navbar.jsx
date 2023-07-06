import React, { useEffect, useState } from "react";
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
  Avatar,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Cookies from "js-cookie";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isTablet = useBreakpointValue({ base: false, md: true });
  const [user, setuser] = useState(Cookies.get("user"));

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("user");

    setuser("");
  };
  const user1 = Cookies.get("user");
  useEffect(() => {
    if (user) {
      setuser(user1);
    }
  }, []);
  return (
    <>
      <Box
        bg="black"
        color="white"
        px={4}
        py={4}
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
              <AuthButtons logout={logout} user={user} />
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
      {isMobile && (
        <MobileDrawer user={user} isOpen={isOpen} onClose={onClose} />
      )}
    </>
  );
};

const NavLinks = () => (
  <Flex justifyContent={"space-between"} width={"30%"} m>
    <Menu isLazy>
      <MenuButton as={Button} colorScheme="white">
        Services
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
          to="/history"
          border={"1px solid gray"}
          p="5px"
          borderRadius={"2xl"}
          bg={"black"}
        >
          check your transaction history
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

const AuthButtons = ({ user, logout }) => (
  <Box>
    <Flex alignItems="center" boxSizing={"content-box"} margin={"auto"}>
      {!user ? (
        <NavLink to={"/login"}>
          <Button variant="ghost" colorScheme="white" mr={2}>
            Login
          </Button>
        </NavLink>
      ) : (
        <Flex>
          <Flex
            _hover={{ color: "gold" }}
            gap={"-10"}
            justify={"center"}
            flexDirection={"row"}
          >
            <Avatar alignSelf={"center"} size={"2xs"} />{" "}
            <Button
              variant="ghost"
              colorScheme="white"
              mr={1}
              position={"relative"}
            >
              {user}
            </Button>
          </Flex>
          <NavLink to={"#"}>
            <Button onClick={logout} variant="ghost" colorScheme="white" mr={2}>
              Logout
            </Button>
          </NavLink>
        </Flex>
      )}
      <NavLink to="/demateaccount">
        {" "}
        <Button colorScheme="orange">Create Demat Account</Button>
      </NavLink>
    </Flex>
  </Box>
);
const AuthButtonsmob = ({ user, logout }) => (
  <Box alignItems="center" p="5px" margin={"auto"}>
    <Flex>
      {!user ? (
        <NavLink to={"/login"}>
          <Button variant="ghost" colorScheme="white" mr={2}>
            Login
          </Button>
        </NavLink>
      ) : (
        <Flex>
          <Flex
            _hover={{ color: "gold" }}
            gap={"-10"}
            justify={"center"}
            flexDirection={"column"}
          >
            <Avatar alignSelf={"center"} size={"sm"} />{" "}
            <Button variant="ghost" colorScheme="white" mr={2}>
              {user}
            </Button>
          </Flex>
          <NavLink to={"#"}>
            <Button
              onClick={logout}
              mt="30px"
              variant="ghost"
              colorScheme="white"
              mr={2}
            >
              Logout
            </Button>
          </NavLink>
        </Flex>
      )}
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
        </Button>
      </NavLink>
    </Box>
  </Box>
);

const MobileDrawer = ({ logout, user, isOpen, onClose }) => (
  <ChakraDrawer isOpen={isOpen} placement="left" onClose={onClose}>
    <DrawerOverlay>
      <DrawerContent bg="gray.800" color="white">
        <DrawerCloseButton color="white" />
        <DrawerHeader>Menu</DrawerHeader>
        <DrawerBody>
          <Stack spacing={4}>
            <Menu isLazy>
              <MenuButton as={Button} colorScheme="white">
                Services
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
                  to="/history"
                  border={"1px solid gray"}
                  p="5px"
                  borderRadius={"2xl"}
                  bg={"black"}
                >
                  check your transaction history
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
            <AuthButtonsmob logout={logout} user={user} />
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </DrawerOverlay>
  </ChakraDrawer>
);

export default Navbar;
