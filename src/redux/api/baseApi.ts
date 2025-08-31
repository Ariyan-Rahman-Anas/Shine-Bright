import { API_CONFIG } from "@/lib/config";
import {
    BaseQueryFn,
    createApi,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
    QueryReturnValue
} from "@reduxjs/toolkit/query/react";
import { logout } from "../features/authSlice";


const baseQuery = fetchBaseQuery({
    baseUrl: API_CONFIG.base_url,
    credentials: "include"
})

const baseQueryWithRefreshToken: BaseQueryFn<
    FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions): Promise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>> => {
    try {
        let result = await baseQuery(args, api, extraOptions);
        if (result?.error?.status === 401) {
            const refreshTokenResult = await fetch(
                API_CONFIG.refresh_token_url,
                {
                    method: "POST",
                    credentials: "include",
                }
            );
            const data = await refreshTokenResult.json();
            console.log("this is data from refresh token", { data })
            if (refreshTokenResult.ok && data?.success) {
                result = await baseQuery(args, api, extraOptions);
            } else {
                api.dispatch(logout());
            }
        }
        return result;
    } catch (error) {
        throw error;
    }
};


export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQueryWithRefreshToken,
    endpoints: () => ({}),
    tagTypes: ["User", "Products", "Brands", "Orders"],
})