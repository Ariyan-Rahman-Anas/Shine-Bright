"use client"

import { images } from "@/assets"
import Image from "next/image"
import SectionHeader from "../../Atoms/SectionHeader"
import { useSelector } from "react-redux"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"


const AuthorizedPartner = () => {
    const partners = [
        {
            img: images.AP1,
        },
        {
            img: images.AP2,
        },
        {
            img: images.AP3,
        },
        {
            img: images.AP4,
        },
        {
            img: images.AP1,
        },
        {
            img: images.AP2,
        },
        {
            img: images.AP3,
        },
        {
            img: images.AP4,
        }
    ]

    const { selected } = useSelector((state: any) => state.category)
    // Create carousel controls for this component

    return (
        <section className="relative overflow-x-hidden  ">
            <div>
                <Image src={images.BrandsBg} alt="Brands" className="w-full h-full min-h-80 object-cover " />
            </div>
            <div className={`absolute top-0 left-0 transform w-full h-full section-setup ${selected === "makeup" ? "mOverlay" : "sOverlay"}`}>
                <div className="max-w-1600 mx-auto pt-8 space-y-5">


                    <div className="overflow-left-hidden section-setup-1600-p space-y-5 ">
                        <SectionHeader
                            title="Authorized Partner"
                            description=""
                        />


                        <Carousel
                            opts={{
                                align: "start",
                            }}
                            className="w-full"
                        >
                            <CarouselContent>
                                {partners.map((partner, index) => (
                                    <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/6 ">
                                        <div key={index} className="w-48 h-28 " >
                                            <Image src={partner.img} alt="Brand" className="w-full h-full" />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            {/* <CarouselPrevious /> */}
                            {/* <CarouselDots /> */}
                            {/* <CarouselNext /> */}
                        </Carousel>
                    </div>


                </div>
            </div>
        </section>
    )
}
export default AuthorizedPartner