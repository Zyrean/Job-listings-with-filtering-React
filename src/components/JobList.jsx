import JobItem from "./JobItem";

function JobList({ jobs }) {
  return (
    <ul className="flex flex-col gap-10">
      {jobs.map((job) => (
        <JobItem job={job} key={job.id} />
      ))}
    </ul>
  );
}

export default JobList;
