"use client"

import { siteName } from "@/constant"
import { useSelector } from "react-redux"

const RegistrationPageHeader = () => {
    const { selected } = useSelector((state: any) => state.category)

    return (
        <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Join with <span className={selected === "makeup" ? "text-mBtnBg" : "text-sBtnBg"} >{siteName}</span></h1>
            <p className="text-bColor4 w-full md:max-w-sm mx-auto text-sm ">join us for more offers, Exclusive discount, regular updates and so much more</p>
        </div>
    )
}
export default RegistrationPageHeader