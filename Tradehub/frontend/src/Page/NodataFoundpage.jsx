import { Box, Heading, Text, Image, ScaleFade } from '@chakra-ui/react';

const NoDataFoundPage = () => {
  return (
    <Box textAlign="center" mt={10}>
      <ScaleFade initialScale={0.9} in={true}>
        <Heading as="h1" fontSize="4xl" mb={4}>
          No Data Found
        </Heading>
        <Text fontSize="xl" color="gray.600" mb={6}>
          We couldn't find any data matching your search criteria.
        </Text>
        <Image src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-12620.jpg?w=740&t=st=1687709144~exp=1687709744~hmac=3c132bb33ff2ec21435aa2553df41ca65dee89d1ad578a1e0c90ed7d0f8d899b" alt="No Data" maxW="400px" mx="auto" />
      </ScaleFade>
    </Box>
  );
};

export default NoDataFoundPage;
