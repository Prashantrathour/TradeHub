const express = require('express');
const { StockModel } = require('../models/stock.model');
const { auth } = require('../middleware/auth.middleware');
const stockRouter = express.Router();


// stockRouter.use(auth)
// Get all stocks
stockRouter.get('/', async (req, res) => {
  try {
    const stocks = await StockModel.find();
    res.json(stocks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific stock by symbol
stockRouter.get('/:Symbol', async (req, res) => {
  try {
    const stockSymbol = await StockModel.find({ Symbol: req.params.Symbol });
   if (!stockSymbol) {
      return res.status(404).json({ message: 'Stock not found' });
   
    }else if(stockSymbol){
        res.json(stockSymbol)    
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



module.exports = {stockRouter};