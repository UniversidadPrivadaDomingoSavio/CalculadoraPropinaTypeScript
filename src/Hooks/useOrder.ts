import { useState } from "react";
import type { MenuItems, OrderItem } from "../type";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItems) => {
    const existeItem = order.findIndex((a) => a.id === item.id);

    if (existeItem >= 0) {
      const updateOrder = [...order];
      updateOrder[existeItem].quantity++;
      setOrder(updateOrder);
    } else {
      const newItem: OrderItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  const deleteItem = (item: OrderItem) => {
    const updateItem = order.filter((orderItem) => orderItem.id !== item.id);
    setOrder(updateItem);
  };

  const clearItems = () => {
    setOrder([]);
    setTip(0);
  };

  return { order, addItem, deleteItem, tip, setTip, clearItems };
}
