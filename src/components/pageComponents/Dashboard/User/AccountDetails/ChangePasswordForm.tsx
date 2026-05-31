"use client"

import SecondaryButton from "@/components/shared/SecondaryButton"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import PasswordInputField from "@/components/shared/PasswordInputField"
import { toast } from "sonner"
import { useLogoutHandler } from "@/hooks/useLogoutHandler"
import { authClient } from "@/lib/auth-client"
import { changePasswordSchema, type ChangePasswordFormData } from "@/validations/auth.validations"

const ChangePasswordForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ChangePasswordFormData>({ resolver: zodResolver(changePasswordSchema) })

    const handleLogout = useLogoutHandler()

    const onSubmit = async (data: ChangePasswordFormData) => {
        const { error } = await authClient.changePassword({
            currentPassword: data.currentPassword,
            newPassword: data.newPassword,
            revokeOtherSessions: true,
        })

        if (error) {
            toast.error(error.message ?? "Failed to change password.")
            return
        }

        reset()
        toast.success("Password changed successfully. Please sign in again.")
        await handleLogout()
    }

    return (
        <div>
            <h1 className="text-base uppercase font-medium mb-2">Change Password</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="space-y-3 mb-1">
                    <PasswordInputField
                        id="currentPassword"
                        label="Current Password*"
                        placeholder="Current Password"
                        isLabel={false}
                        register={register}
                        name="currentPassword"
                        required={true}
                    />
                    {errors.currentPassword && (
                        <p className="text-error text-sm">{errors.currentPassword.message}</p>
                    )}

                    <PasswordInputField
                        id="newPassword"
                        label="New Password*"
                        placeholder="New Password"
                        isLabel={false}
                        register={register}
                        name="newPassword"
                        required={true}
                    />
                    {errors.newPassword && (
                        <p className="text-error text-sm">{errors.newPassword.message}</p>
                    )}

                    <PasswordInputField
                        id="confirmPassword"
                        label="Confirm Password*"
                        placeholder="Confirm New Password"
                        isLabel={false}
                        register={register}
                        name="confirmPassword"
                        required={true}
                    />
                    {errors.confirmPassword && (
                        <p className="text-error text-sm">{errors.confirmPassword.message}</p>
                    )}
                </div>

                <p className="text-sm text-bColor4 mt-2">
                    Password must contain uppercase, lowercase, number and special character.
                </p>

                <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
                    <SecondaryButton
                        bType="submit"
                        title={isSubmitting ? "Saving..." : "Save New Password"}
                        className="w-full md:w-fit text-base font-medium px-5 py-2"
                        disabled={isSubmitting}
                    />
                    <Link
                        href="/reset-password"
                        className="text-error text-sm underline underline-offset-2"
                    >
                        Forgot Password?
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default ChangePasswordForm