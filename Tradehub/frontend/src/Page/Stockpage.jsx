import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  Select,
  Text,
  Button,
  Flex,
  Spinner,
  useColorModeValue
} from '@chakra-ui/react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const StocksPage = () => {
  const [stocks, setStocks] = useState([]);
  const [filterSymbol, setFilterSymbol] = useState('');
  const [filterIndustry, setFilterIndustry] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [stocksPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchStocks();
  }, [currentPage]); // Trigger fetchStocks() whenever currentPage changes

  const fetchStocks = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASEURL}/stocks?limit=${stocksPerPage}&page=${currentPage}`
      );
      setStocks(response.data.result);
      setTotalPages(response.data.totalpage);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleFilterSymbolChange = (event) => {
    setFilterSymbol(event.target.value);
  };

  const handleFilterIndustryChange = (event) => {
    setFilterIndustry(event.target.value);
  };

  const handlePaginationClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredStocks = stocks?.filter((stock) => {
    if (filterSymbol && stock.symbol.toLowerCase().indexOf(filterSymbol.toLowerCase()) === -1) {
      return false;
    }
    if (
      filterIndustry &&
      stock.industry.toLowerCase().indexOf(filterIndustry.toLowerCase()) === -1
    ) {
      return false;
    }
    return true;
  });

  const colorMode = useColorModeValue('green.500', 'red.500');

  return (
    <Container maxW="container.lg" mt={10}>
      <Box mb={5}>
        <Input
          placeholder="Filter by symbol"
          value={filterSymbol}
          onChange={handleFilterSymbolChange}
        />
        <Input
          placeholder="Filter by industry"
          value={filterIndustry}
          onChange={handleFilterIndustryChange}
          mt={2}
        />
      </Box>
      <Box overflowX="auto">
        <Table variant="striped" size="sm" style={{ minWidth: '100%' }}>
          <Thead>
            <Tr>
              <Th>Symbol</Th>
              <Th>Company Name</Th>
              <Th>Market Cap</Th>
              <Th>Stock Change</Th>
              <Th>Volume</Th>
              <Th>P/E Ratio</Th>
              <Th>Industry</Th>
              <Th>Logo</Th>
            </Tr>
          </Thead>
          <Tbody>
            {isLoading ? (
              <Tr>
                <Td colSpan={8} textAlign="center">
                  <Spinner size="sm" />
                </Td>
              </Tr>
            ) : (
              filteredStocks?.map((stock) => (
                <Tr key={stock.symbol}>
                  <Td>{stock.symbol}</Td>
                  <Td style={{ whiteSpace: 'nowrap', overflowX: 'scroll' }}>{stock.companyName}</Td>
                  <Td>{stock.marketCap}</Td>
                  <Td>
                    <Text color={stock.stockChange.includes('+') ? 'green.500' : 'red.500'}>
                      {stock.stockChange}
                    </Text>
                  </Td>
                  <Td>{stock.volume}</Td>
                  <Td>{stock.PERation}</Td>
                  <Td>{stock.industry}</Td>
                  <Td>
                    <NavLink to={`/stockdetail/${stock.symbol}`}>
                      <img
                        src={`https://companiesmarketcap.com/img/company-logos/64/${stock.symbol}.webp`}
                        alt={stock.companyName}
                        width="50"
                        height="50"
                      />
                    </NavLink>
                  </Td>
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      </Box>
      {!isLoading && filteredStocks.length === 0 && (
        <Box mt={4}>
          <Text>No stocks found.</Text>
        </Box>
      )}
      {!isLoading && (
        <Flex justify="center" mt={4}>
          <Button
            key="previous"
            variant="outline"
            colorScheme={currentPage === 1 ? 'gray' : colorMode}
            onClick={() => handlePaginationClick(currentPage - 1)}
            mx={1}
            isDisabled={currentPage === 1}
          >
            Previous
          </Button>
         
          <Button
            key="next"
            variant="outline"
            colorScheme={currentPage === totalPages ? 'gray' : colorMode}
            onClick={() => handlePaginationClick(currentPage + 1)}
            mx={1}
            isDisabled={currentPage === totalPages}
          >
            Next
          </Button>
        </Flex>
      )}
    </Container>
  );
};

export default StocksPage;
