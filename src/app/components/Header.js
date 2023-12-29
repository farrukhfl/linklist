import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Logout from "./buttons/LogoutButton";

export default async function Header(){

  const session = await getServerSession(authOptions)


  return(
    <header className=" bg-white border-b py-4">
      <div className="max-w-4xl flex justify-between mx-auto px-6">
<div className="flex gap-6 items-center">
  <Link className="text-blue-700 font-bold" href={'/'}>Linklist</Link>
  <nav className="flex items-center text-slate-500 gap-4 text-sm">
  <Link href={'/about'}>about</Link>
  <Link href={'/pricing'}>pricing</Link>
  <Link href={'/contact'}>contact</Link>
  </nav>
</div>
<nav className="flex items-center gap-4 text-sm text-slate-500">
  {!!session && (
    <>
    <Link href={'/account'}>
      Hello {session?.user?.name}
    </Link>
    <Logout />
    </>
  )}
  {!session && (
    <>
    <Link href={'/login'}>Sign In</Link>
<Link href={'/register'}>Create Account</Link>
    </>
  )}

</nav>
</div>
</header>
  )
}