"use client"

import { useState } from "react"
import { useAdminGetProductsQuery } from "@/redux/api/productAdminApi"
import ProductsTable from "./ProductsTable"
import ProductFormModal from "./ProductFormModal"
import { Plus, Search } from "lucide-react"

const AdminProductsPage = () => {
    const [search, setSearch] = useState("")
    const [status, setStatus] = useState("")
    const [page, setPage] = useState(1)
    const [showModal, setShowModal] = useState(false)

    const { data, isLoading, isFetching } = useAdminGetProductsQuery({
        page,
        limit: 10,
        search: search || undefined,
        status: status || undefined,
    })

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Products</h1>
                    <p className="text-sm text-gray-500 mt-0.5">
                        {data?.meta?.total ?? 0} total products
                    </p>
                </div>
                <button
                    onClick={() => setShowModal(true)}
                    className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors"
                >
                    <Plus size={16} />
                    Add Product
                </button>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-3 flex-wrap">
                <div className="relative flex-1 min-w-[200px]">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => { setSearch(e.target.value); setPage(1) }}
                        className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                </div>
                <select
                    value={status}
                    onChange={(e) => { setStatus(e.target.value); setPage(1) }}
                    className="border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 bg-white"
                >
                    <option value="">All Status</option>
                    <option value="DRAFT">Draft</option>
                    <option value="PUBLISHED">Published</option>
                    <option value="ARCHIVED">Archived</option>
                </select>
            </div>

            {/* Table */}
            <ProductsTable
                products={data?.data ?? []}
                isLoading={isLoading || isFetching}
                meta={data?.meta}
                page={page}
                onPageChange={setPage}
            />

            {/* Create modal */}
            {showModal && (
                <ProductFormModal
                    mode="create"
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    )
}

export default AdminProductsPage
