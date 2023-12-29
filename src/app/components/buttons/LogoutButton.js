'use client'

import { signOut } from "next-auth/react"

export default function Logout({className='border p-2 px-4 shadow'}){
  return(
    <button className={className} onClick={()=> signOut()}>
      Logout
    </button>
  )
}