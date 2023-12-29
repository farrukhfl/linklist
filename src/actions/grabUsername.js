'use server'

import { Page } from "@/models/page"
import mongoose from "mongoose"
import { redirect } from "next/navigation"

export default async function grabUserName(formData){
  const username = formData.get('username')
  mongoose.connect(process.env.MONGO_URI)
  const existingPageDoc = await Page.findOne({uri: username})
  if (existingPageDoc) {
    return false;
  } else {
    const session = await getServerSession(authOptions);
    return await Page.create({
      uri:username,
      owner:session?.user?.email,
    });
  }
  } 
  
