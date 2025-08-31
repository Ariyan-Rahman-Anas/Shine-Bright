import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

interface UseApiResponseEffectsProps {
    isSuccess?: boolean;
    isError?: boolean;
    errorData?: any;
    successData?: any;
    redirectTo?: string;
}

export const useApiResponseEffects = ({
    isSuccess,
    successData,
    redirectTo
}: UseApiResponseEffectsProps) => {
    const router = useRouter();

    useEffect(() => {
        if (isSuccess) {
            toast.success(successData?.message);
            if (redirectTo) {
                router.replace(redirectTo);
            }
        }
    }, [isSuccess, successData, redirectTo, router]);
};