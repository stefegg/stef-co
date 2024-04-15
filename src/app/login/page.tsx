import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LoginForm from "./form";
import { PageWrapper } from "../_components";

export default async function Login() {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return (
    <PageWrapper>
      <LoginForm />
    </PageWrapper>
  );
}
