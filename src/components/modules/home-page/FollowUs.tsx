"use client"

import { images } from "@/assets"
import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa"
import { useSelector } from "react-redux"

const FollowUs = () => {
    const { selected } = useSelector((state: any) => state.category)

    const socials = [
        {
            icon: <FaFacebookF />,
            link: "https://www.facebook.com/shine-bright-101252521466548/"
        },
        {
            icon: <FaInstagram />,
            link: "https://www.instagram.com/shine-bright_1/"
        },
        {
            icon: <FaTiktok />,
            link: "https://www.tiktok.com/@shine-bright_1"
        },
        {
            icon: <FaYoutube />,
            link: "https://www.youtube.com/@shine-bright_1"
        },
        {
            icon: <FaTwitter />,
            link: "https://twitter.com/shine-bright_1"
        },
    ]

    return (
        <section className="relative min-h-64">
            <div>
                <Image src={images.FollowUsBg} alt="Follow Us" className="w-full h-full min-h-64 object-cover " />
            </div>
            <div className={`absolute top-0 left-0 transform w-full h-full min-h-64 py-8 ${selected === "makeup" ? "mOverlay" : "sOverlay"}`}>
                <div className="w-full min-h-64 section-setup-1600-p space-y-5 ">
                    <h1 className={`text-2xl w-5/6 md:w-full font-semibold uppercase `}>Follow us on Socials for recent updates & Offers</h1>
                    <ul className="flex items-center justify-between md:justify-start gap-8 md:gap-16">
                        {
                            socials.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.link} target="_blank" className="text-2xl">
                                        {item.icon}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default FollowUs