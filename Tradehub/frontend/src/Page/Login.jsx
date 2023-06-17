// import React from "react";
// import "../Page/style/Login.scss";
// import { NavLink } from "react-router-dom";


// export default function Login() {
//   return (
//     <div className="main" id="main">
//       <div className="child1">
//         <img
//           src="https://cdn.robinhood.com/assets/generated_assets/webapp/632fcb3e7ed928b2a960f3e003d10b44.jpg"
//           alt="oso"
//         />
//       </div>

//       <div className="robin">
//         <h4 className="robinhood">Login To Robinhood</h4>
//         <div className="form">
//           <form action="">
//             <div className="form-child">
//               <label htmlFor="name"> Email </label>
//               <input className="email" type="text" name="email" />
//             </div>
//             <div className="form-child">
//               <label htmlFor="password"> Password </label>
//               <input className="password" type="password" name="password" />
//             </div>
//             <div className="form-child1">
//               <input type="checkbox" />
//               <label htmlFor="">
//                 <span> Keep me logged in for up to 30 days </span>
//               </label>
//             </div>

//             <div className="form-child">
//               <strong>Forget your Password?</strong>
//               <strong>Forget your Email Address?</strong>
//             </div>
//             <button className="button">Log In</button>
//           </form>
//         </div>
//         <p>
//           Not in Robinhood?
//           <strong>
//             <NavLink to="/signup">create an account</NavLink>
//           </strong>
//         </p>
//       </div>
//     </div>
//   );
// }
import React from "react";
import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Image, Input, Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaLock, FaUser, FaQuestionCircle } from "react-icons/fa";
import { RiAccountPinBoxLine } from "react-icons/ri";

export default function Login() {
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
              <Input type="email" />
            </Flex>
          </FormControl>
          <FormControl id="password" mb={4}>
            <FormLabel>Password</FormLabel>
            <Flex align="center">
              <FaLock size={18} color="gray.400" mr={2} />
              <Input type="password" />
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
          <Button colorScheme="blue" size="lg" width="full" mb={4}>
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
