"use client"

import { icons } from "@/assets"
import { signIn } from "@/lib/auth-client"
import SecondaryButton from "./SecondaryButton"
import { toast } from "sonner"
import { useState } from "react"

const SocialLogin = () => {
    const [isLoading, setIsLoading] = useState(false)

    const handleGoogleSignIn = async () => {
        setIsLoading(true)
        const { error } = await signIn.social({
            provider: "google",
            callbackURL: `${window.location.origin}/`,
        })
        if (error) {
            toast.error(error.message ?? "Google sign in failed.")
            setIsLoading(false)
        }
    }

    return (
        <div className="space-y-4">
            <h2 className="text-center text-lg">or, Sign in with</h2>
            <div className="flex flex-col md:flex-row items-center gap-3">
                <SecondaryButton
                    bType="button"
                    title={isLoading ? "Redirecting..." : "Sign in with Google"}
                    className="w-full text-blackBase text-base font-medium py-2 border-2"
                    icon={icons.Google?.src}
                    style={{ background: "transparent", color: "black" }}
                    onClick={handleGoogleSignIn}
                    disabled={isLoading}
                />
            </div>
        </div>
    )
}

export default SocialLogin