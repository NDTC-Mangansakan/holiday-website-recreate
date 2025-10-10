import { useParams } from 'react-router-dom'
import albumMainText from '../../assets/HOLIDAYS black.svg'
import albumData from './albumData'
import { useRef, useState } from 'react'
import { RiVolumeMuteFill, RiVolumeUpFill } from '@remixicon/react'

const Album = () => {
  const { param } = useParams()

  return (
    <>
      <div className="space-y-15 px-5 pb-30">
        <img src={albumMainText} alt="main text" className="w-full aspect-auto" />

        <div className="text-center">
          <p>Stills and motion campaign for</p>
          <p className="text-4xl font-extrabold md:text-7xl lg:text-9xl">{param}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {albumData.map(
          (data) =>
            data.name === param &&
            data.images.map((img, index) => <VideoOrImage key={index} img={img} index={index} />)
        )}
      </div>
    </>
  )
}

const VideoOrImage = ({ img, index }) => {
  const videoRef = useRef(null)
  const [isMuted, setIsMuted] = useState(true)

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setIsMuted(video.muted)
  }

  if (img.endsWith('.mp4')) {
    return (
      <div className="col-span-2 w-full h-auto relative group">
        {/* 🎥 Video */}
        <video
          ref={videoRef}
          src={img}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-auto object-cover"
        />

        {/* 🔇/🔊 Center Icon */}
        <button
          onClick={toggleMute}
          className="absolute inset-0 flex items-center justify-end pr-20 bg-black/0 hover:bg-black/10 transition-all duration-300"
        >
          {isMuted ? (
            <RiVolumeMuteFill className="w-30 h-30 text-white opacity-70 hover:opacity-100 transition-opacity duration-300" />
          ) : (
            <RiVolumeUpFill className="w-30 h-30 text-white opacity-70 hover:opacity-100 transition-opacity duration-300" />
          )}
        </button>
      </div>
    )
  }

  return (
    <div className="w-full h-auto">
      <img src={img} alt={`album-${index}`} className="w-full aspect-auto" />
    </div>
  )
}

export default Album
