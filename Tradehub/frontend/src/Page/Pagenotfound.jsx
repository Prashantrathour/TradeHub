import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Heading, Text, Link, Icon, Image } from '@chakra-ui/react';
import { FiAlertTriangle } from 'react-icons/fi';
import { FaHome } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <Container maxW="md" py={8}>
      <Box textAlign="center">
        <Icon as={FiAlertTriangle} boxSize={8} color="red.500" />
        <Heading as="h1" size="lg" my={4}>
          Page Not Found
        </Heading>
        <Text>
          Sorry, the page you are looking for does not exist.
        </Text>
        <Text textAlign={"center"} >
          Go back to the <Link  as={RouterLink} to="/"><strong color='green'>Home Page</strong></Link>.
        </Text>
        <Image src='https://img.freepik.com/free-vector/404-error-with-people-holding-numbers-concept-illustration_114360-7903.jpg?size=626&ext=jpg&ga=GA1.2.1215260059.1683710952&semt=ais'/>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
