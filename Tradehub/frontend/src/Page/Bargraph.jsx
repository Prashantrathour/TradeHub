import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StockGraph = ({ data }) => {
  const formattedData = Object.entries(data)?.map(([date, stockData]) => ({
    date,
    low: parseFloat(stockData['3. low']),
    high: parseFloat(stockData['2. high']),
    open: parseFloat(stockData['1. open']),
    close: parseFloat(stockData['4. close']),
    adjustedClose: parseFloat(stockData['5. adjusted close']),
    volume: parseFloat(stockData['6. volume']),
    dividend: parseFloat(stockData['7. dividend amount']),
    splitCoefficient: parseFloat(stockData['8. split coefficient']),
  }));

  return (
    <Box p={4} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
      <Flex align="center" justify="space-between" mb={4}>
        <Heading size="md">Stock Data</Heading>
      </Flex>
      <Box width="100%" overflow={"scroll"} >
        <ResponsiveContainer width={900} height={400} >
          <LineChart data={formattedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="low" stroke="#8884d8" name="Low" />
            <Line type="monotone" dataKey="high" stroke="#82ca9d" name="High" />
            <Line type="monotone" dataKey="open" stroke="#ffc658" name="Open" />
            <Line type="monotone" dataKey="close" stroke="#ff3d00" name="Close" />
            <Line type="monotone" dataKey="adjustedClose" stroke="#00bcd4" name="Adjusted Close" />
            <Line type="monotone" dataKey="volume" stroke="#9c27b0" name="Volume" />
            <Line type="monotone" dataKey="dividend" stroke="#4caf50" name="Dividend" />
            <Line type="monotone" dataKey="splitCoefficient" stroke="#607d8b" name="Split Coefficient" />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default StockGraph;
