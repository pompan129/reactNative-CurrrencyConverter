import {
  CHANGE_CURRENCY_AMOUNT,
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  CHANGE_QUOTE_CURRENCY,
  GET_INITIAL_CONVERSION,
  CONVERSION_ERROR,
  CONVERSION_RESULT,
} from '../actions/currencies';

const initialState = {
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  amount: 100,
  conversions: {},
};

const setConversion = (state, action) => {
  let conversion = {
    isFetching: true,
    date: '2017-05-31',
    rates: {},
  };
  if (state.conversions[action.currency]) {
    conversion = state.conversions[action.currency];
  }
  return {
    ...state.conversions,
    [action.currency]: conversion,
  };
};

const reducer = (state = initialState, action) => {
  console.log('currencies reducer'); // // TODO:
  switch (action.type) {
    case CHANGE_CURRENCY_AMOUNT:
      return { ...state, amount: action.amount || 0 };
    case SWAP_CURRENCY:
      return { ...state, baseCurrency: state.quoteCurrency, quoteCurrency: state.baseCurrency };
    case CHANGE_BASE_CURRENCY:
      return {
        ...state,
        baseCurrency: action.currency,
        conversions: setConversion(state, action),
      };
    case CHANGE_QUOTE_CURRENCY:
      return {
        ...state,
        quoteCurrency: action.currency,
        conversions: setConversion(state, action),
      };
    case GET_INITIAL_CONVERSION:
      return { ...state, conversions: setConversion(state, { currency: state.baseCurrency }) };
    case CONVERSION_ERROR:
      return { ...state, error: action.error };
    case CONVERSION_RESULT:
      return {
        ...state,
        baseCurrency: action.result.base,
        conversions: {
          ...state.conversions,
          [action.result.base]: {
            isFetching: false,
            ...action.result,
          },
        },
      };
    default:
      return state;
  }
};

export default reducer;
