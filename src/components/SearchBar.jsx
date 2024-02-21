import SearchItem from "./SearchItem";

function SearchBar({ searchItems, onHandleClear }) {
  return (
    <div className="">
      <div className="absolute top-24 z-20 flex max-w-xs justify-between rounded-md bg-white px-5 py-5 shadow-lg lg:max-w-full">
        <div className="flex w-96 flex-wrap gap-3 lg:flex-nowrap">
          {searchItems.map((ele) => (
            <SearchItem ele={ele} />
          ))}
        </div>
        <button
          className="text-xs font-extrabold text-teal-600 hover:underline"
          onClick={onHandleClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
