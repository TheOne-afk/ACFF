const SecondaryButton = ({text}: {
    text: string
}) => {
    return(
        <button className=" border-2 border-primary text-primary py-3 px-10 font-medium rounded-lg text-md" >{text}</button>
    )
}

export default SecondaryButton