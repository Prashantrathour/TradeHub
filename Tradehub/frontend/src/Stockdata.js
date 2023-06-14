const  stockdata=[
    {
      "symbol": "AAPL",
      "name": "Apple Inc.",
      "price": 148.99,
      "quantity": 100,
      "marketCap": "2.5T",
      "sector": "Technology",
      "imagelogo": "https://example.com/apple_logo.png",
      "description": "Apple Inc. designs, manufactures, and markets consumer electronics and software products."
    },
    {
      "symbol": "AMZN",
      "name": "Amazon.com, Inc.",
      "price": 3456.32,
      "quantity": 50,
      "marketCap": "1.7T",
      "sector": "Consumer Cyclical",
      "imagelogo": "https://example.com/amazon_logo.png",
      "description": "Amazon.com, Inc. engages in the retail sale of consumer products and subscriptions in North America and internationally."
    },
    {
      "symbol": "GOOGL",
      "name": "Alphabet Inc.",
      "price": 2815.32,
      "quantity": 75,
      "marketCap": "1.9T",
      "sector": "Technology",
      "imagelogo": "https://example.com/alphabet_logo.png",
      "description": "Alphabet Inc. is an American multinational conglomerate that specializes in Internet-related services and products."
    },
    {
      "symbol": "MSFT",
      "name": "Microsoft Corporation",
      "price": 265.32,
      "quantity": 120,
      "marketCap": "2.1T",
      "sector": "Technology",
      "imagelogo": "https://example.com/microsoft_logo.png",
      "description": "Microsoft Corporation develops, licenses, and supports software, services, devices, and solutions worldwide."
    },
    {
      "symbol": "TSLA",
      "name": "Tesla, Inc.",
      "price": 630.45,
      "quantity": 40,
      "marketCap": "656.2B",
      "sector": "Consumer Cyclical",
      "imagelogo": "https://example.com/tesla_logo.png",
      "description": "Tesla, Inc. designs, develops, manufactures, and sells electric vehicles, energy storage products, and solar energy products."
    },
    {
      "symbol": "JPM",
      "name": "JPMorgan Chase & Co.",
      "price": 155.75,
      "quantity": 90,
      "marketCap": "471.5B",
      "sector": "Financial Services",
      "imagelogo": "https://example.com/jpmorgan_logo.png",
      "description": "JPMorgan Chase & Co. is a financial holding company that provides various financial services worldwide."
    },
    {
      "symbol": "V",
      "name": "Visa Inc.",
      "price": 234.65,
      "quantity": 60,
      "marketCap": "497.8B",
      "sector": "Financial Services",
      "imagelogo": "https://example.com/visa_logo.png",
      "description": "Visa Inc. operates as a payments technology company worldwide."
    },
    {
      "symbol": "PG",
      "name": "Procter & Gamble Company",
      "price": 141.23,
      "quantity": 80,
      "marketCap": "348.7B",
      "sector": "Consumer Defensive",
      "imagelogo": "https://example.com/pg_logo.png",
      "description": "The Procter & Gamble Company provides branded consumer packaged goods to consumers worldwide."
    },
    {
      "symbol": "NVDA",
      "name": "NVIDIA Corporation",
      "price": 753.21,
      "quantity": 55,
      "marketCap": "466.8B",
      "sector": "Technology",
      "imagelogo": "https://example.com/nvidia_logo.png",
      "description": "NVIDIA Corporation operates as a visual computing company worldwide."
    },
    {
      "symbol": "NFLX",
      "name": "Netflix, Inc.",
      "price": 520.36,
      "quantity": 35,
      "marketCap": "230.1B",
      "sector": "Communication Services",
      "imagelogo": "https://example.com/netflix_logo.png",
      "description": "Netflix, Inc. provides subscription streaming entertainment service."
    },
    {
      "symbol": "DIS",
      "name": "The Walt Disney Company",
      "price": 170.45,
      "quantity": 70,
      "marketCap": "314.7B",
      "sector": "Communication Services",
      "imagelogo": "https://example.com/disney_logo.png",
      "description": "The Walt Disney Company operates as an entertainment company worldwide."
    },
    {
      "symbol": "INTC",
      "name": "Intel Corporation",
      "price": 52.71,
      "quantity": 150,
      "marketCap": "220.3B",
      "sector": "Technology",
      "imagelogo": "https://example.com/intel_logo.png",
      "description": "Intel Corporation designs, manufactures, and sells essential technologies for the cloud, smart, and connected devices."
    },
    {
      "symbol": "PFE",
      "name": "Pfizer Inc.",
      "price": 39.85,
      "quantity": 200,
      "marketCap": "223.5B",
      "sector": "Healthcare",
      "imagelogo": "https://example.com/pfizer_logo.png",
      "description": "Pfizer Inc. develops, manufactures, and sells healthcare products worldwide."
    },
    {
      "symbol": "BA",
      "name": "The Boeing Company",
      "price": 214.32,
      "quantity": 40,
      "marketCap": "124.7B",
      "sector": "Industrials",
      "imagelogo": "https://example.com/boeing_logo.png",
      "description": "The Boeing Company designs, manufactures, and sells aircraft, rotorcraft, rockets, and satellites worldwide."
    },
    {
      "symbol": "WMT",
      "name": "Walmart Inc.",
      "price": 142.56,
      "quantity": 65,
      "marketCap": "393.2B",
      "sector": "Consumer Defensive",
      "imagelogo": "https://example.com/walmart_logo.png",
      "description": "Walmart Inc. engages in the retail and wholesale operations in various formats worldwide."
    },
    {
      "symbol": "GOOG",
      "name": "Alphabet Inc.",
      "price": 2799.99,
      "quantity": 50,
      "marketCap": "1.9T",
      "sector": "Technology",
      "imagelogo": "https://example.com/alphabet_logo.png",
      "description": "Alphabet Inc. is an American multinational conglomerate that specializes in Internet-related services and products."
    },
    {
      "symbol": "JNJ",
      "name": "Johnson & Johnson",
      "price": 168.99,
      "quantity": 85,
      "marketCap": "448.6B",
      "sector": "Healthcare",
      "imagelogo": "https://example.com/johnson_johnson_logo.png",
      "description": "Johnson & Johnson researches, develops, manufactures, and sells various products in the health care field worldwide."
    },
    {
      "symbol": "VZ",
      "name": "Verizon Communications Inc.",
      "price": 56.12,
      "quantity": 120,
      "marketCap": "230.3B",
      "sector": "Communication Services",
      "imagelogo": "https://example.com/verizon_logo.png",
      "description": "Verizon Communications Inc. offers communications, information, and entertainment products and services."
    },
    {
      "symbol": "ADBE",
      "name": "Adobe Inc.",
      "price": 572.63,
      "quantity": 40,
      "marketCap": "274.8B",
      "sector": "Technology",
      "imagelogo": "https://example.com/adobe_logo.png",
      "description": "Adobe Inc. operates as a diversified software company worldwide."
    },
    {
      "symbol": "CSCO",
      "name": "Cisco Systems, Inc.",
      "price": 56.43,
      "quantity": 110,
      "marketCap": "246.7B",
      "sector": "Technology",
      "imagelogo": "https://example.com/cisco_logo.png",
      "description": "Cisco Systems, Inc. designs, manufactures, and sells Internet Protocol based networking and other products."
    },
    {
      "symbol": "TM",
      "name": "Toyota Motor Corporation",
      "price": 180.57,
      "quantity": 60,
      "marketCap": "275.4B",
      "sector": "Consumer Cyclical",
      "imagelogo": "https://example.com/toyota_logo.png",
      "description": "Toyota Motor Corporation designs, manufactures, and sells automobiles worldwide."
    },
    {
      "symbol": "CRM",
      "name": "Salesforce.com, Inc.",
      "price": 244.08,
      "quantity": 45,
      "marketCap": "229.8B",
      "sector": "Technology",
      "imagelogo": "https://example.com/salesforce_logo.png",
      "description": "Salesforce.com, Inc. develops enterprise cloud computing solutions with a focus on customer relationship management worldwide."
    },
    {
      "symbol": "XOM",
      "name": "Exxon Mobil Corporation",
      "price": 63.77,
      "quantity": 150,
      "marketCap": "267.2B",
      "sector": "Energy",
      "imagelogo": "https://example.com/exxonmobil_logo.png",
      "description": "Exxon Mobil Corporation engages in the exploration, production, and sale of crude oil and natural gas."
    },
    {
      "symbol": "BAC",
      "name": "Bank of America Corporation",
      "price": 43.99,
      "quantity": 130,
      "marketCap": "368.9B",
      "sector": "Financial Services",
      "imagelogo": "https://example.com/bankofamerica_logo.png",
      "description": "Bank of America Corporation, through its subsidiaries, provides banking and financial products and services for individual consumers, small and middle-market businesses, institutional investors, large corporations, and governments worldwide."
    },
    {
      "symbol": "COST",
      "name": "Costco Wholesale Corporation",
      "price": 430.23,
      "quantity": 25,
      "marketCap": "190.6B",
      "sector": "Consumer Defensive",
      "imagelogo": "https://example.com/costco_logo.png",
      "description": "Costco Wholesale Corporation, together with its subsidiaries, operates membership warehouses."
    },
    {
      "symbol": "WFC",
      "name": "Wells Fargo & Company",
      "price": 48.32,
      "quantity": 100,
      "marketCap": "194.3B",
      "sector": "Financial Services",
      "imagelogo": "https://example.com/wellsfargo_logo.png",
      "description": "Wells Fargo & Company is a diversified financial services company that provides banking, investment, mortgage, and consumer and commercial finance products and services."
    },
    {
      "symbol": "T",
      "name": "AT&T Inc.",
      "price": 28.78,
      "quantity": 200,
      "marketCap": "204.7B",
      "sector": "Communication Services",
      "imagelogo": "https://example.com/att_logo.png",
      "description": "AT&T Inc. provides telecommunications, media, and technology services worldwide."
    },
    {
      "symbol": "UNH",
      "name": "UnitedHealth Group Incorporated",
      "price": 410.12,
      "quantity": 35,
      "marketCap": "381.8B",
      "sector": "Healthcare",
      "imagelogo": "https://example.com/unitedhealth_logo.png",
      "description": "UnitedHealth Group Incorporated operates as a diversified health care company in the United States."
    },
    {
      "symbol": "PEP",
      "name": "PepsiCo, Inc.",
      "price": 152.67,
      "quantity": 85,
      "marketCap": "212.3B",
      "sector": "Consumer Defensive",
      "imagelogo": "https://example.com/pepsico_logo.png",
      "description": "PepsiCo, Inc. operates as a food and beverage company worldwide."
    },
    {
      "symbol": "MRK",
      "name": "Merck & Co., Inc.",
      "price": 74.32,
      "quantity": 95,
      "marketCap": "188.9B",
      "sector": "Healthcare",
      "imagelogo": "https://example.com/merck_logo.png",
      "description": "Merck & Co., Inc. operates as a healthcare company worldwide."
    },
    {
      "symbol": "KO",
      "name": "The Coca-Cola Company",
      "price": 54.91,
      "quantity": 120,
      "marketCap": "233.8B",
      "sector": "Consumer Defensive",
      "imagelogo": "https://example.com/cocacola_logo.png",
      "description": "The Coca-Cola Company manufactures, markets, and sells nonalcoholic beverages worldwide."
    },
    {
      "symbol": "ABBV",
      "name": "AbbVie Inc.",
      "price": 113.67,
      "quantity": 65,
      "marketCap": "194.8B",
      "sector": "Healthcare",
      "imagelogo": "https://example.com/abbvie_logo.png",
      "description": "AbbVie Inc. discovers, develops, manufactures, and sells pharmaceuticals worldwide."
    },
    {
      "symbol": "CMCSA",
      "name": "Comcast Corporation",
      "price": 58.42,
      "quantity": 85,
      "marketCap": "267.1B",
      "sector": "Communication Services",
      "imagelogo": "https://example.com/comcast_logo.png",
      "description": "Comcast Corporation operates as a media and technology company worldwide."
    },
    {
      "symbol": "IBM",
      "name": "International Business Machines Corporation",
      "price": 130.77,
      "quantity": 60,
      "marketCap": "116.3B",
      "sector": "Technology",
      "imagelogo": "https://example.com/ibm_logo.png",
      "description": "International Business Machines Corporation provides integrated solutions and services worldwide."
    },
    {
      "symbol": "AMGN",
      "name": "Amgen Inc.",
      "price": 236.58,
      "quantity": 40,
      "marketCap": "126.7B",
      "sector": "Healthcare",
      "imagelogo": "https://example.com/amgen_logo.png",
      "description": "Amgen Inc. discovers, develops, manufactures, and delivers human therapeutics worldwide."
    },
    {
      "symbol": "TMO",
      "name": "Thermo Fisher Scientific Inc.",
      "price": 480.93,
      "quantity": 30,
      "marketCap": "195.6B",
      "sector": "Healthcare",
      "imagelogo": "https://example.com/thermofisher_logo.png",
      "description": "Thermo Fisher Scientific Inc. provides analytical and other instruments, consumables, software, reagents, and services worldwide."
    },
    {
      "symbol": "CAT",
      "name": "Caterpillar Inc.",
      "price": 226.89,
      "quantity": 45,
      "marketCap": "123.8B",
      "sector": "Industrials",
      "imagelogo": "https://example.com/caterpillar_logo.png",
      "description": "Caterpillar Inc. manufactures and sells construction and mining equipment, diesel and natural gas engines, industrial gas turbines, and diesel-electric locomotives worldwide."
    },
    {
      "symbol": "MO",
      "name": "Altria Group, Inc.",
      "price": 52.77,
      "quantity": 110,
      "marketCap": "95.2B",
      "sector": "Consumer Defensive",
      "imagelogo": "https://example.com/altria_logo.png",
      "description": "Altria Group, Inc. engages in the manufacture and sale of cigarettes, smokeless products, and wine worldwide."
    },
    {
      "symbol": "MCD",
      "name": "McDonald's Corporation",
      "price": 234.56,
      "quantity": 60,
      "marketCap": "181.2B",
      "sector": "Consumer Cyclical",
      "imagelogo": "https://example.com/mcdonalds_logo.png",
      "description": "McDonald's Corporation operates and franchises McDonald's restaurants worldwide."
    },
    {
      "symbol": "AMD",
      "name": "Advanced Micro Devices, Inc.",
      "price": 90.32,
      "quantity": 85,
      "marketCap": "112.4B",
      "sector": "Technology",
      "imagelogo": "https://example.com/amd_logo.png",
      "description": "Advanced Micro Devices, Inc. operates as a semiconductor company worldwide."
    },
    {
      "symbol": "GILD",
      "name": "Gilead Sciences, Inc.",
      "price": 69.44,
      "quantity": 100,
      "marketCap": "87.6B",
      "sector": "Healthcare",
      "imagelogo": "https://example.com/gilead_logo.png",
      "description": "Gilead Sciences, Inc. discovers, develops, and commercializes therapeutics in the areas of unmet medical needs worldwide."
    }
  ]
  export default stockdata