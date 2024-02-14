function JobRequirements({ children, onHandleAddSearchitem }) {
  return (
    <div
      className="mr-4 rounded-sm bg-teal-100/75 px-2 py-1 text-xs font-bold text-teal-600 hover:cursor-pointer hover:bg-teal-600 hover:text-white"
      onClick={(e) => console.log(e.target)}
    >
      {children}
    </div>
  );
}

export default JobRequirements;
