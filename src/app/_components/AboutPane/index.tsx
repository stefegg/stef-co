const AboutPane = () => {
  return (
    <div className="grid grid-cols-5 md:mt-10">
      <div className="grid col-span-5 place-content-center md:place-content-start md:col-span-1">
        <div className="flex-non place-content-center">Photo</div>
        <div className="text-center break-normal">
          <p>Name</p>
          <p>Title</p>
        </div>
      </div>
      <div className="col-span-5 text-white md:col-span-4 md:px-10">
        <div className="mt-4">Longer about</div>
      </div>
    </div>
  );
};

export default AboutPane;
