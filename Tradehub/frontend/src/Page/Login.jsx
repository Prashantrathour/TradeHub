

import React, { useState } from "react";
import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Image, Input, Link, Text, useToast } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaLock, FaUser, FaQuestionCircle } from "react-icons/fa";
import { RiAccountPinBoxLine } from "react-icons/ri";
import axios from "axios";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()
  const toast = useToast();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data object to be sent in the request
    const data = {
      email,
      password
    };

    try {
      // Make an API request using axios or any other HTTP library
      const response = await axios.post(`${process.env.REACT_APP_BASEURL}/users/login`, data);
      const { token } = response.data;

      // Store the token in local storage
      localStorage.setItem("token", token);
      toast({
        title: response.data.msg,
        description: "Login Succesfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setTimeout(() => {
        navigate("/")
      }, 5000);
      console.log("Logged in successfully");
    } catch (error) {
      
      toast({
        title:error.response.data.msg,
        description: "Logged in Unsuccessful",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (

    <Flex
      direction={{ base: "column-reverse", md: "row" }}
      align="center"
      justify="center"
      minHeight="100vh"
      px={4}
      bg="gray.50"
    >
      <Flex flex="1" py={8} flexDirection={["column","column","row","row"]}>
        <Flex justify="center" mb={8} >
          <Image
            src="https://cdn.robinhood.com/assets/generated_assets/webapp/632fcb3e7ed928b2a960f3e003d10b44.jpg"
            alt="oso"
           maxWidth={"100%"}
           maxHeight={"600px"}
            objectFit={"cover"}
          />
        </Flex>
        <Box mx="auto" maxW="100%" padding={"10px"}>
          <Heading as="h4" size="md" textAlign="center" mb={4}>
            Login To Tradehub
          </Heading>
          <FormControl id="email" mb={4}>
            <FormLabel>Email</FormLabel>
            <Flex align="center">
              <FaUser size={18} color="gray.400" mr={2} />
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Flex>
          </FormControl>
          <FormControl id="password" mb={4}>
            <FormLabel>Password</FormLabel>
            <Flex align="center">
              <FaLock size={18} color="gray.400" mr={2} />
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Flex>
          </FormControl>
          <Flex align="center" mb={4}>
            <Checkbox size="sm" />
            <Text ml={2} fontSize="sm">
              Keep me logged in for up to 30 days
            </Text>
          </Flex>
          <Flex direction={{ base: "column", md: "row" }} justify="space-between" mb={4}>
            <Link color="blue.500" fontSize="sm" fontWeight="bold" mb={{ base: 2, md: 0 }}>
              Forget your Password?
            </Link>
            <Link color="blue.500" fontSize="sm" fontWeight="bold">
              Forget your Email Address?
            </Link>
          </Flex>
          <Button colorScheme="blue" size="lg" width="full" mb={4} onClick={handleSubmit}>
            Log In
          </Button>
          <Text textAlign="center">
            Not in Tradehub?{" "}
            <NavLink to="/signup" color="blue.500" fontWeight="bold">
              create an account
            </NavLink>
          </Text>
          <Flex align="center" justify="center" mt={4}>
            <FaQuestionCircle size={20} color="gray.400" mr={1} />
            <Text fontSize="sm" color="gray.400">
              Need help logging in?
            </Text>
          </Flex>
          <Flex align="center" justify="center" mt={4}>
            <RiAccountPinBoxLine size={20} color="gray.400" mr={1} />
            <Text fontSize="sm" color="gray.400">
              Secure Login with Touch ID or Face ID
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>

  );
}

