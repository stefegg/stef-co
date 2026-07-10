type ExperiencePaneProps = {
  experience: {
    title: string;
    dates: string;
    company: string;
    location: string;
    duties: string[];
  };
};

const ExperiencePane = (props: ExperiencePaneProps) => {
  const {
    experience: { title, dates, company, location, duties },
  } = props;
  return (
    <div className="border border-divider rounded-lg grid grid-cols-6 p-4 font-light">
      <div className="col-span-6 md:col-span-2 pr-4 pb-4 mr-4 border-b border-divider md:border-r md:border-b-0 flex flex-col text-link">
        <h2 className="text-primary">{title}</h2>
        <p>{dates}</p>
        <p>{company}</p>
        <p>{location}</p>
      </div>
      <ul className="col-span-6 md:col-span-4 px-4 mt-4 md:mt-0 list-disc list-inside space-y-2 text-secondary">
        {duties.map((duty, idx) => (
          <li key={idx}>{duty}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperiencePane;
