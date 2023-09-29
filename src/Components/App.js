import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import ParkingList from "./ParkingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    const confirm = window.confirm(
      "Are you sure you want to delete these items?"
    );
    if (confirm) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onhandleAddItems={handleAddItems} />
      <ParkingList
        items={items}
        onDelete={handleDelete}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
