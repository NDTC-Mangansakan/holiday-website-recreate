import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Link } from "react-router-dom"

const galleryOneImgData = [
    {
        img: 'https://res.cloudinary.com/dwwy3zuqg/image/upload/q_auto,f_auto/v1760013172/home-img-1_vg2smk.avif',
        for: 'ISABEL MARANT',
        presenting: 'SPRING 2025',
        vid: null
    },
    {
        img: 'https://res.cloudinary.com/dwwy3zuqg/image/upload/q_auto,f_auto/v1760013174/home-img-2_n0nlqj.avif',
        for: 'LOUIS VUITTON',
        presenting: 'ELLES 2025',
        vid: 'https://res.cloudinary.com/dwwy3zuqg/video/upload/q_auto,f_auto/v1760081095/vid1_b1nood.mp4'
    },
    {
        img: 'https://res.cloudinary.com/dwwy3zuqg/image/upload/q_auto,f_auto/v1760013173/home-img-3_zjgv64.avif',
        for: 'MANGO',
        presenting: 'MAN BBC SS25',
        vid: null
    },
    {
        img: 'https://res.cloudinary.com/dwwy3zuqg/image/upload/q_auto,f_auto/v1760013172/home-img-4_tj3zpk.avif',
        for: 'OUNASS',
        presenting: 'SS25',
        vid: 'https://res.cloudinary.com/dwwy3zuqg/video/upload/q_auto,f_auto/v1760081089/vid2_b6tbi4.mp4'
    }
]

const GalleryOne = () => {

    useGSAP(() => {
        gsap.from('.gallery-one-img-first', {
            scrollTrigger:{
                trigger: '.gallery-one-img-first',
                start: 'top 80%'
            },
            opacity: 0,
            delay: .3
        })

        gsap.from('.gallery-one-img-sec', {
            scrollTrigger: {
                trigger: '.gallery-one-img-sec',
                start: 'top 80%'
            },
            opacity: 0,
            delay: .3
        })
    }, [])

    return (
        <>
            {galleryOneImgData.map((item, i) => (
                <div key={item.img} className="flex flex-col items-center overflow-hidden transition-all duration-500 ease-in-out">
                    {/* Image with group class for hover trigger */}
                    <Link to={item.for} className="group peer relative overflow-hidden">
                        <img
                            src={item.img}
                            alt={item.for}
                            className={`${i <= 1 ? 'gallery-one-img-first' : 'gallery-one-img-sec'} w-full aspect-auto 
                                     ${item.vid && 'hover:opacity-0 transition-opacity duration-500'} transition-transform duration-500 group-hover:scale-105`}
                        />
                        <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
                        {/* Conditional video rendering */}
                        {item.vid && (
                            <video
                                src={item.vid}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                            />
                        )}
                    </Link>

                    {/* Text content with smooth expansion - triggered by image hover */}
                    <div className="w-full text-center overflow-hidden transition-all duration-500 ease-in-out max-h-0 opacity-0 peer-hover:max-h-96 peer-hover:opacity-100">
                        <div className="py-5 flex flex-col">
                            <span className="text-lg">FOR</span>
                            <span className="tracking-tighter text-4xl font-extrabold sm:text-5xl lg:text-7xl">{item.for}</span>
                            <span className="text-lg mt-3">PRESENTING</span>
                            <span className="tracking-tighter text-4xl font-extrabold sm:text-5xl lg:text-7xl">{item.presenting}</span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default GalleryOne
