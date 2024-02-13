function Featured({ children, type }) {
  return (
    <div
      className={`uppercase text-xs font-semibold py-1 px-2 ml-2 rounded-full text-white ${type === "new" ? "bg-teal-600" : "bg-stone-800"}`}
    >
      {children}
    </div>
  );
}

export default Featured;
