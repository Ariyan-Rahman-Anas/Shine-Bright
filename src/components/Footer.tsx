"use client"

import { icons, images } from "@/assets"
import Image from "next/image"
import { useSelector } from "react-redux"
import Link from "next/link"
import { MdEmail, MdPhone } from "react-icons/md"
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"
import { siteInfo } from "@/constant"

const Footer = () => {
  const { selected } = useSelector((state: any) => state.category)

  const menu = [
    { label: "Shop", link: "/" },
    { label: "About Us", link: "/about" },
    { label: "Blog", link: "/blog" },
    { label: "Contact Us", link: "/contact" },
    { label: "Track Order", link: "/track-order" },
  ]

  const accounts = [
    { label: "My Account", link: "https://www.facebook.com/shine-bright-101252521466548/" },
    { label: "Wishlist", link: "https://www.instagram.com/shine-bright_1/" },
    { label: "Cart", link: "https://www.youtube.com/shine-bright_1" },
    { label: "Gift Cards", link: "https://twitter.com/shine-bright_1" },
  ]

  const information = [
    { label: "Help", link: "/help" },
    { label: "Refund Policy", link: "/refund-policy" },
    { label: "Shipping Policy", link: "/shipping-policy" },
    { label: "Return Policy", link: "/return-policy" },
    { label: "Terms & Conditions", link: "/terms-conditions" },
  ]

  const footerDown = [
    { label: "Support Center", link: "/support-center" },
    { label: "Payment Security", link: "/payment-security" },
    { label: "Privacy Policy", link: "/privacy-policy" },
    { label: "EMI", link: "/emi" },
  ]


  return (
    <footer className="space-y-10">
      <div id="footer-up" className="relative">
        <div>
          <Image src={images.HaveAnyQueBg} alt="Have Any Questions in your mind?" className="w-full h-full min-h-64 object-cover " />
        </div>
        <div className={`absolute top-0 left-0 transform h-full w-full min-h-64  ${selected === "makeup" ? "mOverlay" : "sOverlay"}`}>
          <div className="relative section-setup-1600-p">
            <div className={`space-y-5 py-8`}>
              <div className="space-y-1">
                <h1 className="text-3xl font-semibold uppercase ">Have any questions in mind?</h1>
                <p >Click on the button to directly chat with us in whatsapp , ANYTIME, ANYWHERE </p>
              </div>
              <Link
                href="https://wa.me/8801722222222"
                className="w-fit text-base bg-whiteCustom text-blackCustom font-medium uppercase flex items-center gap-2 px-4 py-2 rounded">
                <Image src={icons.WhatsApp} alt="WhatsApp" className="w-6 h-6" />
                <span>Chat with us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div id="footer-down"
        className={`${selected === "makeup" ? "bg-mNavFooter" : "bg-sNavFooter"} p-4 text-blackCustom flex items-end justify-between gap-2 pt-16 `}
      >
        <div className="w-full max-w-1400 mx-auto">
          <Link href="/" className="w-fit font-yellowtail font-semibold tracking-widest text-2xl md:text-3xl">
              Shine-Bright
          </Link>
          <div className=" flex flex-col lg:flex-row itemsend gap-x-32 mt-8 space-y-8 lg:space-y-0 ">
            <div className="flex flex-col lg:items-start justify-between w-full md:min-w-[320px] md:max-w-[320px] mb-6 md:mb-0 ">
              <div className="w-full ">
                <div className="flex items-center gap-2">
                  <MdEmail />
                  <p>{siteInfo.email}</p>
                </div>
                <div className="flex items-center gap-2 my-2 ">
                  <MdPhone />
                  <p>{siteInfo.number}</p>
                </div>
                <p>Shop-01, 11th floor, Sanmar Ocean City Shopping, GEC, Chattogram, Bangladesh.</p>
              </div>
              <div className="w-full flex items-center justify-between gap-2 mt-4 lg:mt-8 text-2xl ">
                <Link href={"https://www.facebook.com/shine-bright-101252521466548/"} target="_blank">
                  <FaFacebookF />
                </Link>
                <Link href={"https://www.instagram.com/shine-bright_1/"} target="_blank">
                  <FaInstagram />
                </Link>
                <Link href={"https://www.youtube.com/@shine-bright_1"} target="_blank">
                  <FaYoutube />
                </Link>
                <Link href={"https://twitter.com/shine-bright_1"} target="_blank">
                  <FaTwitter />
                </Link>
                <Link href={"https://www.linkedin.com/company/shine-bright-1/"} target="_blank">
                  <FaLinkedin />
                </Link>
              </div>
            </div>

            <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-4">
              <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-y-10 text-sm">
                <div className="w-full space-y-2 md:space-y-3">
                  <h3 className="font-semibold text-base uppercase">Menu</h3>
                  <ul className="space-y-2 text-bColor3">
                    {
                      menu.map((item, index) => (
                        <li key={index} className="hover:underline hover:text-blackCustom underline-offset-1" >
                          <Link href={item.link}>{item.label}</Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
                <div className="w-full space-y-2 md:space-y-3">
                  <h3 className="font-semibold text-base uppercase">Accounts</h3>
                  <ul className="space-y-2 text-bColor3">
                    {
                      accounts.map((item, index) => (
                        <li key={index} className="hover:underline hover:text-blackCustom underline-offset-1">
                          <Link href={item.link}>{item.label}</Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
                <div className="w-full space-y-2 md:space-y-3">
                  <h3 className="font-semibold text-base uppercase">Information</h3>
                  <ul className="space-y-2 text-bColor3">
                    {
                      information.map((item, index) => (
                        <li key={index} className="hover:underline hover:text-blackCustom underline-offset-1">
                          <Link href={item.link}>{item.label}</Link>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>

              <div className="wfull space-y-2 md:space-y-3 ">
                <h3 className="font-semibold text-base uppercase">We Accept</h3>
                <div className="w-5/6 md:w-full ">
                  <Image src={images.PaymentMethods} alt="Payment Methods" className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>


          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-2 space-y-6 md:space-y-0 mt-8 md:mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-x-10 text-sm w-full md:w-fit">
              {
                footerDown.map((item, index) => (
                  <Link key={index} href={item.link}>
                    <p>{item.label}</p>
                  </Link>
                ))
              }
            </div>

            <p className="text-xs md:text-sm text-left w-full md:w-fit">Copyright 2024. <span className="font-semibold textblackCustom font-yellowtail">Shine-Bright</span>. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer