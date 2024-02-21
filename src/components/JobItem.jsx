import JobRequirements from "./JobRequirements";
import Image from "./Image";
import JobInformation from "./JobInformation";

function JobItem({ job, onHandleAddSearchitem }) {
  const { level, role, tools, languages, id } = job;

  return (
    <li
      key={id}
      className="rounded-md border-l-4 border-teal-600 bg-white px-4 py-6 shadow-lg lg:flex lg:items-center lg:justify-between lg:py-4"
    >
      <div className="lg:flex lg:items-center ">
        <Image job={job} />

        <div className="justify-center lg:flex">
          <JobInformation job={job} />
        </div>
      </div>

      <div className="flex flex-wrap gap-y-4 lg:flex-row lg:flex-nowrap lg:items-center">
        <JobRequirements
          type={role}
          onHandleAddSearchitem={onHandleAddSearchitem}
        >
          {role}
        </JobRequirements>
        <JobRequirements
          type={level}
          onHandleAddSearchitem={onHandleAddSearchitem}
        >
          {level}
        </JobRequirements>
        {languages.map((lang) => (
          <JobRequirements
            type={languages}
            onHandleAddSearchitem={onHandleAddSearchitem}
          >
            {lang}
          </JobRequirements>
        ))}
        {tools.map((tool) => (
          <JobRequirements
            type={tools}
            onHandleAddSearchitem={onHandleAddSearchitem}
          >
            {tool}
          </JobRequirements>
        ))}
      </div>
    </li>
  );
}

export default JobItem;
