import { aboutMe } from "@/app/_utils/constants";

const AboutPane = () => {
  return (
    <div className="col-span-5 text-white md:col-span-4 md:px-10">
      <div className="mt-4 text-secondary flex flex-col gap-4">
        {aboutMe.map((a, idx) => (
          <p key={idx}>{a}</p>
        ))}
      </div>
    </div>
  );
};

export default AboutPane;
