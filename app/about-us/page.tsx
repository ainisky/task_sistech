import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 flex flex-col">
        <Navbar />      
        <section className="w-full flex flex-col items-center text-center px-4 pt-16 pb-12">
            <h1 className="font-bold text-[64px] md:text-[80px] leading-[100%] tracking-normal text-[#FE75B0]">
                ABOUT US
            </h1>
            <p className="font-medium text-[20px] md:text-[24px] leading-[140%] tracking-normal text-stone-500 mt-4 max-w-2xl">
                The tragicomic tale of a creative who tried to walk away from it all—until an event committee invitation pulled them right back in
            </p>
        </section>
        <section className="w-full max-w-[1440px] mx-auto px-6 md:px-12 pb-24 flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white border border-stone-100 rounded-[24px] p-8 md:p-12 shadow-sm">          
            <div className="flex flex-col gap-6">
                <span className="text-[14px] font-bold uppercase tracking-wider text-[#FE75B0]">
                    Our Journey
                </span>            
                <h2 className="font-bold text-[32px] leading-[110%] text-stone-900">
                    I Hate Coffee, By the Way.
                </h2>
                <p className="font-medium text-[18px] leading-[160%] text-stone-700">
                    SISTECH CAFE was born out of a simple realization: great ideas aren't fueled by bad coffee, and traditional coffee shops don't always have the fast Wi-Fi, outlets, and ergonomic setups that tech creators need.
                </p>
                <p className="text-stone-500 font-normal text-[16px] leading-[160%]">
                    Founded by tech enthusiasts, our cafe is a meticulously engineered environment. We serve premium, custom-roasted coffee blends tailored to optimize focus, alongside high-speed connections and an energetic community of builders. Whether you are debugging a complex codebase or meeting a client, Ami and the team welcome you to your new favorite local workspace.
                </p>
            </div>
            <div className="w-full h-[400px] lg:h-[480px] relative rounded-[16px] overflow-hidden shadow-inner border border-stone-100">
                <Image src="/yae-mimik.jpg" alt="My Wife" fill className="object-cover rounded-[16px] opacity-80 group-hover:opacity-100 transition-opacity duration-300"/>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent rounded-[16px] flex items-end justify-center p-6">
                    <p className="text-white font-medium text-[18px] leading-[160%]">
                    This is me! I am the founder of SISTECH CAFE, and I am an undergraduate student who has a deep interest in technology. I started this cafe because I wanted to create a space where tech creators like myself could work, collaborate, and enjoy great milk without the usual distractions of traditional coffee shops.
                    </p>
                </div>
            </div>
            </div>
        </section>
        <Footer />
    </main>
  );
}