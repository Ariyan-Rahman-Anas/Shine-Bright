"use client"

import ForgotPasswordForm from "@/components/pageComponents/ResetPassword/TakingPhoneNumber"
import ResetPasswordForm from "@/components/pageComponents/ResetPassword/TakingNewPassword"
import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"

const ResetPasswordContent = () => {
    const searchParams = useSearchParams()
    const token = searchParams.get("token")
    const [step, setStep] = useState<"request" | "done">("request")
    const [sentEmail, setSentEmail] = useState("")

    if (token) {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center space-y-4 w-full">
                <div className="text-center space-y-2">
                    <h1 className="uppercase text-2xl font-semibold">Set New Password</h1>
                    <p className="w-full md:max-w-[350px] mx-auto text-sm text-black40">
                        Enter and confirm your new password below.
                    </p>
                </div>
                <ResetPasswordForm />
            </div>
        )
    }

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center space-y-4 w-full">
            <div className="text-center space-y-2">
                <h1 className="uppercase text-2xl font-semibold">Reset Your Password</h1>
                <p className="w-full md:max-w-[350px] mx-auto text-sm text-black40">
                    {step === "request"
                        ? "Enter your email address and we'll send you a link to reset your password."
                        : `A reset link has been sent to ${sentEmail}. Please check your inbox.`}
                </p>
            </div>

            {step === "request" && (
                <ForgotPasswordForm setStep={() => setStep("done")} setEmail={setSentEmail} />
            )}

            {step === "done" && (
                <div className="text-center space-y-4 w-full md:max-w-lg mx-auto">
                    <p className="text-sm text-bColor4">
                        Didn&apos;t receive the email?{" "}
                        <button
                            onClick={() => setStep("request")}
                            className="underline underline-offset-2 font-medium"
                        >
                            Try again
                        </button>
                    </p>
                </div>
            )}
        </div>
    )
}

const ResetPasswordPage = () => {
    return (
        <Suspense>
            <ResetPasswordContent />
        </Suspense>
    )
}

export default ResetPasswordPage