import React from "react";
import "../Page/style/Signup.scss";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data object to be sent in the request
    const data = {
      firstName,
      lastName,
      email,
      password,
    };

    try {
      // Make an API request using axios or any other HTTP library
      const res = await axios.post(
        `${process.env.REACT_APP_BASEURL}/users/register`,
        data
      );
      console.log(res.data);
      //  Handle the response as needed
      toast({
        title: res.data.msg,
        description: "Login to continue...",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } catch (error) {
      console.log(error.response.data.msg);
      toast({
        title: error.response.data.msg,
        description: "please enter write credentials...",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });

      if (error.response.data.state) {
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    }
  };

  return (
    <div className="signup" id="signup">
      <div className="signup-left">
        <div className="left-top">
          <h3>TradeHub</h3>
        </div>
        <div className="heading">
          <h2>Create your login</h2>
        </div>
        <div className="para">
          <p>
            We'll need your name, email address, and a unique password. You'll
            use this login to access TradeHub next time.
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
            <form onSubmit={handleSubmit}>
              <div className="top">
                <div className="signup-child">
                  <div className="signup-firstname">
                    <input
                      type="text"
                      placeholder="First name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="signup-lastname">
                    <input
                      type="text"
                      placeholder="Last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="signup-email">
                  <input
                    type="text"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="signup-password">
                  <input
                    type="password"
                    placeholder="Password(min. 10 characters)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="signup-para2">
                  <p>
                    By continuing, you agree to the Robinhood User Account
                    Agreement and Privacy Policy .
                  </p>
                </div>
              </div>
              <div className="continue-btn-div">
                <button className="continue-btn" type="submit">
                  Continue
                </button>
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



