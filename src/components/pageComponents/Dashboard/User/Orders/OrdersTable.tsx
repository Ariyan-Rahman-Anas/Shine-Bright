"use client"

import DataTable from "@/components/shared/dataTable/DataTable"
import PrimaryButton from "@/components/shared/PrimaryButton"
import { useSelector } from "react-redux"
import OrderDetailsModal from "./OrderDetailsModal"
import ItemCardForSmDevices from "../ItemCardForSmDevices"
import { usePathname } from "next/navigation"
import { ordersData } from "@/constant"

const OrdersTable = () => {
    const pathName = usePathname()
    const ordersPath = pathName.includes("orders")
    const { selected } = useSelector((state: any) => state.category)

    const profileColumns = [
        { key: 'orderId', header: 'Order ID' },
        { key: 'orderDate', header: 'Order Date' },
        { key: 'phone', header: 'Phone'},
        { key: 'amount', header: 'Amount' },
        {key: 'address',header: 'Address'},
        {
            key: 'action',
            header: '',
            render: (item: any) => (
                <div className="flex items-center gap-2">
                    <OrderDetailsModal data={item} />
                </div>
            )
        }
    ]

    const ordersColumns = [
        { key: 'orderId', header: 'Order ID' },
        { key: 'orderDate', header: 'Order Date' },
        { key: 'phone', header: 'Phone'},
        { key: 'amount', header: 'Amount' },
        {
            key: 'address',
            header: 'Address'},
        {
            key: 'orderStatus',
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
                    <span className={`${statusConfig[item?.orderStatus as keyof typeof statusConfig] || statusConfig.Cancelled}`}>
                        {item?.orderStatus}
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
                            style={{color:"black",  backgroundColor: "transparent" }}
                            className={`border-[1.55px] border-blackCustom `}
                        />
                    </div>
                );
            }
        }
    ]

    return (
        <div className={`w-full md:border-2 rounded-md md:p-4 ${selected === "makeup" ? "border-mBtnBg/30" : "border-sBtnBg/30"}`}>
            <h1 className="text-base uppercase font-medium mb-2">Orders</h1>
            <div className="overflow-x-auto hidden md:block ">
                <DataTable
                    data={ordersData}
                    columns={ordersPath ? ordersColumns : profileColumns}
                    isError={false}
                    errorMessage="No orders found!"
                />
            </div>

            <div className="md:hidden space-y-2 ">
                {
                    ordersData?.map((item: any, idx: any) =>
                        <ItemCardForSmDevices key={idx} item={item} idx={idx} isOrder={true} isDashboard={false} isReturnRefund={false} />
                    )
                }
            </div>
        </div>
    )
}
export default OrdersTable