export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <p>Start Adding Items </p>
      </footer>
    );
  const totalItems = items.length;

  const packedItems = items.filter((items) => items.packed).length;
  const percentPacked = Math.round((packedItems / totalItems) * 100);
  return (
    <footer className="stats">
      {totalItems === packedItems ? (
        <p>You are ready to go ✈️</p>
      ) : (
        <p>
          you have {totalItems} items on your list and you already packed{" "}
          {packedItems} item ({percentPacked}%)
        </p>
      )}
    </footer>
  );
}
