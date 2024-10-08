import Navbar from "../../components/Navbar"
import Sidebar from "../../components/Sidebar"
import VideoPlayer from "../../components/VideoCompo"
const Home = () =>{

    return(
        <>
        <Navbar/>
        <div className="flex flex-row h-[calc(100vh-89.09px)] mt-[89.09px] w-100 py-5">
            <Sidebar/>
            <div className=" flex flex-row items-center justify-center h-100 w-[100vw]">
            <VideoPlayer/>
            <div className="flex flex-col gap-3">
                
            </div>
            </div>
        </div>
        </>
    )
}

export default Home