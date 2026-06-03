"use client"

import { useState } from "react"
import { Product, useAdminDeleteProductMutation, useAdminUpdateProductStatusMutation } from "@/redux/api/productAdminApi"
import { Pencil, Trash2 } from "lucide-react"
import ProductFormModal from "./ProductFormModal"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import Image from "next/image"

const STATUS_COLORS: Record<string, string> = {
    PUBLISHED: "bg-green-100 text-green-700",
    DRAFT: "bg-yellow-100 text-yellow-700",
    ARCHIVED: "bg-gray-100 text-gray-600",
}

interface Props {
    products: Product[]
    isLoading: boolean
    meta?: { total: number; page: number; limit: number; totalPages: number }
    page: number
    onPageChange: (p: number) => void
}

const ProductsTable = ({ products, isLoading, meta, page, onPageChange }: Props) => {
    const [editProduct, setEditProduct] = useState<Product | null>(null)
    const [deleteProduct] = useAdminDeleteProductMutation()
    const [updateStatus] = useAdminUpdateProductStatusMutation()

    const handleDelete = async (id: string, title: string) => {
        if (!confirm(`Delete "${title}"? This cannot be undone.`)) return
        const { error } = await deleteProduct(id) as any
        if (error) toast.error("Failed to delete product")
        else toast.success("Product deleted")
    }

    const handleStatusChange = async (id: string, status: string) => {
        const { error } = await updateStatus({ id, status }) as any
        if (error) toast.error("Failed to update status")
        else toast.success("Status updated")
    }

    if (isLoading) {
        return (
            <div className="bg-white rounded-lg border border-gray-200 p-8 text-center text-gray-500 text-sm">
                Loading products...
            </div>
        )
    }

    if (!products.length) {
        return (
            <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                <p className="text-gray-500 text-sm">No products found.</p>
            </div>
        )
    }

    return (
        <>
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-gray-100 bg-gray-50">
                                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Product</th>
                                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Code</th>
                                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Price</th>
                                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Stock</th>
                                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
                                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Category</th>
                                <th className="px-4 py-3" />
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {products.map((product) => (
                                <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-3">
                                            {product.images?.[0]?.photoURL ? (
                                                <Image
                                                    src={product.images[0].photoURL}
                                                    alt={product.title}
                                                    className="w-9 h-9 rounded-md object-cover border border-gray-100"
                                                    width={500}
                                                    height={500}
                                                />
                                            ) : (
                                                <div className="w-9 h-9 rounded-md bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
                                                    N/A
                                                </div>
                                            )}
                                            <div>
                                                <p className="font-medium text-gray-900 line-clamp-1 max-w-[200px]">{product.title}</p>
                                                <p className="text-xs text-gray-400">{product.productType}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-gray-500 font-mono text-xs">{product.productCode || "—"}</td>
                                    <td className="px-4 py-3 text-gray-700">
                                        {product.regularPrice ? `৳${product.regularPrice}` : "—"}
                                        {product.salesPrice && (
                                            <span className="text-xs text-green-600 ml-1">/ ৳{product.salesPrice}</span>
                                        )}
                                    </td>
                                    <td className="px-4 py-3 text-gray-700">{product.stock ?? "—"}</td>
                                    <td className="px-4 py-3">
                                        <select
                                            value={product.status}
                                            onChange={(e) => handleStatusChange(product.id, e.target.value)}
                                            className={cn(
                                                "text-xs font-medium px-2 py-1 rounded-full border-0 cursor-pointer focus:outline-none",
                                                STATUS_COLORS[product.status]
                                            )}
                                        >
                                            <option value="DRAFT">Draft</option>
                                            <option value="PUBLISHED">Published</option>
                                            <option value="ARCHIVED">Archived</option>
                                        </select>
                                    </td>
                                    <td className="px-4 py-3 text-gray-500">{product.category?.name || "—"}</td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => setEditProduct(product)}
                                                className="p-1.5 rounded hover:bg-gray-100 text-gray-500 hover:text-gray-800 transition-colors"
                                                title="Edit"
                                            >
                                                <Pencil size={15} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(product.id, product.title)}
                                                className="p-1.5 rounded hover:bg-red-50 text-gray-400 hover:text-red-600 transition-colors"
                                                title="Delete"
                                            >
                                                <Trash2 size={15} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {meta && meta.totalPages > 1 && (
                    <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100 text-sm text-gray-600">
                        <span>
                            Page {meta.page} of {meta.totalPages} ({meta.total} items)
                        </span>
                        <div className="flex gap-2">
                            <button
                                disabled={page <= 1}
                                onClick={() => onPageChange(page - 1)}
                                className="px-3 py-1 rounded border border-gray-200 disabled:opacity-40 hover:bg-gray-50 transition-colors"
                            >
                                Prev
                            </button>
                            <button
                                disabled={page >= meta.totalPages}
                                onClick={() => onPageChange(page + 1)}
                                className="px-3 py-1 rounded border border-gray-200 disabled:opacity-40 hover:bg-gray-50 transition-colors"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Edit modal */}
            {editProduct && (
                <ProductFormModal
                    mode="edit"
                    product={editProduct}
                    onClose={() => setEditProduct(null)}
                />
            )}
        </>
    )
}

export default ProductsTable
