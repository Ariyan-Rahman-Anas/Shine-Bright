"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSelector } from "react-redux"
import { loggedInUser } from "@/redux/features/authSlice"
import { cn } from "@/lib/utils"
import {
    LayoutDashboard,
    Package,
    Users,
    ShoppingCart,
    Tag,
    Layers,
    ChevronRight,
} from "lucide-react"

const navItems = [
    { label: "Products", href: "/admin/products", icon: Package },
    { label: "Orders", href: "/admin/orders", icon: ShoppingCart },
    { label: "Users", href: "/admin/users", icon: Users },
    { label: "Brands", href: "/admin/brands", icon: Tag },
    { label: "Categories", href: "/admin/categories", icon: Layers },
]

const superAdminItems = [
    { label: "Users", href: "/admin/users", icon: Users },
]

const AdminSidebar = () => {
    const pathname = usePathname()
    const user = useSelector(loggedInUser)

    return (
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-full shrink-0">
            {/* Logo */}
            <div className="flex items-center gap-2 px-6 py-5 border-b border-gray-100">
                <LayoutDashboard size={20} className="text-gray-600" />
                <span className="font-semibold text-gray-800 text-lg">Admin Panel</span>
            </div>

            {/* Role badge */}
            <div className="px-4 pt-4">
                <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full uppercase tracking-wide">
                    {user?.role?.replace("_", " ")}
                </span>
            </div>

            {/* Nav items */}
            <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
                {navItems.map(({ label, href, icon: Icon }) => {
                    const isActive = pathname === href || pathname.startsWith(href + "/")
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors group",
                                isActive
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                            )}
                        >
                            <Icon size={18} />
                            <span className="flex-1">{label}</span>
                            {isActive && <ChevronRight size={14} />}
                        </Link>
                    )
                })}
            </nav>

            {/* Back to store */}
            <div className="px-4 pb-5 border-t border-gray-100 pt-4">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition-colors"
                >
                    ← Back to Store
                </Link>
            </div>
        </aside>
    )
}

export default AdminSidebar
