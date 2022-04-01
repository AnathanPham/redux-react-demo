import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import orderSlice from '../features/order/orderSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    order: orderSlice
  },
});
