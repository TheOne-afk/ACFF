const DirectSidebar = ({image, size, text, color, filter, font_size}: {
    image: string,
    size: number,
    text: string,
    color: string,
    filter: string,
    font_size: string
}) =>{
    return(
        <div className='flex items-center cursor-pointer flex-row gap-3' >
                <img src={image} alt="icon" height={size} width={size} style={{filter: `${filter}`}} />
                <h1 className={`${font_size} font-bold ${color}`} >{text}</h1>
        </div>
    )
}

export default DirectSidebar