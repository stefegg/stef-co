import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { registerUser } from "@/app/_utils/serverutils";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    //validate email and password
    const hashedPassword = await hash(password, 10);
    const response = await registerUser(email, hashedPassword);
    if (response === "P2002") {
      return new NextResponse("Failure", { status: 409 });
    } else return new NextResponse("Success", { status: 200 });
  } catch (e) {
    return new NextResponse("Error", { status: 400 });
  }
}
