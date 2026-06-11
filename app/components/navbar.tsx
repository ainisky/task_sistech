"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    return (
        <nav className="w-full flex justify-center bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="w-full max-w-[1440px] h-[103px] flex items-center justify-between pt-[15px] pb-[15px] pl-[20px] pr-[20px]">
                <div className="text-[28px] font-bold tracking-wider text-[#FE75B0]">
                    <Link href="/">SISTECH CAFE</Link>
                </div>
                <div className="flex items-center gap-8">
                    <ul className="flex items-center gap-8 font-medium text-[24px] text-black">
                        <li><Link href="../menu">Menu</Link></li>
                        <li><Link href="../about-us">About Us</Link></li>
                        <li><Link href="../contact">Contact</Link></li>
                    </ul>
                    <Link href="/">
                        <button className="bg-[#FE75B0] text-white px-5 py-2.5 text-[24px] rounded-md font-medium hover:bg-[#FE75B0]/80 transition-all shadow-sm">
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}