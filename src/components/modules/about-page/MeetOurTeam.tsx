"use client"

import { icons} from "@/assets"
import { teamMembers } from "@/constant"
import Image from "next/image"
import { useSelector } from "react-redux"

const MeetOurTeam = () => {
    const { selected } = useSelector((state: any) => state.category)
   
    return (
        <div className="section-setup-1400 px-4 space-y-3 ">
            <div className="flex items-center justify-center gap-2">
                <h1 className={`${selected === "makeup" ? "m-gradient-text" : "s-gradient-text"}`} >Meet Our Team</h1>
                <Image src={icons.TeamIcon} alt="Team memebers" className="w-10 h-10 md:w-14 md:h-14" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                {
                    teamMembers?.map(({ img, designation, name, details }, idx) => <div key={idx} className="p-2.5 border border-mColor2 shadow rounded-md " >
                        <div className="w-full md:h-96 ">
                            <Image src={img} alt={name} className="w-full h-full rounded-lg object-cover "/>
                        </div>
                        <div>
                            <h2 className={`${selected === "makeup" ? "text-mBtnBg" : "text-sBtnBg"} my-1 text-xl font-semibold`} >{designation}</h2>
                            <p className="text-sm" ><span className="font-semibold uppercase ">{name}</span>, {details}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}
export default MeetOurTeam