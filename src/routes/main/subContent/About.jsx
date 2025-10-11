const aboutLinks = [
    { link: '', text: 'Get to know our creative studio' },
    { link: '', text: 'Come across our production services ' },
]

const About = () => {
    return (
        <div className='md:col-span-2 min-h-[80vh] bg-primaryOrange px-5 py-3'>
            <p className="text-3xl font-extrabold lg:text-4xl xl:text-5xl">
                <span className="inline-block bg-black w-5 h-5 rounded-full mr-3"></span>
                A CREATIVE PRODUCTION HOUSE WITH A STRONG BELIEF IN THE POWER OF COLLABORATION. WE AIM TO SERVE EACH PROJECT UNIQUELY, ALL SCALE AND SCOPE, CREATING LASTING BONDS BETWEEN BRANDS, TALENTS AND DECORS. WITH A SOLID KNOWLEDGE OF EUROPEAN TERRITORIES AND WIDE-REACHING NETWORKS, OUR INTERNATIONAL CREW PROVIDES A LONG-STANDING EXPERTISE.
            </p>

            <div className="flex items-center gap-20 mt-5">
                {aboutLinks.map(link => (
                    <a key={link.text} href={link.link} className="transition-all duration-100 hover:underline">{link.text}</a>
                ))}
            </div>
        </div>
    )
}

export default About