import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/dist/server/api-utils";
import UserNameForm from "../../components/forms/UsernameForm";
import { Page } from "@/models/page";
import mongoose from "mongoose";
import PageSettingForm from "@/app/components/forms/PageSettingForm";
import PageButtonForms from "@/app/components/forms/PageButtonForm";
import PageLinkForm from "@/app/components/forms/PageLinkForm";

export default async function UserName({searchParams}){
  const session = getServerSession(authOptions)
  const desiredUsername= searchParams.desiredUsername

  if(!session){
    redirect('/')
  }

mongoose.connect(process.env.MONGO_URI)

  const page = await Page.findOne({owner: session?.user?.email})

if(page){
  return(
    <>
        <PageSettingForm page={page} user={session.user}/>
        <PageButtonForms page={page} user={session.user} />
        <PageLinkForm page={page} user={session.user} />

    </>
  )
}

  return(
    <div>
      <UserNameForm desiredUsername={desiredUsername} />
    </div>
  )
}