import { skills } from "../../_utils/constants";
import { Fragment } from "react/jsx-runtime";
const SkillPane = () => {
  return (
    <div className="flex flex-col border border-divider rounded-lg p-4 font-light">
      <span className="col-span-2 border-b border-divider text-primary pb-4">
        Technical Skills
      </span>
      <span className="grid grid-cols-6 mt-4">
        {skills.map((group) => (
          <Fragment key={group.category}>
            <div className="col-span-6 md:col-span-2 pr-4 pb-4 mr-4 md:border-b border-divider md:border-r md:border-b-0 flex flex-col text-link">
              {group.category}
            </div>
            <div className="py-3 pl-4 align-top text-tertiary col-span-4">
              <ul className="flex flex-wrap gap-y-1">
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
          </Fragment>
        ))}
      </span>
    </div>
  );
};

export default SkillPane;
