import { Box, Image, Heading, Text } from "@chakra-ui/react";

const ArticlePage = ({
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content,
}) => {
  const article = {
    author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    content,
  };

  return (
    <Box p={8} maxWidth="800px" margin="0 auto" color="black">
      <Image src={article.urlToImage} alt="Article Image" mb={4} />

      <Heading as="h1" size="xl" mb={2}>
        {article.title}
      </Heading>

      <Text color="gray.500" fontSize="sm" mb={4}>
        By {article.author} | Published on{" "}
        {new Date(article.publishedAt).toDateString()}
      </Text>

      <Text fontSize="lg" mb={4}>
        {article.description}
      </Text>

      <Text fontSize="md" mb={8}>
        {article.content}
      </Text>

      <Text color="blue.500" fontSize="md" fontWeight="bold">
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </Text>
    </Box>
  );
};

export default ArticlePage;
