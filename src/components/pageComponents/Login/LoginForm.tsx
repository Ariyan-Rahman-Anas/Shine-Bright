"use client"

import PasswordInputField from "@/components/shared/PasswordInputField";
import SecondaryButton from "@/components/shared/SecondaryButton";
import SocialLogin from "@/components/shared/SocialLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, type SignInFormData } from "@/validations/auth.validations";
import { signIn } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const LoginForm = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignInFormData>({ resolver: zodResolver(signInSchema) });

    const onSubmit = async (data: SignInFormData) => {
        const { error } = await signIn.email({
            email: data.email,
            password: data.password,
            callbackURL: `${window.location.origin}/`,
        });

        if (error) {
            toast.error(error.message ?? "Sign in failed. Please try again.");
            return;
        }

        toast.success("Welcome back!");
        router.replace("/");
    };

    return (
        <div className="w-full max-w-lg mx-auto">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 w-full flex flex-col items-center justify-center"
                noValidate
            >
                <div className="flex flex-col w-full">
                    <label htmlFor="email">
                        Email<span className="text-lg text-error">*</span>
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

                <div className="w-full">
                    <PasswordInputField
                        id="password"
                        label="Password"
                        placeholder="Enter Password"
                        required
                        error={errors.password}
                        register={register}
                        name="password"
                    />
                </div>

                <div className="flex items-center justify-end w-full">
                    <Link
                        href="/reset-password"
                        className="text-sm text-blackCustom hover:underline underline-offset-2"
                    >
                        Forgot Password?
                    </Link>
                </div>

                <SecondaryButton
                    bType="submit"
                    title={isSubmitting ? "Signing In..." : "Sign In"}
                    className="w-full md:w-[80%] text-base font-medium uppercase py-2"
                    disabled={isSubmitting}
                />
            </form>

            <div className="mt-8">
                <SocialLogin />
            </div>

            <p className="text-center mt-4">
                {`Don't have an account? `}
                <Link
                    href="/registration"
                    className="text-blackCustom font-semibold underline underline-offset-2"
                >
                    Create one
                </Link>
            </p>
        </div>
    );
};

export default LoginForm;