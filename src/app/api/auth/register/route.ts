import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { registerUser } from "@/app/_utils/serverutils";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    //validate email and password
    console.log({ email, password });
    const hashedPassword = await hash(password, 10);
    const response = await registerUser(email, hashedPassword);
  } catch (e) {
    console.log({ e });
  }
  return NextResponse.json({ message: "success" });
}
