import Paw from "../../assets/svg/Pam.svg"
import Paw2 from "../../assets/svg/Pam_2.svg"
import Form from "../../components/Container/Form"
import FormField from "../../components/Fields/FormField"
import PrimaryButton from "../../components/Buttons/Primary"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useSignup } from "../../hooks/useSignup"
const Register = () =>{
    const [username,setUsername] = useState<string>('')
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [cf_password,setCFpassword] = useState<string>('')
    const {signup,error,isLoading} = useSignup()

    return(
        /* Body */
        <div className="relative h-100 w-100 bg-[#C1CFA1]" >
            {/* Paws */}
            <img src={Paw} alt="..." className="absolute bottom-0" />
            <img src={Paw2} alt="..." className="absolute right-0 top-0" />

            {/* Form Container  */}
            <div className="h-[100vh] w-100 flex justify-center items-center" >
            {error && <div className="color-red-500" >{error}</div>}
            <Form
            submit={async (event) =>{
                event.preventDefault()
                await signup(username,email,password)
            }}
            >
                <div className=" flex flex-col justify-center items-center w-full" >
                    <h1 className="text-4xl font-[1000] text-black" >Welcome to FeederShare!</h1>
                    <p className="text-sm text-center" >Create your account to effortlessly manage your cat's meals and join a
                    community of passionate pet lovers!</p>
                </div>
                <FormField
                placeholder="Enter your username"
                label="Username"
                type="text"
                onchange={(event) => setUsername(event.target.value)}
                value={username}
                />
                <FormField
                placeholder="Enter your email"
                label="Email"
                type="email"
                onchange={(event) => setEmail(event.target.value)}
                value={email}
                />
                <FormField
                placeholder="Enter your password"
                label="Password"
                type="password"
                onchange={(event) => setPassword(event.target.value)}
                value={password}
                />
                <FormField
                placeholder="Enter your confirm password"
                label="Confirm password"
                type="confirm_password"
                onchange={(event) => setCFpassword(event.target.value)}
                value={cf_password}
                />
                <PrimaryButton
                text="Register"
                className="rounded-full w-full py-4 text-lg"
                />
                <div className="relative w-full h-[1px] bg-black/50" >
                    <span className="absolute px-4 left-1/2 top-1/2 bg-custom_white -translate-x-1/2 -translate-y-1/2" >or</span>
                </div>
                <h1 className="text-black text-md font-semibold" >Already part of FeederShare?
                    <Link to="/login">
                    <span className="text-primary cursor-pointer text-bold" > Login now</span>
                    </Link>
                </h1>
            </Form>
            
            </div>

        </div>
    )
}

export default Register