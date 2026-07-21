import type { OrderItem } from "../type";

type orderContentsProps = {
  order: OrderItem[];
  deleteItem: (item: OrderItem) => void;
};

export default function OrderContents({
  order,
  deleteItem,
}: orderContentsProps) {
  console.log(order);
  console.log(order.length);
  return (
    <div>
      <h2 className="text-4xl font-black text-center">Consumo</h2>
      <div className="space-y-3 mt-10">
        {order.map((item) => (
          <div
            className=" flex justify-between border-t  items-center border-gray-300 py-4 last-of-type:border-b"
            key={item.id}
          >
            <div>
              <p className="text-lg">
                {item.name} - ${item.price}
              </p>
              <p className="font-black">
                Cantidad: {item.quantity} - ${item.quantity * item.price}
              </p>
            </div>
            <button
              className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
              onClick={() => deleteItem(item)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
