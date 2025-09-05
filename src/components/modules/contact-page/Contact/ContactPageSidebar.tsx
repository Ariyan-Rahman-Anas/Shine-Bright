"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSelector } from "react-redux"

const ContactPageSidebar = () => {

    const pathname = usePathname()
    const { selected } = useSelector((state: any) => state.category)
    const menuItems = [
        {
            title: 'Contact Us',
            href: '/contact',
        },
        {
            title: 'Outlets',
            href: '/outlet',
        },
        {
            title: 'Refund Policy',
            href: '/refund-policy',
        },
        {
            title: 'Delivery Policy',
            href: '/delivery-policy',
        },
        {
            title: 'Privacy Policy',
            href: '/privacy-policy',
        },
        {
            title: 'Terms & Conditions',
            href: '/terms-conditions',
        },
    ]

    return (
        <div>
            <nav className="flex-1 p-2.5 space-y-2">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors uppercase ${isActive && selected === "makeup"
                                ? 'bg-mBtnBg/30 border-r-2 border-mColor1 text-blackCustom'
                                : isActive && selected === "skincare" ? 'bg-sBtnBg/30 border-r-2 border-sColor1 text-blackCustom ' : 'text-bColor3'
                                }`}
                        >
                            <span className="flex-1">{item.title}</span>
                        </Link>
                    )
                })}
            </nav>
        </div>
    )
}
export default ContactPageSidebar