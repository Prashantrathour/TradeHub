const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  marketCap: {
    type: String,
    required: true
  },
  stockChange: {
    type: String,
    required: true
  },
  volume: {
    type: String,
    required: true
  },
  PERation: {
    type: Number,
    required: true
  },
  industry: {
    type: String,
    required: true
  },
  logoUrl: {
    type: String,
    required: true
  }
});
const stockmodel= mongoose.model('stocks', stockSchema);
module.exports ={ stockmodel}