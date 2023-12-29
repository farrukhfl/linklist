'use client'
import LoginwithGoogle from "../../components/buttons/LoginwithGoogle";


export default function Login(){
  return(
    <div>
      <div className="border p-4 max-w-xs mx-auto">
    <h1 className="text-4xl font-bold text-center mb-6">
      Sign In
    </h1>
    <p className="text-center mb-6 text-gray-500">
      Sign in to your account using oe of the mention below
    </p>
    <LoginwithGoogle />
      </div>
    </div>
  )
}