"use client"

import { useSelector } from "react-redux"
import { loggedInUser } from "@/redux/features/authSlice"
import { useRouter } from "next/navigation"
import { useEffect, ReactNode } from "react"
import AdminSidebar from "@/components/admin/AdminSidebar"
import AdminHeader from "@/components/admin/AdminHeader"

interface AdminLayoutProps {
    children: ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
    const user = useSelector(loggedInUser)
    const router = useRouter()

    useEffect(() => {
        if (!user) {
            router.replace("/login")
            return
        }
        if (user.role === "CUSTOMER") {
            router.replace("/")
        }
    }, [user, router])

    if (!user || user.role === "CUSTOMER") return null

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            <AdminSidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
                <AdminHeader />
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default AdminLayout
