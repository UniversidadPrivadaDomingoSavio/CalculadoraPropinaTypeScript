import type { OrderItem } from "../type";

type orderContentsProps = {
  order: OrderItem[];
};

export default function OrderContents({ order }: orderContentsProps) {
  console.log(order);
  console.log(order.length);
  return (
    <div>
      <h2 className="text-4xl font-black text-center">Consumo</h2>
      <div className="space-y-3 mt-5">
        {order.length === 0 ? (
          <p className="text-center">La Orden esta Vacía</p>
        ) : (
          order.map((item) => (
            <div className=" flex justify-between">
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
