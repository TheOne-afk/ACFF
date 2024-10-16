 const ClickableImage = ({action, getAction, src} : {
    action: () => void,
    getAction: boolean,
    src: string
 }) =>{
    return(
        <button onClick={action} className="flex items-center justify-center" style={{filter: `${getAction ? "brightness(0) saturate(100%) invert(72%) sepia(27%) saturate(410%) hue-rotate(72deg) brightness(86%) contrast(85%)" : ""}`}} >
            <img src={src} alt="..." height={40} width={40} />
        </button>
    )
}

export default ClickableImage