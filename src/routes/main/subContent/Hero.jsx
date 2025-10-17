import { useGSAP } from '@gsap/react'
import heroText from '../../../assets/HOLIDAYS.svg'
import gsap from 'gsap'

const Hero = () => {

    useGSAP(() => {
        gsap.from('.hero-text', {
            y: 100,
            opacity: 0,
            delay: .3,
            duration: .8
        })
    }, [])


    return (
        <>
            <div className="relative h-screen w-full">
                {/* Background video */}
                <video
                    autoPlay
                    loop muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover -z-10 mix-blend-overlay" >
                    <source src="https://res.cloudinary.com/dwwy3zuqg/video/upload/q_auto,f_auto/v1759996194/hero-video_fwhnsj.mp4" type="video/mp4" />
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Hero content */}
                <div className="hero-text absolute inset-0 z-10 flex items-center h-full px-5">
                    <img src={heroText} alt="" className='w-full aspect-auto' />
                </div>
            </div>
        </>
    )
}

export default Hero
