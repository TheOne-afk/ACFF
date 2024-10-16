import Paw from "../../assets/svg/Pam.svg"
import Paw2 from "../../assets/svg/Pam_2.svg"
import Form from "../../components/Container/Form"

const SignIn = () =>{
    return(
        /* Body */
        <div className="relative h-100 w-100 bg-[#C1CFA1]" >
            {/* Paws */}
            <img src={Paw} alt="..." className="absolute bottom-0" />
            <img src={Paw2} alt="..." className="absolute right-0 top-0" />

            {/* Form Container  */}
            <div className="h-[100vh] w-100 flex justify-center items-center" >
            <Form>
                <h1>hello</h1>
            </Form>
            </div>

        </div>
    )
}

export default SignIn