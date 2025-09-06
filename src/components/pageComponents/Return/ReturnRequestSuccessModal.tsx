import { icons } from "@/assets"
import ModalTemplate from "@/components/shared/ModalTemplate"
import PrimaryButton from "@/components/shared/PrimaryButton"
import Image from "next/image"
import { useState } from "react"
import { useSelector } from "react-redux"

const ReturnRequestSuccessModal = ({ onClick }: { onClick: () => void }) => {
    const [openModal, setOpenModal] = useState(false)
    const { selected } = useSelector((state: any) => state.category)
    return (
        <div>
            <ModalTemplate
                openModal={openModal}
                setOpenModal={setOpenModal}
                tiggerTitle="Submit Request"
                className="w-full min-w-fit "
                onClick={onClick}
                body={
                    <div className="flex flex-col items-center justify-center p-8">
                        <div>
                            <Image src={icons.OrderPlaced} alt="Order Placed" />
                        </div>
                        <h2 className="text-2xl font-medium">Return Request Submitted Successfully</h2>
                        <p className="text-center text-bColor3 mt-1">Return Request ID : SDDF34554</p>
                        <div>
                            <PrimaryButton title="View Refund Status" to="/return-refund" className={`py-2.5 px-10 w-fit mx-auto mt-5 text-base ${selected === "makeup" ? 'bg-mColor3/80 text-blackCustom' : 'bg-sColor6 text-whiteCustom'}`} />
                        </div>
                    </div>
                }
            />
        </div>
    )
}

export default ReturnRequestSuccessModal