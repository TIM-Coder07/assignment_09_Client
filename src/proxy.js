import { auth } from "@/lib/auth";
import { nextCookies } from "better-auth/next-js";
import { NextResponse } from "next/server";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/addTutor", "/myTutors", "/myBooked"],
};
