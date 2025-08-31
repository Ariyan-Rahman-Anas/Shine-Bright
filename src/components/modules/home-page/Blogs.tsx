"use client"

import { images } from "@/assets"
import SectionHeader from "@/components/Atoms/SectionHeader"
import BlogCard from "@/components/modules/blog-page/BlogCard"
import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const Blogs = () => {

    const blogs = [
        {
            img: images.Bl1,
            title: "Treat Your lip with the best Gisou honey lip oil",
            comments: 2,
            date: "12 May 2025",
            category: "Makeup",
            slug: "treat-your-lip-with-the-best-gisou-honey-lip-oil"
        },
        {
            img: images.Bl2,
            title: "Treat Your lip with the best Gisou honey lip oil",
            comments: 2,
            date: "12 May 2025",
            category: "Makeup",
            slug: "treat-your-lip-with-the-best-gisou-honey-lip-oil"
        },
        {
            img: images.Bl3,
            title: "Treat Your lip with the best Gisou honey lip oil",
            comments: 2,
            date: "12 May 2025",
            category: "Tips & Tricks",
            slug: "treat-your-lip-with-the-best-gisou-honey-lip-oil"
        },
        {
            img: images.Bl1,
            title: "Treat Your lip with the best Gisou honey lip oil",
            comments: 2,
            date: "12 May 2025",
            category: "Swatches",
            slug: "treat-your-lip-with-the-best-gisou-honey-lip-oil"
        },
        {
            img: images.Bl3,
            title: "Treat Your lip with the best Gisou honey lip oil",
            comments: 2,
            date: "12 May 2025",
            category: "Makeup",
            slug: "treat-your-lip-with-the-best-gisou-honey-lip-oil"
        },
        {
            img: images.Bl3,
            title: "Treat Your lip with the best Gisou honey lip oil",
            comments: 2,
            date: "12 May 2025",
            category: "Tips & Tricks",
            slug: "treat-your-lip-with-the-best-gisou-honey-lip-oil"
        },
        {
            img: images.Bl1,
            title: "Treat Your lip with the best Gisou honey lip oil",
            comments: 2,
            date: "12 May 2025",
            category: "Swatches",
            slug: "treat-your-lip-with-the-best-gisou-honey-lip-oil"
        },
        {
            img: images.Bl2,
            title: "Treat Your lip with the best Gisou honey lip oil",
            comments: 2,
            date: "12 May 2025",
            category: "Makeup",
            slug: "treat-your-lip-with-the-best-gisou-honey-lip-oil"
        },
        {
            img: images.Bl3,
            title: "Treat Your lip with the best Gisou honey lip oil",
            comments: 2,
            date: "12 May 2025",
            category: "Tips & Tricks",
            slug: "treat-your-lip-with-the-best-gisou-honey-lip-oil"
        },
    ]

    return (
        <section className="overflow-x-hidden">
            <div className="overflow-left-hidden section-setup-1600-p space-y-5">
                <SectionHeader
                    title="Blogs"
                    description="Collections of the products our customers liked the most"
                />
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {blogs.map((blog, index) => (
                            <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                                <BlogCard blog={blog} />
                                {/* <div key={index}>
                                    <div>
                                        <Image src={img} alt="Blog image" className="w-full h-full object-cover" loading="lazy" />
                                    </div>
                                    <h1 className="text-lg font-medium my-2" >{title}</h1>
                                    <PrimaryButton to="/" title="Read more" className={`py-2 w-full font-semibold uppercase ${selected === "makeup"
                                        ? "bg-mColor3/80"
                                        : "text-whiteCustom bg-gradient-to-r from-sColorBase to-sColor8"
                                        }`} />
                                </div> */}
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
        </section>
    )
}
export default Blogs