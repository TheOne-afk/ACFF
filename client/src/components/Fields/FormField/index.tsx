import { useState } from "react"

const FormField = ({placeholder, label, type,onchange,value}:{
    placeholder: string,
    label: string,
    type: string,
    onchange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    value: string
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
            value={value}
            onChange={onchange}
            className={`
            ${change ? 'border-primary border-[2px]' : 'border-black'}
            text-lg py-2 px-4 rounded-md border-[1px] outline-none`} type={type === "confirm_password" ? "password" : type} name={type} id={type === "confirm_password" ? "confirm_password" : type} placeholder={placeholder}/>
        </div>
    )
}

export default FormField