import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'

// ADD EXPENSE 
const addExpense = (
  { 
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0 
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET TEXT 
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT BY AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SORT BY DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SET START DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET END DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) =>  id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
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
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  };
};

// Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

// const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
// const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter(''));

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));

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
