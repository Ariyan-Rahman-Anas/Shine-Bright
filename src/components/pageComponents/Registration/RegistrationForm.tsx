"use client"

import PasswordInputField from "@/components/shared/PasswordInputField"
import SearchableDropdown from "@/components/shared/SearchableDropdown"
import SecondaryButton from "@/components/shared/SecondaryButton"
import SocialLogin from "@/components/shared/SocialLogin"
import { useUserRegistrationMutation } from "@/redux/api/authApi"
import {  useState } from "react"
import { useForm } from "react-hook-form"
import { useApiResponseEffects } from "@/hooks/useApiResponseEffects"
import { countryCodes } from "@/constant"


const RegistrationForm = () => {
    const [selectedCountryCode, setSelectedCountryCode] = useState<string>("");

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm();

    const [userRegistration, {
        data: userRegisterData,
        isLoading: isRegistering,
        error: registerError,
        isSuccess,
        isError
    }] = useUserRegistrationMutation();

    const onSubmit = async (data: any) => {
        const payload = {
            ...data,
            country_code: selectedCountryCode,
            confirm_password: undefined
        };
        await userRegistration(payload);
    };

    useApiResponseEffects({
        isSuccess,
        isError,
        errorData: registerError,
        successData: userRegisterData,
        redirectTo: "/login"
    });

    return (
        <div className="w-full max-w-lg mx-auto space-y-8">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 w-full flex flex-col items-center justify-center"
                noValidate
            >
                {/* First Name */}
                <div className="flex flex-col w-full">
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
                <div className="flex flex-col w-full">
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

                {/* Email */}
                <div className="flex flex-col w-full">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email <span className="text-red-500 text-lg">*</span>
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
                <div className="flex items-start gap-2 w-full ">
                    <SearchableDropdown
                        isLabel={true}
                        label="Country Code"
                        options={countryCodes}
                        value={selectedCountryCode}
                        onChange={(value) => {
                            setSelectedCountryCode(value as string);
                            setValue('country_code', value);
                        }}
                        placeholder="Select Code"
                        searchPlaceholder="Search Country Code"
                        clearable
                        required={true}
                        maxHeight="250px"
                        isSearchable={true}
                        className={`w-full border h-full min-w-44 ${errors.country_code ? 'border-red-500' : ''}`}
                    />

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

                {/* i need to watch the password here, that password and confirm password should be same */}
                {watch("password") !== watch("confirm_password") && (
                    <p className="text-red-500 text-sm mt-1">
                        Passwords do not match
                    </p>
                )}

                {/* Submit Button */}
                <SecondaryButton
                    bType="submit"
                    title={isRegistering || isSubmitting ? "Creating Account..." : "Sign Up"}
                    className="w-full md:w-[80%] text-base font-medium uppercase py-2"
                    disabled={isRegistering || isSubmitting}
                />
            </form>

            <SocialLogin />
        </div>
    );
};

export default RegistrationForm;