"use client"

import { icons } from '@/assets'
import GoBack from '@/components/shared/GoBack'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const AboutHeader = () => {
    const { selected } = useSelector((state: any) => state.category)

    return (
        <div>
            <section className="section-setup-1600">
                <GoBack />
                <div className="flex items-center justify-center mb-6 mt-6 md:mt-0 ">
                    <div className={`${selected === "makeup" ? "m-gradient-text" : "s-gradient-text"} relative`}>
                        <h1 className="" >Your one-stop shop for </h1>
                        <h2>international beauty products.</h2>
                        <div className="absolute -top-6 md:-top-5 right-5 md:right-[15%] h-16 w-16 ">
                            <Image src={icons.aboutStar} alt="about" className="w-full h-full" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="relative w-fit mx-auto rounded-xl">
                <iframe
                    className='w-[95vw] h-52 md:w-[82vw] md:h-[500px] lg:h-[800px] mx-auto rounded-lg' src="https://www.youtube.com/embed/5SSB9ozMZ5A?si=sPpydfomfFDkCNB3" title="Shine Bright with Holy Quran" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-whiteCustom rounded-full">
                    <Link href="https://www.youtube.com/embed/5SSB9ozMZ5A?si=sPpydfomfFDkCNB3" target="_blank">
                        <Image src={icons.play} alt="play" className="w-10 h-10 md:w-20 md:h-20" />
                    </Link>
                </div>
            </div>

        </div>
    )
}
export default AboutHeader