import { baseApi } from "./baseApi"

export interface Product {
  id: string
  title: string
  slug: string
  productCode: string
  productType: "SINGLE" | "VARIABLE"
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED"
  regularPrice: number | null
  salesPrice: number | null
  stock: number | null
  shortDescription: string | null
  brand: { id: string; name: string } | null
  category: { id: string; name: string } | null
  images: { photoURL: string; isPrimary: boolean }[]
  createdAt: string
  updatedAt: string
}

export interface ProductsResponse {
  success: boolean
  data: Product[]
  meta: {
    total: number
    page: number
    limit: number
    totalPages: number
  }
}

export interface ProductsQuery {
  page?: number
  limit?: number
  search?: string
  status?: string
  brandId?: string
  categoryId?: string
}

const productAdminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    adminGetProducts: builder.query<ProductsResponse, ProductsQuery>({
      query: (params) => ({
        url: "/products",
        params,
      }),
      providesTags: ["Products"],
    }),

    adminGetProductById: builder.query<{ data: Product }, string>({
      query: (id) => ({ url: `/products/${id}` }),
      providesTags: (_r, _e, id) => [{ type: "Products", id }],
    }),

    adminCreateProduct: builder.mutation<{ data: Product }, Partial<Product>>({
      query: (body) => ({
        url: "/products",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Products"],
    }),

    adminUpdateProduct: builder.mutation<{ data: Product }, { id: string; body: Partial<Product> }>({
      query: ({ id, body }) => ({
        url: `/products/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Products"],
    }),

    adminUpdateProductStatus: builder.mutation<{ data: Product }, { id: string; status: string }>({
      query: ({ id, status }) => ({
        url: `/products/${id}/status`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["Products"],
    }),

    adminDeleteProduct: builder.mutation<void, string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
  }),
})

export const {
  useAdminGetProductsQuery,
  useAdminGetProductByIdQuery,
  useAdminCreateProductMutation,
  useAdminUpdateProductMutation,
  useAdminUpdateProductStatusMutation,
  useAdminDeleteProductMutation,
} = productAdminApi
