import Featured from "./Featured";
import JobRequirements from "./JobRequirements";

function JobItem({ job }) {
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
    <li className="px-4 py-6 bg-white border-l-4 border-teal-600 rounded-md shadow-md">
      <div className="absolute">
        <img src={logo} alt="" />
      </div>

      <div className="flex flex-col space-y-3 border-b pb-4 mb-4">
        <div className="flex items-center">
          <p className="font-bold text-teal-600 text-xs mr-2">{company}</p>
          {featureNew ? <Featured type="new">new!</Featured> : null}
          {featured ? <Featured>featured</Featured> : null}
        </div>

        <p className="font-bold text-xs">{position}</p>

        <div className="text-xs text-gray-500">
          {postedAt} &bull; {contract} &bull; {location}
        </div>
      </div>

      <div className="flex flex-wrap gap-y-4">
        <JobRequirements>{role}</JobRequirements>
        <JobRequirements>{level}</JobRequirements>
        {languages.map((lang) => (
          <JobRequirements>{lang}</JobRequirements>
        ))}
        {tools.map((lang) => (
          <JobRequirements>{lang}</JobRequirements>
        ))}
      </div>
    </li>
  );
}

export default JobItem;
