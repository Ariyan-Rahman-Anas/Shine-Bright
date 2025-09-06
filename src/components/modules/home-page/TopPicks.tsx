import Card from "@/components/Atoms/Card"
import SectionHeader from "@/components/Atoms/SectionHeader"
import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { SBProductsData } from "@/constant"

const TopPicks = () => {
    return (
        <section className="overflow-x-hidden h-[670px] sm:h-[610px] md:h-fit">
            <div className="overflow-left-hidden section-setup-1600-p space-y-5">
                <SectionHeader
                    title="Top Picks"
                    description="Collections of the products our customers liked the most"
                />

                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {SBProductsData.map((product, index) => (
                            <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                                <Card product={product} />
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
export default TopPicks