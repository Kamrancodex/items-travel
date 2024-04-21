export default function Item({ obj, onDeleteItem, setObj }) {
  function handleToggleItem(id) {
    setObj((obj) =>
      obj.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <li>
      <input
        type="checkbox"
        value={obj.packed}
        onChange={() => handleToggleItem(obj.id)}
      />
      <span style={obj.packed ? { textDecoration: "line-through" } : {}}>
        {obj.quantity}
        {obj.description}
      </span>
      <button onClick={() => onDeleteItem(obj.id)}>❌</button>
    </li>
  );
}
