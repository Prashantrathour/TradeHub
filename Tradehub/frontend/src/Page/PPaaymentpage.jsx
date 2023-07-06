import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { MdPayment } from "react-icons/md";
import { FaCreditCard, FaUniversity, FaMobileAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { buystockFailure, buystockSuccess, buystock_post } from "../Redux/buystock/action";
import SuccessPopup from "../Components/PaymentSuccessPopUp";
import { useNavigate } from "react-router-dom";

function PaymentPopup({ onClose, stockdata }) {
  const [update, setupdate] = useState(false);
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const storedata = useSelector((store) => store.buyreducer.msg);
  const alldata = useSelector((store) => store.buyreducer);
  const storedata_error = useSelector((store) => store.buyreducer.isError);
  const storedata_isLoading = useSelector(
    (store) => store.buyreducer.isLoading
  );
  const toast = useToast();
  // const handleTabChange = (index) => {
  //   setSelectedTab(index);
  // };
  const [paymentStatus, setPaymentStatus] = useState(false);

  const handlepayment = () => {
    setPaymentStatus(true);
  };
  const handlePayment = async() => { 
  
    try {
      const response=await  dispatch(buystock_post(stockdata))
      dispatch(buystockSuccess(response.data.msg));
      toast({
        title: response.data.msg,
        description: "Buy Successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      handlepayment()
    } catch (error) {
      console.log(error)
      dispatch(buystockFailure(error.response.data.msg))
      toast({
        title: error.response.data.msg,
        description: "Buy Stock UnSuccessfull",
        status: "error",
        duration: 5000,
        isClosable: true,
      });

      if(error.response.data.verify){
        setTimeout(() => {
          navigate("/verify_account")
        }, 1000);
      }
    }
 
  };
  useEffect(() => {

  }, []);
  return (
    <Box maxWidth="400px" margin="0 auto">
      <Tabs isFitted variant="enclosed">
        <TabList borderBottomColor="gray.200">
          <Tab _selected={{ color: "blue.500", borderBottomColor: "blue.500" }}>
            <Icon as={FaUniversity} mr={2} />
            Net Banking
          </Tab>
          <Tab _selected={{ color: "blue.500", borderBottomColor: "blue.500" }}>
            <Icon as={FaCreditCard} mr={2} />
            Card
          </Tab>
          <Tab _selected={{ color: "blue.500", borderBottomColor: "blue.500" }}>
            <Icon as={FaMobileAlt} mr={2} />
            UPI
          </Tab>
        </TabList>
        <TabPanels mt={4}>
          <TabPanel>
            <VStack spacing={4} p={4}>
              {/* Net Banking form */}
              <FormControl>
                <FormLabel>Bank</FormLabel>
                <Input type="text" placeholder="Enter bank name" required/>
              </FormControl>
              <Button
                leftIcon={<Icon as={MdPayment} />}
                colorScheme="blue"
                onClick={handlePayment}
                w="100%"
                isLoading={storedata_isLoading}
              >
                Pay Now
              </Button>
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack spacing={4} p={4}>
              {/* Card form */}
              <FormControl>
                <FormLabel>Card Number</FormLabel>
                <Input type="text" placeholder="Enter card number" required />
              </FormControl>
              <FormControl>
                <FormLabel>Expiry Date</FormLabel>
                <Input type="text" placeholder="MM/YY" required />
              </FormControl>
              <FormControl>
                <FormLabel>CVV</FormLabel>
                <Input type="text" placeholder="Enter CVV" required/>
              </FormControl>
              <Button
                leftIcon={<Icon as={MdPayment} />}
                colorScheme="blue"
                onClick={handlePayment}
                w="100%"
              >
                Pay Now
              </Button>
              <SuccessPopup paymentStatus={paymentStatus} setPaymentStatus={setPaymentStatus} />
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack spacing={4} p={4}>
              {/* UPI form */}
              <FormControl>
                <FormLabel>UPI ID</FormLabel>
                <Input type="text" placeholder="Enter UPI ID" required/>
              </FormControl>
              <Button
                leftIcon={<Icon as={MdPayment} />}
                colorScheme="blue"
                onClick={handlePayment}
                w="100%"
              >
                Pay Now
              </Button>
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default PaymentPopup;
