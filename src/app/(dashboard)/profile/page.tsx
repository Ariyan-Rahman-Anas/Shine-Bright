"use client"

import { useSelector } from "react-redux"
import Image from "next/image"
import { images } from "@/assets"
import ItemCardForSmDevices from "@/components/pageComponents/Dashboard/User/ItemCardForSmDevices"
import { loggedInUser } from "@/redux/features/authSlice"
import { useGetOrdersDataByUserIdQuery } from "@/redux/api/orderApi"
import OrdersTable from "@/components/pageComponents/Dashboard/User/Orders/OrdersTable"

const UserProfilePage = () => {
  const { selected } = useSelector((state: any) => state.category)

  const loggedInUserSelector = useSelector(loggedInUser)
  const {data: ordersData} = useGetOrdersDataByUserIdQuery(loggedInUserSelector)


  return (
    <div className={`md:p-4 rounded-md md:border-2 w-full ${selected === "makeup" ? "border-mBtnBg/30" : "border-sBtnBg/30"}`}>
      <div className="flex md:flex-row flex-col items-center justify-between md:gap-8 gap-4 text-sm mt-6 md:mt-0 ">
        <div id="frame-1" className="relative" >
          <div>
            <Image src={images.DashboardFrame} alt="frame-1" className="opacity-20 w-full h-16 md:h-24 " />
          </div>
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-md flex items-center justify-between px-8 ${selected === "makeup" ? "mOverlay" : "sOverlay"}`}>
            <div>
              <h3 className={`text-lg md:text-2xl font-semibold uppercase ${selected === "makeup" ? "text-mColor7" : "text-whiteCustom"}`}>total orders</h3>
              <p className="text-bColor4">Orders that has been Placed</p>
            </div>
            <p className={`text-lg md:text-3xl font-semibold ${selected === "makeup" ? "text-mColor7" : "text-whiteCustom"}`}>{ordersData?.data?.length} </p>
          </div>
        </div>
        <div id="frame-1" className="relative" >
          <div>
            <Image src={images.DashboardFrame} alt="frame-1" className="opacity-20 w-full h-16 md:h-24" />
          </div>
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-md flex items-center justify-between px-8 bg-gradient-to-r from-green-500/10 to-green-500/10`}>
            <div>
              <h3 className={`text-lg md:text-2xl font-semibold uppercase text-blackCustom`}>Completed orders</h3>
              <p className="text-bColor4">orders that has been completed</p>
            </div>
            <p className={`text-lg md:text-3xl font-semibold text-green-500`}>12</p>
          </div>
        </div>
      </div>

      <h4 className="text-base font-semibold mt-4 md:mt-8">ONGOING ORDERS</h4>
      <div className="hidden md:block" >
        <OrdersTable />
      </div>

      <div className="block md:hidden space-y-2 mt-2">
        {
          ordersData?.data?.map((order: any, idx: any) =>
            <ItemCardForSmDevices key={idx} item={order} idx={idx} isOrder={false} isDashboard={true} isReturnRefund={false} />
          )
        }
      </div>
    </div>
  )
}
export default UserProfilePage