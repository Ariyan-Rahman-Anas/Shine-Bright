import { baseApi } from "./baseApi";

export const productsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: (params = {}) => {
                const {
                    price_type,
                    searchTerm,
                    status,
                    product_type,
                    stock_type
                } = params;
                // Build query string only for provided parameters
                const queryParams = new URLSearchParams();
                
                if (price_type) queryParams.append('price_type', price_type);
                if (searchTerm) queryParams.append('searchTerm', searchTerm);
                if (status) queryParams.append('status', status);
                if (product_type) queryParams.append('product_type', product_type);
                if (stock_type) queryParams.append('stock_type', stock_type);
        
                const queryString = queryParams.toString();
                const url = queryString 
                    ? `/frontend/product-master/get-all-product-master?${queryString}`
                    : `/frontend/product-master/get-all-product-master`;
        
                return { url };
            },
            providesTags: ["Products"]
        }),
        getProductById: builder.query({
            query: (id) => ({ url: `/frontend/product-master/get-product-by-id/${id}` }),
            providesTags: ["Products"]
        }),
        getPhotosByProductIdAndAttributeId: builder.query({
            query: ({ id, sizeAttributeId, colorAttributeId }) => {
                const queryParams = new URLSearchParams();

                if (sizeAttributeId != null) {
                    queryParams.append("sizeAttributeId", sizeAttributeId);
                }
                
                if (colorAttributeId != null) {
                    queryParams.append("colorAttributeId", colorAttributeId);
                }

                return {
                    url: `/product-photo/admin/product/${id}/photos?${queryParams.toString()}`,
                    method: "GET",
                };
            },
            providesTags: ["Products"],
        })
    })
})

export const {
    useGetAllProductsQuery,
    useGetProductByIdQuery,
    useGetPhotosByProductIdAndAttributeIdQuery
} = productsApi