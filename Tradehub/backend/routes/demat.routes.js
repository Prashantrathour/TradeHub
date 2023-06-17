const express = require("express");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const { DematModel } = require("../models/demat.model");
const { auth } = require("../middleware/auth.middleware");
// require("dotenv").config()
const dematRouter = express.Router();


// Apply authentication middleware to all routes
dematRouter.use(auth);

// Get user's demat account
dematRouter.get("/", async (req, res) => {
  try {
    // Retrieve the logged-in user's ID from the request object
    const userId = req.user.userID;

    // Find the demat account associated with the user ID
    const dematAccount = await DematModel.findOne({ user: userId });

    if (!dematAccount) {
      return res.status(404).json({ message: "Demat account not found" });
    }

    res.json(dematAccount);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create demat account for the logged-in user
dematRouter.post("/account", async (req, res) => {
  try {
    // Retrieve the logged-in user's ID from the request object
    const userId = req.user.userID;

    // Check if the user already has a demat account
    const existingAccount = await DematModel.findOne({ user: userId });
    if (existingAccount) {
      return res.status(400).json({ message: "User already has a demat account" });
    }

    // Create a new demat account
    const dematAccount = new DematModel({ user: userId });
    await dematAccount.save();

    res.status(201).json(dematAccount);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update demat account for the logged-in user
dematRouter.patch("/account/:id", async (req, res) => {
  try {
    // Retrieve the logged-in user's ID from the request object
    const userId = req.user.userID;

    // Find the demat account associated with the user ID
    const dematAccount = await DematModel.findOne({ user: userId });

    if (!dematAccount) {
      return res.status(404).json({ message: "Demat account not found" });
    }

    // Update the demat account fields based on the request body
    if (req.body.holdings) {
      dematAccount.holdings = req.body.holdings;
    }

    // Save the updated demat account
    const updatedAccount = await dematAccount.save();

    res.json(updatedAccount);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete demat account for the logged-in user
dematRouter.delete("/account/:id", async (req, res) => {
  try {
    // Retrieve the logged-in user's ID from the request object
    const userId = req.user.userID;

    // Find and delete the demat account associated with the user ID
    const deletedAccount = await DematModel.findOneAndDelete({ user: userId });

    if (!deletedAccount) {
      return res.status(404).json({ message: "Demat account not found" });
    }

    res.json({ message: "Demat account deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

  dematRouter.post('/buy', async (req, res) => {
    try {
      // Extract the data from the request body
      const { accountNumber, stockSymbol, quantity, price } = req.body;
  
      // Find the demat account based on the account number
      const dematAccount = await DematModel.findOne({ accountNumber });
  
      if (!dematAccount) {
        return res.status(404).json({ error: 'Demat account not found' });
      }
  
      // Add the stock purchase to the holdings
      dematAccount.holdings.push({
        stockSymbol,
        quantity,
        averagePrice: price
      });
  
      // Update the balance and add a transaction for the purchase
      await dematAccount.updateBalanceAndTransaction('Buy', stockSymbol, quantity, price);
  
      res.status(200).json(dematAccount);
    } catch (error) {
      console.error('Error buying stocks:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  // Sell stocks route
  dematRouter.post('/sell', async (req, res) => {
    try {
      // Extract the data from the request body
      const { accountNumber, stockSymbol, quantity, price } = req.body;
  
      // Find the demat account based on the account number
      const dematAccount = await DematModel.findOne({ accountNumber });
  
      if (!dematAccount) {
        return res.status(404).json({ error: 'Demat account not found' });
      }
  
      // Find the stock holding to sell
      const holding = dematAccount.holdings.find((holding) => holding.stockSymbol === stockSymbol);
  
      if (!holding || holding.quantity < quantity) {
        return res.status(400).json({ error: 'Insufficient stock quantity' });
      }
  
      // Update the quantity and average price of the stock holding
      holding.quantity -= quantity;
  
      if (holding.quantity === 0) {
        // Remove the holding if the quantity becomes zero
        dematAccount.holdings = dematAccount.holdings.filter((holding) => holding.quantity > 0);
      }
  
      // Update the balance and add a transaction for the sale
      await dematAccount.updateBalanceAndTransaction('Sell', stockSymbol, quantity, price);
  
      res.status(200).json(dematAccount);
    } catch (error) {
      console.error('Error selling stocks:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });

module.exports={
    dematRouter
} 