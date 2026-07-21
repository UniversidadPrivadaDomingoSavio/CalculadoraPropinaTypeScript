import { use, useMemo } from "react";
import type { OrderItem } from "../type";

type propsOrderTotal = {
  order: OrderItem[];
  tip: number;
  clearItems: () => void;
};

export default function OrderTotal({
  order,
  tip,
  clearItems,
}: propsOrderTotal) {
  /*const subtotalAmount = useMemo(() => {
    return order.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }, [order]);*/
  const porcentajePropinas = tip;
  const subTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.price * item.quantity, 0),
    [order],
  );
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina:</h2>
        <p>
          Subtotal a pagar:
          <span className="font-bold"> {subTotalAmount}$</span>
        </p>

        <p>
          Propina:
          <span className="font-bold">
            {subTotalAmount * porcentajePropinas}$
          </span>
        </p>

        <p className="text-red-400 text-3xl">
          Total a pagar:
          <span className="font-bold text-3xl">
            {" "}
            {subTotalAmount + subTotalAmount * porcentajePropinas}$
          </span>
        </p>
      </div>
      <button
        className="
      bg-black 
      text-white uppercase  
        w-full 
        font-bold 
        p-5 
      enabled:hover:bg-gray-200
      enabled:hover:text-black
        disabled:opacity-50
        disabled:cursor-not-allowed"
        disabled={subTotalAmount === 0}
        onClick={clearItems}
      >
        {" "}
        Guardar Orden
      </button>
    </>
  );
}
