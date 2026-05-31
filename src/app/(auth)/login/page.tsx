"use client"

import Login from "@/components/pages/Auth/LoginPage/Login"
import { useAuthRedirect } from "@/hooks/useAuthRedirect"

const LoginPage = () => {
  const { isLoggedIn } = useAuthRedirect()
  if (isLoggedIn) return null
  return <Login />
}
export default LoginPage