import { Box, Button, Heading, Input } from "@chakra-ui/react";
import React from "react";
import Article from "../Components/Artical";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function Snacks() {
  return (
    <Box bg="#E5F8F6">
      <Box color="#FF4747" p="20px"   m="10px" textAlign="center">
        <Heading fontSize="100px" fontWeight={"1000"}  textOverflow={"revert-layer"}>Your daily dose of financial news.</Heading>
      </Box>
      <Box>
        <Heading ml="20px" fontSize={"20px"} fontWeight={"400"} textOverflow={"revert-layer"}>
        The 3-minute newsletter with fresh takes on the financial news you need to start your day.
        </Heading>
      </Box>
      <Box p="30px" width={{ base: "100%", md: "500px" }} display="flex" alignItems="center" gap={0}>
  <Input
    p="30px"
    type="text"
    placeholder="Search Articles"
    borderRadius="full"
    bg="white"
    _placeholder={{ color: 'gray.400' }}
    flex="1"
  />
  <Button
    p="30px"
    bg="transparent"
    borderRadius="full"
    ml={2}
    borderWidth={2}
    borderColor="gray.400"
    _hover={{ bg: 'gray.100' }}
    _focus={{ outline: 'none' }}
  >
    <ArrowForwardIcon bgSize="30px" />
  </Button>
</Box>
      <Article/>
    </Box>
  );
}

export default Snacks;
