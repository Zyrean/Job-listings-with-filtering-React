function SearchItem({ ele }) {
  return (
    <div className="flex">
      <div className="rounded-l-sm bg-teal-100/75 px-2 py-1 text-xs font-bold text-teal-600">
        {ele}
      </div>
      <div className="text-md rounded-r-sm bg-teal-600 px-2 text-white hover:cursor-pointer hover:bg-black">
        &#10005;
      </div>
    </div>
  );
}

export default SearchItem;
