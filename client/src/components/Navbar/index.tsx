import MainIcon from '../../assets/svg/main_icon.svg'
import PrimaryButton from '../Buttons/Primary'
import Direct from '../ClickableElement/Direct'
const Navbar = ()=>{
    return(
        /* Header */
        <header className='py-4 px-10 fixed inset-0 border-b-[2px] h-fit' >
            {/* Navbar */}
            <nav className='flex items-center justify-between' >
                <Direct 
                image={MainIcon} 
                size={65}
                text="FeederShare"
                color="text-primary"
                filter="brightness(0) saturate(100%) invert(73%) sepia(7%) saturate(1468%) hue-rotate(72deg) brightness(88%) contrast(86%)"
                font_size='text-3xl'
                />
                <PrimaryButton 
                text="Let's Feed" 
                />
            </nav>
        </header>
    )
}

export default Navbar