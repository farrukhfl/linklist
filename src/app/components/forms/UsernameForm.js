'use client'
import grabUserName from "@/actions/grabUsername";
import UserNameFormResult from "../formResults/UserNameFormResult";
import { redirect } from "next/dist/server/api-utils";
import SubmitButton from "../buttons/SubmitButton";

export default function UserNameForm({desiredUsername}){
  const [taken, setTaken] = useState(false)
  async function handleSubmit(formData){
    const result = await grabUserName(formData)
    setTaken(result === false)
    if(result){
      redirect('/account?created='+formData.get('username'))
    }
  }


  return(
    <form action={handleSubmit}>
      <h1 className="text-4xl text-center mb-2 font-bold">Grab your Username</h1>
      <p className="text-center mb-6 text-gray-500">
    Choose your Username
      </p>
      <div className="max-w-xs mx-auto">
      <input name="username" type="text" placeholder="username" className="p-2 mx-auto block border w-full mb-2 text-center" defaultValue={desiredUsername}/>
    
      {taken && (
          <div className="bg-red-200 border border-red-500 p-2 mb-2 text-center">
            This username is taken
          </div>
        )}
   <SubmitButton>
    <span>Claim your Username</span>
    </SubmitButton>  

      </div>
      </form>
  )
}