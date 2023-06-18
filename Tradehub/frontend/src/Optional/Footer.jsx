import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { FaTwitter, FaEnvelope, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <Box as="footer" bg="black" py={8}>
      <Flex direction="column" align="center" justify="center">
        <Flex direction="column" align="center" mb={4}>
          <Text color="white" fontSize="sm" textAlign="center">
            © 2023 Tradehub. All rights reserved.
          </Text>
          <Text color="gray.400" fontSize="sm" textAlign="center">
            All investing involves risk.
          </Text>
        </Flex>
        <Flex wrap="wrap" justify="center" mt={4}>
          <Link
            href="/product/invest"
            color="gray.400"
            fontSize="sm"
            mx={2}
            _hover={{ color: "gold" }}
          >
            Invest
          </Link>
          <Link
            href="/product/crypto"
            color="gray.400"
            fontSize="sm"
            mx={2}
            _hover={{ color: "gold" }}
          >
            Crypto
          </Link>
          <Link
            href="/product/retirement"
            color="gray.400"
            fontSize="sm"
            mx={2}
            _hover={{ color: "gold" }}
          >
            Retirement
          </Link>
          <Link
            href="/product/options"
            color="gray.400"
            fontSize="sm"
            mx={2}
            _hover={{ color: "gold" }}
          >
            Options
          </Link>
          <Link
            href="/product/cash-card"
            color="gray.400"
            fontSize="sm"
            mx={2}
            _hover={{ color: "gold" }}
          >
            Cash Card
          </Link>
          <Link
            href="/learn/snacks"
            color="gray.400"
            fontSize="sm"
            mx={2}
            _hover={{ color: "gold" }}
          >
            Snacks
          </Link>
        </Flex>
        <Flex wrap="wrap" justify="center" mt={4}>
          <Link
            href="/company/about-us"
            color="gray.400"
            fontSize="sm"
            mx={2}
            _hover={{ color: "gold" }}
          >
            About Us
          </Link>
          <Link
            href="/company/blog"
            color="gray.400"
            fontSize="sm"
            mx={2}
            _hover={{ color: "gold" }}
          >
            Blog
          </Link>
          <Link
            href="/company/affiliates"
            color="gray.400"
            fontSize="sm"
            mx={2}
            _hover={{ color: "gold" }}
          >
            Affiliates
          </Link>
          <Link
            href="/company/press"
            color="gray.400"
            fontSize="sm"
            mx={2}
            _hover={{ color: "gold" }}
          >
            Press
          </Link>
          <Link
            href="/company/careers"
            color="gray.400"
            fontSize="sm"
            mx={2}
            _hover={{ color: "gold" }}
          >
            Careers
          </Link>
          <Link
            href="/company/commitments"
            color="gray.400"
            fontSize="sm"
            mx={2}
            _hover={{ color: "gold" }}
          >
            Commitments
          </Link>
        </Flex>
        <Flex wrap="wrap" justify="center" mt={4}>
          <Link
            href="/company/our-customers"
            color="gray.400"
            fontSize="sm"
            mx={2}
            _hover={{ color: "gold" }}
          >
            Our Customers
          </Link>
          <Link
            href="/company/investor-relations"
            color="gray.400"
            fontSize="sm"
            mx={2}
            _hover={{ color: "gold" }}
          >
            Investor Relations
          </Link>
        </Flex>
        <Flex wrap="wrap" justify="center" mt={4}>
          <Link
            href="/support"
            color="gray.400"
            fontSize="sm"
            mx={2}
            _hover={{ color: "gold" }}
          >
            Support
          </Link>
          <Link
            href="/esg"
            color="gray.400"
            fontSize="sm"
            mx={2}
            _hover={{ color: "gold" }}
          >
            ESG
          </Link>
          <Link
            href="/podcast"
            color="gray.400"
            fontSize="sm"
            mx={2}
            _hover={{ color: "gold" }}
          >
            Podcast
          </Link>
          <Link
            href="/investor-index"
            color="gray.400"
            fontSize="sm"
            mx={2}
            _hover={{ color: "gold" }}
          >
            Investor Index
          </Link>
        </Flex>
        <Flex wrap="wrap" justify="center" mt={4}>
          <Link
            href="/legal-terms-and-conditions"
            color="gray.400"
            fontSize="sm"
            mx={2}
            _hover={{ color: "gold" }}
          >
            Terms and Conditions
          </Link>
          <Link
            href="/legal-disclosures"
            color="gray.400"
            fontSize="sm"
            mx={2}
            _hover={{ color: "gold" }}
          >
            Disclosures
          </Link>
          <Link
            href="/legal-privacy"
            color="white"
            fontSize="sm"
            mx={2}
            _hover={{ color: "gold" }}
          >
            Privacy
          </Link>
          <Link
            href="/legal-law-enforcement-requests"
            color="white"
            fontSize="sm"
            mx={2}
            _hover={{ color: "gold" }}
          >
            Law Enforcement Requests
          </Link>
        </Flex>
            <Text fontWeight={"600"} color={"white"} fontSize={"20px"}> Connect to us :</Text>
        <Flex wrap="wrap" justify="center" mt={4}>
          <Link
            href="https://twitter.com/yourusername"
            target="_blank"
            color="white"
            rel="noopener noreferrer"
            mx={2}
            _hover={{ color: "gold" }}
          >
            <FaTwitter size={18} />
          </Link>
          <Link
            href="mailto:your@email.com"
            mx={2}
            color="white"
            _hover={{ color: "gold" }}
          >
            <FaEnvelope size={18} />
          </Link>
          <Link
            href="https://www.youtube.com/channel/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            mx={2}
            color="white"
            _hover={{ color: "gold" }}
          >
            <FaYoutube size={18} />
          </Link>
        </Flex>
        <Flex justify="center" mt={4}>
          <Text color="white" fontSize="sm" textAlign="center">
            PARTICIPATION IS POWER™
          </Text>
        </Flex>
        <Flex justify="center" mt={4}>
          <Text color="gray.400" fontSize="sm" textAlign="center" m="10px">
            Commission-free trading of stocks, <Text display={"inline"} color="gold">ETFs and options refers to $0 commissions for Tradehub Financial</Text> self-directed individual cash or margin brokerage accounts that trade U.S. listed securities and certain OTC securities electronically. Keep in mind, other fees such as trading (non-commission) fees, Gold subscription fees, wire transfer fees, and paper statement fees may apply to your brokerage account. Please see Tradehub Financial’s Fee Schedule to learn more.
          </Text>
        </Flex>
        <Flex justify="center" mt={4}>
          <Text color="gray.400" fontSize="sm" textAlign="center">
            © 2023 Tradehub. All rights reserved.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Footer;
