"use client"
import { icons } from "@/assets"
import PrimaryButton from "@/components/shared/PrimaryButton"
import SecondaryButton from "@/components/shared/SecondaryButton"
import { email } from "@/constant"
import Image from "next/image"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { BsWhatsapp } from "react-icons/bs"
import { IoCallOutline } from "react-icons/io5"
import { useSelector } from "react-redux"

const ContactForm = () => {
    const { selected } = useSelector((state: any) => state.category)
    const { register,
        //  handleSubmit,
        formState: { errors } } = useForm();
    // const onSubmit = (data: any) => {
    //     console.log(data);
    // }
    return (
        <section>
            <div>
                <h1 className="sub-heading" >HAVE ANY QUESTIONS?</h1>
                <p className="text-bColor4" >We are here for you 7 days a week</p>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-4 text-bColor4 mt-6 text-sm ">
                <div className="space-y-4 min-w-fit ">
                    <div className="p-4 flex items-start gap-2 border-2 border-bColor1 rounded-md ">
                        <IoCallOutline className="text-3xl" />
                        <div className="">
                            <h2>Call Us</h2>
                            <Link href="tel:+8801838331990" className="text-blackCustom font-semibold " >(+880) 1610-195968</Link>
                            <p>Monday – Friday: 9:00 – 20:00</p>
                            <p>Saturday: 11:00 – 15:00</p>
                        </div>
                    </div>
                    <div className="p-4 flex items-start gap-1 border-2 border-bColor1 rounded-md ">
                        <BsWhatsapp className="text-3xl pr-1"/>
                        <div className="">
                            <h2>Whatsapp Live Chat Support</h2>
                            <Link href="https://wa.me/8801838331990" className="text-blackCustom font-semibold " >(+880) 1610-195968</Link>
                            <PrimaryButton to="https://wa.me/8801838331990" title="Live Chat"
                                className={`font-semibold text-sm px-10 py-1.5 mt-2 ${selected === "makeup" ? "text-blackCustom bg-mColor3/80" : "text-whiteCustom bg-sColor6"}`} />
                        </div>
                    </div>
                </div>
                <div className="space-y-2 w-full ">
                    <div className="p-2 flex items-center gap-2 border-2 border-bColor1 rounded-md ">
                        <div>
                            <Image src={icons.MailOutline} alt="mail outline" className="w-8 h-8" />
                        </div>
                        <div>
                            <h2>Mail Us</h2>
                            <Link href="mailto:info@taupenotch.com.bd" className="text-blackCustom font-semibold " >{email}</Link>
                        </div>
                    </div>
                    <form className="space-y-2">
                        <div className="w-full">
                            <input
                                type="text"
                                id="name"
                                placeholder="Full Name"
                                className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                                {...register("name")}
                            />
                            {/* {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>} */}
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 w-full">
                            <div className="w-full">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                                    {...register("email")}
                                />
                                {/* {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>} */}
                            </div>
                            <div className="w-full">
                                <input
                                    type="number"
                                    id="phone"
                                    placeholder="Phone"
                                    className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
                                    {...register("phone")}
                                />
                                {/* {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>} */}
                            </div>
                        </div>
                        <div className="w-full">
                            <textarea
                                id="message"
                                placeholder="Message" rows={5}
                                className={`input-field ${errors.message ? 'border-red-500' : ''}`}
                                {...register("message")}
                            />
                            {/* {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>} */}
                        </div>
                        <SecondaryButton
                            bType="submit"
                            title="Send Message"
                            className={`w-fit text-sm px-8 py-1.5 font-semibold ${selected === "makeup" ? "bg-mColor3/80 text-blackCustom" : "bg-sColor6 text-whiteCustom"}`}
                        />
                    </form>
                </div>
            </div>
        </section>
    )
}
export default ContactForm