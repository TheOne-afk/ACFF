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
            md:h-full md:w-full md:rounded-none md:flex-col md:overflow-auto
            xl:w-4/6 xl:rounded-lg xl:shadow-2xl xl:flex xl:h-5/6 xl:flex-row xl:overflow-hidden
        " >
            <div className="h-full w-3/6 bg-custom-gradient 
                            max-sm:w-full max-sm:h-fit
                            md:w-full
                            xl:h-full
            " > 
            <div className="h-fit w-full pl-8 pt-12 pr-3 flex flex-col
            max-sm:p-2 max-sm:gap-2
            md:p-2 md:gap-4
            lg:gap-5
            xl:gap-4
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
            <h1 className="text-custom_white font-extrabold
                             max-sm:text-xl
                             md:text-3xl md:text-center
                             lg:text-3xl
                             xl:text-5xl
            " >AUTOMATIC CAT FOOD FEEDER</h1>
            <p className="text-custom_white/80
                            max-sm:text-xs
                            md:text-md md:text-center
                            lg:text-sm
                            xl:text-md
            "> Welcome to FeederShare! Easily manage your
                cat's feeding schedule and connect with other
                pet owners through our social media features.</p>
            </div>
            <div className="absolute bottom-0 w-full bg-custom_white rounded-t-[150px] flex justify-center items-center
            md:hidden
            xl:hidden
            ">
        <img
         className="h-auto object-contain
                    max-sm:hidden
                    lg:w-52
                    xl:w-full
          "
          src={CatImage}
          alt="..."
        />
      </div>
            </div>
            <form className=" h-full bg-custom_white w-4/6 flex flex-col justify-evenly p-5 px-10 items-center
                             max-sm:w-full max-sm:h-full max-sm:p-3
                             md:w-full md:h-fit md:p-7 md:gap-6
            " onSubmit={submit} method="POST"> 
            {children}
            </form>
        </div>
    )
}

export default Form