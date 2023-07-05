import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  useToast,
  Text,
} from "@chakra-ui/react";
import {
  FaUser,
  FaEnvelope,
  FaSave,
  FaBuilding,
  FaCode,
  FaMobileAlt,
} from "react-icons/fa";
import { RiBankFill, RiSecurePaymentLine } from "react-icons/ri";
import axios from "axios";
import Cookies from "js-cookie";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dematAccount_get } from "../Redux/getdemataccount/action";
// import { useHistory } from "react-router-dom";

const DematAccountForm = () => {
 
  const dispatch=useDispatch()
  const [accountHolderName, setAccountHolderName] = useState("");
  const [bankName, setBankName] = useState("");
  const [email, setEmail] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [bankBranch, setBankBranch] = useState("");
  const [bankIFSC, setBankIFSC] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [verify ,setVerify] = useState(false);
  const [isuser_exist, setIs_user_exist] = useState(false);
  const [isMobileNumberValid, setIsMobileNumberValid] = useState(true);
  const navigate=useNavigate()
  const toast = useToast();
  // const history = useHistory();
  const token = Cookies.get("token");
  const validateMobileNumber = (number) => {
    // Simple validation for a 10-digit mobile number
    const isValid = /^\d{10}$/.test(number);
    setIsMobileNumberValid(isValid);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateMobileNumber(mobileNumber)) {
      return;
    }

    setIsLoading(true);

    const data = {
      accountHolderName: accountHolderName,
      email: email,
      mobilenumber: mobileNumber,
      banksDetails: {
        bankName: bankName,
        accountNumber: bankAccountNumber,
        branch: bankBranch,
        IFSC: bankIFSC,
      },
    };

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    console.log(data);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASEURL}/demat/account`,
        data,
        config
      );

      console.log(response);
      toast({
        title: "Demat account created",
        description: response.data.message,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "Failed to create demat account",
        description: error.response?.data.error || error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      if (error.response?.data.user_exist) {
        setIs_user_exist(true);
        setIsLoading(false);
      }
      setIsLoading(false);
    }

    setIsLoading(false);
  };
useEffect(()=>{

  if(token){
    setVerify(Cookies.get("Verify_status"))

  }else{
    navigate("/login")
  }

},[])
  return (
    <Box
      maxH={"full"}
      mx="auto"
      mt="50px"
      p={4}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {/* <Flex direction="column" align="center" mb={2}>
        <Heading size={"orange"} color={"gold"}>TradeHub</Heading>
      </Flex> */}
      <Box
        m="50px"
        bg="white"
        p="30px"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        borderRadius={"30px"}
      >
        <strong style={{ color: "gold" }}>TradeHub</strong>
        <form onSubmit={handleSubmit}>
          <Flex gap="5px" flexDirection={["column", "column", "row", "row"]}>
            <FormControl id="accountHolderName" isRequired mb={4}>
              <FormLabel>Account Holder Name</FormLabel>
              <InputGroup>
                <InputLeftAddon children={<FaUser />} />
                <Input
                  type="text"
                  placeholder="Enter your account holder name"
                  value={accountHolderName}
                  onChange={(e) => setAccountHolderName(e.target.value)}
                />
              </InputGroup>
            </FormControl>
            <FormControl id="bankName" isRequired mb={4}>
              <FormLabel>Bank Name</FormLabel>
              <InputGroup>
                <InputLeftAddon children={<RiBankFill />} />
                <Input
                  type="text"
                  placeholder="Enter your bank name"
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                />
              </InputGroup>
            </FormControl>
          </Flex>
          <FormControl id="email" isRequired mb={4}>
            <FormLabel>Email Address</FormLabel>
            <InputGroup>
              <InputLeftAddon children={<FaEnvelope />} />
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
          </FormControl>
          <FormControl id="bankAccountNumber" isRequired mb={4}>
            <FormLabel>Bank Account Number</FormLabel>
            <InputGroup>
              <InputLeftAddon children={<FaSave />} />
              <Input
                type="text"
                placeholder="Enter your bank account number"
                value={bankAccountNumber}
                onChange={(e) => setBankAccountNumber(e.target.value)}
              />
            </InputGroup>
          </FormControl>
          <Flex gap="5px" flexDirection={["column", "column", "row", "row"]}>
            <FormControl id="bankBranch" isRequired mb={4}>
              <FormLabel>Bank Branch</FormLabel>
              <InputGroup>
                <InputLeftAddon children={<FaBuilding />} />
                <Input
                  type="text"
                  placeholder="Enter your bank branch"
                  value={bankBranch}
                  onChange={(e) => setBankBranch(e.target.value)}
                />
              </InputGroup>
            </FormControl>
            <FormControl id="bankIFSC" isRequired mb={4}>
              <FormLabel>Bank IFSC Code</FormLabel>
              <InputGroup>
                <InputLeftAddon children={<RiSecurePaymentLine />} />
                <Input
                  type="password"
                  placeholder="Enter your bank IFSC code"
                  value={bankIFSC}
                  onChange={(e) => setBankIFSC(e.target.value)}
                />
              </InputGroup>
            </FormControl>
          </Flex>
          <FormControl id="mobileNumber" isRequired mb={4}>
            <FormLabel>Mobile Number</FormLabel>
            <InputGroup>
              <InputLeftAddon children={"+91"} />
              <Input
                type="tel"
                placeholder="Enter your mobile number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </InputGroup>
           {!verify? <Text color="red" mt={2} textAlign="center">
              <NavLink to="/verify_account">Verify Your Account </NavLink>
            </Text>:""}
            {!isMobileNumberValid && (
              <FormHelperText color="red">
                Please enter a valid mobile number.
              </FormHelperText>
            )}
          </FormControl>
          {!isuser_exist ? (
            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              w="full"
              mt={2}
              isLoading={isLoading}
            >
              Create Account
            </Button>
          ) : (
            <NavLink to="/update_account">
              {" "}
              <Button
                type="submit"
                colorScheme="blue"
                size="lg"
                w="full"
                mt={2}
                isLoading={isLoading}
              >
                Update Account
              </Button>
            </NavLink>
          )}
        </form>
      </Box>
    </Box>
  );
};

export default DematAccountForm;
