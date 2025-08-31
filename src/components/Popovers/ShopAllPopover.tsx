import { RxCross2 } from "react-icons/rx"
import PrimaryButton from "../shared/PrimaryButton"
import Image from "next/image"
import { images } from "@/assets"
import Link from "next/link"
import { useState } from "react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { allItems } from "@/constant"

const ShopAllPopover = () => {
    const [open, setOpen] = useState(false)

    const handleLinkClick = () => {
        setOpen(false)
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger>SHOP ALL</PopoverTrigger>
            <PopoverContent className="w-full min-w-[100vw] max-w-1600 mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="section-setup-1600 relative " >
                    <RxCross2
                        className="absolute top-0 right-0 cursor-pointer hover:opacity-70 transition-opacity"
                        onClick={() => setOpen(false)}
                        size={20}
                    />
                    <div className="flex items-end justify-between">
                        <div className="">
                            <h1 className="sub-heading">SHOP ALL</h1>
                            <p>Collections of the products our customers liked the most</p>
                        </div>
                        <div>
                            <PrimaryButton

                                title="View All"
                                to="/"
                                style={{
                                    backgroundColor: "transparent",
                                }}
                                className="min-w-24 border-2 border-blackCustom text-blackCustom px-5"
                            />
                        </div>
                    </div>

                    <div className="flex items-start justify-between gap-4 w-full mt-6">
                        <div className="hidden md:block">
                            <Image src={images.P1} alt="Product" className="w-full h-full" />
                        </div>
                        <div className="w-full">
                            <ul className="flex flex-col md:flex-row items-start justify-between gap-2">
                                {allItems.map((item, index) => (
                                    <li key={index}>
                                        <h2 className="text-base font-semibold">{item.title}</h2>
                                        <ul className="grid grid-cols-2 gap-2 mt-2 text-sm text-bColor3">
                                            {item.items.map((subItem, subIndex) => (
                                                <li key={subIndex} className="hover:underline hover:text-blackCustom">
                                                    <Link href={subItem.route} onClick={handleLinkClick}>
                                                        {subItem.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
export default ShopAllPopover