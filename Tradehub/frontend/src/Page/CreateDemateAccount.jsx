import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  Flex,
  Image,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import {
  FaUser,
  FaEnvelope,
  FaBuilding,
  FaSave,
  FaMobileAlt,
} from "react-icons/fa";
import { RiBankFill, RiSecurePaymentLine } from "react-icons/ri";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CreateDematAccountPage = () => {
  const [accountHolderName, setAccountHolderName] = useState("");
  const [email, setEmail] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [bankBranch, setBankBranch] = useState("");
  const [bankIFSC, setBankIFSC] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const navigate=useNavigate()
const token=localStorage.getItem("token");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      accountHolderName: accountHolderName,
      email:email,
      mobilenumber: mobileNumber,
      banksDetails: {
        bankName: bankName,
        accountNumber: bankAccountNumber,
        branch: bankBranch,
        IFSC: bankIFSC,
      },
    };

    const token =localStorage.getItem("token")
      // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDhkZTdjZjQwZDI5YjMxMjQ3N2FhOGEiLCJ1c2VyIjoicHJhc2hhIiwiaWF0IjoxNjg3MDIxNTMxfQ.9EHTgrBYwzHLc0Tu6SXMffmwCcY05mLaj_44WQPjxKs";
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    console.log(data);
    const postdata = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BASEURL}/demat/account`,
          data,
          config
        );
        console.log(response);
        toast({
          title: "Demat account created",
          description: "Your demat account has been successfully created.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } catch (error) {
        
        toast({
          title: error.response.data.message,
          description: "You can update your account",
          status: "warning",
          duration: 5000,
          isClosable: true,
        });
      }
    };

    postdata();
    // Perform account creation logic here
    // ...

    // Show success toast

    // Clear form inputs
    setAccountHolderName("");
    setEmail("");
    setBankName("");
    setBankAccountNumber("");
    setBankBranch("");
    setBankIFSC("");
    setMobileNumber("");
  };
useEffect(()=>{
if(!token){
  navigate("/login")
}
},[token])
  return (
    <Box width="100%" boxSizing="border-box" mx="auto" bg="gray.100" p={4}>
      <Heading as="h1" size="xl" mb={4} textAlign="center">
        Create Demat Account
      </Heading>
      <Flex
        direction={["column", "column", "row", "row"]}
        justify={["center", "space-around"]}
        align="center"
        gap="10px"
      >
        <Box
          width={["80%", "80%", "80%", "65%"]}
          bg="pink.400"
          boxShadow="lg"
          p={4}
          borderRadius="md"
        >
          <Image
            src="https://webstockreview.net/images/accountant-clipart-animated-12.png"
            alt="Accountant"
            objectFit="cover"
            borderRadius="md"
          />
        </Box>
        <Box
          as="form"
          onSubmit={handleSubmit}
          width={["80%", "80%", "60%", "50%"]}
          bg="white"
          boxShadow="lg"
          p={4}
          borderRadius="md"
        >
          <FormControl mb={4}>
            <FormLabel>Account Holder Name</FormLabel>
            <InputGroup>
              <InputLeftAddon children={<FaUser />} />
              <Input
                placeholder="Enter account holder name"
                value={accountHolderName}
                onChange={(e) => setAccountHolderName(e.target.value)}
                required
                leftIcon={<FaUser />}
              />
            </InputGroup>
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <InputLeftAddon children={<FaEnvelope />} />
              <Input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                leftIcon={<FaEnvelope />}
              />
            </InputGroup>
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Bank Name</FormLabel>
            <InputGroup>
              <InputLeftAddon children={<RiBankFill />} />
              <Input
                placeholder="Enter bank name"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
                required
                leftIcon={<FaBuilding />}
              />
            </InputGroup>
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Bank Account Number</FormLabel>
            <InputGroup>
              <InputLeftAddon children={<FaUser />} />
              <Input
                placeholder="Enter bank account number"
                value={bankAccountNumber}
                onChange={(e) => setBankAccountNumber(e.target.value)}
                required
              />
            </InputGroup>
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Bank Branch</FormLabel>
            <InputGroup>
              <InputLeftAddon children={<FaBuilding />} />
              <Input
                placeholder="Enter bank branch"
                value={bankBranch}
                onChange={(e) => setBankBranch(e.target.value)}
                required
                leftIcon={<FaBuilding />}
              />
            </InputGroup>
          </FormControl>

          <FormControl mb={4}>
            <FormLabel>Bank IFSC</FormLabel>
            <InputGroup>
              <InputLeftAddon children={<RiSecurePaymentLine />} />
              <Input
                placeholder="Enter bank IFSC"
                value={bankIFSC}
                onChange={(e) => setBankIFSC(e.target.value)}
                required
              />
            </InputGroup>
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Mobile Number</FormLabel>
            <InputGroup>
              <InputLeftAddon children={<FaMobileAlt />} />
              <Input
                placeholder="Enter mobile number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
            </InputGroup>
          </FormControl>

          <Flex justify="center">
            <Button
              type="submit"
              colorScheme="teal"
              leftIcon={<FaSave />}
              mt={4}
              w="100%"
            >
              Create Demat Account
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default CreateDematAccountPage;
