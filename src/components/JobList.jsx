import JobItem from "./JobItem";

function JobList({ jobs, searchItems, onHandleAddSearchitem }) {
  const items = searchItems.length > 0 ? searchItems : jobs;

  return (
    <ul className="flex grow flex-col gap-10 lg:bg-yellow-200">
      {items.map((job) => (
        <JobItem
          job={job}
          key={job.id}
          onHandleAddSearchitem={onHandleAddSearchitem}
        />
      ))}
    </ul>
  );
}

export default JobList;
