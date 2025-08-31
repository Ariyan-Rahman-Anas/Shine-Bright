import { images } from "@/assets"
import Image from "next/image"
import { BiUser } from "react-icons/bi"
import { BsFillStarFill, BsStar } from "react-icons/bs"
import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import SectionHeader from "@/components/Atoms/SectionHeader"

const Reviews = () => {
    const reviews = [
        {
            product: {
                img: images.Rev1,
                name: "Garnier Ultimate Blends Hair Food Coconut Oil 3-in-1 Frizzy Hair Mask Treatment 390ml"
            },
            reviewer: "Noushin Nuri",
            star: 4,
            comment: "If anyone like a peach colour with semi matte they can buy this but in my opinions i hate this because of semi matte. I hate semi matte lipsticks. Colour is good.. But it's not give you a matte finish.    "
        },
        {
            product: {
                img: images.Rev1,
                name: "Garnier Ultimate Blends Hair Food Coconut Oil 3-in-1 Frizzy Hair Mask Treatment 390ml"
            },
            reviewer: "Noushin Nuri",
            star: 5,
            comment: "If anyone like a peach colour with semi matte they can buy this but in my opinions i hate this because of semi matte. I hate semi matte lipsticks. Colour is good.. But it's not give you a matte finish.    "
        },
        {
            product: {
                img: images.Rev1,
                name: "Garnier Ultimate Blends Hair Food Coconut Oil 3-in-1 Frizzy Hair Mask Treatment 390ml"
            },
            reviewer: "Noushin Nuri",
            star: 3,
            comment: "If anyone like a peach colour with semi matte they can buy this but in my opinions i hate this because of semi matte. I hate semi matte lipsticks. Colour is good.. But it's not give you a matte finish.    "
        },
        {
            product: {
                img: images.Rev1,
                name: "Garnier Ultimate Blends Hair Food Coconut Oil 3-in-1 Frizzy Hair Mask Treatment 390ml"
            },
            reviewer: "Noushin Nuri",
            star: 4,
            comment: "If anyone like a peach colour with semi matte they can buy this but in my opinions i hate this because of semi matte. I hate semi matte lipsticks. Colour is good.. But it's not give you a matte finish.    "
        },
        {
            product: {
                img: images.Rev1,
                name: "Garnier Ultimate Blends Hair Food Coconut Oil 3-in-1 Frizzy Hair Mask Treatment 390ml"
            },
            reviewer: "Noushin Nuri",
            star: 3,
            comment: "If anyone like a peach colour with semi matte they can buy this but in my opinions i hate this because of semi matte. I hate semi matte lipsticks. Colour is good.. But it's not give you a matte finish.    "
        },
    ]

    return (
        <section className="overflow-x-hidden">
            <div className="overflow-lefthidden overflow-hidden section-setup-1600-p space-y-5 min-h-[400px] md:min-h-[unset]">
                <SectionHeader
                    title="Reviews"
                    description="Collections of the products our customers liked the most"
                />

                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent isXHidden={true}>
                        {reviews.map(({ product, reviewer, star, comment }, index) => (
                            <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                                <div key={index} className="animate-slide-in-left space-y-2.5">
                                    <div className="flex flex-co md:flex-row items-center gap-4">
                                        <div className="w-16 h-16">
                                            <Image src={product.img} alt={product.name} className="w-full h-full" loading="lazy" />
                                        </div>
                                        <h2 className="text-sm font-medium w-full md:w-2/3 uppercase ">{product.name}</h2>
                                    </div>
                                    <div className="border-2 p-4 rounded-md space-y-2 ">
                                        <div className="flex items-center justify-between gap-2">
                                            <div className="flex items-end gap-2">
                                                <BiUser size={20} />
                                                <p className="text-base uppercase font-semibold">{reviewer}</p>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                {
                                                    Array.from({ length: 5 }).map((_, index) => (
                                                        index < star
                                                            ? <BsFillStarFill size={15} key={index} />
                                                            : <BsStar size={15} key={index} />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <p className="text-sm text-black40 ">{comment}</p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute -bottom-12" />
                    <CarouselDots className="mt-7 md:mt-0" />
                    <CarouselNext className="absolute -bottom-12" />
                </Carousel>
            </div>
        </section>
    )
}
export default Reviews