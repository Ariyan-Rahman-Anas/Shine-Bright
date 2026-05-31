"use client"

import SecondaryButton from "@/components/shared/SecondaryButton"
import { zodResolver } from "@hookform/resolvers/zod"
import { forgotPasswordSchema, type ForgotPasswordFormData } from "@/validations/auth.validations"
import { authClient } from "@/lib/auth-client"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

interface Props {
    setStep: (step: number) => void
    setEmail: (email: string) => void
}

const ForgotPasswordForm = ({ setStep, setEmail }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ForgotPasswordFormData>({ resolver: zodResolver(forgotPasswordSchema) })

    const onSubmit = async (data: ForgotPasswordFormData) => {
        const { error } = await authClient.requestPasswordReset({
            email: data.email,
            redirectTo: `${window.location.origin}/reset-password`,
        })

        if (error) {
            toast.error(error.message ?? "Failed to send reset email.")
            return
        }

        setEmail(data.email)
        toast.success("Password reset link sent! Check your email.")
        setStep(2)
    }

    return (
        <section className="w-full md:max-w-lg mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                <div className="flex flex-col w-full">
                    <label htmlFor="email">
                        Email Address <span className="text-error text-lg">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your registered email"
                        className="input-field"
                        {...register("email")}
                    />
                    {errors.email && (
                        <p className="text-error text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>

                <SecondaryButton
                    bType="submit"
                    title={isSubmitting ? "Sending..." : "Send Reset Link"}
                    className="w-full py-2 text-base font-medium uppercase"
                    disabled={isSubmitting}
                />
            </form>
        </section>
    )
}

export default ForgotPasswordForm
