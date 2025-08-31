"use client"
import { icons } from "@/assets"
import Image from "next/image"
import { useSelector } from "react-redux"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"


const BlogPageSidebar = ({ selectedCategory, onSelectCategory }: { selectedCategory: string, onSelectCategory: (category: string) => void }) => {

    const { selected } = useSelector((state: any) => state.category)

    const categories = [

        {
            icon: icons.makup,
            name: "Makeup",
        },
        {
            icon: icons.brush,
            name: "Tips & Tricks",
        },
        {
            icon: icons.swatches,
            name: "Swatches",
        },
        {
            icon: icons.swatches,
            name: "Test-1",
        },
    ]

    return (
        <aside className="space-y-1">
            <h1 className="uppercase text-base font-semibold">Categories</h1>
            <ul className="space-y-2 hidden md:block ">
                {categories.map((item, index) => (
                    <li
                        key={index}
                        className={`flex items-center justify-center p-2 gap-2 border-2 ${selectedCategory === item.name && selected === "makeup" ? 'bg-mColor19 border-mColor19 text-whiteCustom ' : selectedCategory === item.name && selected === "skincare" ? "bg-sColorBase2 border-sColorBase2 text-whiteCustom " : "border-bColor1"
                            } rounded cursor-pointer`}
                        onClick={() => onSelectCategory(item.name)}
                    >
                        <Image src={item.icon} alt={item.name} className="w-6 h-6" />
                        <span className="text-sm uppercase">{item.name}</span>
                    </li>
                ))}
            </ul>

            <div className="md:hidden overflow-hidden ">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {categories.map(({ name, icon }, index) => (
                            <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                                <div
                                    className={`flex items-center justify-center p-2 gap-2 border-2 ${selectedCategory === name && selected === "makeup" ? 'bg-mColor19 border-mColor19 text-whiteCustom ' : selectedCategory === name && selected === "skincare" ? "bg-sColorBase2 border-sColorBase2 text-whiteCustom " : "border-bColor1"
                                        } rounded cursor-pointer`}
                                    onClick={() => onSelectCategory(name)}
                                >
                                    <Image src={icon} alt={name} className="w-6 h-6" />
                                    <span className="text-sm uppercase">{name}</span>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>


        </aside>
    )
}
export default BlogPageSidebar