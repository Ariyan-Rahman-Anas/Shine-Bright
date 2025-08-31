import { RxCross2 } from "react-icons/rx"
import Link from "next/link"
import { useState } from "react"
import { IoFlowerSharp } from "react-icons/io5"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const MoreProductsPopover = () => {

  const [open, setOpen] = useState(false)
  const allItems = [
    { name: "Gifts", route: "/gifts" },
    { name: "Accessories", route: "/accessories" },
    { name: "New Arrivals", route: "/new-arrivals" },
    { name: "Nails", route: "/best-seller" },
    { name: "Elelctronic Tools", route: "/top-picks" },
    { name: "Mother & Baby Care", route: "/trending" },
  ]

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger>More Products</PopoverTrigger>
      <PopoverContent className="w-full min-w-[100vw] max-w-1600 mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="section-setup-1600 relative " >
          <RxCross2
            className="absolute top-0 right-0 cursor-pointer hover:opacity-70 transition-opacity"
            onClick={() => setOpen(false)}
            size={20}
          />
          <div className="flex items-end justify-between">
            <div className="">
              <h1 className="sub-heading">More Products</h1>
              <p>Collections of the products our customers liked the most</p>
            </div>
            <div>
              {/* <PrimaryButton
                title="View All"
                to="/"
                style={{
                  backgroundColor: "transparent",
                }}
                className="min-w-24 border-2 border-blackCustom text-blackCustom px-5"
              /> */}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full mt-6">
            {
              allItems.map(({ name, route }, index) => (
                <div key={index} className="flex items-center gap-3 border-2 border-bColor1 p-2 rounded ">
                  <IoFlowerSharp className={`w-6 h-6 text-sColor6`} />
                  <Link href={route} >{name}</Link>
                </div>
              ))
            }
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
export default MoreProductsPopover