import Link from "next/link";

type ProjectPaneProps = {
  project: {
    title: string;
    link: string;
    description: string;
    techStack: string[];
  };
};

const ProjectPane = (props: ProjectPaneProps) => {
  const {
    project: { title, link, description, techStack },
  } = props;
  const getLinkText = (link: string) => {
    if (link.includes("pokedex")) {
      return "Live Link";
    } else if (link.includes("github")) {
      return "Github Repo";
    }
    return "Live Link";
  };
  return (
    <div className="grid grid-cols-6 p-4 rounded-lg border font-light">
      <div className="col-span-6 px-4 mr-4 border-b md:col-span-2 md:border-b-0 md:border-r min-w-fit text-primary">
        {title}
      </div>
      <div className="col-span-6 md:col-span-4 mt-4 md:mt-0 text-secondary">
        {description}
      </div>
      <div className="col-span-6 px-4 pt-4 mt-4 border-t text-link">
        <Link href={link}>{getLinkText(link)}</Link>
      </div>
      <div className="col-span-6 px-4 pt-4 mt-4 border-t text-tertiary">
        {techStack.map((tech, idx) => (
          <li key={`${tech}-${idx}`}>{tech}</li>
        ))}
      </div>
    </div>
  );
};

export default ProjectPane;
