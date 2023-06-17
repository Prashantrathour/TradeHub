import React from "react";
import "../Page/style/Signup.scss";

export default function Signup() {
  return (
    <div className="signup" id="signup">
      <div className="signup-left">
        <div className="left-top">
          <h3>Robinhood</h3>
        </div>
        <div className="heading">
          <h2>Create your login</h2>
        </div>
        <div className="para">
          <p>
            We'll need your name, email address, and a unique password. You'll
            use this login to access Robinhood next time.
          </p>
        </div>
        <div className="bottom-rocket">
          <img
            src="https://cdn.robinhood.com/app_assets/odyssey/rockets.png"
            alt=""
          />
        </div>
      </div>
      <div className="signup-mid">
        <div className="mid-loho">
          <img src="" alt="" />
        </div>
        <div className="mid-top">
          <img
            src="https://cdn.robinhood.com/assets/generated_assets/webapp/47b5bed44e945bf03fd845eb90ca3922.png"
            alt=""
          />
        </div>
        <div className="mid-heading">
          <h1>Join today and get your free stock from leading companies.</h1>
        </div>
        <div className="mid-para">
          <p>
            Jump start your investment journey and invest with more confidence.
          </p>
          <p>Certain limitations apply.</p>
        </div>
      </div>
      <div className="signup-right">
        <div className="signup-form">
          <div className="form">
            <h2 className="firstline">
              Enter your first and last name as they appear on your government
              ID.
            </h2>
            <form action="">
              <div className="top">
                <div className="signup-child">
                  <div className="signup-firstname">
                    <input type="text" placeholder="First name" />
                  </div>
                  <div className="signup-lastname">
                    <input type="text" placeholder="Last name" />
                  </div>
                </div>
                <div className="signup-email">
                  <input type="text" placeholder="Email address" />
                </div>
                <div className="signup-password">
                  <input
                    type="text"
                    placeholder="Password(min. 10 characters)"
                  />
                </div>
                <div className="signup-para">
                  {/* <p>
                    Sorry! We're not currently able to accept applications from
                    outside the United States.
                  </p> */}
                </div>
                <div className="signup-para2">
                  <p>
                    By continuing, you agree to the Robinhood User Account
                    Agreement and Privacy Policy .
                  </p>
                </div>
              </div>
              <div className="continue-btn-div">
                <button className="continue-btn">Continue</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
// import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
// import { EmailIcon, LockIcon, StarIcon, ViewIcon } from "@chakra-ui/icons";

// export default function Signup() {
//   return (
//     <Box display="flex" flexWrap="wrap" id="signup" >
//       <Box flex="1" p="4" bg={"rgb(130, 200, 210)"}>
//         <Box>
//           <Text fontSize={{ base: "xl", md: "2xl" }}>Tradehub</Text>
//         </Box>
//         <Box>
//           <Text fontSize={{ base: "2xl", md: "3xl" }} mt="4">Create your login</Text>
//         </Box>
       
//         <Box mt="4">
//           <img
//             src="https://cdn.robinhood.com/app_assets/odyssey/rockets.png"
//             alt=""
//           />
//         </Box>
//       </Box>
//       <Box flex="1" p="4" bg={"rgb(90, 230, 26)"}>
//         <Box mt="4">
//           <img
//             src="https://cdn.robinhood.com/assets/generated_assets/webapp/47b5bed44e945bf03fd845eb90ca3922.png"
//             alt=""
//           />
//         </Box>
//         <Box mt="4">
//           <Text fontSize={{ base: "xl", md: "3xl" }}>Join today and get your free stock from leading companies.</Text>
//         </Box>
//         <Box mt="4">
//           <Text>
//             Jump start your investment journey and invest with more confidence.
//           </Text>
//           <Text>Certain limitations apply.</Text>
//         </Box>
//       </Box>
//       <Box flex="1" p="4">
//         <Box>
//           <Text fontSize={{ base: "xl", md: "2xl" }}>
//             Enter your first and last name as they appear on your government
//             ID.
//           </Text>
//         </Box>
//         <form>
//           <Stack spacing="4" mt="4">
//             <Stack direction={{ base: "column", md: "row" }} spacing="4">
//               <Input flexBasis={{ base: "100%", md: "50%" }} placeholder="First name" />
//               <Input flexBasis={{ base: "100%", md: "50%" }} placeholder="Last name" />
//             </Stack>
//             <Input leftIcon={<EmailIcon />} type="email" placeholder="Email address" />
//             <Input leftIcon={<LockIcon />} type="password" placeholder="Password (min. 10 characters)" rightIcon={<ViewIcon />} />
//             <Text>
//               By continuing, you agree to the Tradehub User Account Agreement and Privacy Policy.
//             </Text>
//             <Box>
//               <Button colorScheme="blue" width="100%">Continue</Button>
//             </Box>
//           </Stack>
//         </form>
//       </Box>
//     </Box>
//   );
// }



