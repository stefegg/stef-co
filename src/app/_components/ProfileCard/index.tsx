import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="grid col-span-5 place-content-center md:place-content-start md:col-span-1">
      <div className="flex-non place-content-center">
        <Image
          src="/profile.jpeg"
          alt="profile"
          width={460}
          height={460}
          className="rounded-full w-full h-auto"
        />
      </div>
      <div className="text-center break-normal mt-2">
        <p className="text-primary">Stephen Egbert</p>
        <p className="text-link">Software Engineer</p>
      </div>
    </div>
  );
};

export default ProfileCard;
