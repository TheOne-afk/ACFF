import { Link } from "react-router-dom"
const TextDirect = ({link, text}:{
    link: string,
    text: string
}) =>{
    return(
        <Link to={link} >
            <div className="h-fit w-full flex justify-end items-center mt-3" >
            <h1 className="text-sm underline text-primary" >{text}</h1>
        </div>
        </Link>
    )
}

export default TextDirect