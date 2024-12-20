import Navbar from "../../components/Navbar"
import { Link } from "react-router-dom"
import PrimaryButton from "../../components/Buttons/Primary"
import Sidebar from "../../components/Sidebar"
import SecondaryButton from "../../components/Buttons/Secondary"
import { useAuthContext } from "../../hooks/useAuthContext"
import { useEffect, useState } from "react"
import ClockComponent from '../../components/Container/ClockComponent'
export const TimeFeed = () =>{
    const { user } = useAuthContext() 
    const userId = user?.userIdLogin
    const [ isLoadng, setIsLoading ] = useState<boolean>(false)
     

    const handleToggleType = async () =>{
        try {
            const res = await fetch('https://acff-api.vercel.app/api/user/toggle-type', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ _id: userId }), // Send username instead of userId
            });

            const data = await res.json(); // Use 'res' to get the response JSON
            if (res.ok) {
                console.log(data); // Log the success message
                setIsLoading(true)
                setTimeout(()=>{
                    setIsLoading(false)
                }, 5000)
            } else {
                console.log(data); // Log the error message
            }
        } catch (error) {
            console.error('Error toggling type:', error); // Log any errors that occur
        }
    }

    return(
        <>
        <Navbar>
        <Link to="/" >
                <PrimaryButton 
                text="Go Back" 
                className='rounded-lg'
                />
                </Link>
        </Navbar>
        <div className="absolute flex flex-row justify-between h-[calc(100vh-89.09px)] mt-[89.09px] w-full">
            <Sidebar>
            <div className="flex flex-col gap-10" >
            <Link to='/feed' >
            <SecondaryButton
                text="Feed Now"
                className={`${isLoadng && 'bg-primary/50 cursor-not-allowed' } text-white w-full border-0 bg-primary`}
                onClick={(() => {
                    
                })}
                disabled={isLoadng}
                />
            </Link>
                <Link to="/clock" >
                <SecondaryButton
                text="Timed Feed"
                className="text-white w-full border-0 bg-primary"
                onClick={()=>{
                    
                }}
                disabled={false}
                />
                </Link>
                <Link to='/logs' >
                <SecondaryButton
                text="Feed Logs"
                className="w-full"
                onClick={() => {

                }}
                disabled={false}
                />
                </Link>
            <hr className=" border-black/20" />
            <p className="text-sm text-black/40" >Captured something on camera? Click "View Records" to watch the footage instantly!</p>
            <SecondaryButton
                text="View Records"
                className=""
                onClick={() => {

                }}
                disabled={false}
                />
            </div>
            </Sidebar>
            <div className="py-10 pr-16 h-full" >
                <ClockComponent/>
            </div>
        </div>
        </>
    )
}

export default TimeFeed
