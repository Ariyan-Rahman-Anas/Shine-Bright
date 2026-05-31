"use client"

import Registration from '@/components/pages/Auth/RegistrationPage/Registration'
import { useAuthRedirect } from "@/hooks/useAuthRedirect"

const RegistrationPage = () => {
  const { isLoggedIn } = useAuthRedirect()
  if (isLoggedIn) return null
  return <Registration />
}
export default RegistrationPage