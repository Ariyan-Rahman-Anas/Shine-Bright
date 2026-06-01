"use client"

import { useState } from "react"
import { toast } from "sonner"
import { Pencil, Trash2, Plus } from "lucide-react"
import {
    useAdminGetBrandsQuery,
    useAdminCreateBrandMutation,
    useAdminUpdateBrandMutation,
    useAdminDeleteBrandMutation,
    Brand,
} from "@/redux/api/brandsApi"
import NameFormModal from "../shared/NameFormModal"

const AdminBrandsPage = () => {
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)
    const [modal, setModal] = useState<{ mode: "create" | "edit"; brand?: Brand } | null>(null)

    const { data, isFetching } = useAdminGetBrandsQuery({ page, search: search || undefined })
    const [createBrand, { isLoading: creating }] = useAdminCreateBrandMutation()
    const [updateBrand, { isLoading: updating }] = useAdminUpdateBrandMutation()
    const [deleteBrand] = useAdminDeleteBrandMutation()

    const brands = data?.data ?? []
    const meta = data?.meta

    const handleSubmit = async (name: string) => {
        if (modal?.mode === "create") {
            const { error } = (await createBrand({ name })) as any
            if (error) { toast.error(error?.data?.message ?? "Failed"); return }
            toast.success("Brand created")
        } else {
            const { error } = (await updateBrand({ id: modal!.brand!.id, body: { name } })) as any
            if (error) { toast.error(error?.data?.message ?? "Failed"); return }
            toast.success("Brand updated")
        }
        setModal(null)
    }

    const handleDelete = async (id: string, name: string) => {
        if (!confirm(`Delete brand "${name}"?`)) return
        const { error } = (await deleteBrand(id)) as any
        if (error) { toast.error(error?.data?.message ?? "Failed to delete"); return }
        toast.success("Brand deleted")
    }

    return (
        <div className="space-y-5">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Brands</h1>
                    <p className="text-sm text-gray-500 mt-0.5">Manage product brands</p>
                </div>
                <button
                    onClick={() => setModal({ mode: "create" })}
                    className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
                >
                    <Plus size={16} /> Add Brand
                </button>
            </div>

            {/* Search */}
            <input
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1) }}
                placeholder="Search brands..."
                className="w-full max-w-xs border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />

            {/* Table */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="text-left px-4 py-3 font-medium text-gray-600">Name</th>
                            <th className="text-left px-4 py-3 font-medium text-gray-600">Slug</th>
                            <th className="text-left px-4 py-3 font-medium text-gray-600">Status</th>
                            <th className="text-left px-4 py-3 font-medium text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {isFetching ? (
                            <tr><td colSpan={4} className="text-center py-10 text-gray-400">Loading...</td></tr>
                        ) : brands.length === 0 ? (
                            <tr><td colSpan={4} className="text-center py-10 text-gray-400">No brands found</td></tr>
                        ) : brands.map((b) => (
                            <tr key={b.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-4 py-3 font-medium text-gray-900">{b.name}</td>
                                <td className="px-4 py-3 text-gray-500">{b.slug}</td>
                                <td className="px-4 py-3">
                                    <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${b.isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                                        {b.isActive ? "Active" : "Inactive"}
                                    </span>
                                </td>
                                <td className="px-4 py-3">
                                    <div className="flex gap-2">
                                        <button onClick={() => setModal({ mode: "edit", brand: b })} className="p-1.5 rounded hover:bg-gray-100 text-gray-500 transition-colors">
                                            <Pencil size={14} />
                                        </button>
                                        <button onClick={() => handleDelete(b.id, b.name)} className="p-1.5 rounded hover:bg-red-50 text-red-500 transition-colors">
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                {meta && meta.totalPages > 1 && (
                    <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100 text-sm text-gray-600">
                        <span>Page {meta.page} of {meta.totalPages}</span>
                        <div className="flex gap-2">
                            <button onClick={() => setPage((p) => p - 1)} disabled={page <= 1} className="px-3 py-1 rounded border border-gray-200 hover:bg-gray-50 disabled:opacity-40">Prev</button>
                            <button onClick={() => setPage((p) => p + 1)} disabled={page >= meta.totalPages} className="px-3 py-1 rounded border border-gray-200 hover:bg-gray-50 disabled:opacity-40">Next</button>
                        </div>
                    </div>
                )}
            </div>

            {modal && (
                <NameFormModal
                    title={modal.mode === "create" ? "Add Brand" : "Edit Brand"}
                    mode={modal.mode}
                    defaultName={modal.brand?.name}
                    isSubmitting={creating || updating}
                    onSubmit={handleSubmit}
                    onClose={() => setModal(null)}
                />
            )}
        </div>
    )
}

export default AdminBrandsPage
