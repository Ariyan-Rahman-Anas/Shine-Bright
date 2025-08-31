import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
import { RxCross2 } from "react-icons/rx"
import { images } from "@/assets"
import Card from "../Atoms/Card"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

const BestSellerPopover = () => {
  const [open, setOpen] = useState(false)

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
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger>BEST SELLER</PopoverTrigger>
      <PopoverContent className="w-full min-w-[100vw] max-w-1600 mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="section-setup-1600 relative">
          <RxCross2
            className="absolute top-0 right-0 cursor-pointer hover:opacity-70 transition-opacity"
            onClick={() => setOpen(false)}
            size={20}
          />
          <div className="flex items-center gap-10 mb-5 ">
            <div className="">
              <h1 className="sub-heading  ">Brands</h1>
              <p>Collections of the products our customers liked the most</p>
            </div>
          </div>

          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {products.map((product, index) => (
                <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <Card product={product} isBtn={false} isColorPicker={false} />
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious /> */}
            {/* <CarouselDots /> */}
            {/* <CarouselNext /> */}
          </Carousel>
        </div>
      </PopoverContent>
    </Popover>
  )
}
export default BestSellerPopover