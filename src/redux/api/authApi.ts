import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: builder => ({
        userRegistration: builder.mutation({
            query: (data) => ({
                url: "/users/frontend/create-basic-user",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["User"]
        }),
        userLogin: builder.mutation({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["User"]
        }),
        createCustomer:builder.mutation({
            query: (data) => ({
                url: "/users/frontend/create-customer",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["User"]
        }),
        userLogout: builder.mutation({
            query: ()=>({
                url:"/auth/logout",
                method:"POST"
            }),
            invalidatesTags: ["User"]
        }),
        changePassword:builder.mutation({
            query: (data)=>({
                url:"/auth/change-password",
                method:"POST",
                body:data
            }),
            invalidatesTags: ["User"]
        }),
        getCustomerById:builder.query({
            query: (id)=>({
                url:`/users/admin/customer/${id}`,
                method:"GET"
            }),
            providesTags: ["User"]
        }),
        updateCustomer:builder.mutation({
            query: ({id, data})=>({
                url:`/users/frontend/update-customer/${id}`,
                method:"PATCH",
                body:data
            }),
            invalidatesTags: ["User"]
        })
    })
})

export const {
     useUserRegistrationMutation, 
     useUserLoginMutation,
     useCreateCustomerMutation,
     useUserLogoutMutation,
     useChangePasswordMutation,
     useGetCustomerByIdQuery,
     useUpdateCustomerMutation 
    } = authApi