import { useState } from "react";
// { items: [], heading: string }
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  //Hook, it is a function that allows us to tap into the built-in feature in react.
  // with useState, we can tell react that components can have some data and state that change over time
  const [selectedIndex, setSelectedIndex] = useState(-1);

  heading = "";

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p> No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
// Use shift+command+p ->configure -> prettier to format the code.
