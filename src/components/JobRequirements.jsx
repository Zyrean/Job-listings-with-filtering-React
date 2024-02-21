function JobRequirements({ children, onHandleAddSearchitem }) {
  return (
    <button
      className="mr-4 rounded-sm bg-teal-100/75 px-2 py-1 text-xs font-bold text-teal-600 hover:cursor-pointer hover:bg-teal-600 hover:text-white"
      onClick={onHandleAddSearchitem}
    >
      {children}
    </button>
  );
}

export default JobRequirements;
