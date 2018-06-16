import { CHANGE_CURRENCY_AMOUNT, SWAP_CURRENCY } from '../actions/currencies';

const initialState = {};

const reducer = (state = { amount: 11 }, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY_AMOUNT:
      return { test: 'test' }; // { ...state, amount: action.amount || 77 };
    case SWAP_CURRENCY:
      return { test: 'test' }; // { ...state, baseCurrency: state.quoteCurrency, quoteCurrency: state.baseCurrency };
    default:
      return { ...state, foo: Math.floor(Math.random() * Math.floor(1000)) };
  }
};

export default reducer;

/*
{
 baseCurrency: 'USD',
 quoteCurrency: 'GBP',
 amount: 100,
 conversions: {},
}; */
