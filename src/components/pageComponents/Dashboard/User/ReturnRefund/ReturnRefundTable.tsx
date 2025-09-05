"use client"

import DataTable from "@/components/shared/dataTable/DataTable"
import PrimaryButton from "@/components/shared/PrimaryButton"
import { useSelector } from "react-redux"
import ReturnDetailsModal from "./ReturnDetailsModal"
import ItemCardForSmDevices from "../ItemCardForSmDevices"
import { returnRefundData } from "@/constant"

const ReturnRefundTable = () => {
    const { selected } = useSelector((state: any) => state.category)



    const columns = [
        { key: 'index', header: 'SL' },
        { key: 'returnId', header: 'Return ID' },
        { key: 'requestDate', header: 'Request Date' },
        { key: 'phone', header: 'Phone' },
        { key: 'amount', header: 'Amount' },
        {
            key: 'address',
            header: 'Address',
            // width: '250px',
            render: (item: any) => (
                <div className="max-w-xs">
                    <p className="text-bColor4 text-xs leading-5 break-words">
                        {item.address}
                    </p>
                </div>
            )
        },
        {
            key: 'status',
            header: 'Status',
            render: (item: any) => {
                const statusConfig = {
                    "Approved": "badge badge-green",
                    "Processing": "badge badge-yellow",
                    "Rejected": "badge badge-red"
                };

                return (
                    <span className={`${statusConfig[item.status as keyof typeof statusConfig] || statusConfig.Rejected}`}>
                        {item.status}
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
                        <ReturnDetailsModal data={item} />
                        <PrimaryButton to="/" title="Invoice" style={{ color: "black", backgroundColor: "transparent", border: "1px solid #000" }} className="h-full w-full py-1.5" />
                    </div>
                );
            }
        }
    ]

    return (
        <div className={`w-full md:border-2 rounded-md md:p-4 ${selected === "makeup" ? "border-mBtnBg/30" : "border-sBtnBg/30"}`}>
            <h1 className="text-base uppercase font-medium mb-2">Return</h1>
            <div className="overflow-x-auto hidden md:block ">
                <DataTable data={returnRefundData} columns={columns} />
            </div>

            <div className="md:hidden space-y-2 ">
                {
                    returnRefundData?.map((item, idx) =>
                        <ItemCardForSmDevices key={idx} item={item} idx={idx} isOrder={false} isDashboard={false} isReturnRefund={true} />
                    )
                }
            </div>
        </div>
    )
}

export default ReturnRefundTable