"use client"

import PasswordInputField from "@/components/shared/PasswordInputField"
import SecondaryButton from "@/components/shared/SecondaryButton";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const TakingNewPassword = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
    }
    return (
        <section className="w-full md:max-w-lg mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className=" space-y-6">
                <div className="space-y-2">
                    {/* password */}
                    <PasswordInputField
                        id="password"
                        label="Password"
                        placeholder="Enter Password"
                        required
                        error={errors.password}
                        register={register}
                        name="password"
                    />

                    {/* confirm password */}
                    <PasswordInputField
                        id="confirm_password"
                        label="Confirm Password"
                        placeholder="Enter Confirm Password"
                        required
                        error={errors.confirm_password}
                        register={register}
                        name="confirm_password"
                    />
                    <p className="text-sm text-mColor6">Your password must contain at least one uppercase (A) , one lowercase (a) , one special character (#,$,%) and one digit (2)</p>
                </div>
                <div className="flex items-center gap-2">
                    <SecondaryButton
                        bType="submit"
                        title="Save New Password"
                        className="w-full py-1.5 md:w-[80%] bg-mColor3/80 text-blackCustom text-base font-medium uppercase"
                    />
                    <SecondaryButton
                        bType="button"
                        title="Cancel"
                        className="w-full py-1.5 md:w-[80%] bg-whiteCustom text-blackCustom text-base font-medium uppercase border-2 border-bColor1 "
                        onClick={() => router.back()}
                    />
                </div>
            </form>
        </section>
    )
}

export default TakingNewPassword