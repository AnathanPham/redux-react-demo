import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderList from "./OrderList";
import {
  selectCount,
  selectColor,
  setOrder,
  setTime,
  setColor,
} from "./orderSlice";
import { myConsole } from "./static";
import usePerformance from './usePerformance'
const OrderListWithMemo = React.memo(OrderList);

export default function Order() {
  myConsole.component("order");
  // 该组件依赖 count count
  const count = useSelector(selectCount);
  const color = useSelector((state) => selectColor(state));
  // usePerformance()
  const dispatch = useDispatch();
  const handleGetNewOrder = useCallback(() => {
    const newOrder = Array.from({ length: Math.floor(Math.random() * 10) }).map(
      (_, index) => {
        return {
          id: String(index),
          status: "finish",
          value: Math.floor(Math.random() * 100000),
        };
      }
    );
    dispatch(setOrder(newOrder));
  });
  const handleMakeUselessChange = useCallback(() => {
    const time = Date.now();
    dispatch(setTime(time));
  });
  const handleGetSameCountOrder = useCallback(() => {
    const newOrder = Array.from({ length: count }).map((_, index) => {
      return {
        id: String(index),
        status: "finish",
        value: Math.floor(Math.random() * 100000),
      };
    });
    dispatch(setOrder(newOrder));
  });
  const handleSetColor = useCallback((event) => {
    const color = event.target.value;
    dispatch(setColor(color));
  });
  const handleMakeUselessChangeWithLog = useCallback(() => {
    myConsole.selectorOpen();
    handleMakeUselessChange();
    myConsole.selectorClose();
  });

  return (
    <div style={{ color: color || "#000" }}>
      <h1>Order</h1>
      {/* order count */}
      <p>count:{count}</p>
      <button onClick={handleGetNewOrder}>getNewOrder</button>
      <p>
        证明: React-Redux高性能
        <button onClick={handleGetNewOrder}>getNewOrder</button>
      </p>
      <p>
        证明: state只会引起实际用到的组件更新
        <button onClick={handleMakeUselessChange}>make useless change</button>
      </p>
      <p>
        证明: 组件实际用到的state如果没有改变值，则不会更新
        <button onClick={handleGetSameCountOrder}>
          get same count new order
        </button>
      </p>
      <p>
        证明: 组件组件通过Redux更新的逻辑和和React setState保持一致
        <input type={"color"} onChange={handleSetColor}></input>
      </p>
      <p>
        证明：任何state变化都会导致所有订阅回调的执行
        <button onClick={handleMakeUselessChangeWithLog}>
          make useless change with selector log
        </button>
      </p>
      {/* order list */}
      <OrderList></OrderList>
      {/* order list with memo */}
      <hr />
      <h2> order list with memo</h2>
      <OrderListWithMemo></OrderListWithMemo>
      <hr></hr>
    </div>
  );
}
