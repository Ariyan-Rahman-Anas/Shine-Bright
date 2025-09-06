import PrimaryButton from "@/components/shared/PrimaryButton"
import { useSelector } from "react-redux"
import OrderCancelModal from "./OrderCancelModal"
import { } from "@radix-ui/react-dialog"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"


const OrderDetailsModal = ({ data }: { data: any }) => {
    const { address, amount, orderDate, orderId, invoiceId, numberOfProducts, orderStatus, paymentStatus } = data || {}

    const { selected } = useSelector((state: any) => state.category)

    return (
        <Dialog>
            <DialogTrigger asChild >
                <PrimaryButton
                    title="View Details"
                    className={`w-28 font-medium`}
                />
            </DialogTrigger>

            <DialogContent className="text-sm">
                <DialogHeader>
                    <DialogTitle className="uppercase">Order Details</DialogTitle>
                </DialogHeader>
                <div className="w-full">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-x-8 gap-y-2 text-left ">
                        <div className="flex items-center gap-1">
                            <strong>Order Status: </strong>
                            {
                                orderStatus === "Delivered" ? (
                                    <span className="badge badge-green">{orderStatus}</span>
                                ) : orderStatus === "Processing" ? (
                                    <span className="badge badge-yellow">{orderStatus}</span>
                                ) : orderStatus === "Shipped" ? (
                                    <span className="badge badge-blue">{orderStatus}</span>
                                ) : orderStatus === "ORDERED" ? (
                                    <span className="badge badge-green">{orderStatus}</span>
                                ) : orderStatus === "Cancelled" && (
                                    <span className="badge badge-red">{orderStatus}</span>
                                )
                            }
                        </div>
                        <div className="flex items-center gap-1">
                            <strong>Invoice No: </strong>
                            <p>{invoiceId}</p>
                        </div>
                    </div>

                    <div className="flex items-start flex-wrap justify-between gap-x-8 gap-y-4 text-left my-5 ">
                        <div>
                            <strong>Order Id</strong>
                            <p>{orderId}</p>
                        </div>
                        <div>
                            <strong>Order Date</strong>
                            <p>{orderDate}</p>
                        </div>
                        <div>
                            <strong>Amount</strong>
                            <p>{amount}</p>
                        </div>
                        <div>
                            <strong>Number of Products</strong>
                            <p>{numberOfProducts}</p>
                        </div>
                        <div>
                            <strong>Payment Status</strong>
                            <p>{paymentStatus}</p>
                        </div>
                    </div>


                    <div className="text-left w-full md:w-2/3 my-5 ">
                        <strong>Address</strong>
                        <p>{address}</p>
                    </div>

                    {
                        orderStatus === "Delivered" ? (
                            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3">
                                <PrimaryButton title="Drop a Review" to="/review" className={`w-full md:w-fit py-1.5 px-6 ${selected === "makeup" ? "bg-mColor2 text-blackCustom " : "bg-sColor6 text-whiteCustom"}`} />
                                <PrimaryButton title="Return Request" to="/return" className={`w-full md:w-fit py-1.5 px-6 ${selected === "makeup" ? "bg-mColor3/80 text-blackCustom " : "bg-sColor6 text-whiteCustom "}`} />
                                <PrimaryButton title="View Products" to={`/ordered-products-list/${orderId}`} className={`w-full md:w-fit py-1.5 px-6 border-bColor2 border `} />
                            </div>
                        ) : orderStatus === "Processing" ? (
                            <div className="flex items-center justify-start gap-3">
                                <OrderCancelModal />
                                <PrimaryButton title="View Products" to={`/ordered-products-list/${orderId}`} className={` py-1.5 px-6 border-bColor2 border `} />
                            </div>
                        ) : orderStatus === "Shipped" ? (
                            <div className="flex items-center justify-start gap-3">
                                <PrimaryButton title="View Products" to={`/ordered-products-list/${orderId}`} className={` py-1.5 px-6 border-bColor2 border `} />
                            </div>
                        ) : orderStatus === "Cancelled" ? (
                            <div className="flex items-center justify-start gap-3">
                                <PrimaryButton title="View Products" to={`/ordered-products-list/${orderId}`} className={` py-1.5 px-6 border-bColor2 border `} />
                            </div>
                        ) : orderStatus === "ORDERED" && (
                            <div className="flex items-center justify-start gap-3 w-fit ">
                                <PrimaryButton title="View Products" to={`/ordered-products-list/${orderId}`} className={` py-1.5 px-6 border-bColor2 border `} />
                            </div>
                        )
                    }
                </div>
            </DialogContent>
        </Dialog>
    )
}
export default OrderDetailsModal