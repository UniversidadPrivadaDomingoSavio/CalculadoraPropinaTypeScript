import type { MenuItems } from "../type";

type MenuItemProps = {
  item: MenuItems;
  addItem: (item: MenuItems) => void;
};

export default function MenuItems({ item, addItem }: MenuItemProps) {
  return (
    <button
      className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-700 hover:text-white"
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
}
