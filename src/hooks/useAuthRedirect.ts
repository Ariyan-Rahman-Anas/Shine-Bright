"use client"

import { useSelector } from "react-redux"
import { loggedInUser } from "@/redux/features/authSlice"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export function useAuthRedirect() {
  const user = useSelector(loggedInUser)
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.replace("/")
    }
  }, [user, router])

  return { isLoggedIn: !!user }
}
