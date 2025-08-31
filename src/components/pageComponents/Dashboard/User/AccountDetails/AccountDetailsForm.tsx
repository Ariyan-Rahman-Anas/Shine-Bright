"use client"

import SecondaryButton from "@/components/shared/SecondaryButton";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import ChangePasswordForm from "./ChangePasswordForm";
import { loggedInUser } from "@/redux/features/authSlice";
import { useUpdateCustomerMutation } from "@/redux/api/authApi";
import { useApiResponseEffects } from "@/hooks/useApiResponseEffects";

const AccountDetailsForm = () => {
    const { selected } = useSelector((state: any) => state.category)
    const loggedInUserSelector = useSelector(loggedInUser)
    const { first_name, last_name, email, phone} = loggedInUserSelector || {}

    const [updateCustomer, { isError, isSuccess, error, data }] = useUpdateCustomerMutation()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: any) => {
        console.log(data);
        updateCustomer({ id: loggedInUserSelector, data }).unwrap()
    }

    useApiResponseEffects({
        isSuccess,
        isError,
        errorData: error,
        successData: data,
    });

    return (
        <div className={`w-full md:border-2 rounded-md md:p-4  ${selected === "makeup" ? "border-mColor3" : "border-sColor6"} `}>
            <h1 className="text-base uppercase font-medium mb-2 mt-6 md:mt-0 ">Account Details</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full mb-10">
                <div className="flex flex-col md:flex-row gap-4 w-full">
                    {/* first name */}
                    <div className="w-full">
                        <input
                            type="text"
                            id="first_name"
                            placeholder="First Name*"
                            className={`input-field w-full ${errors.first_name ? 'border-red-500' : ''}`}
                            {...register("first_name")}
                            defaultValue={first_name}
                        />
                        {/* {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>} */}
                    </div>

                    {/* last name */}
                    <div className="w-full">
                        <input
                            type="text"
                            id="last_name"
                            placeholder="Last Name*"
                            className={`input-field w-full ${errors.last_name ? 'border-red-500' : ''}`}
                            {...register("last_name")}
                            defaultValue={last_name}
                        />
                        {/* {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>} */}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 w-full my-4">
                    {/* email */}
                    <div className="w-full">
                        <input
                            type="email"
                            id="email"
                            placeholder="Email*"
                            className={`input-field w-full ${errors.email ? 'border-red-500' : ''}`}
                            {...register("email")}
                            defaultValue={email}
                        />
                        {/* {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>} */}
                    </div>

                    {/* phone */}
                    <div className="w-full">
                        <input
                            type="number"
                            id="phone"
                            placeholder="Phone*"
                            className={`input-field w-full ${errors.phone ? 'border-red-500' : ''}`}
                            {...register("phone")}
                            defaultValue={phone}
                        />
                        {/* {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>} */}
                    </div>
                </div>

                <SecondaryButton
                    bType="submit"
                    title="Save Details"
                    className={`w-full md:w-fit text-base font-medium px-5 py-2 ${selected === "makeup" ? "text-blackCustom bg-mColor3/80" : "text-whiteCustom bg-sColor6"}`}
                // onClick={onSubmit}
                />
            </form>

            <ChangePasswordForm />
        </div>
    )
}

export default AccountDetailsForm