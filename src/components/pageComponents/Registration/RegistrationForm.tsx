"use client"

import PasswordInputField from "@/components/shared/PasswordInputField"
import SearchableDropdown from "@/components/shared/SearchableDropdown"
import SecondaryButton from "@/components/shared/SecondaryButton"
import SocialLogin from "@/components/shared/SocialLogin"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { countryCodes } from "@/constant"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const RegistrationForm = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)
    const [selectedCountryCode, setSelectedCountryCode] = useState<string>("");

    useEffect(() => {
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
        }
    }, [timeoutId])

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async () => {
        setLoading(true)
        const loadingTimer = setTimeout(() => {
            toast.success("Registration Successful!")
            router.replace("/login")
            setLoading(false)
            setTimeoutId(null)
        }, 2000);

        setTimeoutId(loadingTimer);
    };

    return (
        <div className="w-full max-w-lg mx-auto space-y-8">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 w-full flex flex-col items-center justify-center"
                noValidate
            >

                <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                    {/* First Name */}
                    <div className="w-full md:w-[60%] flex flex-col">
                        <label htmlFor="first_name" className="text-sm font-medium text-gray-700">
                            First Name <span className="text-red-500 text-lg">*</span>
                        </label>
                        <input
                            type="text"
                            id="first_name"
                            placeholder="Enter First Name"
                            className={`input-field`}
                            {...register("first_name", { required: true })}
                        />
                    </div>

                    {/* Last Name */}
                    <div className="w-full md:w-[40%] flex flex-col">
                        <label htmlFor="last_name" className="text-sm font-medium text-gray-700">
                            Last Name <span className="text-red-500 text-lg">*</span>
                        </label>
                        <input
                            type="text"
                            id="last_name"
                            placeholder="Enter Last Name"
                            className={`input-field`}
                            {...register("last_name", { required: true })}
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="flex flex-col w-full">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email <span className="text-error text-lg">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter Email"
                        className={`input-field`}
                        {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                    />
                </div>

                {/* Phone with Country Code */}
                <div className="flex items-start gap-4 w-full ">
                    <div>
                        <SearchableDropdown
                            isLabel={true}
                            label="Country"
                            options={countryCodes}
                            value={selectedCountryCode}
                            onChange={(value) => {
                                setSelectedCountryCode(value as string);
                                setValue('country_code', value);
                            }}
                            placeholder="Code"
                            searchPlaceholder="Search Country Code"
                            clearable
                            required={true}
                            maxHeight="250px"
                            isSearchable={true}
                            className={`w-28 border h-full md:w-32`}
                        />
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                            Phone
                            <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            id="phone"
                            placeholder="Enter Phone"
                            className={`input-field`}
                            {...register("phone", { required: true })}
                        />
                    </div>
                </div>


                {/* Password */}
                <PasswordInputField
                    id="password"
                    label="Password"
                    placeholder="Enter Password"
                    required={true}
                    error={errors.password}
                    register={register}
                    name="password"
                />

                {/* Confirm Password */}
                <PasswordInputField
                    id="confirm_password"
                    label="Confirm Password"
                    placeholder="Enter Confirm Password"
                    required={true}
                    error={errors.confirm_password}
                    register={register}
                    name="confirm_password"
                />

                {watch("password") !== watch("confirm_password") && (
                    <p className="text-error text-sm mt-1">
                        Passwords does not matched!
                    </p>
                )}

                <SecondaryButton
                    bType="submit"
                    title={loading || isSubmitting ? "Creating Account..." : "Sign Up"}
                    className="w-full md:w-[80%] text-base font-medium uppercase py-2"
                    disabled={watch("password") !== watch("confirm_password") || loading || isSubmitting}
                />
            </form>
            <SocialLogin />
        </div>
    );
};
export default RegistrationForm;