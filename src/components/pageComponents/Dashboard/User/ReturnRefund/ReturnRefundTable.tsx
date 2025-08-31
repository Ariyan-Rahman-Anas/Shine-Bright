"use client"

import DataTable from "@/components/shared/dataTable/DataTable"
import PrimaryButton from "@/components/shared/PrimaryButton"
import { useSelector } from "react-redux"
import ReturnDetailsModal from "./ReturnDetailsModal"
import ItemCardForSmDevices from "../ItemCardForSmDevices"

const ReturnRefundTable = () => {
    const { selected } = useSelector((state: any) => state.category)

    const data = [
        {
            returnId: "A001",
            requestDate: "20th May, 2025",
            phone: "+8801722222222",
            amount: "100 BDT",
            address: "23/A, 3rd floor, house no 211/A, Road no 234, Paterbag, jatrabari, Dhaka 1240",
            status: "Approved",
        },
        {
            returnId: "A002",
            requestDate: "20th May, 2025",
            phone: "+8801722222222",
            amount: "100 BDT",
            address: "23/A, 3rd floor, house no 211/A, Road no 234, Paterbag, jatrabari, Dhaka 1240",
            status: "Processing",
        },
        {
            returnId: "A003",
            requestDate: "20th May, 2025",
            phone: "+8801722222222",
            amount: "100 BDT",
            address: "23/A, 3rd floor, house no 211/A, Road no 234, Paterbag, jatrabari, Dhaka 1240",
            status: "Rejected",
        },
        {
            returnId: "A004",
            requestDate: "20th May, 2025",
            phone: "+8801722222222",
            amount: "100 BDT",
            address: "23/A, 3rd floor, house no 211/A, Road no 234, Paterbag, jatrabari, Dhaka 1240",
            status: "Approved",
        },
        {
            returnId: "A005",
            requestDate: "20th May, 2025",
            phone: "+8801722222222",
            amount: "100 BDT",
            address: "23/A, 3rd floor, house no 211/A, Road no 234, Paterbag, jatrabari, Dhaka 1240",
            status: "Rejected",
        },
    ]

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
                        <PrimaryButton to="/" title="Invoice" style={{ backgroundColor: "transparent", border: "1px solid #000" }} className="h-full w-full py-1.5" />
                    </div>
                );
            }
        }
    ]

    return (
        <div className={`w-full md:border-2 rounded-md md:p-4 ${selected === "makeup" ? "border-mColor3" : "border-sColorBase2"}`}>
            <h1 className="text-base uppercase font-medium mb-2">Return</h1>
            <div className="overflow-x-auto hidden md:block ">
                <DataTable data={data} columns={columns} />
            </div>

            <div className="md:hidden space-y-2 ">
                {
                    data?.map((item, idx) =>
                        <ItemCardForSmDevices key={idx} item={item} idx={idx} isOrder={false} isDashboard={false} isReturnRefund={true} />
                    )
                }
            </div>
        </div>
    )
}

export default ReturnRefundTable