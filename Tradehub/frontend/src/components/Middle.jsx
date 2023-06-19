import React from "react";
import {
  Box,
  Divider,
  Text,
  css,
  Button,
  Icon,
  Heading,
} from "@chakra-ui/react";
import { AiFillWarning, AiOutlineStar } from "react-icons/ai";
import Image1 from "../images/product_hero_crypto__6ef026ace9c7f7cf1047e15b98117523.png";
import { NavLink } from "react-router-dom";
const Middle = () => {
  const glowingStyle = css`
    color: gold;
    font-size: 100px;
    font-weight: bold;
    text-shadow: 0 0 5px gold, 0 0 10px gold, 0 0 20px gold, 0 0 40px gold,
      0 0 80px gold;
    animation: glowing 2s ease-in-out infinite;

    @keyframes glowing {
      0% {
        opacity: 0.2;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0.2;
      }
    }
  `;

  return (
    <div>
      <Box bg="black" p={5}>
        <Divider mt={-6} borderColor="gold" />
        <Text color="white" fontWeight="bold" fontSize="100px">
          Earn{" "}
          <Text as="span" css={glowingStyle} fontSize="100px">
            4.65%
          </Text>{" "}
          APY <br /> on your cash
        </Text>
        <Text color="white" fontSize="30" mt={4}>
          Earn more than ever on your uninvested cash, FDIC-insured up to <br />{" "}
          $2 million*. Your first 30 days are free, then it’s just $5 a month.
        </Text>
        <Button color="black" bg="gold" size="lg" mt={4}>
          Learn More
        </Button>
        <br />
        <br />
        <Text color="white">
          <Icon as={AiFillWarning} boxSize={6} mr={2} />
          Cash sweep disclosures
        </Text>
        <br />
        <Text color="white" fontSize="sm" mt={2}>
          <Icon as={AiOutlineStar} color="gold" />
          Terms apply. Rate subject to change.
        </Text>
      </Box>
      <Box bg="green" color="white" p={8} mt={2} textAlign="center">
        Get your first stock free. Limitations Apply.
      </Box>
      <Box
        display="flex"
        bg="#7fff00"
        p={10}
        alignItems="center"
        mt={2}
        flexDirection={["column", "column", "row", "row"]}
      >
        <Box flex="3" pr={4}>
          <img
            src="https://cdn.robinhood.com/assets/generated_assets/brand/_next/static/images/product_hero_invest__d3559005213c848c01f05060ac9469e0.png"
            alt="Investing"
          />
        </Box>
        <Box flex="2" textAlign="center" width={"100%"} p="10px">
          <Text color="green" fontWeight="bold" fontSize="45px" mb={4}>
            Investing
          </Text>
          <Text color="black" fontSize="45px" mb={4}>
            Build your <br /> portfolio starting <br /> with just $1
            <br />
          </Text>
          <Text>
            Invest in stocks, options, and ETFs at your pace <br /> and
            commission-free.
          </Text>
          <Text color="black">
            <Icon as={AiFillWarning} boxSize={6} mr={2} />
            Investing Disclosures
          </Text>
          <NavLink to="/invest">
            <Button
              color="black"
              variant="outline"
              colorScheme="black"
              bg="#7fff00"
              size="lg"
              mt={6}
            >
              Start Investing
            </Button>
          </NavLink>
        </Box>
      </Box>
      <Text bg="#7fff00">
        Stocks & funds offered through Tradehub Financial. Other fees may apply.
        See our Fee Schedule for more details.
      </Text>
      <Box
        display="flex"
        bg="#191970"
        p={10}
        alignItems="center"
        mt={2}
        flexDirection={["column", "column", "row", "row"]}
      >
        <Box flex="3" pr={4}>
          <img src={Image1} alt="Investing" />
        </Box>
        <Box flex="2" textAlign="center" width={"100%"} p="10px">
          <Text
            color="rgb(255, 90, 135)"
            fontWeight="bold"
            fontSize="45px"
            mb={-3}
          >
            Crypto
          </Text>
          <Text color="white" fontSize="50px" mb={-2} lineHeight="1.1">
            Dive right in <br /> without the <br /> commission fees
          </Text>

          <Text color="white">
            Invest in stocks, options, and ETFs at your pace <br /> and
            commission-free.
          </Text>
          <Text color="white">
            <Icon as={AiFillWarning} boxSize={6} mr={2} />
            Investing Disclosures
          </Text>
          <NavLink to="/snacks">
            <Button
              color="white"
              variant="outline"
              colorScheme="black"
              bg="#7fff00"
              size="lg"
              mt={6}
            >
              Read Articals
            </Button>
          </NavLink>
        </Box>
      </Box>
      <Text bg="#7fff00">
        Stocks & funds offered through Tradehub Financial. Other fees may apply.
        See our Fee Schedule for more details.
      </Text>
      <Box
        backgroundSize={"cover"}
        overflow={"hidden"}
        margin={"10x"}
        textAlign={"center"}
        bgImage={
          "https://cdn.robinhood.com/assets/generated_assets/brand/_next/static/images/intro-background@1x__a7e1489efad180ee10a6e4d50c56d857.png"
        }
      >
        <Heading fontSize={"60px"} fontWeight={"600"}>
          Join a new generation of investors
        </Heading>
        <NavLink to="/demateaccount">
          <Button mt="30px" p="20px" colorScheme="green" variant={"outline"}>
            Create Demate Account
          </Button>
        </NavLink>
        <Box height={"100vh"}></Box>
      </Box>
    </div>
  );
};

export default Middle;
