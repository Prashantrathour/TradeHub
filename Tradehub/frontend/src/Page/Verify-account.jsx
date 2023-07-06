import React, { useState, useEffect } from "react";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { app } from "../Components/firebase_config";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { dematAccount_get } from "../Redux/getdemataccount/action";
import StockDataLoader from "./Loader";
import Update_demate_account from "./Update_demate_account";
import { dematAccount_UPDATEFailure, dematAccount_UPDATESuccess, dematAccount_update } from "../Redux/updatedemataccount.js/action";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

const Verify_account = () => {
  const dematAccount = useSelector((store) => store.dematAccount_getreducer);
  const {loading,error,msg} = useSelector((store) => store.dematAccount_veriify_reducer);
  const [phone, setPhone] = useState("");
  const navigate=useNavigate()
  const [editphone, seteditPhone] = useState(true);
  const [verifybtn, setverifybtn] = useState(false);
  const [verifyActbtn, setverifActybtn] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [verificationStatus, setverificationStatus] = useState(false);
  const [Status, setStatus] = useState(false);
  const dispatch = useDispatch();
console.log(loading,error)
  const handleVerifyAccount = async() => {
    if(verificationStatus){

      const data = { mobilenumber:phone, verificationStatus };
    try {
      
  
      const response=await dispatch(dematAccount_update(data))
        dispatch(dematAccount_UPDATESuccess(response.data)) 
      
        toast({
          title: "Verification Succesfully Completed",
          description:response.data.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        }); 
        setStatus(true)
        Cookies.set("Verify_status",true)
      } catch (error) {
        dispatch(dematAccount_UPDATEFailure())
        console.log(error)
           toast({
            title: 'verification Failed',
            description: error.response?.data.error,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
      }
         
     
    }else{
      toast({
        title: "Verification Failed",
        description: "Your Account is not verified",
        status: "error",
        duration: 3000,
        isClosable: true,
      }); 
    }
  };
  const toast = useToast();

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const onCaptchaVerify = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
     
        },
      },
      auth
    );
  };

  const onSignInSubmit = () => {
    setIsLoading(true);
    onCaptchaVerify();
    const appVerifier = window.recaptchaVerifier;
    const phoneNumber = "+91" + phone;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setIsLoading(false);
        setverifybtn(true)
        toast({
          title: "OTP Sent",
          description:
            "OTP has been sent to your registered mobile number. Please check.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        setIsLoading(false);
        const errorCode = error.code;
        let errorMessage = error.message;
        errorMessage = errorMessage.split("(")[0];

        toast({
          title: errorMessage,
          description: "Failed to send OTP. Please try again.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  const verifyCode = (code) => {
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log("User signed in successfully", user);
        setverificationStatus(true);
        setverifActybtn(true)
        toast({
          title: "Success",
          description: "OTP verification successful!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.log("Verification failed", error);
        const errorCode = error.code;
        let errorMessage = error.message;
        errorMessage = errorMessage.split("(")[0];

        toast({
          title: "Wrong OTP",
          description: errorMessage,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  const handleSendOTP = () => {
  
      onSignInSubmit();

  };

  const handleVerifyOTP = () => {
    if (verificationCode?.trim() === "") {
      toast({
        title: "Error",
        description: "Please enter the verification code.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      verifyCode(verificationCode);
    }
  };
  window.addEventListener("load",(e)=>{
    console.log("load",e)
    dispatch(dematAccount_get);
  })
  useEffect(() => {

    console.log("rander",dematAccount)
    dispatch(dematAccount_get);
    console.log(dematAccount)
    setPhone(dematAccount.data.mobilenumber)
   
  },[]);

  return (
    <Box w="100%" height={"90vh"} display={"flex"} justifyContent={"center"}>
      <Box
        m="50px"
        bg="white"
        p="30px"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        borderRadius={"30px"}
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Box >
         {!dematAccount.isloading? <Box maxW={"150px"} m="auto">
            {Status ? (
              <Image
                maxW="100%"
                src="https://th.bing.com/th/id/R.e04f337891c8d48162867023a27dc10d?rik=CQ6lDkFr7MWgbw&riu=http%3a%2f%2fwww.rikvinbiotech.com%2fimages%2fverified.png&ehk=uWO%2bpeIr3%2btp36kGCLkm3lvpJr7rO6aYSgNZde3XvP0%3d&risl=&pid=ImgRaw&r=0"
              />
            ) : (
              <Image
                maxW="100%"
                src="https://img.totallandscapecare.com/files/base/randallreilly/all/image/2019/01/tlc.e-verify.png?auto=format%2Ccompress&fit=max&q=70&w=1200"
              />
            )}
          </Box>:<Box maxW={"200px"} m="auto"><Spinner/></Box>}
          <InputGroup>
            <InputLeftAddon children="+91" />
            <Input
              type="number"
              placeholder="Enter your phone number"
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}
              // isDisabled={editphone}
            />
          </InputGroup>
        </Box>
        <Flex gap={"5px"} flexDirection={["column","row","row","row"]} mt="10px">
        <Button
          colorScheme="blue"
       
          onClick={()=>seteditPhone(false)}
        >
          Change Mobile Number
        </Button>
        <Button
          colorScheme="blue"
          isLoading={isLoading}
          onClick={handleSendOTP}
        >
          Send OTP
        </Button>
        </Flex>
       { verifybtn ? < Box mt={4}>
          <InputGroup>
            <Input
              type="text"
              placeholder="Enter the verification code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
          </InputGroup> 
         <Flex gap="5px">
         <Button colorScheme="green" isDisabled={verifyActbtn} mt={4} onClick={handleVerifyOTP}>
          Verify OTP
        </Button>
        {verifyActbtn ?   <Button isLoading={loading} isDisabled={error} colorScheme="green" mt={4} onClick={handleVerifyAccount}>
          Verify Account
        </Button>:""}</Flex>
        </Box>:""}
      
        <Box id="recaptcha-container"></Box>
      </Box>
    </Box>
  );
};

export default Verify_account;
