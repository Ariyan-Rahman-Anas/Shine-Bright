"use client"

import { icons } from "@/assets"
import ModalTemplate from "@/components/shared/ModalTemplate"
import SecondaryButton from "@/components/shared/SecondaryButton"
import Image from "next/image"
import { useState } from "react"

const OrderCancelModal = () => {
    const [openModal, setOpenModal] = useState(false)

    const handleCloseModal = () => {
        setOpenModal(false)
        window.location.reload()
    }

    return (
        <div>
            <ModalTemplate
                openModal={openModal}
                setOpenModal={setOpenModal}
                tiggerTitle="Cancel"
                className="w-36 py-1 text-base bg-error text-whiteCustom"

                body={
                    <div className="flex flex-col items-center justify-center p-8">
                        <div>
                            <Image src={icons.OrderCancel} alt="Order Placed" />
                        </div>
                        <h2 className="text-2xl font-medium">Order Cancelled Successfully</h2>
                        <p className="text-center text-bColor3 mt-1">Order No: PX343530 Has been cancelled</p>
                        <SecondaryButton title="Close" onClick={handleCloseModal} className="border border-bColor2 w-36 mt-4" />
                    </div>
                }
            />
        </div>
    )
}
export default OrderCancelModal