const socialLinks = [
    { text: 'Facebook', link: 'https://facebook.com' },
    { text: 'TikTok', link: 'https://tiktok.com' },
    { text: 'LinkedIn', link: 'https://linkedin.com' }
]
const Footer = () => {
    return (
        <div className='flex flex-col justify-between min-h-screen bg-black py-5 px-3 text-white'>

            <div className="flex justify-between">
                <p className="font-extralight md:font-semibold lg:hidden">shaqerzz.prog@gmail.com</p>
                <div className="hidden lg:flex gap-30 text-2xl">
                    <p className="font-semibold">PARIS</p>
                    <p className="font-semibold">BARCELONA</p>
                    <p className="font-semibold">IBIZA</p>
                </div>
                <div className="flex flex-col gap-1">
                    {socialLinks.map(link => (
                        <a key={link.link} href={link.link} className="font-light md:font-semibold transition-all duration-200 hover:underline">{link.text}</a>
                    ))}
                </div>
            </div>

            <div className="w-full max-w-[640px] mx-auto flex flex-col gap-10">
                <div className="flex lg:hidden flex-col gap-3">
                    <p className="text-white/40">PARIS</p>
                    <p className="text-white/40">BARCELONA</p>
                    <p className="text-white/40">IBIZA</p>
                </div>

                <div>
                    <p className="font-light md:font-semibold">Join Our Newsletter</p>
                    <span className="block w-full h-0.5 bg-white"></span>
                    <p className="font-light md:font-semibold mt-3">Email</p>
                    <p className="text-white/40">shaqerzz.prog@gmail.com</p>
                    <p className="text-white/40 text-sm mt-5">Submit</p>
                    <p className="text-white/40 text-sm">By registering you agree to accept the Terms & Conditions and have read the Privacy Policy.</p>
                </div>


            </div>

            <div className="space-y-3">
                <div className="flex items-center gap-3 sm:gap-10">
                    <a href="#" className="font-light md:font-semibold transition-all duration-200 hover:underline">
                        Terms OF SERVICE
                    </a>
                    <a href="#" className="font-light md:font-semibold transition-all duration-200 hover:underline">
                        PRIVACY POLICY
                    </a>
                </div>
                <p className="font-light md:font-semibold">All right reserved ©2025</p>
            </div>
        </div>
    )
}

export default Footer