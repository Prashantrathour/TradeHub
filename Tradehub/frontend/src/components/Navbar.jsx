import React from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
} from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';
import tradehubImage from '../images/unnamed (1).jpg';

const Navbar = () => {
  const menuItems = [
    {
      path: '/',
      element: (
        <Box fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" display="flex" alignItems="center" borderRight={{ base: 'none', md: '1px solid gold' }} pr={4}>
          <img src={tradehubImage} alt="" />
          <Box ml={1} color="gold">
            Tradehub
          </Box>
        </Box>
      ),
    },
    {
      path: '/',
      element: (
        <Menu>
          <MenuButton
            as={Button}
            colorScheme="gold"
            variant="link"
            mr={4}
            _hover={{ textDecoration: 'none' }}
          >
            <ArrowDownIcon />
            What We Offer
          </MenuButton>
          <MenuList bg="black" color="gold">
            <MenuItem as={Link} href="/" _hover={{ bg: 'gold' }}>
              Invest
            </MenuItem>
            <MenuItem as={Link} href="/" _hover={{ bg: 'gold' }}>
              Crypto
            </MenuItem>
            <MenuItem as={Link} href="/" _hover={{ bg: 'gold' }}>
              Retirement
            </MenuItem>
            <MenuItem as={Link} href="/" _hover={{ bg: 'gold' }}>
              Options
            </MenuItem>
            <MenuItem as={Link} href="/" _hover={{ bg: 'gold' }}>
              Cash Card
            </MenuItem>
          </MenuList>
        </Menu>
      ),
    },
    { path: '/', element: 'Snacks' },
    { path: '/', element: 'Learn' },
    { path: '/', element: 'Support' },
  ];

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex bg="black" p={4} justifyContent="space-between" align="center" direction={isMobile ? 'column' : 'row'}>
      <Box
        color="gold"
        display="flex"
        alignItems="center"
        flexWrap={isMobile ? 'wrap' : 'nowrap'}
      >
        {menuItems.map((menuItem, index) => (
          <Box key={index} mr={4} mb={isMobile ? 2 : 0}>
            {typeof menuItem.element === 'string' ? (
              <Link
                href={menuItem.path}
                color="gold"
                _hover={{ textDecoration: 'none' }}
              >
                {menuItem.element}
              </Link>
            ) : (
              menuItem.element
            )}
          </Box>
        ))}
      </Box>
      <Box>
        <Button colorScheme="gold" variant="outline" mr={2}>
          Login
        </Button>
        <Button colorScheme="gold">Sign up</Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
