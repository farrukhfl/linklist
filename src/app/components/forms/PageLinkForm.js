'use client'
import SubmitButton from "../buttons/SubmitButton";
import SectionBox from "../layout/SectionBox";

export default function PageLinkForm({page,user}){
  const [links, setlinks] = useState(page.links || [])

  function save(formData){
  }
  function addnewLink(){
    setlinks(prev => {
      return[...prev, {key: Date.now().toString(), title:'', subtitle:'', icon:'', url:''}  ]
    })
  }

  return(
    <SectionBox>
    <form action={save}>
    <h2 className="font-bold mb-4 text-2xl">Links</h2>
    <button onClick={addnewLink} type="button" className="text-blue-500 text-lg flex gap-2 items-center cursor-pointer">
    <span>Add new</span>
    </button>
    <div>
      {links.map(l=>(
        <div key={l.key} className="mt-8 flex">

          <div>
        

          </div>
          <div className="grow">
            
          <input type="text" placeholder="title" />
          <input type="text" placeholder="subtitle" />
          <input type="text" placeholder="url" />
          </div>
        

        </div>
      ))}
    </div>
    <div className="border-t mt-4 pt-4">
<SubmitButton>
  <span>Save</span>
</SubmitButton>
    </div>
    </form>
    </SectionBox>
  )
}