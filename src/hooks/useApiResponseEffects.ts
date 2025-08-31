import { catchApiError } from "@/lib/catchApiError";
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
    isError,
    errorData,
    successData,
    redirectTo
}: UseApiResponseEffectsProps) => {
    const router = useRouter();

    useEffect(() => {
        if (isError) {
            catchApiError(errorData);
        }
    }, [isError, errorData]);

    useEffect(() => {
        if (isSuccess) {
            toast.success(successData?.message);
            if (redirectTo) {
                router.replace(redirectTo);
            }
        }
    }, [isSuccess, successData, redirectTo, router]);
};