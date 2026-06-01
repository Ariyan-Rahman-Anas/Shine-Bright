import { baseApi } from "./baseApi";

export interface BrandOption { id: string; name: string }
export interface CategoryOption { id: string; name: string; parentId?: string | null }

export interface Brand {
  id: string
  name: string
  slug: string
  logo: string | null
  isActive: boolean
  createdAt: string
}

export interface Category {
  id: string
  name: string
  slug: string
  image: string | null
  parentId: string | null
  parent: { id: string; name: string } | null
  isActive: boolean
  createdAt: string
}

interface ListResponse<T> {
  success: boolean
  data: T[]
  meta: { total: number; page: number; limit: number; totalPages: number }
}

export const brandsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ── Brands ────────────────────────────────────────────────────────────────
    getAllBrands: builder.query<{ data: BrandOption[] }, void>({
      query: () => ({ url: "/brands", params: { limit: 100 } }),
      providesTags: ["Brands"],
    }),
    adminGetBrands: builder.query<ListResponse<Brand>, { page?: number; search?: string }>({
      query: (params) => ({ url: "/brands", params: { limit: 20, ...params } }),
      providesTags: ["Brands"],
    }),
    adminCreateBrand: builder.mutation<{ data: Brand }, { name: string; slug?: string; logo?: string; isActive?: boolean }>({
      query: (body) => ({ url: "/brands", method: "POST", body }),
      invalidatesTags: ["Brands"],
    }),
    adminUpdateBrand: builder.mutation<{ data: Brand }, { id: string; body: Partial<{ name: string; slug: string; logo: string; isActive: boolean }> }>({
      query: ({ id, body }) => ({ url: `/brands/${id}`, method: "PATCH", body }),
      invalidatesTags: ["Brands"],
    }),
    adminDeleteBrand: builder.mutation<void, string>({
      query: (id) => ({ url: `/brands/${id}`, method: "DELETE" }),
      invalidatesTags: ["Brands"],
    }),

    // ── Categories ────────────────────────────────────────────────────────────
    getAllCategories: builder.query<{ data: CategoryOption[] }, void>({
      query: () => ({ url: "/categories", params: { limit: 100 } }),
      providesTags: ["Categories"],
    }),
    adminGetCategories: builder.query<ListResponse<Category>, { page?: number; search?: string }>({
      query: (params) => ({ url: "/categories", params: { limit: 20, ...params } }),
      providesTags: ["Categories"],
    }),
    adminCreateCategory: builder.mutation<{ data: Category }, { name: string; slug?: string; image?: string; parentId?: string; isActive?: boolean }>({
      query: (body) => ({ url: "/categories", method: "POST", body }),
      invalidatesTags: ["Categories"],
    }),
    adminUpdateCategory: builder.mutation<{ data: Category }, { id: string; body: Partial<{ name: string; slug: string; image: string; parentId: string; isActive: boolean }> }>({
      query: ({ id, body }) => ({ url: `/categories/${id}`, method: "PATCH", body }),
      invalidatesTags: ["Categories"],
    }),
    adminDeleteCategory: builder.mutation<void, string>({
      query: (id) => ({ url: `/categories/${id}`, method: "DELETE" }),
      invalidatesTags: ["Categories"],
    }),
  }),
})

export const {
  useGetAllBrandsQuery,
  useAdminGetBrandsQuery,
  useAdminCreateBrandMutation,
  useAdminUpdateBrandMutation,
  useAdminDeleteBrandMutation,
  useGetAllCategoriesQuery,
  useAdminGetCategoriesQuery,
  useAdminCreateCategoryMutation,
  useAdminUpdateCategoryMutation,
  useAdminDeleteCategoryMutation,
} = brandsApi
