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
          `https://newsapi.org/v2/everything?q=${company}&from=2023-06-13&apiKey=10050605ad694f1f9108a5e7f52e779c` 
        );
        console.log(response.data)
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
