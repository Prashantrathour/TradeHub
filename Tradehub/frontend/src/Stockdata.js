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


  const stockdata2=[
    {
      "symbol": "AAPL",
      "companyName": "Apple Inc.",
      "description": "Apple Inc. designs, manufactures, and markets consumer electronics, computer software, and online services.",
      "industry": "Technology"
    },
    {
      "symbol": "MSFT",
      "companyName": "Microsoft Corporation",
      "description": "Microsoft Corporation develops, licenses, and supports software, services, devices, and solutions worldwide.",
      "industry": "Technology"
    },
    {
      "symbol": "AMZN",
      "companyName": "Amazon.com, Inc.",
      "description": "Amazon.com, Inc. engages in online retail and operates various subsidiaries worldwide.",
      "industry": "Retail"
    },
    {
      "symbol": "GOOGL",
      "companyName": "Alphabet Inc.",
      "description": "Alphabet Inc. provides online advertising services, search engines, and operates as a holding company.",
      "industry": "Technology"
    },
    {
      "symbol": "FB",
      "companyName": "Meta Platforms Inc.",
      "description": "Meta Platforms Inc., formerly known as Facebook, operates social networking platforms worldwide.",
      "industry": "Technology"
    },
    {
      "symbol": "JPM",
      "companyName": "JPMorgan Chase & Co.",
      "description": "JPMorgan Chase & Co. provides various financial services worldwide.",
      "industry": "Financial Services"
    },
    {
      "symbol": "V",
      "companyName": "Visa Inc.",
      "description": "Visa Inc. operates as a payments technology company worldwide.",
      "industry": "Financial Services"
    },
    {
      "symbol": "WMT",
      "companyName": "Walmart Inc.",
      "description": "Walmart Inc. operates retail stores, wholesale clubs, and online retail channels worldwide.",
      "industry": "Retail"
    },
    {
      "symbol": "PG",
      "companyName": "Procter & Gamble Company",
      "description": "Procter & Gamble Company provides branded consumer packaged goods worldwide.",
      "industry": "Consumer Goods"
    },
    {
      "symbol": "JNJ",
      "companyName": "Johnson & Johnson",
      "description": "Johnson & Johnson researches, develops, and manufactures healthcare products worldwide.",
      "industry": "Healthcare"
    },
    {
      "symbol": "VZ",
      "companyName": "Verizon Communications Inc.",
      "description": "Verizon Communications Inc. provides communications, information, and entertainment products and services worldwide.",
      "industry": "Telecommunication Services"
    },
    {
      "symbol": "T",
      "companyName": "AT&T Inc.",
      "description": "AT&T Inc. provides telecommunications, media, and technology services worldwide.",
      "industry": "Telecommunication Services"
    },
    {
      "symbol": "BAC",
      "companyName": "Bank of America Corporation",
      "description": "Bank of America Corporation provides banking and financial products and services worldwide.",
      "industry": "Financial Services"
    },
    {
      "symbol": "DIS",
      "companyName": "The Walt Disney Company",
      "description": "The Walt Disney Company operates as an entertainment company worldwide.",
      "industry": "Entertainment"
    },
    {
      "symbol": "KO",
      "companyName": "The Coca-Cola Company",
      "description": "The Coca-Cola Company manufactures, distributes, and sells nonalcoholic beverages worldwide.",
      "industry": "Consumer Goods"
    },
    {
      "symbol": "NVDA",
      "companyName": "NVIDIA Corporation",
      "description": "NVIDIA Corporation operates as a visual computing company worldwide.",
      "industry": "Technology"
    },
    {
      "symbol": "TSLA",
      "companyName": "Tesla, Inc.",
      "description": "Tesla, Inc. designs, develops, manufactures, and sells electric vehicles and energy storage products.",
      "industry": "Automotive"
    },
    {
      "symbol": "PFE",
      "companyName": "Pfizer Inc.",
      "description": "Pfizer Inc. develops, manufactures, and sells healthcare products worldwide.",
      "industry": "Healthcare"
    },
    {
      "symbol": "NFLX",
      "companyName": "Netflix, Inc.",
      "description": "Netflix, Inc. provides subscription streaming entertainment services worldwide.",
      "industry": "Entertainment"
    },
    {
      "symbol": "GOOG",
      "companyName": "Alphabet Inc.",
      "description": "Alphabet Inc. provides online advertising services, search engines, and operates as a holding company.",
      "industry": "Technology"
    },
    {
      "symbol": "XOM",
      "companyName": "Exxon Mobil Corporation",
      "description": "Exxon Mobil Corporation explores for and produces crude oil and natural gas worldwide.",
      "industry": "Energy"
    },
    {
      "symbol": "CSCO",
      "companyName": "Cisco Systems, Inc.",
      "description": "Cisco Systems, Inc. designs, manufactures, and sells networking, communications, and information technology products.",
      "industry": "Technology"
    },
    {
      "symbol": "INTC",
      "companyName": "Intel Corporation",
      "description": "Intel Corporation designs, manufactures, and sells computer components and related products worldwide.",
      "industry": "Technology"
    },
    {
      "symbol": "INTU",
      "companyName": "Intuit Inc.",
      "description": "Intuit Inc. provides financial management, accounting, and tax preparation software products and related services.",
      "industry": "Technology"
    },
    {
      "symbol": "UNH",
      "companyName": "UnitedHealth Group Incorporated",
      "description": "UnitedHealth Group Incorporated operates as a diversified health care company worldwide.",
      "industry": "Healthcare"
    },
    {
      "symbol": "BA",
      "companyName": "The Boeing Company",
      "description": "The Boeing Company designs, manufactures, and sells aerospace and defense products worldwide.",
      "industry": "Aerospace & Defense"
    },
    {
      "symbol": "CRM",
      "companyName": "Salesforce.com, Inc.",
      "description": "Salesforce.com, Inc. provides enterprise cloud computing solutions worldwide.",
      "industry": "Technology"
    },
    {
      "symbol": "C",
      "companyName": "Citigroup Inc.",
      "description": "Citigroup Inc. provides various financial products and services worldwide.",
      "industry": "Financial Services"
    },
    {
      "symbol": "MCD",
      "companyName": "McDonald's Corporation",
      "description": "McDonald's Corporation operates and franchises McDonald's restaurants worldwide.",
      "industry": "Restaurant"
    },
    {
      "symbol": "PGR",
      "companyName": "The Progressive Corporation",
      "description": "The Progressive Corporation provides personal and commercial auto insurance, residential property insurance, and other specialty property-casualty insurance and related services.",
      "industry": "Insurance"
    },
    {
      "symbol": "ADBE",
      "companyName": "Adobe Inc.",
      "description": "Adobe Inc. operates as a diversified software company worldwide.",
      "industry": "Technology"
    },
    {
      "symbol": "HD",
      "companyName": "The Home Depot, Inc.",
      "description": "The Home Depot, Inc. operates as a home improvement retailer worldwide.",
      "industry": "Retail"
    },
    {
      "symbol": "VOD",
      "companyName": "Vodafone Group Plc",
      "description": "Vodafone Group Plc provides telecommunications services in Europe, Africa, the Middle East, and the Asia Pacific.",
      "industry": "Telecommunication Services"
    },
    {
      "symbol": "XRX",
      "companyName": "Xerox Holdings Corporation",
      "description": "Xerox Holdings Corporation designs, develops, and sells document management systems and solutions worldwide.",
      "industry": "Technology"
    },
    {
      "symbol": "PYPL",
      "companyName": "PayPal Holdings, Inc.",
      "description": "PayPal Holdings, Inc. operates as a technology platform and digital payments company worldwide.",
      "industry": "Financial Services"
    },
    {
      "symbol": "NKE",
      "companyName": "NIKE, Inc.",
      "description": "NIKE, Inc. designs, develops, markets, and sells athletic footwear, apparel, equipment, and accessories worldwide.",
      "industry": "Consumer Goods"
    },
    {
      "symbol": "IBM",
      "companyName": "International Business Machines Corporation",
      "description": "International Business Machines Corporation provides integrated solutions and services worldwide.",
      "industry": "Technology"
    },
    {
      "symbol": "ORCL",
      "companyName": "Oracle Corporation",
      "description": "Oracle Corporation provides products and services that address various aspects of corporate information technology environments worldwide.",
      "industry": "Technology"
    },
    {
      "symbol": "HON",
      "companyName": "Honeywell International Inc.",
      "description": "Honeywell International Inc. operates as a diversified technology and manufacturing company worldwide.",
      "industry": "Technology"
    },
    {
      "symbol": "PEP",
      "companyName": "PepsiCo, Inc.",
      "description": "PepsiCo, Inc. operates as a food and beverage company worldwide.",
      "industry": "Consumer Goods"
    },
    {
      "symbol": "CMCSA",
      "companyName": "Comcast Corporation",
      "description": "Comcast Corporation operates as a media and technology company worldwide.",
      "industry": "Entertainment"
    },
    {
      "symbol": "PDD",
      "companyName": "Pinduoduo Inc.",
      "description": "Pinduoduo Inc. operates as an e-commerce platform in the People's Republic of China.",
      "industry": "Technology"
    },
    {
      "symbol": "TMO",
      "companyName": "Thermo Fisher Scientific Inc.",
      "description": "Thermo Fisher Scientific Inc. provides scientific research services worldwide.",
      "industry": "Healthcare"
    },
    {
      "symbol": "MELI",
      "companyName": "MercadoLibre, Inc.",
      "description": "MercadoLibre, Inc. operates online commerce platforms in Latin America.",
      "industry": "Technology"
    },
    {
      "symbol": "ABT",
      "companyName": "Abbott Laboratories",
      "description": "Abbott Laboratories discovers, develops, manufactures, and sells health care products worldwide.",
      "industry": "Healthcare"
    },
    {
      "symbol": "ABBV",
      "companyName": "AbbVie Inc.",
      "description": "AbbVie Inc. discovers, develops, manufactures, and sells pharmaceuticals worldwide.",
      "industry": "Healthcare"
    },
    {
      "symbol": "CAT",
      "companyName": "Caterpillar Inc.",
      "description": "Caterpillar Inc. manufactures and sells construction and mining equipment, diesel and natural gas engines, and industrial gas turbines worldwide.",
      "industry": "Industrial Goods"
    },
    {
      "symbol": "BAIDU",
      "companyName": "Baidu, Inc.",
      "description": "Baidu, Inc. provides internet search services and online marketing solutions in China and internationally.",
      "industry": "Technology"
    },
    {
      "symbol": "MRK",
      "companyName": "Merck & Co., Inc.",
      "description": "Merck & Co., Inc. provides various health solutions through its prescription medicines, vaccines, biologic therapies, animal health, and consumer care products worldwide.",
      "industry": "Healthcare"
    },
    {
      "symbol": "NVAX",
      "companyName": "Novavax, Inc.",
      "description": "Novavax, Inc. focuses on the discovery, development, and commercialization of vaccines to prevent serious infectious diseases worldwide.",
      "industry": "Healthcare"
    },
    {
      "symbol": "ABEV",
      "companyName": "Ambev S.A.",
      "description": "Ambev S.A., through its subsidiaries, produces, distributes, and sells beer, draft beer, soft drinks, other non-alcoholic beverages, malt, and food products in the Americas.",
      "industry": "Consumer Goods"
    },
    {
      "symbol": "CVS",
      "companyName": "CVS Health Corporation",
      "description": "CVS Health Corporation provides health services and plans in the United States.",
      "industry": "Healthcare"
    },
    {
      "symbol": "CHL",
      "companyName": "China Mobile Limited",
      "description": "China Mobile Limited provides mobile telecommunications and related services in Mainland China and Hong Kong.",
      "industry": "Telecommunication Services"
    },
    {
      "symbol": "BMY",
      "companyName": "Bristol-Myers Squibb Company",
      "description": "Bristol-Myers Squibb Company discovers, develops, licenses, manufactures, markets, distributes, and sells biopharmaceutical products worldwide.",
      "industry": "Healthcare"
    },
    {
      "symbol": "TSM",
      "companyName": "Taiwan Semiconductor Manufacturing Company Limited",
      "description": "Taiwan Semiconductor Manufacturing Company Limited engages in the computer-aided design, manufacture, packaging, testing, sale, and marketing of integrated circuits, color filters, and other semiconductor devices.",
      "industry": "Technology"
    },
    {
      "symbol": "LMT",
      "companyName": "Lockheed Martin Corporation",
      "description": "Lockheed Martin Corporation engages in the research, design, development, manufacture, integration, and sustainment of technology systems, products, and services worldwide.",
      "industry": "Aerospace & Defense"
    },
    {
      "symbol": "AZN",
      "companyName": "AstraZeneca PLC",
      "description": "AstraZeneca PLC discovers, develops, and commercializes prescription medicines in the areas of oncology, cardiovascular, renal and metabolism, respiratory, infection, neuroscience, and gastrointestinal worldwide.",
      "industry": "Healthcare"
    },
    {
      "symbol": "PDD",
      "companyName": "Pinduoduo Inc.",
      "description": "Pinduoduo Inc. operates as an e-commerce platform in the People's Republic of China.",
      "industry": "Technology"
    },
    {
      "symbol": "F",
      "companyName": "Ford Motor Company",
      "description": "Ford Motor Company designs, manufactures, markets, and services a range of Ford cars, trucks, sport utility vehicles, electrified vehicles, and Lincoln luxury vehicles worldwide.",
      "industry": "Automotive"
    },
    {
      "symbol": "MMM",
      "companyName": "3M Company",
      "description": "3M Company develops, manufactures, and markets various products worldwide.",
      "industry": "Industrial Goods"
    },
    {
      "symbol": "LVS",
      "companyName": "Las Vegas Sands Corp.",
      "description": "Las Vegas Sands Corp., together with its subsidiaries, develops, owns, and operates integrated resorts worldwide.",
      "industry": "Entertainment"
    },
    {
      "symbol": "GM",
      "companyName": "General Motors Company",
      "description": "General Motors Company designs, builds, and sells cars, trucks, crossovers, and automobile parts worldwide.",
      "industry": "Automotive"
    },
    {
      "symbol": "WFC",
      "companyName": "Wells Fargo & Company",
      "description": "Wells Fargo & Company provides banking, investment, mortgage, and consumer and commercial finance products and services worldwide.",
      "industry": "Financial Services"
    },
    {
      "symbol": "BP",
      "companyName": "BP p.l.c.",
      "description": "BP p.l.c. engages in the energy business worldwide.",
      "industry": "Energy"
    },
    {
      "symbol": "CVX",
      "companyName": "Chevron Corporation",
      "description": "Chevron Corporation engages in integrated energy, chemicals, and petroleum operations worldwide.",
      "industry": "Energy"
    },
    {
      "symbol": "NVS",
      "companyName": "Novartis AG",
      "description": "Novartis AG researches, develops, manufactures, and markets healthcare products worldwide.",
      "industry": "Healthcare"
    },
    {
      "symbol": "KO",
      "companyName": "The Coca-Cola Company",
      "description": "The Coca-Cola Company manufactures, markets, and sells nonalcoholic beverages worldwide.",
      "industry": "Consumer Goods"
    },
    {
      "symbol": "GE",
      "companyName": "General Electric Company",
      "description": "General Electric Company operates as a high-tech industrial company worldwide.",
      "industry": "Industrial Goods"
    },
    {
      "symbol": "BP",
      "companyName": "BP p.l.c.",
      "description": "BP p.l.c. engages in the energy business worldwide.",
      "industry": "Energy"
    },
    {
      "symbol": "SNAP",
      "companyName": "Snap Inc.",
      "description": "Snap Inc. operates as a camera company worldwide.",
      "industry": "Technology"
    },
    {
      "symbol": "GS",
      "companyName": "The Goldman Sachs Group, Inc.",
      "description": "The Goldman Sachs Group, Inc. operates as an investment banking, securities, and investment management company worldwide.",
      "industry": "Financial Services"
    },
    {
      "symbol": "GILD",
      "companyName": "Gilead Sciences, Inc.",
      "description": "Gilead Sciences, Inc. discovers, develops, manufactures, and commercializes medicines in the areas of unmet medical needs worldwide.",
      "industry": "Healthcare"
    },
    {
      "symbol": "SAP",
      "companyName": "SAP SE",
      "description": "SAP SE operates as an enterprise application software company worldwide.",
      "industry": "Technology"
    },
    {
      "symbol": "COST",
      "companyName": "Costco Wholesale Corporation",
      "description": "Costco Wholesale Corporation engages in the operation of membership warehouses worldwide.",
      "industry": "Retail"
    },
    {
      "symbol": "PNC",
      "companyName": "The PNC Financial Services Group, Inc.",
      "description": "The PNC Financial Services Group, Inc. operates as a diversified financial services company in the United States.",
      "industry": "Financial Services"
    },
    {
      "symbol": "CCL",
      "companyName": "Carnival Corporation & plc",
      "description": "Carnival Corporation & plc operates as a leisure travel company worldwide.",
      "industry": "Travel & Leisure"
    },
    {
      "symbol": "AAL",
      "companyName": "American Airlines Group Inc.",
      "description": "American Airlines Group Inc., through its subsidiaries, operates as a network air carrier.",
      "industry": "Transportation"
    },
    {
      "symbol": "AMD",
      "companyName": "Advanced Micro Devices, Inc.",
      "description": "Advanced Micro Devices, Inc. operates as a semiconductor company worldwide.",
      "industry": "Technology"
    },
    {
      "symbol": "PEP",
      "companyName": "PepsiCo, Inc.",
      "description": "PepsiCo, Inc. operates as a food and beverage company worldwide.",
      "industry": "Consumer Goods"
    },
    {
      "symbol": "EA",
      "companyName": "Electronic Arts Inc.",
      "description": "Electronic Arts Inc. develops, markets, publishes, and distributes games, content, and services for game consoles, personal computers, mobile phones, and tablets worldwide.",
      "industry": "Entertainment"
    },
    {
      "symbol": "TXN",
      "companyName": "Texas Instruments Incorporated",
      "description": "Texas Instruments Incorporated designs, manufactures, and sells semiconductors to electronics designers and manufacturers worldwide.",
      "industry": "Technology"
    },
    {
      "symbol": "EXC",
      "companyName": "Exelon Corporation",
      "description": "Exelon Corporation engages in energy generation and delivery businesses in the United States and Canada.",
      "industry": "Energy"
    },
    {
      "symbol": "SNE",
      "companyName": "Sony Corporation",
      "description": "Sony Corporation designs, develops, produces, and sells electronic equipment, instruments, and devices for consumer, professional, and industrial markets worldwide.",
      "industry": "Technology"
    },
    {
      "symbol": "VZ",
      "companyName": "Verizon Communications Inc.",
      "description": "Verizon Communications Inc. offers communications, information, and entertainment products and services to consumers, businesses, and governmental entities worldwide.",
      "industry": "Telecommunication Services"
    },
    {
      "symbol": "WMT",
      "companyName": "Walmart Inc.",
      "description": "Walmart Inc. engages in the retail and wholesale operations in various formats worldwide.",
      "industry": "Retail"
    },
    {
      "symbol": "AXP",
      "companyName": "American Express Company",
      "description": "American Express Company, together with its subsidiaries, provides charge and credit payment card products, and travel-related services worldwide.",
      "industry": "Financial Services"
    },
    {
      "symbol": "BABA",
      "companyName": "Alibaba Group Holding Limited",
      "description": "Alibaba Group Holding Limited, through its subsidiaries, provides online and mobile commerce businesses in the People's Republic of China and internationally.",
      "industry": "Technology"
    },
    {
      "symbol": "DIS",
      "companyName": "The Walt Disney Company",
      "description": "The Walt Disney Company, together with its subsidiaries, operates as an entertainment company worldwide.",
      "industry": "Entertainment"
    },
    {
      "symbol": "ACN",
      "companyName": "Accenture plc",
      "description": "Accenture plc provides consulting, technology, and outsourcing services in Ireland and internationally.",
      "industry": "Business Services"
    },
    {
      "symbol": "CHTR",
      "companyName": "Charter Communications, Inc.",
      "description": "Charter Communications, Inc., through its subsidiaries, provides cable services in the United States.",
      "industry": "Telecommunication Services"
    },
    {
      "symbol": "V",
      "companyName": "Visa Inc.",
      "description": "Visa Inc. operates as a payments technology company worldwide.",
      "industry": "Financial Services"
    },
    {
      "symbol": "NOW",
      "companyName": "ServiceNow, Inc.",
      "description": "ServiceNow, Inc. provides enterprise cloud computing solutions that define, structure, manage, and automate services for enterprises worldwide.",
      "industry": "Technology"
    },
    {
      "symbol": "SQ",
      "companyName": "Square, Inc.",
      "description": "Square, Inc. provides payment and point-of-sale solutions in the United States and internationally.",
      "industry": "Financial Services"
    }
  ]
  
  export {stockdata,stockdata2}
