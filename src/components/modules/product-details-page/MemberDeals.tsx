import { images } from "@/assets"
import { HandshakeIcon } from "lucide-react"
import Image from "next/image"
import { useSelector } from "react-redux"

const MemberDeals = () => {
    const { selected } = useSelector((state: any) => state.category)

    return (
        <div className='relative'>
            <Image
                src={images.ProductDetailsBg}
                alt="Product Details Background"
                className="w-full h-28 md:h-44 object-cover rounded-md"
            />
            <div className={`absolute inset-0 flex items-center justify-center gap-4 rounded-md p-4 md:p-2 text-whiteCustom ${selected === "makeup"
                ? "bg-mBtnBg/70"
                : "bg-sBtnBg/70"
                }`}>
                <HandshakeIcon size={70} strokeWidth={1.2} />
                <div>
                    <h3 className='text-base font-semibold md:sub-heading'>
                        Exclusive Member Deals: Grab Now!
                    </h3>
                    <p className='text-xs md:text-base'>
                        Spend over ৳5000 and unlock exclusive member benefits.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default MemberDeals