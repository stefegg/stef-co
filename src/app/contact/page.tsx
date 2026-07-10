import type { Metadata } from "next";
import { linkedInIcon, gmailIcon, githubIcon } from "../../../public/icons";
import ContactItem from "../_components/ContactItem";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Stephen Egbert via email, LinkedIn, or GitHub.",
};

const Contact = () => {
  return (
    <section className={`pt-24 flex flex-col justify-center px-[25%] gap-6`}>
      <h1 className={`text-link text-5xl pb-2`}>Get in touch...</h1>
      <div className={`flex flex-col gap-12`}>
        <a href="mailto:stephenegbert@gmail.com">
          <ContactItem icon={gmailIcon} innerText="Email me" />
        </a>
        <Link href="https://www.linkedin.com/in/stephen-egbert/">
          <ContactItem icon={linkedInIcon} innerText="Add me on LinkedIn" />
        </Link>
        <Link href="https://github.com/stefegg">
          <ContactItem icon={githubIcon} innerText="Check out my Github" />
        </Link>
      </div>
    </section>
  );
};

export default Contact;
