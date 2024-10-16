const Direct = ({image, size, text, color, filter, font_size}: {
    image: string,
    size: number,
    text: string,
    color: string,
    filter: string,
    font_size: string
}) =>{
    return(
        <div className='flex items-center cursor-pointer flex-row' >
                <div className="flex items-end justify-center" >
                <img src={image} alt="icon" height={size} width={size} style={{filter: `${filter}`}} />
                <h1 className={`${font_size} font-semibold ${color}`} >{text}</h1>
                </div>
        </div>
    )
}

export default Direct