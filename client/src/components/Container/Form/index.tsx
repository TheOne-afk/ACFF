import React from "react"
import Direct from "../../ClickableElement/Direct"
import CatImage from "../../../assets/svg/cat.svg"
import MainIcon from "../../../assets/svg/main_icon.svg"
const Form = ({children, submit}: {
    children: React.ReactNode,
    submit: (event: React.FormEvent<HTMLFormElement>) => void
}) =>{
    return(
        <div className="w-full 
    h-full 
    rounded-none 
    shadow-none 
    flex 
    flex-col
    z-10 
    bg-custom_white 
    overflow-auto
            md:h-full md:w-full md:rounded-none md:flex-col md:overflow-auto md:justify-between
            lg:w-4/6 lg:rounded-lg lg:shadow-2xl lg:flex lg:h-5/6 lg:flex-row lg:overflow-hidden 
            xl:w-4/6 xl:rounded-lg xl:shadow-2xl xl:flex xl:h-5/6 xl:flex-row xl:overflow-hidden 
        " >
            <div className="relative h-fit w-full bg-custom-gradient 
                            md:w-full
                            lg:h-full
                            xl:h-full xl:w-5/6
            " > 
            <div className="h-fit w-full p-4 flex flex-col gap-3
            md:p-2 md:gap-4
            lg:gap-10 lg:justify-start lg:items-start lg:p-5
            xl:gap-10
            " >
            <Direct 
                image={MainIcon} 
                size={50}
                text="FeederShare"
                color="text-white"
                filter="brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%) hue-rotate(116deg) brightness(109%) contrast(109%)"
                font_size='text-2xl
                           max-sm:text-lg
                           md:text-2xl
                           lg:text-2xl
                           xl:text-4xl
                '
                />
            <h1 className="text-custom_white font-extrabold text-2xl
                             md:text-3xl md:text-center 
                             lg:text-4xl lg:text-start
                             xl:text-5xl
            " >AUTOMATIC CAT FOOD FEEDER</h1>
            <p className="text-custom_white/80 text-xs text-justify
                            md:text-md md:text-center
                            lg:text-sm lg:text-start
                            xl:text-md
            "> Welcome to FeederShare! Easily manage your
                cat's feeding schedule and connect with other
                pet owners through our social media features.</p>
            </div>
            <div  className="absolute w-full h-auto bg-custom_white rounded-t-[150px] hidden bottom-0
                              lg:h-60 lg:flex lg:justify-center lg:items-center
            " >
        <img
         className="object-contain
                    lg:w-72
          "
          src={CatImage}
          alt="..."
        />
      </div>
            </div>
            <form className=" h-full w-full bg-custom_white flex flex-col justify-evenly p-4 gap-5 items-center
                             md:w-full md:h-fit md:p-7 md:gap-6
                             lg:h-full
                             xl:h-full
            " onSubmit={submit} method="POST"> 
            {children}
            </form>
        </div>
    )
}

export default Form