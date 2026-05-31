"use client"

import PasswordInputField from "@/components/shared/PasswordInputField"
import SearchableDropdown from "@/components/shared/SearchableDropdown"
import SecondaryButton from "@/components/shared/SecondaryButton"
import SocialLogin from "@/components/shared/SocialLogin"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { countryCodes } from "@/constant"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { signUpSchema, type SignUpFormData } from "@/validations/auth.validations"
import { signUp } from "@/lib/auth-client"

const RegistrationForm = () => {
    const router = useRouter()
    const [selectedCountryCode, setSelectedCountryCode] = useState<string>("")

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm<SignUpFormData>({ resolver: zodResolver(signUpSchema) })

    const onSubmit = async (data: SignUpFormData) => {
        const { error } = await signUp.email({
            email: data.email,
            password: data.password,
            name: `${data.firstName} ${data.lastName}`,
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            countryCode: data.countryCode,
            callbackURL: `${window.location.origin}/login`,
        } as any)

        if (error) {
            toast.error(error.message ?? "Registration failed. Please try again.")
            return
        }

        toast.success("Account created! Please check your email to verify your account.")
        router.replace("/login")
    }

    return (
        <div className="w-full max-w-lg mx-auto space-y-8">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 w-full flex flex-col items-center justify-center"
                noValidate
            >
                <div className="flex flex-col md:flex-row items-start gap-4 w-full">
                    {/* First Name */}
                    <div className="w-full md:w-[60%] flex flex-col">
                        <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                            First Name <span className="text-error text-lg">*</span>
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            placeholder="Enter First Name"
                            className="input-field"
                            {...register("firstName")}
                        />
                        {errors.firstName && (
                            <p className="text-error text-sm mt-1">{errors.firstName.message}</p>
                        )}
                    </div>

                    {/* Last Name */}
                    <div className="w-full md:w-[40%] flex flex-col">
                        <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                            Last Name <span className="text-error text-lg">*</span>
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Enter Last Name"
                            className="input-field"
                            {...register("lastName")}
                        />
                        {errors.lastName && (
                            <p className="text-error text-sm mt-1">{errors.lastName.message}</p>
                        )}
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
                        className="input-field"
                        {...register("email")}
                    />
                    {errors.email && (
                        <p className="text-error text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>

                {/* Phone with Country Code */}
                <div className="flex items-start gap-4 w-full">
                    <div>
                        <SearchableDropdown
                            isLabel={true}
                            label="Country"
                            options={countryCodes}
                            value={selectedCountryCode}
                            onChange={(value) => {
                                setSelectedCountryCode(value as string)
                                setValue("countryCode", value as string, { shouldValidate: true })
                            }}
                            placeholder="Code"
                            searchPlaceholder="Search Country Code"
                            clearable
                            required={true}
                            maxHeight="250px"
                            isSearchable={true}
                            className="w-28 border h-full md:w-32"
                        />
                        {errors.countryCode && (
                            <p className="text-error text-sm mt-1">{errors.countryCode.message}</p>
                        )}
                    </div>

                    <div className="flex flex-col w-full">
                        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                            Phone <span className="text-error">*</span>
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Enter Phone Number"
                            className="input-field"
                            {...register("phone")}
                        />
                        {errors.phone && (
                            <p className="text-error text-sm mt-1">{errors.phone.message}</p>
                        )}
                    </div>
                </div>

                {/* Password */}
                <div className="w-full">
                    <PasswordInputField
                        id="password"
                        label="Password"
                        placeholder="Enter Password"
                        required={true}
                        error={errors.password}
                        register={register}
                        name="password"
                    />
                </div>

                {/* Confirm Password */}
                <div className="w-full">
                    <PasswordInputField
                        id="confirmPassword"
                        label="Confirm Password"
                        placeholder="Re-enter Password"
                        required={true}
                        error={errors.confirmPassword}
                        register={register}
                        name="confirmPassword"
                    />
                </div>

                <p className="text-sm text-bColor4 self-start">
                    Password must contain uppercase, lowercase, number and special character.
                </p>

                <SecondaryButton
                    bType="submit"
                    title={isSubmitting ? "Creating Account..." : "Sign Up"}
                    className="w-full md:w-[80%] text-base font-medium uppercase py-2"
                    disabled={isSubmitting}
                />
            </form>

            <SocialLogin />
        </div>
    )
}

export default RegistrationForm