import ModalTemplate from "@/components/shared/ModalTemplate"
import SecondaryButton from "@/components/shared/SecondaryButton"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { RxCross2 } from "react-icons/rx"
import { useSelector } from "react-redux"
import { FiStar } from "react-icons/fi"
import { FaStar } from "react-icons/fa"

const ReviewProductModal = ({ is_single = true }: { is_single?: boolean }) => {
    const [openModal, setOpenModal] = useState(false)
    const { register, handleSubmit } = useForm()
    const { selected } = useSelector((state: any) => state.category)

    const [rating, setRating] = useState(0)

    const handleRating = (rate: number) => {
        setRating(rate)
    }

    const onSubmit = (data: any) => {
        console.log(data)
        setOpenModal(false)
        setRating(0)
    }

    return (
        <div>
            <ModalTemplate
                tiggerTitle={is_single ? "Add Review" : "Add Review for All Products"}
                openModal={openModal}
                setOpenModal={setOpenModal}
                className={`${is_single ? "w-full md:w-fit " : "w-full"} text-sm px-6 py-2  `}
                body={
                    <div className="p-4 w-full md:min-w-[650px] max-w-2xl ">
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold text-blackCustom" >{is_single ? "Add Review" : "Add Review for All Products"}</h1>
                            <RxCross2 className="cursor-pointer" onClick={() => setOpenModal(false)} />
                        </div>

                        <div className="flex items-center gap-1 mt-5 mb-3">
                            {
                                Array.from({ length: 5 }).map((_, index) => (
                                    <div key={index}>
                                        {
                                            rating >= index + 1 ? (
                                                <FaStar className="text-blackCustom cursor-pointer" onClick={() => handleRating(index + 1)} />
                                            ) : (
                                                <FiStar className="text-bColor2 cursor-pointer" onClick={() => handleRating(index + 1)} />
                                            )
                                        }
                                    </div>
                                ))
                            }
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <textarea {...register("review")} id="review" rows={4} placeholder="Write your review here" className="input-field"></textarea>

                            <SecondaryButton bType="submit" title="Add Review" className={`py-2 px-4 ${selected === "makeup" ? "bg-mColor3/80 text-blackCustom " : "text-whiteCustom bg-sColor6"}`} />
                        </form>

                    </div>
                }
            />
        </div>
    )
}
export default ReviewProductModal