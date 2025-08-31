"use client"

import PasswordInputField from "@/components/shared/PasswordInputField";
import SecondaryButton from "@/components/shared/SecondaryButton";
import SocialLogin from "@/components/shared/SocialLogin";
import CheckBox from "@/components/shared/CheckBox";
import { siteEmail, siteInfo, sitePassword } from "@/constant";
import { setUser } from "@/redux/features/authSlice";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const LoginForm = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [keepLoggedIn, setKeepLoggedIn] = useState(false)
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Cleanup timeout on component unmount
    useEffect(() => {
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [timeoutId]);

    // Handle checkbox toggle
    const handleKeepLoggedIn = () => {
        setKeepLoggedIn(prev => !prev)
    }

    const onSubmit = async (data: any) => {
        setLoading(true)

        const loadingTimer = setTimeout(() => {
            if (data.email !== siteEmail) {
                toast.error("Unauthenticated Email")
                setLoading(false)
                setTimeoutId(null)
                return;
            }

            if (data.password !== sitePassword) {
                toast.error("Invalid Password")
                setLoading(false)
                setTimeoutId(null)
                return;
            }

            dispatch(setUser({
                user: siteInfo,
                keepLoggedIn: keepLoggedIn
            }));
            toast.success("Successfully Logged In!")
            setLoading(false)
            setTimeoutId(null)
        }, 2000);

        setTimeoutId(loadingTimer);
    };

    return (
        <div className="w-full max-w-lg mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full flex flex-col items-center justify-center">
                <div className="flex flex-col w-full">
                    <label htmlFor="email">Email/Phone<span className="text-lg text-error ">*</span></label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter Email"
                        required
                        defaultValue={siteEmail}
                        className={`input-field`}
                        {...register("email")}
                    />
                </div>

                <PasswordInputField
                    id="password"
                    label="Password"
                    placeholder="Enter Password"
                    dValue={sitePassword}
                    required
                    error={errors.password}
                    register={register}
                    name="password"
                />

                <p className="text-sm text-bColor4">Your password must contain at least one uppercase (A) , one lowercase (a) , one special character (#,$,%) and one digit (2)</p>

                <SecondaryButton
                    bType="submit"
                    title={loading ? "Logging In..." : "Sign In"}
                    className="w-full md:w-[80%] text-base font-medium uppercase py-2"
                    disabled={loading}
                />
            </form>

            <div className="flex items-center justify-between w-full my-8">
                <CheckBox
                    label="Keep me Logged in"
                    onClick={handleKeepLoggedIn}
                    checked={keepLoggedIn}
                    isCenter={true}
                />
                <div>
                    <Link href="/reset-password" className="text-blackCustom hover:underline underline-offset-2 ">Forgot Password?</Link>
                </div>
            </div>

            <SocialLogin />
            <p className="text-center mt-4 ">{`Don't have an account? `}<Link href="/registration" className="text-blackCustom font-semibold underline underline-offset-2 ">Create one</Link></p>
        </div>
    )
}

export default LoginForm