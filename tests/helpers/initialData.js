const user = {
  username: 'zfres_',
  name: 'Cristian',
  password: 'pass',
};

const initialEntries = [
  {
    _id: '61ae91c9adb2f72092709f9c',
    currency: 'AVAX',
    dateIn: '2021-11-01T00:00:00.000Z',
    dateOut: '2021-12-01T00:00:00.000Z',
    priceIn: 125,
    priceOut: 0,
    tokensIn: 50,
    tokensOut: 30,
    balanceIn: 5000,
    balanceOut: 10000,
    performance: 100,
    gains: 5000,
    user: '61af5d627f1c8ca294ce05d9',
    __v: 0,
  },
  {
    _id: '61ae92b57fa4e98f270c6dea',
    currency: 'BTC',
    dateIn: '2021-11-01T00:00:00.000Z',
    dateOut: '2021-12-01T00:00:00.000Z',
    priceIn: 125,
    priceOut: 0,
    tokensIn: 50,
    tokensOut: 30,
    balanceIn: 5000,
    balanceOut: 10000,
    performance: 100,
    gains: 5000,
    user: '61af5d627f1c8ca294ce05d9',
    __v: 0,
  },
];

const ethEntry = {
  currency: 'ETH',
  dateIn: '2021-11-01T00:00:00.000Z',
  dateOut: '2021-12-01T00:00:00.000Z',
  priceIn: 500,
  priceOut: 0,
  tokensIn: 50,
  tokensOut: 30,
  balanceIn: 5000,
  balanceOut: 10000,
  performance: 100,
  gains: 5000,
  user: '61af5d627f1c8ca294ce05d9',
};

module.exports = { user, initialEntries, ethEntry };
