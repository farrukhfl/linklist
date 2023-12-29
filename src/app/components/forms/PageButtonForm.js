'use client'
import { savePageButtons } from "@/actions/pageActions";
import SubmitButton from "../buttons/SubmitButton";
import SectionBox from "../layout/SectionBox";
import toast from "react-hot-toast";
import {ReactSortable} from 'react-sortablejs';


const allButtons = [
  {key: 'email', label: 'email' },
  {key: 'mobile', label: 'mobile'},
  {key: 'instagram', label: 'instagram'},
  {key: 'facebook', label: 'facebook' },
  {key: 'discord', label: 'discord'},
  {key: 'tiktok', label: 'tiktok'},
  {key: 'youtube', label: 'youtube'},
  {key: 'whatsapp', label: 'whatsapp'},
  {key: 'github', label: 'github'},
]


export default function PageButtonForms({user, page}){

const pageSaveButtonsKeys= Object.keys(page.buttons)
const pageSaveButtonsinfo= pageSaveButtonsKeys.map(k=> allButtons.find(b => b.key === k))

const [activeButtons, setactiveButtons] = useState(pageSaveButtonsinfo)
 

function addButtonToProfile(button){
  setactiveButtons(prevButtons => {
    return [...prevButtons, button]
  })
}
async function saveButtons(formData){
  await savePageButtons(formData)
  toast.success('Saved')
}
function removeButton({key:keyToRemove}){
  setactiveButtons(prevButtons=> {
    return prevButtons.filter(button => button.key !== keyToRemove)
  })
}

const availableButtons = allButtons.filter(b1=> !activeButtons.find(b2=> b1.key === b2.key))

  return(
<SectionBox> 
  <form action={saveButtons}>
<h2 className="text-2xl mb-4 font-bold">Buttons</h2>
<ReactSortable list={activeButtons} setList={setactiveButtons}>

{activeButtons.map(b=> {
  <div key={b.key} className="mb-4 flex items-center">
    <div className="w-36 flex h-full p-2 gap-2 items-center bg-gray-300">
<span>    {b.label}</span>
    </div>
    <input name={b.key} defaultValue={page.buttons[b.key]} type="text" style={{marginBottom: '0'}}/>
    <button type="button" onClick={()=> removeButton(b)} className="py-2 px-4 bg-gray-300 cursor-pointer">
      <span>Remove</span>
    </button>
  </div>
})}
</ReactSortable>

<div className="flex flex-wrap gap-2">
  {availableButtons.map(b=> (
    <button type="button" onClick={() => addButtonToProfile(b)} className="flex items-center gap-2 p-2 bg-gray-200">
    <span>{b.label}</span>
  </button>
  ) )}
  
</div>
<div className="max-w-xs mt-8 mx-auto">
  <SubmitButton>
    <span>Save</span>
  </SubmitButton>
</div>
</form>
  </SectionBox>
  )
  
}