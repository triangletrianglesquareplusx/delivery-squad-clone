import { ShoppingFooter } from "./ShoppingFooter";
import { ShoppingHeader } from "./Header/ShoppingHeader";
import { ShoppingItem } from "./ShoppingItem/ShoppingItem";

export default function Shopping() {
  const items = [
    "Item1",
    "Item2",
    "Item3",
    "Item4",
    "Item5",
    "Item6",
    "Item7",
    "Item8",
  ];

  return (
    <section className="p-24">
      <ShoppingHeader />
      <div>
        <div className="flex flex-wrap justify-center m-12">
          {items.map((el) => (
            <ShoppingItem key={el} />
          ))}
        </div>
      </div>
      <ShoppingFooter />
    </section>
  );
}
