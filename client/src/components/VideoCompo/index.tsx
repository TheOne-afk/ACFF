import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import Play from "../../assets/svg/play-button-arrowhead.svg"
import Pause from "../../assets/svg/pause.svg"

const VideoPlayer = ({url} : {url: string}) => {
  const [indicatorVisible, setIndicatorVisible] = useState(true);
  const [playing, setPlaying] = useState(false); // Track playing state
  const [progress, setProgress] = useState(0); // Track progress (0 to 100)
  const [showButton, setShowButton] = useState(false) // hide and unhide play/pause button
  const playerRef = useRef<ReactPlayer | null>(null);

  // Handle mouse enter and leave events
  const handleMouseEnter = () => {
    setShowButton(true)
  };

  const handleMouseLeave = () => {
      setShowButton(false)
    };

  const handlePlayPause = () => {
    setPlaying(!playing);
  };
  

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX } = e; // get the mouse event
    const boundingRect = e.currentTarget.getBoundingClientRect(); // refers to the current target that have been handle
    const clickPosition = clientX - boundingRect.left; // Distance from left of bar
    const totalWidth = boundingRect.width; // Total width of the progress bar
    const newProgress = clickPosition / totalWidth; // Calculate new progress (0 to 1)

    setProgress(newProgress * 100); // Update progress indicator

    // Check if playerRef.current is not null before seeking
    if (playerRef.current) {
      playerRef.current.seekTo(newProgress); // Seek video to new position
    }
  };

  return (
    <div 
      className="relative rounded-xl overflow-hidden bg-[#000] h-[calc(100vh-140px)] w-100" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <ReactPlayer
        ref={playerRef}
        url={url} // Use the imported video file
        width="100%"
        height="100%"
        controls={false}
        playing={playing} // Control play state
        onProgress={(state)=>{
            const percent = state.played * 100
                setProgress(percent)
        }} // Handle progress updates
        onEnded={() => {
            playerRef.current?.seekTo(0)
            setPlaying(true)
        }} // Hide indicator when video ends
      />

        {/* Indicator bar */}
      {indicatorVisible && (
        <div
        className={`absolute bottom-0 left-0 w-full h-2 cursor-pointer ${showButton && "bg-gray-700"}`}
        onClick={handleSeek} // Handle user click to seek video
      >
        <div
        className="h-full bg-primary transition-all duration-300" // Add transition for smooth effect
         style={{ width: `${progress}%` }} // Yellow progress indicator width
        ></div>
      </div>
      )}

      {/* Customize Play/Pause Bytton */}
      {showButton && (
        <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 ">
        <button
          className="bg-primary text-white p-6 text-center flex items-center justify-center rounded-full focus:outline-none hover:bg-primary/80 transition"
          onClick={handlePlayPause}
        >
          {playing ? (
            <img src={Pause} alt="pause" height={30} width={30} style={{filter: "brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(69deg) brightness(103%) contrast(101%)"}} />
          ) : (
            <img src={Play} alt="play" height={30} width={30} style={{filter: "brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(69deg) brightness(103%) contrast(101%)"}} />
          )}
        </button>
      </div>
      )}
    </div>
  );
};

export default VideoPlayer;
