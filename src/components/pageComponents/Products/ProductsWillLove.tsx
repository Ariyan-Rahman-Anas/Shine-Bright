"use client"
import { images } from "@/assets"
import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import SectionHeader from "../../Atoms/SectionHeader"
import Card from "../../Atoms/Card"

const ProductsWillLove = () => {

    const products = [
            {
                img: images.P1,
                category: "Hourglass",
                tags: ["Best Seller", "Value for Money", "Top Picks"],
                title: "Huda Beauty Easy Blur Natural Airbrush Foundation with Niacinamide",
                colors: ["#FF0000", "#00FF00", "#0000FF"],
                currentPrice: "12.99",
                previousPrice: "14.99"
            },
            {
                img: images.P2,
                category: "Hourglass",
                tags: ["Best Seller", "Value for Money", "Top Picks"],
                title: "Huda Beauty Easy Blur Natural Airbrush Foundation with Niacinamide",
                colors: ["#FF0000", "#00FF00", "#0000FF", "#C68B59", "#DBA36B", "#EDBB94", "#F5C3A8", "#F8CFC0", "#F9D2C4", "#FADAD0", "#FFF1DC", "#00FF07", "#0000FF"],
                currentPrice: "12.99",
                previousPrice: "14.99"
            },
            {
                img: images.P3,
                category: "Hourglass",
                tags: ["Best Seller", "Value for Money", "Top Picks"],
                title: "Huda Beauty Easy Blur Natural Airbrush Foundation with Niacinamide",
                colors: ["#FF0000", "#00FF00", "#0000FF"],
                currentPrice: "12.99",
                previousPrice: "14.99"
            },
            {
                img: images.P3,
                category: "Hourglass",
                tags: ["Best Seller", "Value for Money", "Top Picks"],
                title: "Huda Beauty Easy Blur Natural Airbrush Foundation with Niacinamide",
                colors: ["#FF0000", "#00FF00", "#0000FF"],
                currentPrice: "12.99",
                previousPrice: "14.99"
            },
            {
                img: images.P2,
                category: "Hourglass",
                tags: ["Best Seller", "Value for Money", "Top Picks"],
                title: "Huda Beauty Easy Blur Natural Airbrush Foundation with Niacinamide",
                colors: ["#FF0000", "#00FF00", "#0000FF"],
                currentPrice: "12.99",
                previousPrice: "14.99"
            },
            {
                img: images.P1,
                category: "Hourglass",
                tags: ["Best Seller", "Value for Money", "Top Picks"],
                title: "Huda Beauty Easy Blur Natural Airbrush Foundation with Niacinamide",
                colors: ["#FF0000", "#00FF00", "#0000FF"],
                currentPrice: "12.99",
                previousPrice: "14.99"
            }
        ]

  return (
    <section className="overflow-x-hidden min-h-[560px] ">
            <div className="overflow-left-hidden section-setup-1600-p space-y-5 ">
                <SectionHeader
                    title="Products You Will Love to Have"
                />

                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {products.map((product, index) => (
                            <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                                <Card product={product} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselDots />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
  )
}
export default ProductsWillLove