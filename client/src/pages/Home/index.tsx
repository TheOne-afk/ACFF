import Navbar from "../../components/Navbar"
import Sidebar from "../../components/Sidebar"
import VideoPlayer from "../../components/VideoCompo"
import Video from "../../assets/videos/cattt.mp4"
import ClickableImage from "../../components/Buttons/ClickableImage"
import CommentIcon from "../../assets/svg/comment.svg"
import HeartIcon from "../../assets/svg/heart.svg"
import { useState } from "react"
const Home = () =>{
    const [comment,setComment] = useState(false)
    const [heart,setHeart] = useState(false)
    function handleCommentClick(){
        setComment(item => !item)
    }
    function handleHeartClick(){
        setHeart(item => !item)
    }


    return(
        <>
        {/* Navbar */}
        <Navbar/>
        {/* Homepage Container */}
        <div className="absolute flex flex-row h-[calc(100vh-89.09px)] mt-[89.09px] w-100">
            <Sidebar/>
            {/* Videos Container */}
            <div className="h-100 w-[calc(100vw-300px)] p-7 overflow-auto flex items-center flex-col gap-14 snap-y snap-mandatory" >
                    {/* Wrapper of the video */}
            <div className=" flex flex-row items-end justify-center gap-5 h-100 w-100 snap-center">
            <VideoPlayer url={Video} />
            {/* User Actions */}
            <div className="flex flex-col gap-3">
                {/* Comment Action */}
                <ClickableImage
                action={handleCommentClick}
                getAction={comment}
                src={CommentIcon}
                />
                {/* Heart Action */}
                <ClickableImage
                action={handleHeartClick}
                getAction={heart}
                src={HeartIcon}
                />
            </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Home