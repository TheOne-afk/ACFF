const PrimaryButton = ({text}: {
    text: string
}) => {
    return(
        <button className="bg-primary text-white py-3 px-6 font-medium rounded-lg text-md" >{text}</button>
    )
}

export default PrimaryButton