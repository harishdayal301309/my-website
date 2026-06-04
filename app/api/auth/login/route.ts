import { NextResponse } from "next/server";
import { SignJWT } from "jose";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      const token = await new SignJWT({ email })
        .setProtectedHeader({ alg: "HS256" })
        .setExpirationTime("2h")
        .sign(secret);

      const response = NextResponse.json({ success: true });
      response.cookies.set("admin_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60 * 2, // 2 hours
      });

      return response;
    }

    return NextResponse.json(
      { success: false, message: "Invalid credentials" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
