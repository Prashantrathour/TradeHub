import { useState } from 'react';
import { Tabs, TabList, TabPanel, TabPanels, Tab } from '@chakra-ui/react';

function StockComponent() {
  const [tabIndex, setTabIndex] = useState(0);
  const [buyValue, setBuyValue] = useState(1);
  const [sellValue, setSellValue] = useState(1);

  const handleBuyChange = (event) => {
    
        setBuyValue(event.target.value);

    
  };

  const handleSellChange = (event) => {
  
        setSellValue(event.target.value);

    
  };

  const handleTabChange = (index) => {
    setTabIndex(index);
  };

  const handleBuyClick = () => {
    // Perform buy logic here
    console.log(`Buy value: ${buyValue}`);
  };

  const handleSellClick = () => {
    // Perform sell logic here
    console.log(`Sell value: ${sellValue}`);
  };

  return (
    <Tabs colorScheme="teal" onChange={handleTabChange} index={tabIndex}>
      <TabList>
        <Tab>Buy</Tab>
        <Tab>Sell</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <h2>Buy Stocks</h2>
          <input
            type="number"
            value={buyValue}
            onChange={handleBuyChange}
            placeholder="Enter quantity"
          />
          <button onClick={handleBuyClick} p="10px" varient={"outline"}>Buy</button>
        </TabPanel>

        <TabPanel>
          <h2>Sell Stocks</h2>
          <input
            type="number"
            value={sellValue}
            onChange={handleSellChange}
            placeholder="Enter quantity"
          />
          <button p="10px" varient={"outline"} onClick={handleSellClick}>Sell</button>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default StockComponent;
