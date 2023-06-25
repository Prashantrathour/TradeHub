import { Box, Spinner } from '@chakra-ui/react';
import {Vortex} from "react-loader-spinner"
const StockDataLoader = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="50vh">
     <Vortex
  visible={true}
  height="80"
  width="80"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
/>
    </Box>
  );
};

export default StockDataLoader;
