import PrimaryButton from "@/components/shared/PrimaryButton"
import { useSelector } from "react-redux"
import OrderCancelModal from "./OrderCancelModal"
import { } from "@radix-ui/react-dialog"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog"


const OrderDetailsModal = ({ data }: { data: any }) => {
    const { id, address, order_amount, order_date, order_id, invoice_id, total_order_qty, current_status, payment_status } = data || {}

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
                                current_status === "Delivered" ? (
                                    <span className="badge badge-green">{current_status}</span>
                                ) : current_status === "Processing" ? (
                                    <span className="badge badge-yellow">{current_status}</span>
                                ) : current_status === "Shipped" ? (
                                    <span className="badge badge-blue">{current_status}</span>
                                ) : current_status === "ORDERED" ? (
                                    <span className="badge badge-green">{current_status}</span>
                                ) : current_status === "Cancelled" && (
                                    <span className="badge badge-red">{current_status}</span>
                                )
                            }
                        </div>
                        <div className="flex items-center gap-1">
                            <strong>Invoice No: </strong>
                            <p>{invoice_id}</p>
                        </div>
                    </div>

                    <div className="flex items-start flex-wrap justify-between gap-x-8 gap-y-4 text-left my-5 ">
                        <div>
                            <strong>Order Id</strong>
                            <p>{order_id}</p>
                        </div>
                        <div>
                            <strong>Order Date</strong>
                            <p>{order_date}</p>
                        </div>
                        <div>
                            <strong>Amount</strong>
                            <p>{order_amount}</p>
                        </div>
                        <div>
                            <strong>Number of Products</strong>
                            <p>{total_order_qty}</p>
                        </div>
                        <div>
                            <strong>Payment Status</strong>
                            <p>{payment_status}</p>
                        </div>
                    </div>


                    <div className="text-left w-full md:w-2/3 my-5 ">
                        <strong>Address</strong>
                        <p>{address}</p>
                    </div>

                    {
                        current_status === "Delivered" ? (
                            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3">
                                <PrimaryButton title="Drop a Review" to="/review" className={`w-full md:w-fit py-1.5 px-6 ${selected === "makeup" ? "bg-mColor2 text-blackCustom " : "bg-sColor6 text-whiteCustom"}`} />
                                <PrimaryButton title="Return Request" to="/return" className={`w-full md:w-fit py-1.5 px-6 ${selected === "makeup" ? "bg-mColor3/80 text-blackCustom " : "bg-sColor6 text-whiteCustom "}`} />
                                <PrimaryButton title="View Products" to="/products-list" className={`w-full md:w-fit py-1.5 px-6 border-bColor2 border `} />
                            </div>
                        ) : current_status === "Processing" ? (
                            <div className="flex items-center justify-start gap-3">
                                <OrderCancelModal />
                                <PrimaryButton title="View Products" to={`/ordered-products-list/${id}`} className={` py-1.5 px-6 border-bColor2 border `} />
                            </div>
                        ) : current_status === "Shipped" ? (
                            <div className="flex items-center justify-start gap-3">
                                <PrimaryButton title="View Products" to={`/ordered-products-list/${id}`} className={` py-1.5 px-6 border-bColor2 border `} />
                            </div>
                        ) : current_status === "Cancelled" ? (
                            <div className="flex items-center justify-start gap-3">
                                <PrimaryButton title="View Products" to={`/ordered-products-list/${id}`} className={` py-1.5 px-6 border-bColor2 border `} />
                            </div>
                        ) : current_status === "ORDERED" && (
                            <div className="flex items-center justify-start gap-3 w-fit ">
                                <PrimaryButton title="View Products" to={`/ordered-products-list/${id}`} className={` py-1.5 px-6 border-bColor2 border `} />
                            </div>
                        )
                    }
                </div>
            </DialogContent>
        </Dialog>
    )
}
export default OrderDetailsModal