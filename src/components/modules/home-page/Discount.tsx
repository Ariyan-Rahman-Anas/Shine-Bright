import { images } from "@/assets"
import Image from "next/image"

const Discount = () => {
    return (
        <section className="section-setup-1600">
            <div className="relative">
                <div className="w-full h-full">
                    <Image src={images.DiscountBg} alt="Discount" className="w-full h-80 md:rounded-xl object-cover"/>
                </div>
                <div className="absolute top-0 left-0 leading-[3rem] text-whiteCustom md:rounded-xl bg-gradient-to-r from-transparent via-mColor10/40 to-mColor8/10 w-full h-full ">
                    <div className="absolute top-1/4 left-6 md:left-20" >
                        <h1 className="font-medium text-whiteCustom ">“Nothing to Compromise with looking Good”</h1>
                        <div className="font-bayon flex items-center w-fit gap-4  ">
                            <h2 className="text-[130px]" >15%</h2>
                            <div className="">
                                <p className="text-4xl">Discount</p>
                                <p className="text-2xl">ON Your </p>
                                <p className="text-2xl">first order</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Discount