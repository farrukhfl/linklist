'use client'
import { savePageSettings } from "@/actions/pageActions";
import SubmitButton from "../buttons/SubmitButton";
import RadioToggler from "../formItems/radioTogglers";
import Image from "next/image";
import toast from "react-hot-toast";
import SectionBox from "../layout/SectionBox";

export default function PageSettingForm({page, user}){
  const [bgType, setbgType] = useState(page.bgType)
  const [bgColor, setBgcolor] = useState(page.bgColor)
  const [bgImage, setbgImage] = useState(page.bgImage)
  // const session = await getServerSession(authOptions)

 async function saveBaseSettings(formData){

  const result = await savePageSettings(formData)
  if(result){
    toast.success('saved')
  }
 }
function handleFileChange(ev){
  const file = ev.target.file?.[0]
  if(file){
    const data = new FormData()
    data.set('file', file)
    fetch('/api/upload', {
      method: 'POST',
      body: data,
    }).then(response => response.json().then(link=> {
      setbgImage(link);
    })  )
  }
}

  return(
    <div>

    <SectionBox>






      <form action={saveBaseSettings}>
        <div className=" bg-gray-300 py-16 h-32 flex justify-center items-center bg-cover bg-center" style={
bgType === 'color' ? 
{backgroundColor: bgColor}
: {backgroundImage: `url(${bgImage})`}

        }>
          <div>
          <RadioToggler
          defaultValue={page.bgType} 
          options={[
            {value:'color', label: 'color'},
            {value: 'image', label:'Image'}
          ]} onChange={(val)=> setbgType(val)} />
                  

          { bgType === 'color' && (
              <div className="bg-gray-200 shadow text-gray-700 p-2 mt-2">
                <div className="flex gap-2 justify-center">
                <span>Background color</span>
                 <input type="color" onChange={ev => setBgcolor(ev.target.value)} name="bgColor" defaultValue={page.bgColor}/>
                  </div>
                  </div>

            )}
  {bgType === 'image' && (
    <div className="flex justify-center">
      <label className="bg-white shadow px-4 py-2 mt-2">
      <input type="hidden" name="bgImage" value={bgImage} />
      <input type="file" className="hidden" onChange={handleFileChange}/>
    Change Image
      </label>
      
    </div>
  )}


          </div>
          
          
         
        </div>
        <div className="flex justify-center">
          <Image className="rounded-full border-4 border-white relative -top-8 shadow shadow-black/50" src={user.image} height={128} width={128} alt="avatar" />
        </div>

          <div className="p-4">
            <label className="input-label" htmlFor="nameIn">Display name</label>
            <input name="displayName" defaultValue={page.displayName} type="text" id="nameIn" placeholder="Display name"/>
            <label className="input-label" htmlFor="locationIn">Location</label>
            <input type="text" name="location" defaultValue={page.location} id="locationIn" placeholder="Location"/>
            <label className="input-label" htmlFor="bioIn">Bio</label>
              <textarea name="bio" defaultValue={page.bio} id="bioIn" placeholder="Bio"/>
              <div className="max-w-[200px] mx-auto">
            <SubmitButton>
              <span>Save</span>
            </SubmitButton>
              </div>
          </div>

      </form>
      </SectionBox>

    </div>
  )
}