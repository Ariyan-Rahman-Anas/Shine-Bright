"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BsCartCheck } from 'react-icons/bs';
import { FaRegAddressCard } from 'react-icons/fa';
import { LuLayoutDashboard } from 'react-icons/lu'
import { RiAccountCircleLine, RiRefund2Line } from "react-icons/ri";
import { useSelector } from 'react-redux'


const UserDashboardSidebar = () => {
  const pathname = usePathname()
  const { selected } = useSelector((state: any) => state.category)

  const menuItems = [
    {
      title: 'Dashboard',
      icon: <LuLayoutDashboard />,
      href: '/profile',
    },
    {
      title: 'Account Details',
      icon: <RiAccountCircleLine />,
      href: '/account-details',
    },
    {
      title: 'Address',
      icon: <FaRegAddressCard />,
      href: '/address',
    },
    {
      title: 'Orders',
      icon: <BsCartCheck />,
      href: '/orders',
    },
    {
      title: 'Return & Refund',
      icon: <RiRefund2Line />,
      href: '/return-refund',
    },
  ]

  return (
    <aside className={`w-full md:w-80 h-full md:border-2 md:shadow rounded-md transform transition-transform duration-500 ease-in-out ${selected === "makeup" ? "border-mBtnBg/30" : "border-sBtnBg/30"} lg:translate-x-0`}>

      {/* Navigation Menu */}
      <nav className="flex-1 p-2.5 space-y-2 hidden md:block ">
        {menuItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isActive && selected === "makeup"
                ? 'bg-mBtnBg/40 border-r-2 border-mColor1 text-blackCustom'
                : isActive && selected === "skincare" ? 'bg-sBtnBg/40 border-r-2 border-sColor1 text-blackCustom ' : 'text-bColor3'
                }`}
            >
              <span className="flex-1">{item.title}</span>
            </Link>
          )
        })}
      </nav>

      {/* Mobile Menu */} 
      <div className='md:hidden flex items-center justify-between gap-2 mt-4'>
        {
          menuItems.map(({icon, href},idx) => {
            const isActive = pathname === href
            return (
              <Link
                key={idx}
                href={href}
                className={`flex items-center justify-center border shadow-lg w-full text-center p-2 text-2xl font-medium rounded-lg transition-colors ${isActive && selected === "makeup"
                  ? 'bg-mColor1 border-r-2 border-mColor1 text-blackCustom'
                  : isActive && selected === "skincare" ? 'bg-sColor1 border-r-2 border-sColor1 text-blackCustom ' : 'text-bColor2'
                  }`}
              >
                <span>{icon}</span>
              </Link>
            )
          })
        }
      </div>
    </aside>
  )
}
export default UserDashboardSidebar