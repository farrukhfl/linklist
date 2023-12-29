'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppSideBar(){
  const path = usePathname()
  return(
    <nav className="flex flex-col text-center mt-8 gap-4 text-gray-500">
              <Link className={"flex gap-4" + (path === '/account' ? 'text-blue-500 font bold' : '' )} href={"/account"}>
                
                <span className="text-gray-600">My Page</span>
              </Link>
              <Link className={"flex gap-4" + (path === '/analytics' ? 'text-blue-500 font bold' : '' )}  href={"/analytics"}>
                
                <span className="text-gray-600"> Analytics </span>
              </Link>
              
              <Logout className={'flex gap-4'} />

          <Link href={'/'} className="flex items-center gap-4 text-xs text-gray-500 border-t pt-4">
          <span>Back to Website</span>
          </Link>

            </nav>
  )
}