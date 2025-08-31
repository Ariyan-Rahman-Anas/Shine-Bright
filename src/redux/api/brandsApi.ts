import { baseApi } from "./baseApi";

export const brandsApi = baseApi.injectEndpoints({
    endpoints: (builder)=>({
        getAllBrands:builder.query({
            query:()=>({url:"/brand-master/admin/all-brand-masters"}),
            providesTags: ["Brands"]
        })
    })  
})

export const {useGetAllBrandsQuery} = brandsApi