"use client"

import { images } from "@/assets"
import FloatingThemeBtn from "@/components/shared/FloatingThemeBtn"
import Image from "next/image"
import { useSelector } from "react-redux"

const Hero = () => {
    const { selected } = useSelector((state: any) => state.category)

    return (
        <div className="relative max-w1920 mx-auto md:pt-0 ">
            <div className="absolute top-0 left-0 right-0 ">
                <FloatingThemeBtn />
            </div>

            {/* her image */}
            <div className="w-full h-full md:h-[90vh]">
                <Image src={selected === "makeup" ? images.Hero1 : images.Hero2} alt="Hero" className="w-full h-full object-cover " />
            </div>

            {/* her text */}
            <div className="uppercase font-bayon absolute top-0 left-0 bg-gradient-to-t from-mainBg to-transparent w-full h-full flex items-center justify-center">
                <h1 className="absolute bottom-10 md:bottom-20 lg:bottom-28 left-5/6 transform -translate-x-1/2 text-3xl md:text-6xl lg:text-7xl font-semibold ">Bring out</h1>
                <h2
                    className={`text-center w-full text-5xl md:text-8xl lg:text-9xl absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r inline-block text-transparent bg-clip-text 
                        ${selected === "makeup" ? "from-mBtnBg to-mBtnBg" : "from-sBtnBg to-sBtnBg"}
                        
                        `}
                >
                    The real YOU!!!
                </h2>

            </div>
        </div>
    )
}
export default Hero