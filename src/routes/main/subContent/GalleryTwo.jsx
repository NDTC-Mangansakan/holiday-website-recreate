import { Link } from "react-router-dom";

const galleryTwoImgData = [
    {
        img: 'https://res.cloudinary.com/dwwy3zuqg/image/upload/q_auto,f_auto/v1760058237/home-img-5_zeqbwb.avif',
        for: 'MASSIMO DUTTI',
        presenting: 'SOHO SPRING 25',
        vid: null
    },
    {
        img: 'https://res.cloudinary.com/dwwy3zuqg/image/upload/q_auto,f_auto/v1760058237/home-img-6_i1acle.avif',
        for: 'K-WAY X ZALANDO',
        presenting: 'FW24/25',
        vid: 'https://res.cloudinary.com/dwwy3zuqg/video/upload/q_auto,f_auto/v1760081711/vid3_pmmna7.mp4'
    },
    {
        img: 'https://res.cloudinary.com/dwwy3zuqg/image/upload/q_auto,f_auto/v1760058237/home-img-7_c8glhb.avif',
        for: 'NAPAPIJRI',
        presenting: 'SS25',
        vid: 'https://res.cloudinary.com/dwwy3zuqg/video/upload/q_auto,f_auto/v1760081703/vid4_pbbqaq.mp4'
    }
]

const GalleryTwo = () => {
    return (
        <div className="flex flex-col md:flex-row">
            {galleryTwoImgData.map((item) => (
                <Link to={item.for}
                    key={item.for}
                    className="flex flex-col items-center overflow-hidden transition-all duration-500 ease-in-out w-full md:w-1/3"
                >
                    {/* Image container with fixed aspect ratio */}
                    <div className="group peer relative w-full aspect-3/4 overflow-hidden">
                        <img
                            src={item.img}
                            alt={item.for}
                            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${item.vid && 'hover:opacity-0 transition-opacity duration-500'}`}
                        />

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
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Text content triggered by hover */}
                    <div className="w-full text-center overflow-hidden transition-all duration-500 ease-in-out max-h-0 opacity-0 peer-hover:max-h-130 peer-hover:opacity-100">
                        <div className="py-5">
                            <p className=" text-lg">FOR</p>
                            <p className="tracking-tighter text-4xl font-extrabold sm:text-5xl lg:text-7xl">{item.for}</p>
                            <p className="text-lg mt-3">PRESENTING</p>
                            <p className="tracking-tighter text-4xl font-extrabold sm:text-5xl lg:text-7xl">{item.presenting}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default GalleryTwo;
