import { Inter } from "next/font/google";
import "../globals.css";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Logout from "../components/buttons/LogoutButton";
import AppSideBar from "../components/layout/AppSidebar";
import { Toaster } from "react-hot-toast";
import { headers } from "../../../next.config";
import { authOptions } from "../api/auth/[...nextauth]/route";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function AppTemplate({ children, ...rest }) {
  const headerList = headers()
  const url = headerList.get('next-url')
  const session = await getServerSession(authOptions);
  if (!session) {
   return redirect("/");
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <main className="flex min-h-screen">
          <aside className="bg-white shadow w-48 p-4">
            <div className="rounded-full overflow-hidden aspect-square w-24 mx-auto">
              <Image
                src={session.user.image}
                width={256}
                height={256}
                alt={"avatar"}
              />
            </div>
            
<div className="text-center">
<AppSideBar />
</div>

          </aside>
          <div className="grow">
            {children}
            </div>
        </main>
      </body>
    </html>
  );
}
