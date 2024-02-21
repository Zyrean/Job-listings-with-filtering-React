import Featured from "./Featured";

function JobInformation({ job }) {
  const {
    company,
    contract,
    featured,
    location,
    new: featureNew,
    position,
    postedAt,
  } = job;

  return (
    <div className="mb-4 flex flex-col space-y-3 border-b pb-4 lg:mb-0 lg:border-none lg:pb-0">
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
  );
}

export default JobInformation;
