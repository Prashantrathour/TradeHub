import { Box, Heading, Text, Image } from '@chakra-ui/react';

const ErrorPage = () => {
  return (
    <Box textAlign="center" mt={"100px"}>
      <Heading as="h1" fontSize="4xl" mb={4}>
        Oops! Something went wrong.
      </Heading>
      <Text fontSize="xl" color="gray.600" mb={6}>
        We apologize for the inconvenience. Please try again later.
      </Text>
      <Image src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?size=626&ext=jpg&ga=GA1.2.1215260059.1683710952&semt=ais" alt="Error" maxW="400px" mx="auto" />
    </Box>
  );
};

export default ErrorPage;
