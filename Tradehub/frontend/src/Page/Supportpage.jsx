import React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  Heading,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";

const SupportPage = () => {
  const supportData = [
    {
      category: "Getting started",
      topics: [
        "What you need to get started",
        "Investments you can make on Robinhood",
        "Open my account",
        "View All",
      ],
    },
    {
      category: "My account and login",
      topics: [
        "Your information",
        "Account security",
        "How to sign in to Robinhood from a new device",
        "View All",
      ],
    },
    {
      category: "Spending",
      topics: [
        "How are Cash Management and the Robinhood spending account different?",
        "Spending account",
        "Cash Management",
      ],
    },
    {
      category: "Investing",
      topics: [
        "Investing with Options",
        "Investing with Stocks: The Basics",
        "Investing with Stocks: Special Cases",
        "View All",
      ],
    },
    {
      category: "Retirement",
      topics: [
        "IRA overview",
        "IRA contributions",
        "IRA contribution adjustments",
        "View All",
      ],
    },
    {
      category: "Robinhood Wallet",
      topics: [
        "Robinhood Wallet",
        "Protect your wallet",
        "Send, receive, and swap crypto",
        "View All",
      ],
    },
    {
      category: "Bank transfers and linking",
      topics: [
        "Link your accounts",
        "Deposit money into your Robinhood account",
        "Withdraw money from Robinhood",
        "View All",
      ],
    },
    {
      category: "Documents and taxes",
      topics: [
        "About tax documents",
        "How to access your tax documents",
        "How to read your 1099",
        "View All",
      ],
    },
    {
      category: "General questions",
      topics: [
        "How to contact support",
        "Robinhood Referrals Program",
        "Check your Portfolio",
        "View All",
      ],
    },
    {
      category: "IPO access",
      topics: [
        "About IPO access",
        "How to sign up for IPO access",
        "How to request IPO shares",
        "View All",
      ],
    },
  ];

  return (
    <Box p={4}>
      <Box width={"100%"} textAlign={"left"}>
        <Heading>Hello! How can we help?</Heading>
      </Box>
      <Box width={"40%"} textAlign={"left"} mt="10px">
        <Input type="text" placeholder="Search" />
      </Box>
      <SimpleGrid templateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr','1fr 1fr 1fr 1fr']}
        gap={4} mt="20px" > 

      
      {supportData.map((category, index) => (
        <Box key={index} mb={4} width={"100%"} textOverflow={"ellipsis"} textAlign={"left"} boxShadow= "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" p="10px" borderRadius={"20px"}>
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            {category.category}
          </Text>
          {category.topics.map((topic, idx) => (
            <Link
              key={idx}
              color="blue.500"
              mb={1}
              display="block"
              _hover={{ textDecoration: "underline" }}
              transition="color 0.3s"
            >
              {topic}
            </Link>
          ))}
        </Box>
      ))}
      </SimpleGrid>
    </Box>
  );
};

export default SupportPage;
