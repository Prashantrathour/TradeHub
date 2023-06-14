import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Image, Heading, Text } from "@chakra-ui/react";
import ArticlePage from "../components/Articals";

const Article = ({company}) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${company}&from=2023-06-12&limit=5&apiKey=a99fb85ded474d65a10074ed4d1b8fae` // Replace with your API endpoint
        );
        setArticle(response.data.articles);
       
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticle();
  }, [company]);

  if (!article) {
    return <div>Loading...</div>;
  }
  console.log(article)
  return (
    <Box>

        {
    article.map((article)=><ArticlePage {...article}/>)
            
        }
    </Box>
  );
};

export default Article;
