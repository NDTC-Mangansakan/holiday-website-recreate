import { useParams, useLoaderData } from 'react-router-dom'
import albumMainText from '../../assets/HOLIDAYS black.svg'
import { useState, useRef, useEffect } from 'react'
import { RiVolumeUpFill, RiVolumeMuteFill } from '@remixicon/react'

const Album = () => {
  const { param } = useParams()
  const [orientations, setOrientations] = useState({});
  const [isMuted, setIsMuted] = useState(true)
  const [width, setWidth] = useState(window.innerWidth)
  const videoRef = useRef(null)
  const dataAlbum = useLoaderData().find(item => item.name === param)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleImageLoad = (e, index) => {
    const { naturalWidth, naturalHeight } = e.target;
    const orientationType = naturalHeight > naturalWidth ? "portrait" : "landscape";

    setOrientations(prev => ({
      ...prev,
      [index]: orientationType,
    }));
  };


  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setIsMuted(video.muted)
  }


  return (
    <>
      <div className="space-y-15 px-5 pb-10 lg:pb-20">
        <img src={albumMainText} alt="main text" className="w-full aspect-auto" />

        <div className="text-center">
          <p>STILLS AND MOTION CAMPAIGN FOR</p>
          <p className="text-4xl font-extrabold md:text-7xl lg:text-9xl">{param}</p>
          <p>PRESENTING</p>
          <p className="text-4xl font-extrabold md:text-7xl lg:text-9xl">{dataAlbum.presenting}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {dataAlbum.images.map((img, index) => (
          img.endsWith('.mp4') ? (
            <div key={index} className="col-span-2 w-full h-auto relative group">
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
                className={`absolute inset-0 flex items-center justify-end ${width < 640 ? 'pr-5' : 'pr-10'} bg-black/0 hover:bg-black/10 transition-all duration-300`}
              >
                {isMuted ? (
                  <RiVolumeMuteFill className={`${width < 640 ? 'w-10 h-10' : 'w-30 h-30'} text-white opacity-70 hover:opacity-100 transition-opacity duration-300`} />
                ) : (
                  <RiVolumeUpFill className={`${width < 640 ? 'w-10 h-10' : 'w-30 h-30'} text-white opacity-70 hover:opacity-100 transition-opacity duration-300`} />
                )}
              </button>
            </div>
          ) : (
            <>
              <img
                key={index}
                src={img}
                alt={`img-${index}`}
                  className={`w-full ${orientations[index] === "portrait" && param === 'K-WAY X ZALANDO' && index === 5 ? "aspect-auto col-span-2" : (index === 3 || index === 4) && param === 'K-WAY X ZALANDO' ? 'col-span-1 aspect-3/4' 
                    : orientations[index] === "portrait"
                    ? "aspect-[3/4]"
                    : "aspect-auto col-span-2"
                  }`}
                onLoad={(e) => handleImageLoad(e, index)}
              />
            </>
          )
        ))}
      </div>

      {dataAlbum.credits && (
        <div className="min-h-[50vh] bg-CreditsBgColor px-5 py-10 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-30 xl:gap-70">
          <div className="flex gap-2 items-center">
            <span className="inline-block h-5 w-5 rounded-full bg-black"></span>
            <p className="text-3xl lg:text-7xl font-extrabold">CREDITS</p>
          </div>

          <div className="space-y-3 self-center">
            {dataAlbum.credits.map((credit, index) => (
              <p key={index} className="text lg:text-xl">{credit}</p>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Album

export const albumDataLoader = async () => {
  const res = await fetch('../../../data/albumDb.json')

  return res.json()
}

