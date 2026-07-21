import MenuItems from "./components/MenuItems";
import { menuItems } from "./data/db";
import useOrder from "./Hooks/useOrder";
import OrderContents from "./components/OrderContents";
import OrderTotal from "./components/OrderTotal";
import TipPercentageForm from "./components/TipPercentageForm";

function App() {
  const { order, addItem, deleteItem, tip, setTip, clearItems } = useOrder();

  return (
    <>
      <header className="bg-teal-200 py-5">
        <h1 className="text-center text-4xl font-black">
          Claculadora de propinas y consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto p-10 grid md:grid-cols-2 space-x-10">
        <div>
          <h2 className="text-center font-black p-4 text-4xl">Menu</h2>
          <div className="space-y-2">
            {menuItems.map((item) => (
              <MenuItems
                key={item.id}
                item={item}
                addItem={addItem}
              ></MenuItems>
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <OrderContents order={order} deleteItem={deleteItem}></OrderContents>
          {order.length > 0 ? (
            <>
              <TipPercentageForm setTip={setTip} tip={tip}></TipPercentageForm>
              <OrderTotal
                order={order}
                tip={tip}
                clearItems={clearItems}
              ></OrderTotal>
            </>
          ) : (
            <p className="text-center">La Orden esta Vacía</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
