import { RxCross2 } from "react-icons/rx"
import PrimaryButton from "../shared/PrimaryButton"
import Link from "next/link"
import { useState } from "react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { allItemsCommon } from "@/constant"

const MakeupPopover = () => {
    const [open, setOpen] = useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger>MAKEUP</PopoverTrigger>
            <PopoverContent className="w-full min-w-[100vw] max-w-1600 mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="section-setup-1600 relative " >
                    <RxCross2
                        className="absolute top-0 right-0 cursor-pointer hover:opacity-70 transition-opacity"
                        onClick={() => setOpen(false)}
                        size={20}
                    />
                    <div className="flex items-end justify-between">
                        <div className="">
                            <h1 className="sub-heading">MAKEUP PRODUCTS</h1>
                            <p>Collections of the products our customers liked the most</p>
                        </div>
                        <div>
                            <PrimaryButton
                                title="View All"
                                to="/"
                                className="min-w-24 text-blackCustom px-5"
                            />
                        </div>
                    </div>

                    <div className="w-full mt-6">
                        <ul className="flex items-start justify-between gap-2">
                            {
                                allItemsCommon.map(({ title, items }, index) => (
                                    <li key={index}>
                                        <h2 className="text-base font-semibold" >{title}</h2>
                                        <ul className={`grid gap-2 mt-2 text-sm text-bColor3 ${items?.length > 10 ? "grid-cols-2" : "grid-cols-1"} `}>
                                            {
                                                items.map(({ name, route }, index) => (
                                                    <li key={index} className="hover:underline hover:text-blackCustom">
                                                        <Link href={route}>{name}</Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
export default MakeupPopover