"use client"

import SecondaryButton from "@/components/shared/SecondaryButton";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import ChangePasswordForm from "./ChangePasswordForm";
import { loggedInUser } from "@/redux/features/authSlice";
import { toast } from "sonner";

const AccountDetailsForm = () => {
    const { selected } = useSelector((state: any) => state.category)

    const loggedInUserSelector = useSelector(loggedInUser)
    const { firstName, lastName, email, phone } = loggedInUserSelector || {}

    const { register, handleSubmit} = useForm();
    const onSubmit = () => {
        toast.success("Account Details Updated!")
    }

    return (
        <div className={`w-full md:border-2 rounded-md md:p-4  ${selected === "makeup" ? "border-mBtnBg/30" : "border-sBtnBg/30"} `}>
            <h1 className="text-base uppercase font-medium mb-2 mt-6 md:mt-0 ">Account Details</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full mb-10">
                <div className="flex flex-col md:flex-row gap-4 w-full">
                    {/* first name */}
                    <div className="w-full">
                        <input
                            type="text"
                            id="firstName"
                            placeholder="First Name*"
                            className={`input-field w-full `}
                            {...register("firstName")}
                            defaultValue={firstName}
                        />
                    </div>

                    {/* last name */}
                    <div className="w-full">
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Last Name*"
                            className={`input-field w-full`}
                            {...register("lastName")}
                            defaultValue={lastName}
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 w-full my-4">
                    {/* email */}
                    <div className="w-full">
                        <input
                            type="email"
                            id="email"
                            placeholder="Email*"
                            className={`input-field w-full`}
                            {...register("email")}
                            defaultValue={email}
                            readOnly
                        />
                    </div>

                    {/* phone */}
                    <div className="w-full">
                        <input
                            type="text"
                            id="phone"
                            placeholder="Phone*"
                            className={`input-field w-full`}
                            {...register("phone")}
                            defaultValue={phone}
                            readOnly
                        />
                    </div>
                </div>

                <SecondaryButton
                    bType="submit"
                    title="Save Details"
                    className={`w-full md:w-fit text-base font-medium px-5 py-2 ${selected === "makeup" ? "text-blackCustom bg-mColor3/80" : "text-whiteCustom bg-sColor6"}`}
                />
            </form>

            <ChangePasswordForm />
        </div>
    )
}
export default AccountDetailsForm