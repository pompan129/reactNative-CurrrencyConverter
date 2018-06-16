import { CHANGE_CURRENCY_AMOUNT, SWAP_CURRENCY } from '../actions/currencies';

const initialState = {
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  amount: 100,
  conversions: {},
};

const reducer = (state = { amount: 11 }, action) => {
  console.log('currencies reducer: action=', action);
  console.log('currencies reducer: CHANGE_CURRENCY_AMOUNT=', CHANGE_CURRENCY_AMOUNT, action.type);
  switch (action.type) {
    case CHANGE_CURRENCY_AMOUNT:
      return { ...state, amount: action.amount || 77 };
    case SWAP_CURRENCY:
      return { ...state, baseCurrency: state.quoteCurrency, quoteCurrency: state.baseCurrency };
    default:
      return state;
  }
};

export default reducer;
