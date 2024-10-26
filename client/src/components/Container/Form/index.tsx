import React from "react"
import Direct from "../../ClickableElement/Direct"
import CatImage from "../../../assets/svg/cat.svg"
import MainIcon from "../../../assets/svg/main_icon.svg"
const Form = ({children, submit}: {
    children: React.ReactNode,
    submit: (event: React.FormEvent<HTMLFormElement>) => void
}) =>{
    return(
        <div className="w-4/6 rounded-lg shadow-2xl flex z-10 h-5/6 bg-custom_white overflow-hidden" >
            <div className="relative h-full w-3/6 bg-custom-gradient " > 
            <div className="h-full w-full pl-8 pt-12 pr-3 flex flex-col gap-10" >
            <Direct 
                image={MainIcon} 
                size={50}
                text="FeederShare"
                color="text-white"
                filter="brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%) hue-rotate(116deg) brightness(109%) contrast(109%)"
                font_size='text-2xl'
                />
            <h1 className="text-custom_white text-4xl font-extrabold" >AUTOMATIC CAT FOOD FEEDER</h1>
            <p className="text-custom_white/80 text-sm"> Welcome to FeederShare! Easily manage your
                cat's feeding schedule and connect with other
                pet owners through our social media features.</p>
            </div>
                <div  className="absolute h-72 bottom-0 bg-custom_white rounded-t-[150px]" >
                <img className="relative left-8" src={CatImage} alt="..." height={600} width={600}/>
                </div>
            </div>
            <form className=" h-full bg-custom_white w-4/6 flex flex-col justify-evenly p-5 px-10 items-center" onSubmit={submit} > 
            {children}
            </form>
        </div>
    )
}

export default Form