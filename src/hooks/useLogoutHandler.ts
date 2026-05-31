import { logout } from "@/redux/features/authSlice";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

export const useLogoutHandler = ({ onComplete }: { onComplete?: () => void } = {}) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = async () => {
        await authClient.signOut();
        dispatch(logout());
        onComplete?.();
        router.replace("/login");
        toast.success("Successfully logged out!");
    };
    return handleLogout;
};