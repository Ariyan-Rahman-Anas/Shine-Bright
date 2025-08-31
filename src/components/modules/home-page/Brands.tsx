"use client"

import { images } from "@/assets"
import Image from "next/image"
import { useSelector } from "react-redux"
import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import SectionHeader from "@/components/Atoms/SectionHeader"

const Brands = () => {
    const brands = [
        {
            img: images.Br1,
        },
        {
            img: images.Br2,
        },
        {
            img: images.Br3,
        },
        {
            img: images.Br1,
        },
        {
            img: images.Br2,
        },
        {
            img: images.Br3,
        }, {
            img: images.Br1,
        },
        {
            img: images.Br2,
        },
        {
            img: images.Br3,
        },
    ]

    const { selected } = useSelector((state: any) => state.category)
    return (
        <section className="relative overflow-x-hidden h-80 ">
            <div className="h-full w-full">
                <Image src={images.BrandsBg} alt="Brands" className="wfull h-80 object-cover " />
            </div>
            <div className={`absolute top-0 left-0 transform w-full h-full py-8 px-4 sm:px-6 lg:px-8 ${selected === "makeup" ? "mOverlay" : "sOverlay"}`}>
                <div className="section-setup-1600 overflow-left-hidden space-y-5">
                    <SectionHeader
                        title="Brands"
                        description="Collections of the products our customers liked the most"
                    />

                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {brands.map((brand, index) => (
                                <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                                    <div key={index}>
                                        <Image src={brand.img} alt="Brand" className="w-full h-full" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="hidden md:block" >
                            <CarouselPrevious />
                        </div>
                        <div className="hidden md:block" >
                            <CarouselDots />
                        </div>
                        <div className="hidden md:block" >
                            <CarouselNext />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
export default Brands