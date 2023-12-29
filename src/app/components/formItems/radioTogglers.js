export default function RadioToggler({options, defaultValue, onChange}){
  return(
    <div className="radio-togglers shadow">
      {options.map((option)=> (

<label>
    <input type="radio" name="bgType" onClick={(ev)=> onChange(ev.target.value)} defaultChecked={defaultValue === option.value} value={option.value}/>
    <span>{option.label}</span>
    </label>


      ))}
    
    
          </div>
  )
}