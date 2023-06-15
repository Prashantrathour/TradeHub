const express = require('express');
const { stockmodel } = require('../models/stock.model');
const stockrouter = express.Router();

// Get all stocks
stockrouter.get('/', async (req, res) => {
  try {
    const stocks = await stockmodel.find();
    res.json(stocks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific stock
stockrouter.get('/:symbol', async (req, res) => {
  try {
    const stock = await stockmodel.findOne({ symbol: req.params.symbol });
    if (!stock) {
      return res.status(404).json({ message: 'Stock not found' });
    }
    res.json(stock);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new stock
stockrouter.post('/', async (req, res) => {
  
  try {
    const stock = await stockmodel.insertMany(req.body);
    const newStock = await stockmodel.find();
    res.status(201).json(newStock);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a stock
stockrouter.patch('/:symbol', async (req, res) => {
  try {
    const stock = await stockmodel.findOne({ symbol: req.params.symbol });
    if (!stock) {
      return res.status(404).json({ message: 'Stock not found' });
    }
    
    if (req.body.symbol) {
      stock.symbol = req.body.symbol;
    }
    if (req.body.companyName) {
      stock.companyName = req.body.companyName;
    }
    if (req.body.marketCap) {
      stock.marketCap = req.body.marketCap;
    }
    if (req.body.stockChange) {
      stock.stockChange = req.body.stockChange;
    }
    if (req.body.volume) {
      stock.volume = req.body.volume;
    }
    if (req.body.PERation) {
      stock.PERation = req.body.PERation;
    }
    if (req.body.industry) {
      stock.industry = req.body.industry;
    }
    if (req.body.logoUrl) {
      stock.logoUrl = req.body.logoUrl;
    }
    
    const updatedStock = await stock.save();
    res.json(updatedStock);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a stock
stockrouter.delete('/:symbol', async (req, res) => {
  try {
    const stock = await stockmodel.findOne({ symbol: req.params.symbol });
    if (!stock) {
      return res.status(404).json({ message: 'Stock not found' });
    }
    await stock.remove();
    res.json({ message: 'Stock deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = {stockrouter};