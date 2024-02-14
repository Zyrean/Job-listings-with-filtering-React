import Featured from "./Featured";
import JobRequirements from "./JobRequirements";

function JobItem({ job, onHandleAddSearchitem }) {
  const {
    company,
    contract,
    featured,
    level,
    location,
    logo,
    new: featureNew,
    position,
    postedAt,
    role,
    tools,
    languages,
  } = job;

  return (
    <li className="rounded-md border-l-4 border-teal-600 bg-white px-4 py-6 shadow-lg lg:flex lg:items-center">
      <div className="relative w-full bg-green-200 lg:mr-4">
        <div className="absolute bottom-1 z-20 h-10 w-10 rounded-full bg-black lg:relative lg:h-16 lg:w-16">
          <img src={logo} alt="" />
        </div>
      </div>

      <div className="lg:flex">
        <div className="mb-4 flex flex-col space-y-3 border-b pb-4 lg:mb-0 lg:border-none lg:bg-red-300">
          <div className="flex items-center">
            <p className="mr-2 text-xs font-bold text-teal-600">{company}</p>
            {featureNew ? <Featured type="new">new!</Featured> : null}
            {featured ? <Featured>featured</Featured> : null}
          </div>

          <p className="text-xs font-bold hover:cursor-pointer hover:text-teal-600">
            {position}
          </p>

          <div className="text-xs font-medium text-gray-500">
            {postedAt} &bull; {contract} &bull; {location}
          </div>
        </div>

        <div className="flex flex-wrap gap-y-4 lg:flex-row lg:flex-nowrap lg:items-center lg:bg-blue-200">
          <JobRequirements>{role}</JobRequirements>
          <JobRequirements>{level}</JobRequirements>
          {languages.map((lang) => (
            <JobRequirements>{lang}</JobRequirements>
          ))}
          {tools.map((lang) => (
            <JobRequirements>{lang}</JobRequirements>
          ))}
        </div>
      </div>
    </li>
  );
}

export default JobItem;
