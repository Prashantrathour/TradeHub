import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Heading, Text, Link, Icon } from '@chakra-ui/react';
import { FiAlertTriangle } from 'react-icons/fi';

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
        <Text>
          Go back to the <Link as={RouterLink} to="/">home page</Link>.
        </Text>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
