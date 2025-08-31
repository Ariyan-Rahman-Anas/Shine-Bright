// hooks/useLogoutHandler.ts
import { useUserLogoutMutation } from "@/redux/api/authApi";
import { logout } from "@/redux/features/authSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useApiResponseEffects } from "./useApiResponseEffects";

export const useLogoutHandler = ({ onComplete }: { onComplete?: () => void } = {}) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [userLogout, { data, isSuccess, isError, error }] = useUserLogoutMutation();

    const handleLogout = async () => {
        const result = await userLogout({});

        if (result?.data?.status === "success") {
            // Clear cookies
            document.cookie = `taupenotch_access_token=""; path=/`;
            document.cookie = `taupenotch_refresh_token=""; path=/`;

            // Redux logout
            dispatch(logout());

            // Callback (e.g., close modal)
            onComplete?.();

            // Reload or redirect
            router.replace("/login");
        }
    };

    // API feedback effect
    useApiResponseEffects({
        isSuccess,
        isError,
        errorData: error,
        successData: data,
    });

    return { handleLogout, logoutStatus: { isSuccess, isError, error, data } };
};