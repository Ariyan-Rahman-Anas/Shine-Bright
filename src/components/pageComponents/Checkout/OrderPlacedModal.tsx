import { icons } from "@/assets"
import ModalTemplate from "@/components/shared/ModalTemplate"
import SecondaryButton from "@/components/shared/SecondaryButton"
import Image from "next/image"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useCreateOrderMutation } from "@/redux/api/orderApi"
import { useApiResponseEffects } from "@/hooks/useApiResponseEffects"

const OrderPlacedModal = ({ orderData }: any) => {
    const [openModal, setOpenModal] = useState(false)
    const { selected } = useSelector((state: any) => state.category)
    const [createOrder, { data: orderCreatedData, isSuccess: isCreated, error: orderCreateError }] = useCreateOrderMutation()

    const handlePlaceOrder = async () => {
        try {
            setOpenModal(true);
            const result = await createOrder(orderData).unwrap(); 
            console.log("Order created successfully:", result);
        } catch (error) {
            console.error("Order creation failed:", error);
        }
    };
    

    useApiResponseEffects({
        isSuccess: isCreated,
        errorData: orderCreateError,
        successData: orderCreatedData,
        // redirectTo: '/checkout'
    })

    return (
        <div>
            <ModalTemplate
                openModal={openModal}
                setOpenModal={setOpenModal}
                tiggerTitle="PLACE ORDER"
                className={`w-full py-4 text-base ${selected === "makeup" ? 'bg-mColor3/80 text-blackCustom' : 'bg-sColor6 text-whiteCustom'}`}
                onClick={handlePlaceOrder}

                body={
                    <div className="flex flex-col items-center justify-center p-8">
                        <div>
                            <Image src={icons.OrderPlaced} alt="Order Placed" />
                        </div>
                        <h2 className="text-2xl font-medium">Order Placed Successfully</h2>
                        <p className="text-center text-bColor3 mt-1">view order list for order details and status</p>
                        <SecondaryButton title="View Order List"
                        // to="/user/orders" 
                        className={`py-2.5 px-10 w-fit mx-auto mt-5 text-base ${selected === "makeup" ? 'bg-mColor3/80 text-blackCustom' : 'bg-sColor6 text-whiteCustom'}`} onClick={() => setOpenModal(false)} />
                    </div>
                }
            />
        </div>
    )
}
export default OrderPlacedModal