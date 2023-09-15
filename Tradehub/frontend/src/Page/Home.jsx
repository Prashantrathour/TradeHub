import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import StockExchangeGraph from './Stockexchangegraph'
import StocksPage from './Stockpage'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { setLoginStatus, setToken, setUser } from '../Redux/uselogin/action'

function Home() {
  
  return (
    <Box>
      <StocksPage/>
    </Box>
  )
}

export default Home