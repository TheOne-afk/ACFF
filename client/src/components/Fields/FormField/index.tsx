import { useState } from "react"

const FormField = ({placeholder, label, type}:{
    placeholder: string,
    label: string,
    type: string
}) =>{
    const [change,setChange] = useState<string>('')
    function handleOnChange(event: React.ChangeEvent<HTMLInputElement>){
        setChange(event.target.value)
        console.log(change)
    }
    return(
        <div className="w-full h-fit flex flex-col gap-1" >
            <label className={`text-md font-semibold ${change ? "text-primary" : "text-black"}`} htmlFor={type}>{label}</label>
            <input
            value={change}
            onChange={handleOnChange}
            className={`
            ${change ? 'border-primary border-[2px]' : 'border-black'}
            text-lg py-2 px-4 rounded-md border-[1px] outline-none`} type={type} name={type} id={type} placeholder={placeholder}/>
        </div>
    )
}

export default FormField