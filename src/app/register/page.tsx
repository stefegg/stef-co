import RegisterForm from "./form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { PageWrapper } from "../_components";
export default async function Register() {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return (
    <PageWrapper>
      <RegisterForm />
    </PageWrapper>
  );
}
