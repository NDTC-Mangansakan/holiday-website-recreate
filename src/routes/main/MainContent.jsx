import GalleryOne from './subContent/GalleryOne'
import About from './subContent/About'
import GalleryTwo from './subContent/GalleryTwo'
import Hero from './subContent/Hero'

const MainContent = () => {
    return (
        <>
            <Hero/>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-0'>
                <GalleryOne />
                <About />
            </div>
            <GalleryTwo/>
        </>
    )
}

export default MainContent