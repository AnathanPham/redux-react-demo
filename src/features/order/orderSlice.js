import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: [],
    time: undefined,
    color: undefined,
  },
  reducers: {
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    changeOrderById: (state, action) => {
      const { status, id } = action.payload;
      const targetOrder = state.order.find((order) => {
        return order.id === id;
      });
      if (targetOrder) {
        targetOrder.status = status;
      }
    },
  },
});

export const { setOrder, setTime, setColor, changeOrderById } =
  orderSlice.actions;

export const selectCount = (state) => {
  return state.order.order.length;
};
export const selectOrderList = (state) => {
  return state.order.order;
};
export const selectColor = (state) => {
  return state.order.color;
};

export default orderSlice.reducer;
