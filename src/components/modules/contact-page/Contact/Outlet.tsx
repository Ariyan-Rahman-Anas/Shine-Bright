"use client"

import { images } from "@/assets"
import Image from "next/image"
import Link from "next/link"
import { FaLocationDot, FaShop } from "react-icons/fa6"
import { useSelector } from "react-redux"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

const Outlet = () => {
    const { selected } = useSelector((state: any) => state.category)

    const gallery = [
        images.outlet1,
        images.outlet2,
        images.outlet3,
        images.outlet4,
        images.outlet5,
        images.outlet6,
        images.outlet7,
    ]

    return (
        <section>
            <h1 className="sub-heading">{`Shine Bright's Outlet`}</h1>

            <div>
                <h2 className="uppercase mt-8 mb-3 font-semibold" >Outlet 1 (Head Office)</h2>
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between  gap-4 text-sm">
                    <div>
                        <div className="flex items-center gap-2 mb-1 ">
                            <FaShop className={`w-6 h-6 ${selected === "makeup" ? "text-mColor6" : "text-sColor6"}`} />
                            <h3 className="text-sm font-semibold " >Shop location</h3>
                        </div>
                        <p>Shop-01, 11th floor,</p>
                        <p>Sanmar Ocean City Shopping, GEC.</p>
                        <p className="my-4" ><span>City :</span>Chattogram </p>

                        <div className="flex items-center gap-2 mb-1">
                            <FaLocationDot className={`w-6 h-6 ${selected === "makeup" ? "text-mColor6" : "text-sColor6"}`} />
                            <p className="text-sm font-semibold " >Google map link:</p>
                        </div>
                        <Link href="https://maps.app.goo.gl/qdv56wECGUn51uPN8" target="_blank" className="text-blackCustom underline underline-offset-2" >https://maps.app.goo.gl/qdv56wECGUn51uPN8</Link>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1.5">
                        <h5 className="uppercase text-sm font-semibold ">Scan to Get location</h5>
                        <div className="border border-bColor1 p-2 rounded-md w-[120px] h-[120px] ">
                            <Image src={images.ShopLocationQrCode} alt="shop location qr code" className="w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 hidden md:block ">
                <h2 className="uppercase mt-6 mb-3 font-semibold" >Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        gallery.map((item, index) => (
                            <div key={index}>
                                <Image src={item} alt="shop" className="w-full h-full object-cover" />
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* only for small devices */}
            <div className="mt-10 md:hidden">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {gallery.map((item, index) => (
                            <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                                <div key={index}>
                                    <Image src={item} alt="shop" className="w-full h-full object-cover" />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>

        </section>
    )
}
export default Outlet