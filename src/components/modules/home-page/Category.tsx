import { images } from "@/assets"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import SectionHeader from "@/components/Atoms/SectionHeader"


const Category = () => {
    const categories = [
        {
            name: "Body Care",
            img: images.C1
        },
        {
            name: "Makeup Brush",
            img: images.C2
        },
        {
            name: "Lips",
            img: images.C3
        },
        {
            name: "Genie",
            img: images.C4
        }
    ]

    return (
        <section className="section-setup-1600-p overflow-x-hidden space-y-5">
            <div>
                <SectionHeader
                    title="Category"
                    description="Collections of the products our customers liked the most"
                />

            </div>


            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full "
            >
                <CarouselContent>
                    {categories.map((category, index) => (
                        <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                            <div
                                key={`category-${index}`} className="" >
                                <div className="h-52 md:h-96 overflow-hidden rounded-md group ">
                                    <Image
                                        src={category.img}
                                        alt="Category"
                                        className="w-full h-full object-cover rounded-md group-hover:scale-125 transition-all duration-500"
                                    />
                                </div>
                                <h3 className="text-base font-semibold mt-2 uppercase ">{category.name}</h3>
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
        </section>
    )
}
export default Category