const FormField = ({placeholder, label, type}:{
    placeholder: string,
    label: string,
    type: string
}) =>{
    return(
        <div className="w-full h-fit flex flex-col gap-1" >
            <label className="text-md text-black font-semibold " htmlFor={type}>{label}</label>
            <input className="text-lg py-2 px-4 border-[1px] border-black rounded-md outline-primary" type={type} name={type} id={type} placeholder={placeholder}/>
        </div>
    )
}

export default FormField