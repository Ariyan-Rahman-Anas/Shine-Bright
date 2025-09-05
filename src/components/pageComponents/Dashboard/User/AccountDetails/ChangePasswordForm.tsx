"use client"

import SecondaryButton from "@/components/shared/SecondaryButton";
import { useForm } from "react-hook-form";
import Link from "next/link";
import PasswordInputField from "@/components/shared/PasswordInputField";
import { toast } from "sonner";
import { useLogoutHandler } from "@/hooks/useLogoutHandler";
import { useRouter } from "next/navigation";

type PasswordChangeFormData = {
    old_password: string;
    new_password: string;
    confirm_password: string;
};

const ChangePasswordForm = () => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<PasswordChangeFormData>();

    const handleLogout = useLogoutHandler({
        // onComplete: () => setOpen(false),
    })

    const onSubmit = async (data: PasswordChangeFormData) => {
        if (data?.new_password?.length < 5) {
            toast.error("New Password must be at least 5 characters long")
            return
        }
        reset();
        handleLogout()
        router.replace("/login")
    };


    return (
        <div>
            <h1 className="text-base uppercase font-medium mb-2">Change Password</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-3 mb-1">
                    <PasswordInputField
                        id="old_password"
                        label="Old Password*"
                        placeholder="Old Password*"
                        isLabel={false}
                        register={register}
                        name="old_password"
                        required={true}
                    />
                    {errors.old_password && (
                        <p className="text-red-500 text-sm">{errors.old_password.message}</p>
                    )}

                    <PasswordInputField
                        id="new_password"
                        label="New Password*"
                        placeholder="New Password*"
                        isLabel={false}
                        register={register}
                        name="new_password"
                        required={true}

                    />
                    {errors.new_password && (
                        <p className="text-red-500 text-sm">{errors.new_password.message}</p>
                    )}

                    <PasswordInputField
                        id="confirm_password"
                        label="Confirm Password*"
                        placeholder="Confirm Password*"
                        isLabel={false}
                        register={register}
                        name="confirm_password"
                        required={true}

                    />
                    {errors.confirm_password && (
                        <p className="text-red-500 text-sm">{errors.confirm_password.message}</p>
                    )}
                </div>

                {/* i need to watch the password here, that password and confirm password should be same */}
                {watch("new_password") !== watch("confirm_password") && (
                    <p className="text-error text-sm mt-1">
                        Passwords do not match
                    </p>
                )}

                <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
                    <SecondaryButton
                        bType="submit"
                        title="Save New Password"
                        className="w-full md:w-fit text-base font-medium px-5 py-2"
                    />
                    <Link
                        href="/"
                        className="text-error text-sm underline underline-offset-2"
                    >
                        Forgot Password?
                    </Link>
                </div>
            </form>
        </div>
    );
};
export default ChangePasswordForm;