import { createStore, combineReducers } from 'redux';

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Filter Reducer

const filterReducerDefaultState = {
  test: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  };
}

// Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
);

console.log(store.getState());

const demoState = {
  expenses: [{
    id: '21312412rvedsss',
    description: 'Snappy Fluffy',
    note: 'This was the final paymen for that address',
    amount: 38000,
    createdAt: 0
  }],

  filters: {
    text: 'fluffy',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

 