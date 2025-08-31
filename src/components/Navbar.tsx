"use client"

import { icons, images } from "@/assets"
import Image from "next/image"
import Link from "next/link"
import { useSelector } from "react-redux"
import { useState, useRef, useEffect, MouseEvent } from "react"
import { IoIosMenu } from "react-icons/io"
import { RxCross2 } from "react-icons/rx"
import FloatingThemeBtn from "./shared/FloatingThemeBtn"
import ShopAllPopover from "./Popovers/ShopAllPopover"
import BrandPopover from "./Popovers/BrandPopover"
import SkincarePopover from "./Popovers/SkincarePopover"
import MakeupPopover from "./Popovers/MakeupPopover"
import MoreProductsPopover from "./Popovers/MoreProductsPopover"
import BestSellerPopover from "./Popovers/BestSellerPopover"
import SearchSheet from "./sheets/SearchSheet"
import WishlistSheet from "./sheets/WishlistSheet"
import CartSheet from "./sheets/CartSheet"
import SecondaryButton from "./shared/SecondaryButton"
import PrimaryButton from "./shared/PrimaryButton"
import ShopAllAccordion from "./CategoryAccordions/ShopAllAccordion"
import BrandAccordion from "./CategoryAccordions/BrandAccordion"
import BestSellerAccordion from "./CategoryAccordions/BestSellerAccordion"
import MakeupAccordion from "./CategoryAccordions/MakeupAccordion"
import MoreProductsAccordion from "./CategoryAccordions/MoreProductsAccordion"
import { loggedInUser } from "@/redux/features/authSlice"
import { useLogoutHandler } from "@/hooks/useLogoutHandler"
import { useGetCustomerByIdQuery } from "@/redux/api/authApi"

const Navbar = () => {
  const { selected } = useSelector((state: any) => state.category)
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const topNavItems = [
    { label: "About", link: "/about" },
    { label: "Blog", link: "/blog" },
    { label: "Contact", link: "/contact" },
  ]

  // Smooth close function
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const loggedInUserSelector = useSelector(loggedInUser)
  const { id, email, country_code, phone, first_name, last_name } = loggedInUserSelector || {}
  const { data: customerData } = useGetCustomerByIdQuery(id)
  const userPrimaryAddress = customerData?.data?.userProfile?.find((item: any) => item.is_primary == true)
  const { address, area, thana, city, country, postal_code, zone } = userPrimaryAddress || {}

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        closeMobileMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside as any);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside as any);
    };
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const { handleLogout } = useLogoutHandler({
    onComplete: () => setOpen(false),
  })

  return (
    <nav className="sticky top-0 md:z-40 z-50 " >
      {/* Desktop Top Navigation */}
      <div
        // className={`w-full py-3 hidden md:block ${selected === "makeup" ? "bg-gradient-to-r from-mColor11 to-mColor12" : "bg-gradient-to-r from-sColor2 to-sColorBase"}`}
        className={`w-full py-3 hidden md:block ${selected === "makeup" ? "bg-mNavFooter" : "bg-sNavFooter"}`}
      >
        <div className="max-w-1600 mx-auto flex items-center justify-between px-4">
          {/* top left items */}
          <ul className="flex items-center gap-4">
            {
              topNavItems.map((item, index) => (
                <li key={index} className="flex items-center gap-2 uppercase">
                  <Link href={item.link}>
                    <p className="hover:opacity-75 transition-opacity">{item.label}</p>
                  </Link>
                </li>
              ))
            }
          </ul>

          {/* centered logo */}
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <h1 className="font-yellowtail font-semibold tracking-widest text-3xl">Shine-Bright</h1>
          </Link>

          {/* top right items */}
          <div className="flex items-center gap-6">
            {loggedInUserSelector
              ? (
                <div className="cursor-pointer relative" ref={dropdownRef}>
                  <div onClick={() => setOpen(!open)} className="hover:opacity-75 transition-opacity">
                    <Image src={icons.User} alt="User" className="w-6 h-6" />
                  </div>

                  {/* User Dropdown Menu */}
                  <div className={`hidden md:block md:absolute -top-3 right-8 z-50 bgmainBg shadow-lg border border-gray-200 rounded-md min-w-fit transition-all duration-200 ease-in-out ${open
                    ? "opacity-100 visible transform translate-x-0"
                    : "opacity-0 invisible transform -translate-x-2"
                    }`}>
                    <div className='flex items-center justify-start gap-4 w-fit p-1 '>
                      <div onClick={() => setOpen(false)}>
                        <PrimaryButton to="/user/profile" title="Dashboard" className={`px-6 py-1.5`} />
                      </div>
                      <SecondaryButton title="Logout"
                        onClick={handleLogout}
                        style={{
                          background: "transparent",
                          color: "black",
                        }} className="px-8 py-1 text-base w-full border2 border-bColor3 " />
                    </div>
                  </div>
                </div>
              ) : (
                <Link href="/login" className="hover:opacity-75 transition-opacity">
                  <Image src={icons.User} alt="User" className="w-6 h-6" />
                </Link>
              )}
            <SearchSheet />
            <CartSheet />
            <WishlistSheet />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        // className={`w-full py-3 md:hidden ${selected === "makeup" ? "bg-gradient-to-r from-mColor11 to-mColor12" : "bg-gradient-to-r from-sColor2 to-sColorBase"}`}
        className={`w-full py-3 md:hidden ${selected === "makeup" ? "bg-mNavFooter" : "bg-sNavFooter"}`}
      >
        <div className="flex items-center justify-between px-4">
          {/* Mobile Hamburger Menu */}
          <IoIosMenu
            onClick={() => setMobileMenuOpen(true)}
            className="w-6 h-6 cursor-pointer transition-transform duration-200 hover:scale-110"
          />

          {/* Mobile User Icon */}
          {loggedInUserSelector ? (
            <div className="cursor-pointer" ref={dropdownRef}>
              <div onClick={() => setOpen(!open)} className="hover:opacity-75 transition-opacity">
                <Image src={icons.User} alt="User" className="w-6 h-6" />
              </div>

              {/* User Dropdown Menu */}
              <div className={`absolute top-12 left-0 right-0 z-50 bg-whiteCustom shadow-lg border border-gray-200 rounded-md w-full mx-auto transition-all duration-200 ease-in-out ${open
                ? "opacity-100 visible transform translate-y-0"
                : "opacity-0 invisible transform -translate-y-2"
                }`}>
                <div className='w-full text-sm rounded-lg md:rounded-md md:border shadow-lg md:shadow-md p-4 md:p-2.5 flex items-start justify-between '>
                  <div className='flex md:flex-row flex-col items-center justify-between gap-6'>
                    <div className='flex items-center w-full md:w-fit justify-between gap-2'>
                      <div className='w-24 h-24 rounded-full border-2 border-mColor6 object-cover '>
                        <Image src={images.imgNotAvailable} alt="user" className='w-full h-full object-cover rounded-full ' />
                      </div>
                      <SecondaryButton title="Change Picture" className='px-4 py-2 md:hidden text-base' />
                    </div>
                    <div className='text-bColor4 w-full min-wfull '>
                      <h1 className={` text-lg font-semibold ${selected === "makeup" ? "text-mColor17" : "text-sColorBase3"}`} >{first_name} {last_name}</h1>
                      <p>{email ?? `${country_code}${phone}`} </p>
                      <p className='text-bColor5 font-semibold mt-2 '>Address:</p>
                      <div className="flex gap-2">
                        {address ? (
                          <>
                            <p>{area} - {postal_code}</p>
                            <p>{address}</p>
                            <p>{zone}</p>
                            <p>{city}</p>
                            <p>{thana}</p>
                            <p>{country}</p>
                          </>
                        ) : ""}
                      </div>
                      <div className="flex items-center gap-4 mt-4 ">
                        <div onClick={() => setOpen(false)} className="w-full" >
                          <PrimaryButton to="/user/profile" title="Dashboard" className="w-full py-2 my-2" />
                        </div>
                        <SecondaryButton
                          onClick={handleLogout}
                          title="Logout" style={{
                            background: "transparent",
                            border: "1px solid gray",
                            color: "black",
                          }} className="px4 py-1.5 text-base w-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Link href="/login" className="hover:opacity-75 transition-opacity ">
              <Image src={icons.User} alt="User" className="w-6 h-6" />
            </Link>
          )}

          {/* Mobile Logo */}
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <h1 className="font-yellowtail font-semibold tracking-widest text-2xl">Shine-Bright</h1>
          </Link>

          {/* Mobile Right Icons */}
          <div className="flex items-center gap-4">
            <SearchSheet />
            <CartSheet />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-40 overflow-y-auto transition-all duration-300 ease-in-out ${mobileMenuOpen
        ? 'visible opacity-100'
        : 'invisible opacity-0'
        }`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-50' : 'opacity-0'
            }`}
          onClick={closeMobileMenu}
        />

        {/* Menu Panel */}
        <div
          ref={mobileMenuRef}
          className={`pb-10 fixed left-0 top-0 h-full w-full bg-mainBg shadow-2xl transform transition-all duration-500 ease-in-out ${mobileMenuOpen
            ? 'translate-x-0 opacity-100'
            : '-translate-x-full opacity-95'
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Menu Header */}
          <div className={`px-6 py-4 border-b ${selected === "makeup" ? "border-mColor11" : "border-sColor2"}`}>
            <div className="flex items-center justify-between">
              <div className="w-full flex items-center justify-center">
                <div className="w-36">
                  <Image src={icons.Logo2} alt="Logo" className="h-full w-full" />
                </div>
              </div>
              <div className="relative">
                <RxCross2
                  size={24}
                  onClick={closeMobileMenu}
                  className="cursor-pointer hover:rotate-90 transition-all duration-200 hover:scale-110 active:scale-95"
                />
              </div>
            </div>
          </div>

          {/* Mobile Menu Content */}
          <div className={`transform transition-all h-full overflow-y-auto duration-300 delay-300 ${mobileMenuOpen
            ? 'translate-y-0 opacity-100'
            : 'translate-y-4 opacity-0'
            }`}>
            {/* Top Navigation Items */}
            <div className="mb-6">
              <div className="mb-4">
                <FloatingThemeBtn />
              </div>

              {/* Top Nav Links */}

              {/* Mobile Bottom Navigation */}
              <div className={`w-full transform transition-all duration-300 ${mobileMenuOpen
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
                }`} style={{ transitionDelay: '200ms' }}>
                <div className="flex flex-col items-start">
                  {selected === "makeup" ? (
                    <>
                      <ShopAllAccordion setMobileMenuOpen={setMobileMenuOpen} />
                      <BrandAccordion setMobileMenuOpen={setMobileMenuOpen} />
                      <BestSellerAccordion setMobileMenuOpen={setMobileMenuOpen} />
                      <MakeupAccordion setMobileMenuOpen={setMobileMenuOpen} />
                      <MoreProductsAccordion setMobileMenuOpen={setMobileMenuOpen} />
                    </>
                  ) : (
                    <>
                      <ShopAllAccordion setMobileMenuOpen={setMobileMenuOpen} />
                      <BrandAccordion setMobileMenuOpen={setMobileMenuOpen} />
                      <BestSellerAccordion setMobileMenuOpen={setMobileMenuOpen} />
                      {/* <SkincareAccordion setMobileMenuOpen={setMobileMenuOpen} /> */}
                      <MoreProductsAccordion setMobileMenuOpen={setMobileMenuOpen} />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Bottom Navigation */}
      <div
        // className={`w-full hidden md:flex items-center justify-center py-3 ${selected === "makeup" ? "bg-mColor13" : "bg-sColor1"}`}
        className={`w-full hidden md:flex items-center justify-center py-3 ${selected === "makeup" ? "bg-mNavFooter" : "bg-sNavFooter"}`}
      >
        <ul className="flex items-center gap-10">
          {
            selected === "makeup"
              ?
              <div className="flex items-center gap-10 text-sm ">
                <ShopAllPopover />
                <BrandPopover />
                <BestSellerPopover />
                <MakeupPopover />
                <MoreProductsPopover />
              </div>
              :
              <div className="flex items-center gap-10 text-sm ">
                <ShopAllPopover />
                <BrandPopover />
                <BestSellerPopover />
                <SkincarePopover />
                <MoreProductsPopover />
              </div>
          }
        </ul>
      </div>
    </nav>
  )
}
export default Navbar