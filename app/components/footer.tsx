"use client";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full flex justify-center bg-[#FE75B0] border-t border-gray-100 mt-auto">
            <footer className="w-full max-w-[1440px] h-[192px] flex flex-col items-center justify-center pt-[23px] pb-[23px] gap-[40px]">
            <div className="flex items-center justify-between text-[#FE75B0] gap-6">
                <Link href="https://instagram.com/raatuaini" className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                </Link>
                <Link href="https://twitter.com/jeonghankimia" className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                    </svg>
                </Link>
                <Link href="tel:+6285711717066" className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.21 5.18 2 2 0 0 1 5.23 3h3a2 2 0 0 1 2 1.72c.13 1.21.37 2.39.72 3.53a2 2 0 0 1-.45 1.95l-2.11 2.11a16 16 0 0 0 6.58 6.58l2.11-2.11a2 2 0 0 1 1.95-.45c1.14.35 2.32.59 3.53.72A2 2 0 0 1 22 16.92z"/>
                    </svg>
                </Link>
            </div>
            <p className="font-medium text-white text-[24px] leading-[100%] tracking-normal text-stone-500">
                Made with Love by Ami
            </p>
            </footer>
        </div>
    )
}