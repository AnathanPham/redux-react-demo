import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectOrderList, changeOrderById } from "./orderSlice";
import { OrderStatusMap ,myConsole} from "./static";

export default function OrderList() {
  myConsole.render('OrderList')
  const orderList = useSelector(selectOrderList);
  const dispatch = useDispatch();

  const handleToggleOrder = useCallback((event) => {
    const id = event.currentTarget.dataset.id;
    const targetOrder = orderList.find((order) => {
      return order.id === id;
    });
    if (targetOrder) {
      dispatch(
        changeOrderById({
          id: targetOrder.id,
          status:
            targetOrder.status === OrderStatusMap.FINISH
              ? OrderStatusMap.UNPAY
              : OrderStatusMap.FINISH,
        })
      );
    }
  });
  return (
    <div>
      <h2>OrderList</h2>
      <ul>
        {orderList.map((order, index) => {
          return (
            <li key={order.id} onClick={handleToggleOrder} data-id={order.id}>
              id:{order.id}--status:
              <span
                style={
                  order.status === OrderStatusMap.UNPAY
                    ? { fontSize: "20px", fontWeight: "bold" }
                    : {
                        border: "1px solid black",
                      }
                }
              >
                {order.status}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
