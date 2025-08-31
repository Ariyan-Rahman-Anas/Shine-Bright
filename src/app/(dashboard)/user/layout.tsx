"use client"

import { ReactNode } from 'react'
import GoBack from '@/components/shared/GoBack'
import FloatingThemeBtn from '@/components/shared/FloatingThemeBtn'
import SecondaryButton from '@/components/shared/SecondaryButton'
import { useSelector } from 'react-redux'
import UserDashboardSidebar from '@/components/pageComponents/Dashboard/User/UserDashboardSidebar'
import Image from 'next/image'
import { images } from '@/assets'
import { loggedInUser } from '@/redux/features/authSlice'
import { useLogoutHandler } from '@/hooks/useLogoutHandler'
import { useGetCustomerByIdQuery } from '@/redux/api/authApi'

interface UserLayoutProps {
  children: ReactNode
}

const UserLayout = ({ children }: UserLayoutProps) => {
  const { selected } = useSelector((state: any) => state.category)
  const loggedInUserSelector = useSelector(loggedInUser)

  const {id, email, country_code, phone, first_name, last_name, photo_url} = loggedInUserSelector?.basicInfo || {}
  const {data: customerData} = useGetCustomerByIdQuery(id)
  const userPrimaryAddress = customerData?.data?.userProfile?.find((item: any) => item.is_primary == true)
  const {address, area, thana, city, country, postal_code, zone} = userPrimaryAddress || {}


    const { handleLogout } = useLogoutHandler()

  return (
    <div className="page-setup mb-14 ">
      <div className='mb-4' >
        <FloatingThemeBtn />
      </div>
      <GoBack />

      <div className='mt-6 mb-4 w-full text-sm rounded-lg md:rounded-md md:border  shadow-lg md:shadow-md p-4 md:p-2.5 hidden md:flex items-start justify-between '>
        <div className='flex md:flex-row flex-col items-center justify-between gap-6'>
          <div className='flex items-center w-full md:w-fit justify-between gap-2'>
            <div className='w-24 h-24 rounded-full border-2 border-mColor6 object-cover '>
              <Image src={photo_url ?? images?.imgNotAvailable} alt="user" className='w-full h-full object-cover rounded-full ' />
            </div>
            <SecondaryButton title="Change Picture" className='px-4 py-2 md:hidden text-base' />
          </div>
          <div className='text-bColor4 w-full min-wfull '>
            <h1 className={` text-lg font-semibold ${selected === "makeup" ? "text-mBtnBg" : "text-sBtnBg"}`} >{first_name} {last_name}</h1>
            <p>{email  ?? `${country_code}${phone}`}</p>
            <p className='text-bColor5 font-semibold mt-2 '>Address:</p>
            <div className="flex gap-2">
              {address ? (
                <>
                  <p>{area} - {postal_code}</p>
                  <p>{address}</p>
                  <p>{zone}</p>
                  <p>{city}</p>
                  <p>{thana}</p>
                  <p>{country}</p>
                </>
              ) : ""}
            </div>
            <SecondaryButton title="Logout" style={{
              background: "transparent",
              border: "1px solid gray",
            }} className="px4 py-1.5 text-base w-full md:hidden mt-3" onClick={handleLogout} />
          </div>
        </div>

        <div className='hidden md:flex items-center gap-2 '>
          <SecondaryButton title="Change Picture" className={`px-4 py-1.5`} />
          <SecondaryButton title="Logout" className="px-4 py-1.5" onClick={handleLogout} />
        </div>
      </div>

      <div className='flex md:flex-row flex-col items-start gap-4 '>
        <UserDashboardSidebar />

        {/* Main Content Area */}
        <main className="w-full overflow-x-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
export default UserLayout