"use client"

import SecondaryButton from "@/components/shared/SecondaryButton";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const TakingPhoneNumber = ({setStep}: {setStep: (step: number) => void}) => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
        setStep(2)
    }
    return (
        <section className="w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full md:max-w-lg mx-auto space-y-2 ">
                {/* phone */}
                <div className="flex flex-col gap-1 w-full">
                    <label htmlFor="phone">Phone Number<span className="text-lg">*</span></label>
                    <input
                        type="number"
                        id="phone"
                        placeholder="Enter Phone"
                        className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
                        {...register("phone")}
                    />
                    {/* {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>} */}
                </div>
                <div className="flex items-center gap-2">
                    <SecondaryButton
                        bType="submit"
                        title="Continue"
                        className="w-full py-1.5 md:w-[80%] bg-mColor3/80 text-blackCustom text-base font-medium uppercase"
                    />
                    <SecondaryButton
                        bType="button"
                        title="Cancel"
                        className="w-full py-1.5 md:w-[80%] bg-whiteCustom text-blackCustom text-base font-medium uppercase border-2 border-bColor1 "
                        onClick={() => router.replace("/")}
                    />
                </div>
            </form>
        </section>
    )
}

export default TakingPhoneNumber