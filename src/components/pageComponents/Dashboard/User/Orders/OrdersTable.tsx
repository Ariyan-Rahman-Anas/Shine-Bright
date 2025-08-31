"use client"

import DataTable from "@/components/shared/dataTable/DataTable"
import PrimaryButton from "@/components/shared/PrimaryButton"
import { useSelector } from "react-redux"
import OrderDetailsModal from "./OrderDetailsModal"
import ItemCardForSmDevices from "../ItemCardForSmDevices"
import { useGetOrdersDataByUserIdQuery } from "@/redux/api/orderApi"
import { loggedInUser } from "@/redux/features/authSlice"
import { usePathname } from "next/navigation"

const OrdersTable = () => {
    const pathName = usePathname()
    const ordersPath = pathName.includes("orders")
    const { selected } = useSelector((state: any) => state.category)

    const loggedInUserSelector = useSelector(loggedInUser)
    const { data: ordersData, isError, error } = useGetOrdersDataByUserIdQuery(loggedInUserSelector?.basicInfo?.id)

    const profileColumns = [
        { key: 'order_id', header: 'Order ID' },
        { key: 'order_date', header: 'Order Date' },
        { key: 'customer_phone', header: 'Phone', render: (item: any) => <p>{item?.customer_country_code} {item?.customer_phone}</p> },
        { key: 'order_amount', header: 'Amount' },
        {
            key: 'address',
            header: 'Address',
            render: (item: any) => (
                <div className="max-w-xs">
                    <p className="text-bColor4 text-xs leading-5 break-words">
                        {item?.delivery_location}
                    </p>
                </div>
            )
        },
        {
            key: 'action',
            header: '',
            render: (item: any) => (
                <div className="flex items-center gap-2">
                    <OrderDetailsModal data={item} />
                    {/* <OrderTrackingModal data={item} /> */}
                </div>
            )
        }
    ]

    const ordersColumns = [
        { key: 'order_id', header: 'Order ID' },
        { key: 'order_date', header: 'Order Date' },
        { key: 'customer_phone', header: 'Phone', render: (item: any) => <p>{item?.customer_country_code} {item?.customer_phone}</p> },
        { key: 'order_amount', header: 'Amount' },
        {
            key: 'address',
            header: 'Address',
            render: (item: any) => (
                <div className="max-w-xs">
                    <p className="text-bColor4 text-xs leading-5 break-words">
                        {item?.delivery_location}
                    </p>
                </div>
            )
        },
        {
            key: 'current_status',
            header: 'Status',
            render: (item: any) => {
                const statusConfig = {
                    "ORDERED": "badge badge-green",
                    "Delivered": "badge badge-green",
                    "Processing": "badge badge-yellow",
                    "Shipped": "badge badge-blue",
                    "Cancelled": "badge badge-red"
                };

                return (
                    <span className={`${statusConfig[item?.current_status as keyof typeof statusConfig] || statusConfig.Cancelled}`}>
                        {item?.current_status}
                    </span>
                );
            }
        },
        {
            key: 'action',
            header: 'Action',
            render: (item: any) => {
                return (
                    <div className="flex items-center gap-2">
                        <OrderDetailsModal data={item} />
                        <PrimaryButton
                            to="/"
                            title="Invoice"
                            style={{ backgroundColor: "transparent"}}
                            className={`hover:text-blackCustom border-[1.55px] border-blackCustom `}
                        />
                    </div>
                );
            }
        }
    ]

    return (
        <div className={`w-full md:border-2 rounded-md md:p-4 ${selected === "makeup" ? "border-mColor3" : "border-sColorBase2"}`}>
            <h1 className="text-base uppercase font-medium mb-2">Orders</h1>
            <div className="overflow-x-auto hidden md:block ">
                <DataTable
                    data={ordersData?.data}
                    columns={ordersPath ? ordersColumns : profileColumns}
                    isError={isError}
                    errorMessage={
                        (error as any)?.data?.message
                    }
                />
            </div>

            <div className="md:hidden space-y-2 ">
                {
                    ordersData?.data?.map((item: any, idx: any) =>
                        <ItemCardForSmDevices key={idx} item={item} idx={idx} isOrder={true} isDashboard={false} isReturnRefund={false} />
                    )
                }
            </div>
        </div>
    )
}
export default OrdersTable