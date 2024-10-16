import DirectSidebar from "../ClickableElement/DirectSidebar"
import Home from "../../assets/svg/home.svg"
import Profile from "../../assets/svg/profile.svg"
import SecondaryButton from "../Buttons/Secondary"
import { Link } from "react-router-dom"
const Sidebar = () =>{
    return(
        <div className="p-10 w-[300px] flex flex-col items-center justify-between">
            {/* Options */}
            <div className="flex flex-col gap-10" >
            <DirectSidebar
            image={Home}
            size={28}
            text="For You"
            color="text-primary"
            filter="brightness(0) saturate(100%) invert(73%) sepia(7%) saturate(1468%) hue-rotate(72deg) brightness(88%) contrast(86%)"
            font_size="text-xl"
            />
            <DirectSidebar
            image={Profile}
            size={28}
            text="Profile"
            color="text-black"
            filter="brightness(0) saturate(100%) invert(0%) sepia(86%) saturate(19%) hue-rotate(252deg) brightness(94%) contrast(76%)"
            font_size="text-xl"
            />
            </div>

            {/* Gateway Button */}
            <Link to="/login" >
            <SecondaryButton
            text="Log In"
            />
            </Link>
            
        </div>
    )
}

export default Sidebar