function Featured({ children, type }) {
  return (
    <div
      className={`ml-2 rounded-full px-2.5 py-1 text-xs font-semibold uppercase text-white ${type === "new" ? "bg-teal-600" : "bg-stone-800"}`}
    >
      <p>{children}</p>
    </div>
  );
}

export default Featured;
