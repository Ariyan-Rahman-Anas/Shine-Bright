import { baseApi } from "./baseApi";

const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (data: any) => ({
                url: '/sales-order/create-sales-order',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ["Orders"]
        }),
        getOrdersDataByUserId: builder.query({
            query: (id) => ({
                url: `/sales-order/frontend/sales-order-by-user-id/${id}`
            }),
            providesTags: ["Orders"]
        }),
        getOrderedItemsBySalesOrderId: builder.query({
            query: (id) => ({
                url: `/order-items/order-items-by-sales-order-id/${id}`
            }),
            providesTags: ["Orders"]
        })
    }),
})
export const { useCreateOrderMutation, useGetOrdersDataByUserIdQuery, useGetOrderedItemsBySalesOrderIdQuery } = orderApi