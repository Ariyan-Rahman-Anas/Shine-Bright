"use client"

import { useSelector } from "react-redux"
import { loggedInUser } from "@/redux/features/authSlice"
import { useLogoutHandler } from "@/hooks/useLogoutHandler"
import { LogOut, User } from "lucide-react"

const AdminHeader = () => {
    const user = useSelector(loggedInUser)
    const handleLogout = useLogoutHandler()

    return (
        <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shrink-0">
            <h2 className="text-sm text-gray-500 font-medium">
                Shine Bright — Admin
            </h2>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                    <User size={16} />
                    <span>{user?.firstName || user?.name || user?.email}</span>
                </div>
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-red-600 transition-colors"
                >
                    <LogOut size={16} />
                    Logout
                </button>
            </div>
        </header>
    )
}

export default AdminHeader
