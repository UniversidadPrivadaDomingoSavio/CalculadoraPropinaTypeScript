import { use } from "react";
import MenuItems from "./compornents/MenuItems";
import { menuItems } from "./data/db";
import useOrder from "./Hooks/useOrder";

function App() {
  const { addItem } = useOrder();

  return (
    <>
      <header className="bg-teal-200 py-5">
        <h1 className="text-center text-4xl font-black">
          Claculadora de propinas y consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto p-10 grid md:grid-cols-2">
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

        <div>
          <h2 className="text-center">Consumo</h2>
        </div>
      </main>
    </>
  );
}

export default App;
