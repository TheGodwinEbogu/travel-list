export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>start adding sonme items to you parking list ✈️</em>
      </p>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {percentage < 100 ? (
        <em>
          🧳You have {numItems} items on your list, and you already parked{" "}
          {numPacked} ({percentage}%)
        </em>
      ) : (
        <em>You got everything ready to go ✈️</em>
      )}
    </footer>
  );
}
