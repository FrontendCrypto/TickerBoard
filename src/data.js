export const marketData = {
  btc: {
    ticker: 'BTC',
    name: 'Bitcoin',
    icon: 'images/btc.svg',
    price: 21435.65,
    change: -5.63,
    market: {
      capitalization: 544765129,
      maxSupply: 21000000,
      curentSupply: 19345762,
    },
    chart: {
      foreColor: '#F7931A',
      series: [
        {
          name: 'Bitcoin Price',
          data: [40000, 42000, 38000, 45000, 43000, 41000, 44000],
        },
      ],
    },
  },
  eth: {
    ticker: 'ETH',
    name: 'Ethereum',
    icon: 'images/eth.svg',
    price: 1843.54,
    change: 8.21,
    market: {
      capitalization: 663,
      maxSupply: 24524524,
      curentSupply: 6363,
    },
    chart: {
      foreColor: '#3C3C3D',
      series: [
        {
          name: 'Ethereum Price',
          data: [3000, 3200, 2800, 3300, 3100, 2900, 3200],
        },
      ],
    },
  },
  usdt: {
    ticker: 'USDT',
    name: 'Tether',
    icon: 'images/usdt.svg',
    price: 1.0,
    change: 0.0,
    market: {
      capitalization: 5000000000,
      maxSupply: 5000000000,
      curentSupply: 5000000000,
    },
    chart: {
      foreColor: '#26A17B',
      series: [
        {
          name: 'Tether Price',
          data: [1.01, 1.02, 1.0, 1.01, 1.01, 1.0, 1.02],
        },
      ],
    },
  },
  bnb: {
    ticker: 'BNB',
    name: 'Binance Coin',
    icon: 'images/bnb.svg',
    price: 300.25,
    change: 2.75,
    market: {
      capitalization: 1000000000,
      maxSupply: 200000000,
      curentSupply: 150000000,
    },
    chart: {
      foreColor: '#F3BA2F',
      series: [
        {
          name: 'Binance Coin Price',
          data: [350, 380, 320, 390, 360, 340, 370],
        },
      ],
    },
  },
  usdc: {
    ticker: 'USDC',
    name: 'USD Coin',
    icon: 'images/usdc.svg',
    price: 1.0,
    change: 0.0,
    market: {
      capitalization: 1000000000,
      maxSupply: 1000000000,
      curentSupply: 1000000000,
    },
    chart: {
      foreColor: '#2775CA',
      series: [
        {
          name: 'USD Coin Price',
          data: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
        },
      ],
    },
  },
  matic: {
    ticker: 'MATIC',
    name: 'Polygon',
    icon: 'images/matic.svg',
    price: 2.34,
    change: 1.23,
    market: {
      capitalization: 500000000,
      maxSupply: 1000000000,
      curentSupply: 250000000,
    },
    chart: {
      foreColor: '#8247E5',
      series: [
        {
          name: 'Polygon Price',
          data: [2.5, 2.6, 2.4, 2.7, 2.6, 2.5, 2.7],
        },
      ],
    },
  },
  xrp: {
    ticker: 'XRP',
    name: 'XRP',
    icon: 'images/xrp.svg',
    price: 0.85,
    change: -2.17,
    market: {
      capitalization: 200000000,
      maxSupply: 1000000000,
      curentSupply: 500000000,
    },
    chart: {
      foreColor: '#1E88E5',
      series: [
        {
          name: 'XRP Price',
          data: [0.9, 0.92, 0.88, 0.91, 0.9, 0.89, 0.91],
        },
      ],
    },
  },
  ada: {
    ticker: 'ADA',
    name: 'Cardano',
    icon: 'images/ada.svg',
    price: 1.25,
    change: 0.75,
    market: {
      capitalization: 400000000,
      maxSupply: 500000000,
      curentSupply: 300000000,
    },
    chart: {
      foreColor: '#0D8CAB',
      series: [
        {
          name: 'Cardano Price',
          data: [1.2, 1.22, 1.18, 1.21, 1.2, 1.19, 1.21],
        },
      ],
    },
  },
  doge: {
    ticker: 'DOGE',
    name: 'Dogecoin',
    icon: 'images/doge.svg',
    price: 0.3,
    change: 2.5,
    market: {
      capitalization: 150000000,
      maxSupply: 2000000000,
      curentSupply: 1000000000,
    },
    chart: {
      foreColor: '#C2A634',
      series: [
        {
          name: 'Dogecoin Price',
          data: [0.28, 0.3, 0.27, 0.31, 0.29, 0.28, 0.3],
        },
      ],
    },
  },
  sol: {
    ticker: 'SOL',
    name: 'Solana',
    icon: 'images/sol.svg',
    price: 42.8,
    change: 3.8,
    market: {
      capitalization: 1000000000,
      maxSupply: 500000000,
      curentSupply: 250000000,
    },
    chart: {
      foreColor: '#00B889',
      series: [
        {
          name: 'Solana Price',
          data: [40, 42, 39, 43, 41, 44, 46],
        },
      ],
    },
  },
  dot: {
    ticker: 'DOT',
    name: 'Polkadot',
    icon: 'images/dot.svg',
    price: 25.1,
    change: 1.1,
    market: {
      capitalization: 300000000,
      maxSupply: 1000000000,
      curentSupply: 400000000,
    },
    chart: {
      foreColor: '#E6007A',
      series: [
        {
          name: 'Polkadot Price',
          data: [26, 25, 26, 24, 26, 25, 26],
        },
      ],
    },
  },

  ltc: {
    ticker: 'LTC',
    name: 'Litecoin',
    icon: 'images/ltc.svg',
    price: 150.75,
    change: -0.5,
    market: {
      capitalization: 200000000,
      maxSupply: 84000000,
      curentSupply: 65000000,
    },
    chart: {
      foreColor: '#838383',
      series: [
        {
          name: 'Litecoin Price',
          data: [152, 151, 149, 150, 152, 153, 151],
        },
      ],
    },
  },
  busd: {
    ticker: 'BUSD',
    name: 'Binance USD',
    icon: 'images/busd.svg',
    price: 1.0,
    change: 0.0,
    market: {
      capitalization: 500000000,
      maxSupply: 500000000,
      curentSupply: 500000000,
    },
    chart: {
      foreColor: '#F0B90B',
      series: [
        {
          name: 'Binance USD Price',
          data: [1, 1, 1, 1, 1, 1, 1],
        },
      ],
    },
  },
  shib: {
    ticker: 'SHIB',
    name: 'Shiba Inu',
    icon: 'images/shib.svg',
    price: 0.000001,
    change: 0.1,
    market: {
      capitalization: 10000000,
      maxSupply: 1000000000000,
      curentSupply: 500000000000,
    },
    chart: {
      foreColor: '#E800FF',
      series: [
        {
          name: 'Shiba Inu Price',
          data: [
            0.000001, 0.000002, 0.000001, 0.000001, 0.000001, 0.000001,
            0.000002,
          ],
        },
      ],
    },
  },
  trx: {
    ticker: 'TRX',
    name: 'TRON',
    icon: 'images/trx.svg',
    price: 0.05,
    change: 0.8,
    market: {
      capitalization: 250000000,
      maxSupply: 100000000000,
      curentSupply: 75000000000,
    },
    chart: {
      foreColor: '#EDEE34',
      series: [
        {
          name: 'TRON Price',
          data: [0.048, 0.049, 0.051, 0.052, 0.05, 0.051, 0.052],
        },
      ],
    },
  },
  avax: {
    ticker: 'AVAX',
    name: 'Avalanche',
    icon: 'images/avax.svg',
    price: 40.25,
    change: -2.3,
    market: {
      capitalization: 700000000,
      maxSupply: 720000000,
      curentSupply: 500000000,
    },
    chart: {
      foreColor: '#F58220',
      series: [
        {
          name: 'Avalanche Price',
          data: [42, 40, 39, 41, 38, 39, 40],
        },
      ],
    },
  },
  dai: {
    ticker: 'DAI',
    name: 'Dai',
    icon: 'images/dai.svg',
    price: 1.01,
    change: -0.02,
    market: {
      capitalization: 800000000,
      maxSupply: 800000000,
      curentSupply: 800000000,
    },
    chart: {
      foreColor: '#F2A900',
      series: [
        {
          name: 'Dai Price',
          data: [1.01, 1.0, 1.02, 1.01, 1.0, 0.99, 1.01],
        },
      ],
    },
  },
  wbtc: {
    ticker: 'WBTC',
    name: 'Wrapped Bitcoin',
    icon: 'images/wbtc.svg',
    price: 21000.0,
    change: 0.8,
    market: {
      capitalization: 3000000000,
      maxSupply: 5000000,
      curentSupply: 2500000,
    },
    chart: {
      foreColor: '#FED039',
      series: [
        {
          name: 'Wrapped Bitcoin Price',
          data: [22000, 21000, 21500, 20500, 21000, 21500, 22000],
        },
      ],
    },
  },
  link: {
    ticker: 'LINK',
    name: 'Chainlink',
    icon: 'images/link.svg',
    price: 25.75,
    change: 1.25,
    market: {
      capitalization: 900000000,
      maxSupply: 1000000000,
      curentSupply: 500000000,
    },
    chart: {
      foreColor: '#375BD2',
      series: [
        {
          name: 'Chainlink Price',
          data: [26, 25, 24, 26, 27, 26, 25],
        },
      ],
    },
  },
  leo: {
    ticker: 'LEO',
    name: 'LEO Token',
    icon: 'images/leo.svg',
    price: 3.2,
    change: -0.2,
    market: {
      capitalization: 150000000,
      maxSupply: 1000000000,
      curentSupply: 500000000,
    },
    chart: {
      foreColor: '#1E428F',
      series: [
        {
          name: 'LEO Token Price',
          data: [3.2, 3.1, 3.2, 3.3, 3.1, 3.0, 3.2],
        },
      ],
    },
  },
};

export const walletBalances = {
  btc: {
    ticker: 'BTC',
    quantity: 0.876214,
  },
  eth: {
    ticker: 'ETH',
    quantity: 3.43,
  },
  usdt: {
    ticker: 'USDT',
    quantity: 500.0,
  },
  bnb: {
    ticker: 'BNB',
    quantity: 10.5,
  },
  usdc: {
    ticker: 'USDC',
    quantity: 1000.5,
  },
  matic: {
    ticker: 'MATIC',
    quantity: 500.25,
  },
  xrp: {
    ticker: 'XRP',
    quantity: 2000.75,
  },
  ada: {
    ticker: 'ADA',
    quantity: 1000.8,
  },
  doge: {
    ticker: 'DOGE',
    quantity: 5000.3,
  },
  sol: {
    ticker: 'SOL',
    quantity: 100.1,
  },
  dot: {
    ticker: 'DOT',
    quantity: 200.2,
  },
  ltc: {
    ticker: 'LTC',
    quantity: 150.5,
  },
  busd: {
    ticker: 'BUSD',
    quantity: 10000.0,
  },
  shib: {
    ticker: 'SHIB',
    quantity: 10000000.0,
  },
  trx: {
    ticker: 'TRX',
    quantity: 50000.25,
  },
  avax: {
    ticker: 'AVAX',
    quantity: 100.75,
  },
  dai: {
    ticker: 'DAI',
    quantity: 1000.0,
  },
  wbtc: {
    ticker: 'WBTC',
    quantity: 2.5,
  },
  link: {
    ticker: 'LINK',
    quantity: 300.8,
  },
  leo: {
    ticker: 'LEO',
    quantity: 100.6,
  },
};
