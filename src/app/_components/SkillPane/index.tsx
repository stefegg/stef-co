import { skills } from "../../_utils/constants";

const SkillPane = () => {
  return (
    <div className="col-span-5 md:col-span-4 md:col-start-2 md:px-10 text-white mt-10 pt-6">
      <p className="text-primary text-xl mb-4">Technical Skills</p>
      <div className="flex flex-col gap-4">
        {skills.map((group) => (
          <div
            key={group.category}
            className="flex flex-col md:flex-row md:gap-4"
          >
            <p className="text-link min-w-[220px]">{group.category}</p>
            <ul className="flex flex-wrap gap-y-1 text-tertiary">
              {group.items.map((item, idx) => (
                <li
                  key={`${item}-${idx}`}
                  className="not-last:after:content-['·'] not-last:after:mx-2"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillPane;
