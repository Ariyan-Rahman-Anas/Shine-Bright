import InputField from "@/components/shared/InputField"
import ModalTemplate from "@/components/shared/ModalTemplate"
import { useState } from "react"
import { RxCross2 } from "react-icons/rx"
import { useForm } from "react-hook-form"
import PrimaryButton from "@/components/shared/PrimaryButton"
import { useSelector } from "react-redux"
import { loggedInUser } from "@/redux/features/authSlice"
import InputFieldLabel from "@/lib/InputFieldLabel"

const OrderTrackingModal = ({ data }: any) => {
    const loggedInUserSelector = useSelector(loggedInUser)
    const [openModal, setOpenModal] = useState(false)
    const { register, handleSubmit } = useForm()

    const {id, order_id } = data || {}
    const onSubmit = (data: any) => {
        console.log(data)
        setOpenModal(false)
    }

    return (
        <div>
            <ModalTemplate
                tiggerTitle="Track"
                openModal={openModal}
                setOpenModal={setOpenModal}
                className="px-5 w-full md:w-fit "
                body={
                    <div className="p-4 w-full max-w-2xl ">
                        <div className="flex items-center text-blackCustom justify-between">
                            <h1 className="font-semibold">TRACK ORDER</h1>
                            <RxCross2 className="cursor-pointer border-2 rounded border-transparent hover:border-blackCustom duration-300" size={20} onClick={() => setOpenModal(false)} />
                        </div>
                        <div>
                            <p className="text-sm text-bColor3 text-left my-4 " >To track your order please enter your Order ID in the box below and press the Track button. This was given to you on your receipt and in the confirmation email you should have received.</p>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
                                <div className="flex flex-col gap-2">
                                    <div>
                                        <InputFieldLabel
                                            label="Order ID"
                                        />
                                        <InputField
                                            id="order_id"
                                            placeholder="Order ID"
                                            register={register}
                                            name="order_id"
                                            type="text"
                                            value={order_id}
                                            readOnly={true}

                                        />
                                    </div>
                                    <div>
                                        <InputFieldLabel
                                            label="Email"
                                        />
                                        <InputField
                                            id="email"
                                            placeholder="Email"
                                            register={register}
                                            name="email"
                                            type="email"
                                            value={loggedInUserSelector?.email}
                                            readOnly={true}
                                        />
                                    </div>
                                </div>

                                <div className="w-fit">
                                    <PrimaryButton
                                        title="Track"
                                        bType="submit"
                                        to={`/track-order/${id}`}
                                        className={`w-fit px-10 text-base font-medium`}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                }
            />
        </div>
    )
}
export default OrderTrackingModal