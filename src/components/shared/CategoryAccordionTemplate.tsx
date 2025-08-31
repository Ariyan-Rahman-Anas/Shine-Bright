import { images } from "@/assets"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"
import Link from "next/link"
import PrimaryButton from "./PrimaryButton"

const CategoryAccordionTemplate = ({ title, content, description = "Collections of the products our customers liked the most", allItems, setMobileMenuOpen }: { title: string, content: React.ReactNode, description: string, allItems: any, setMobileMenuOpen: (open: boolean) => void }) => {
    const handleLinkClick = () => {
        setMobileMenuOpen(false)
    }
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger className="px-2">
                    <div className="flex items-center gap-2 ">
                        <div className="w-[30%] " >
                            <Image src={images.P1} alt="product" className="w-full h-full" />
                        </div>
                        <div className="w-[70%] " >
                            <h1 className="font-semibold" >{title}</h1>
                            <p className="text-xs mt-1 " >{description}</p>
                        </div>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="px-2">
                    {
                        content ? content : (
                            <div className="w-full">
                                <div>
                                    <PrimaryButton title="View All" className="w-full py-2 border-[2px] border-bColor3 " style={{
                                        background: "transparent",
                                        color: "black",
                                    }} />
                                </div>
                                <ul className="mt-3 flex flex-col md:flex-row items-start justify-between gap-2">
                                    {allItems.map((item: any, index: number) => (
                                        <li key={index}>
                                            <h2 className="text-base font-semibold">{item.title}</h2>
                                            <ul className=" mt-2 text-sm text-bColor3">
                                                {item.items.map((subItem: any, subIndex: number) => (
                                                    <li key={subIndex} className="hover:underline hover:text-blackCustom">
                                                        <Link href={subItem.route}
                                                            onClick={handleLinkClick}
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    }
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
export default CategoryAccordionTemplate