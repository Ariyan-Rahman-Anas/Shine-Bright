"use client"

import PasswordInputField from "@/components/shared/PasswordInputField"
import SecondaryButton from "@/components/shared/SecondaryButton"
import { zodResolver } from "@hookform/resolvers/zod"
import { resetPasswordSchema, type ResetPasswordFormData } from "@/validations/auth.validations"
import { authClient } from "@/lib/auth-client"
import { useForm } from "react-hook-form"
import { useRouter, useSearchParams } from "next/navigation"
import { toast } from "sonner"

const ResetPasswordForm = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const token = searchParams.get("token")

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ResetPasswordFormData>({ resolver: zodResolver(resetPasswordSchema) })

    const onSubmit = async (data: ResetPasswordFormData) => {
        if (!token) {
            toast.error("Invalid or missing reset token. Please request a new reset link.")
            return
        }

        const { error } = await authClient.resetPassword({
            newPassword: data.newPassword,
            token,
        })

        if (error) {
            toast.error(error.message ?? "Failed to reset password. Please try again.")
            return
        }

        toast.success("Password reset successfully! You can now sign in.")
        router.replace("/login")
    }

    return (
        <section className="w-full md:max-w-lg mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                <div className="space-y-4">
                    <div className="w-full">
                        <PasswordInputField
                            id="newPassword"
                            label="New Password"
                            placeholder="Enter New Password"
                            required
                            error={errors.newPassword}
                            register={register}
                            name="newPassword"
                        />
                    </div>

                    <div className="w-full">
                        <PasswordInputField
                            id="confirmPassword"
                            label="Confirm Password"
                            placeholder="Re-enter New Password"
                            required
                            error={errors.confirmPassword}
                            register={register}
                            name="confirmPassword"
                        />
                    </div>

                    <p className="text-sm text-bColor4">
                        Password must contain uppercase, lowercase, number and special character.
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <SecondaryButton
                        bType="submit"
                        title={isSubmitting ? "Saving..." : "Save New Password"}
                        className="w-full py-1.5 md:w-[80%] text-base font-medium uppercase"
                        disabled={isSubmitting}
                    />
                    <SecondaryButton
                        bType="button"
                        title="Cancel"
                        className="w-full py-1.5 md:w-[80%] bg-whiteCustom text-blackCustom text-base font-medium uppercase border-2 border-bColor1"
                        onClick={() => router.back()}
                    />
                </div>
            </form>
        </section>
    )
}

export default ResetPasswordForm