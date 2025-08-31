"use client"

import { images } from "@/assets"
import PrimaryButton from "@/components/shared/PrimaryButton"
import Image from "next/image"
import { useSelector } from "react-redux"

const SpecialSolistia = () => {

    const { selected } = useSelector((state: any) => state.category)

    return (
        <div className="relative w-full h-full">
            <div className={`bg-gradient-to-b w-full h-full min-h-[500px] sm:min-h-[580px] md:min-h-[600px] relative ${selected === "makeup" ? "from-mBtnBg/50 to-mainBg" : "from-sBtnBg/50 to-mainBg"}`}>
                <div className="w-full max-w-1400 mx-auto absolute -top-8 left-1/2 transform -translate-x-1/2 space-y-4 ">
                    <div className="w-[90%] sm:w[400px] md:w-[646px] mx-auto h-full  px8 ">
                        <Image src={images.SpecialSolistia} alt="Special Solistia" className="w-full h-full" />
                    </div>
                    <div className="flex flex-col items-center justify-center text-center ">
                        <h1 className="text-xl md:text-4xl font-semibold uppercase">{`“special Solistia facial cream”`}</h1>
                        <p className="text-black40 mb-4 mt-1 ">{`Say "I do" to the dreamiest fragrance duo created to celebrate love in all its forms`}</p>
                        <PrimaryButton to="/" title="SHOP NOW" 
                        className={`py-2 w-3/4 md:w-full md:max-w-lg mx-auto rounded-full font-semibold`}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SpecialSolistia