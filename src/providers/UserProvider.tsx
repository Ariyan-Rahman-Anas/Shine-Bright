"use client"

import React, { useEffect } from 'react'

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // dispatch()
  }, [])
  return <>{children}</>
}
export default UserProvider