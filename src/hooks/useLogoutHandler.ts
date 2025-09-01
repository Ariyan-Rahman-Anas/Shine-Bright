import { logout } from "@/redux/features/authSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

export const useLogoutHandler = ({ onComplete }: { onComplete?: () => void } = {}) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = async () => {
        dispatch(logout());
        onComplete?.();
        router.replace("/login")
        toast.success("Successfully Logged out!")
    }
    return handleLogout
};