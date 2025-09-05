"use client"

import AddAddressForm from '@/components/pageComponents/Dashboard/User/Address/AddAddressForm'
import UserAddresses from '@/components/pageComponents/Dashboard/User/Address/UserAddresses'
import { useSelector } from 'react-redux'

const UserAddressPage = () => {
  const { selected } = useSelector((state: any) => state.category)

  return (
    <div
      className={`w-full md:border-2 rounded-md md:p-4 ${selected === "makeup" ? "border-mBtnBg/30" : "border-sBtnBg/30"}`}
    >
      <AddAddressForm />
      <UserAddresses />
    </div>
  )
}
export default UserAddressPage