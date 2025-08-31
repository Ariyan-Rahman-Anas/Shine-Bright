import PrimaryButton from "@/components/shared/PrimaryButton"
import OrderDetailsModal from "./Orders/OrderDetailsModal"
import ReturnDetailsModal from "./ReturnRefund/ReturnDetailsModal"
import OrderTrackingModal from "./Profile/OrderTrackingModal"

const ItemCardForSmDevices = ({ item, idx, isDashboard, isOrder, isReturnRefund }: { item: any, idx?: number, isDashboard?: boolean, isOrder?: boolean, isReturnRefund?: boolean }) => {
    const { orderId, orderDate, phone, amount, address, status } = item || {}
    return (
        <div className="border border-bColor1 rounded-md p-2 text-sm text-bColor4 ">
            <div className="flex items-center justify-between">
                <p>{idx ? idx + 1 : 1}. Order Id: <strong className="text-blackCustom" >{orderId}</strong> </p>
                {
                    (isOrder || isReturnRefund) && (
                        status === "Delivered" || status === "Approved" ? (
                            <span className="badge badge-green">{status}</span>
                        ) : status === "Processing" ? (
                            <span className="badge badge-yellow">{status}</span>
                        ) : status === "Shipped" ? (
                            <span className="badge badge-blue">{status}</span>
                        ) : (
                            <span className="badge badge-red">{status}</span>
                        )
                    )
                }
                <strong className="text-blackCustom" >{amount}</strong>
            </div>
            <div className="flex items-start justify-between text-xs mt-3 ">
                {
                    isDashboard && (
                        <div>
                            <h3>Address:</h3>
                            <strong className="text-blackCustom" >{address}</strong>
                        </div>
                    )
                }
                <div>
                    <h3>Order Date:</h3>
                    <strong className="text-blackCustom" >{orderDate}</strong>
                </div>
                <div>
                    <h3>Phone:</h3>
                    <strong className="text-blackCustom" >{phone}</strong>
                </div>
            </div>
            {
                (isOrder || isReturnRefund) && (
                    <div className="w-full mt-3 flex items-center gap-2.5 justify-between">
                        <div className="h-full w-full">
                            {
                                isOrder ? <OrderDetailsModal data={item} /> : <ReturnDetailsModal data={item} />
                            }
                        </div>
                        <PrimaryButton to="/" title="Invoice" style={{ backgroundColor: "transparent", border: "1px solid #000" }} className="h-full w-full py-1.5" />
                    </div>
                )
            }
            {
                isDashboard && (
                    <div className="w-full mt-3">
                        <OrderTrackingModal />
                    </div>
                )
            }
        </div>
    )
}
export default ItemCardForSmDevices