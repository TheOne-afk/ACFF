import Paw from "../../assets/svg/Pam.svg"
import Paw2 from "../../assets/svg/Pam_2.svg"
const SignIn = () =>{
    return(
        <div className="relative h-[100vh] w-100 bg-[#C1CFA1]" >
            {/* Paws */}
            <img src={Paw} alt="..." className="absolute bottom-0" />
            <img src={Paw2} alt="..." className="absolute right-0 top-0" />
        </div>
    )
}

export default SignIn