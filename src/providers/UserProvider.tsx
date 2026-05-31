"use client"

import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSession } from '@/lib/auth-client'
import { setUser, logout } from '@/redux/features/authSlice'

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch()
  const { data: session, isPending } = useSession()

  useEffect(() => {
    if (isPending) return

    if (session?.user) {
      const u = session.user as any
      dispatch(setUser({
        id: u.id,
        email: u.email,
        name: u.name ?? '',
        firstName: u.firstName ?? undefined,
        lastName: u.lastName ?? undefined,
        phone: u.phone ?? undefined,
        countryCode: u.countryCode ?? undefined,
        role: u.role ?? 'CUSTOMER',
        emailVerified: u.emailVerified ?? false,
        isActive: u.isActive ?? true,
        image: u.image ?? undefined,
      }))
    } else {
      dispatch(logout())
    }
  }, [session, isPending, dispatch])

  return <>{children}</>
}

export default UserProvider
