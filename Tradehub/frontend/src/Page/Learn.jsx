import { Box, Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillWarning } from "react-icons/ai";

function Learn() {
  return (
    <Box>
      <Box
        display="flex"
        bg="#7fff00"
        p={10}
        alignItems="center"
        mt={2}
        flexDirection={["column", "column", "row", "row"]}
      >
        <Box flex="2" textAlign="center" width={"100%"} p="10px">
          <Text color="green" fontWeight="bold" fontSize="45px" mb={4}>
            Investing
          </Text>
          <Text color="black" fontSize="45px" mb={4}>
            The building blocks
            <br /> of your financial
            <br /> journey
            <br />
          </Text>
          <Text>What you need to know about investing from the get-go...</Text>
          <Text color="black">
            <Icon as={AiFillWarning} boxSize={6} mr={2} />
            Investing Disclosures
          </Text>
          <Button
            color="black"
            variant="outline"
            colorScheme="black"
            bg="#7fff00"
            size="lg"
            mt={6}
          >
            Learn More
          </Button>
        </Box>

        <Box flex="3" pr={4}>
          <img
            src="https://learn.robinhood.com/_next/static/images/hero-journey__c58375aab2212723e510a286b42f9567.svg"
            alt="Investing"
          />
        </Box>
      </Box>
      <Box width={"100%"} textAlign={"center"} color={"black"} p="20px" border={"1px solid gray"}>
        <Heading fontSize={"30px"} as={"strong"}>
          Investing 101
        </Heading>
        <br />
        <Heading fontSize={"30px"} as={"strong"}>
          A good place to start. Get the
        </Heading>

        <br />
        <Heading fontSize={"30px"} as={"strong"}>
          low-down before you dive in.
        </Heading>

        <br />
      </Box>
     
      <Flex justifyContent={"center"} gap={"15px"}  flexWrap={"wrap"} align={"center"}  >
        <Box
          bgImage={
            "https://images.ctfassets.net/lnmc2aao6j57/4vOyU5fQQQBR47jNsxKJ0j/3e6bd784e9d3b3f8a774e5434719918e/What_is_an_investment.svg"
          }
          height={"550px"}
          bgRepeat={"no-repeat"}
        ><Box flex="2" textAlign="left" width={"100%"} p="10px" color="black">
        <Text color="green" fontWeight="600" fontSize="30px" mb={4} maxW={"300px"} textOverflow={"revert-layer"}>
          What is an investment?
        </Text>
        <Text color="black" fontSize="20px" mb={4} maxW={"300px"} textOverflow={"revert-layer"}>
          An investment is an asset bought with the expectation that it will
          generate some future income or profit.
        </Text>
      </Box></Box>
        <Box
          bgImage={
            "https://images.ctfassets.net/lnmc2aao6j57/WrNrmyaBTj9xZEDfOdt51/fc88232e5e5bd8c33a34536d11687b90/What_is_a_stock.svg"
          }
          height={"550px"}
          bgRepeat={"no-repeat"}
      
        >
            <Box flex="2" textAlign="left" width={"100%"} p="10px" color="black">
        <Text color="green" fontWeight="600" fontSize="30px" mb={4} maxW={"300px"} textOverflow={"revert-layer"}>
              What is a stock?
            </Text>
            <Text color="black" fontSize="20px" mb={4} maxW={"300px"} textOverflow={"revert-layer"}>
              A stock is a unit of ownership in a company.
            </Text>
          </Box>
        </Box>
        <Box
          bgImage={
            "https://images.ctfassets.net/lnmc2aao6j57/tObDrvkiogKjGNhZlAggx/69c9a480d617d6fa8e27169503cbaae6/What_is_the_stock_market.svg"
          }
       
          height={"550px"}
          bgRepeat={"no-repeat"}
        
        >
     <Box flex="2" textAlign="left" width={"100%"} p="10px" color="black">
        <Text color="green" fontWeight="600" fontSize="30px" mb={4} maxW={"300px"} textOverflow={"revert-layer"}>
              What is the stock market?
            </Text>
            <Text color="black" fontSize="20px" mb={4} maxW={"300px"} textOverflow={"revert-layer"}>
              The stock market is where buyers and sellers come together to
              trade shares in eligible companies.
            </Text>
            </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default Learn;
