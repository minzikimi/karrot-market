import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
 
interface SessionContent {
  id?: number;
}

export default function getSession() {
  console.log(cookies( ))
  return getIronSession<SessionContent>(cookies(), {
    cookieName: "smaklig-morot",
    password: process.env.COOKIE_PASSWORD!,
  });
}