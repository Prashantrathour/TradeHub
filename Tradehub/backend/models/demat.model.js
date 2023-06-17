const mongoose = require("mongoose")

const dematSchema = new mongoose.Schema({
  accountNumber: String,
  accountHolderName: String,
  balance: Number,
  holdings: [
    {
      stockSymbol: String,
      quantity: Number,
      averagePrice: Number
    }
  ],
  transactions: [
    {
      transactionId: mongoose.Types.ObjectId,
      date: Date,
      type: String,
      stockSymbol: String,
      quantity: Number,
      price: Number,
      totalAmount: Number
    }
  ]
});

// Helper method to update the balance and add a new transaction
dematSchema.methods.updateBalanceAndTransaction = async function (transactionType, stockSymbol, quantity, price) {
  const transactionAmount = quantity * price;
  const update = {
    $inc: { balance: transactionType === 'Buy' ? -transactionAmount : transactionAmount },
    $push: {
      transactions: {
        transactionId: mongoose.Types.ObjectId(),
        date: new Date(),
        type: transactionType,
        stockSymbol,
        quantity,
        price,
        totalAmount: transactionAmount
      }
    }
  };
  return this.updateOne(update).exec();
};

const DematModel = mongoose.model("dmat", dematSchema)

module.exports = {
    DematModel
} 