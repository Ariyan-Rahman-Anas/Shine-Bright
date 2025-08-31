"use client"

import FloatingThemeBtn from "@/components/shared/FloatingThemeBtn"
import GoBack from "@/components/shared/GoBack"
import Image from "next/image"
import { useSelector } from "react-redux"
import { usePathname } from "next/navigation"
import { images } from "@/assets"

const ContactHeader = () => {
    const pathname = usePathname()
    const { selected } = useSelector((state: any) => state.category)

    return (
        <div>
            <FloatingThemeBtn />
            <div className="relative mt-10">
                <div>
                    <Image src={images.ContactBg} alt="contact" className="w-full h-full min-h-32 md:min-h-60 object-cover " />
                </div>
                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r flex items-end justify-end pb-3 md:pb-8 pl-4 md:pl-0 ${selected === "makeup" ? "mOverlay" : "sOverlay"}`}>
                    <div className="section-setup-1600">
                        <div className="space-y-2">
                            <GoBack />
                            <h1 className="uppercase text-2xl font-semibold ">{pathname === "/contact" ? "Contact Us" : pathname === "/outlet" ? "Outlet" : pathname === "/refund-policy" ? "Refund Policy" : pathname === "/delivery-policy" ? "Delivery Policy" : pathname === "/privacy-policy" ? "Privacy Policy" : pathname === "/terms-conditions" ? "Terms & Conditions" : "Contact Us"}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactHeader