import Paw from "../../assets/svg/Pam.svg"
import Paw2 from "../../assets/svg/Pam_2.svg"
import Form from "../../components/Container/Form"
import FormField from "../../components/Fields/FormField"
import TextDirect from "../../components/ClickableElement/TextDirect"
import PrimaryButton from "../../components/Buttons/Primary"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useLogin } from "../../hooks/useLogin"
import { useNavigate } from "react-router-dom"
const SignIn = () =>{
    const [signin_username,setSigninUsername] = useState<string>('')
    const [signin_password,setSigninPassword] = useState<string>('')
    const { login, error } = useLogin()
    const navigate = useNavigate();


    return(
        /* Body */
        <div className="relative h-100 w-100 bg-[#C1CFA1]" >
            {/* Paws */}
            <img src={Paw} alt="..." className="absolute bottom-0" />
            <img src={Paw2} alt="..." className="absolute right-0 top-0" />

            {/* Form Container  */}
            <div className="h-[100vh] w-100 flex justify-center items-center" >
            <Form
            submit={async function(event){
                event.preventDefault()
                await login(signin_username,signin_password)

                    if(error){
                        navigate('/')
                    }
                
                
                
            }}
            >
                <div className=" flex flex-col justify-center items-center w-full0" >
                    <h1 className="text-4xl font-[1000] text-black" >Welcome Back!</h1>
                    <p className="text-sm" >Manage your cat's meals effortlessly and connect with fellow pet lovers!</p>
                </div>
                {
                    error && <div className="bg-red-500/70 w-full p-2 rounded text-center font-medium text-custom_white" >
                        <span>
                        {error}
                        </span>
                    </div>
                }
                <FormField
                placeholder="Enter your username"
                label="Username"
                type="text"
                onchange={(event)=> setSigninUsername(event.target.value)}
                value={signin_username}
                />
                <div className="w-full" >
                <FormField
                placeholder="Enter your password"
                label="Password"
                type="password"
                onchange={(event)=> setSigninPassword(event.target.value)}
                value={signin_password}
                />
                </div>
                <PrimaryButton
                text="Login"
                className="rounded-full w-full py-4 text-lg"
                />
                <div className="relative w-full h-[1px] bg-black/50" >
                    <span className="absolute px-4 py-2 left-1/2 top-1/2 bg-custom_white -translate-x-1/2 -translate-y-1/2" >or</span>
                </div>
                <h1 className="text-black text-md font-semibold" >New to FeederShare?
                    <Link to="/register">
                    <span className="text-primary cursor-pointer text-bold" > Register now</span>
                    </Link>
                </h1>
            </Form>
            
            </div>

        </div>
    )
}

export default SignIn