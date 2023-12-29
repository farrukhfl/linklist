'use client'
import {signIn} from 'next-auth/react'
export default function LoginwithGoogle(){
  return(
    <button onClick={()=> signIn('google')} className="bg-white shadow text-blue-500 text-center w-full py-4">
      
     <span>Sign in with Google</span>
    </button>
  )
}