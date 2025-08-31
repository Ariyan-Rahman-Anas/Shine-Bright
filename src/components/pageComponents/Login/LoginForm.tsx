"use client"

import PasswordInputField from "@/components/shared/PasswordInputField";
import SecondaryButton from "@/components/shared/SecondaryButton";
import SocialLogin from "@/components/shared/SocialLogin";
import { useApiResponseEffects } from "@/hooks/useApiResponseEffects";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { setUser } from "@/redux/features/authSlice";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const LoginForm = () => {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [userLogin, {
        data: userLoginData,
        isLoading: isLogging,
        error: loginError,
        isSuccess,
        isError
    }] = useUserLoginMutation();

    const onSubmit = async (data: any) => {
        const response = await userLogin({
            identifier: data.email,
            password: data.password
        }).unwrap();
        dispatch(setUser({
            basicInfo: response?.data?.user,
            accessToken: response?.data?.accessToken,
            refreshToken: response?.data?.refreshToken
        }));

        // Store tokens in cookies so middleware can access them
        document.cookie = `taupenotch_access_token=${response?.data?.accessToken}; path=/`;
        document.cookie = `taupenotch_refresh_token=${response?.data?.refreshToken}; path=/`;

        // window.location.reload()
    };

    // Handle API responses
    useApiResponseEffects({
        isSuccess,
        isError,
        errorData: loginError,
        successData: userLoginData,
        redirectTo: "/"
    });



    return (
        <div className="w-full max-w-lg mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full flex flex-col items-center justify-center">
                <div className="flex flex-col w-full">
                    <label htmlFor="email">Email/Phone<span className="text-lg text-error ">*</span></label>
                    <input
                        type="text"
                        id="email"
                        placeholder="Enter Email"
                        className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                        {...register("email")}
                    />
                </div>

                <PasswordInputField
                    id="password"
                    label="Password"
                    placeholder="Enter Password"
                    required
                    error={errors.password}
                    register={register}
                    name="password"
                />

                <p className="text-sm text-bColor4">Your password must contain at least one uppercase (A) , one lowercase (a) , one special character (#,$,%) and one digit (2)</p>

                <SecondaryButton
                    bType="submit"
                    title={isLogging ? "Logging In..." : "Sign In"}
                    className="w-full md:w-[80%] text-base font-medium uppercase py-2"
                    disabled={isLogging}
                />
            </form>
            <div className="flex items-center justify-between w-full my-8">
                <div className="flex items-center gap-2">
                    <input type="checkbox" />
                    <label htmlFor="">Keep me Logged in</label>
                </div>
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