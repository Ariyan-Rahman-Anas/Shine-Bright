"use client"

import { siteInfo } from "@/constant"
import { useSelector } from "react-redux"

const LoginPageHeader = () => {
    const { selected } = useSelector((state: any) => state.category)

    return (
        <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">WELCOME TO <span className={selected === "makeup" ? "text-mBtnBg" : "text-sBtnBg"} >{siteInfo.name}</span></h1>
            <p className="text-bColor4 w-full md:max-w-sm mx-auto text-sm ">join us for more offers, Exclusive discount, regular updates and so much more</p>
        </div>
    )
}
export default LoginPageHeader