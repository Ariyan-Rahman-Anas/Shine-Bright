import { toast } from "sonner";

export interface ErrorResponseI {
    status: number;
    data: {
        status: string;
        statusCode: number;
        message: string;
        error: {
            code: string;
            details: string;
            timestamp: string;
            path: string;
            suggestion?: string;
            payload?: Record<string, string>;
        };
        requestId?: string;
        documentationUrl?: string;
    };
}


export function catchApiError(error: ErrorResponseI): void {
    const payload = error?.data?.error?.payload;

    if (
        payload &&
        typeof payload === "object" &&
        Object.keys(payload)?.length > 0
    ) {
        Object.entries(payload).map(([, value]) =>
            toast.error(`${value}`)
        );
    } else {
        toast.error(error?.data?.message || "Unknown validation error");
    }
}