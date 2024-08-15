const ProjectPane = () => {
  return (
    <div className="grid grid-cols-6 p-4 rounded-lg border text-lg font-light">
      <div className="col-span-6 pr-4 pb-4 mr-4 border-b md:col-span-2 md:border-b-0 md:border-r min-w-fit text-primary">
        Pane
      </div>
      <div className="col-span-6 md:col-span-4 mt-4 md:mt-0 text-secondary">
        Description
      </div>
      <div className="col-span-6 px-4 pt-4 mt-4 border-t text-link">
        Repo Link
      </div>
      <div className="col-span-6 px-4 pt-4 mt-4 border-t text-tertiary">
        Tech Stack
      </div>
    </div>
  );
};

export default ProjectPane;
