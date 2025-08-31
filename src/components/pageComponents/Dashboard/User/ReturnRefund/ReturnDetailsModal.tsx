"use client"

import ModalTemplate from "@/components/shared/ModalTemplate"
import PrimaryButton from "@/components/shared/PrimaryButton"
import { useState } from "react"
import { RxCross2 } from "react-icons/rx"

const ReturnDetailsModal = ({ data }: { data: any }) => {
    const { status, address, amount, orderDate, orderId } = data || {}
    const [openModal, setOpenModal] = useState(false)
    return (
        <div>
            <ModalTemplate
                tiggerTitle="View Details"
                openModal={openModal}
                setOpenModal={setOpenModal}
                className="py-2 w-full md:w-24 text-sm md:text-xs "
                body={
                    <div className="p-4 w-full md:max-w-2xl">
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold text-blackCustom" >RETURN DETAILS</h1>
                            <RxCross2 className="cursor-pointer" onClick={() => setOpenModal(false)} />
                        </div>
                        <div className="flex items-center gap-8 my-5 ">
                            <div className="flex items-center gap-1">
                                <strong>Status: </strong>
                                {
                                    status === "Approved" ? (
                                        <span className="badge badge-green">{status}</span>
                                    ) : status === "Processing" ? (
                                        <span className="badge badge-yellow">{status}</span>
                                    ) : status === "Rejected" && (
                                        <span className="badge badge-red">{status}</span>
                                    )
                                }
                            </div>
                            <div className="flex items-center gap-1">
                                <strong>Invoice No: </strong>
                                <p>INV-{orderId}</p>
                            </div>
                        </div>

                        <div className="flex items-start flex-wrap justify-between gap-10 text-left my-5 ">
                            <div>
                                <strong>Return Id</strong>
                                <p>{orderId}</p>
                            </div>
                            <div>
                                <strong>Request Date</strong>
                                <p>{orderDate}</p>
                            </div>
                            <div>
                                <strong>Amount</strong>
                                <p>{amount}</p>
                            </div>
                            <div>
                                <strong>Number of Products</strong>
                                <p>4</p>
                            </div>
                            <div>
                                <strong>Payment Status</strong>
                                <p>Paid</p>
                            </div>
                        </div>


                        <div className="text-left w-full md:w-2/3 my-5 ">
                            <strong>Address</strong>
                            <p>{address}</p>
                        </div>

                        <div>
                            <PrimaryButton title="View Products" to="/" className={` py-1.5 px-6 border-bColor2 border `} />
                        </div>
                    </div>
                }
            />
        </div>
    )
}
export default ReturnDetailsModal