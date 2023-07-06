import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Image, Heading, Text,Button,ButtonGroup } from "@chakra-ui/react";
import ArticlePage from "./Articals";
import {useDispatch, useSelector} from "react-redux"
import { getarticals } from "../Redux/Articals/action";
import StockDataLoader from "../Page/Loader"
const Article = ({ company }) => {
  const dispatch = useDispatch()
  const {article,isloading,isError}=useSelector((store)=>store.articalreducer)
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(5);

  useEffect(() => {
    dispatch(getarticals(company))
  }, [company]);

  // Calculate pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = article?.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (!article) {
    return <StockDataLoader/>;
  }
console.log(article,isError,currentArticles)
  return (
    <Box>
   <Box>
  {currentArticles?.map((article) => (
        <ArticlePage key={Math.random()} {...article} />
      ))} 

      {/* Pagination */}
      <Box mt={4} display="flex" justifyContent="center">
        {article && (
          <Pagination
            currentPage={currentPage}
            itemsPerPage={articlesPerPage}
            totalItems={article.length}
            onPageChange={paginate}
          />
        )}
      </Box>
    </Box>
    </Box>
  );
};

export default Article;

const Pagination = ({ currentPage, itemsPerPage, totalItems, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <Button
            key={i}
            colorScheme={currentPage === i ? "blue" : "gray"}
            onClick={() => handleClick(i)}
            size="sm"
          >
            {i}
          </Button>
        );
      }
    } else {
      // Display first and last page buttons
      pageNumbers.push(
        <Button
          key={1}
          colorScheme={currentPage === 1 ? "blue" : "gray"}
          onClick={() => handleClick(1)}
          size="sm"
        >
          1
        </Button>
      );
      if (currentPage >= 4) {
        pageNumbers.push(<Button key="start-dots" disabled size="sm">...</Button>);
      }

      // Display current page and nearby pages
      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        if (i > 1 && i < totalPages) {
          pageNumbers.push(
            <Button
              key={i}
              colorScheme={currentPage === i ? "blue" : "gray"}
              onClick={() => handleClick(i)}
              size="sm"
            >
              {i}
            </Button>
          );
        }
      }

      if (currentPage <= totalPages - 3) {
        pageNumbers.push(<Button key="end-dots" disabled size="sm">...</Button>);
      }
      pageNumbers.push(
        <Button
          key={totalPages}
          colorScheme={currentPage === totalPages ? "blue" : "gray"}
          onClick={() => handleClick(totalPages)}
          size="sm"
        >
          {totalPages}
        </Button>
      );
    }

    return pageNumbers;
  };

  return (
    <Box>
      <ButtonGroup isAttached>
        <Button
          isDisabled={currentPage === 1}
          onClick={() => handleClick(currentPage - 1)}
          size="sm"
        >
          Previous
        </Button>
        {renderPageNumbers()}
        <Button
          isDisabled={currentPage === totalPages}
          onClick={() => handleClick(currentPage + 1)}
          size="sm"
        >
          Next
        </Button>
      </ButtonGroup>
    </Box>
  );
};

