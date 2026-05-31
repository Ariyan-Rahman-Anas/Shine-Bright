"use client"

import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { X } from "lucide-react"
import {
    Product,
    useAdminCreateProductMutation,
    useAdminUpdateProductMutation,
} from "@/redux/api/productAdminApi"

const schema = z.object({
    title: z.string().min(1, "Title is required").max(255),
    productType: z.enum(["SINGLE", "VARIABLE"]),
    status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]),
    stock: z.coerce.number().int().min(0).optional().or(z.literal("")),
    shortDescription: z.string().max(500).optional(),
})

type FormData = z.infer<typeof schema>

interface Props {
    mode: "create" | "edit"
    product?: Product
    onClose: () => void
}

const ProductFormModal = ({ mode, product, onClose }: Props) => {
    const [createProduct] = useAdminCreateProductMutation()
    const [updateProduct] = useAdminUpdateProductMutation()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: { productType: "SINGLE", status: "DRAFT" },
    })
    productType: product.productType,
        status: product.status,
            regularPrice: product.regularPrice ?? "",
                salesPrice: product.salesPrice ?? "",
                    stock: product.stock ?? "",
                        shortDescription: product.shortDescription ?? "",
            })
        }
    }, [mode, product, reset])

const onSubmit = async (data: FormData) => {
    const payload = {
        ...data,
        regularPrice: data.regularPrice !== "" ? Number(data.regularPrice) : undefined,
        salesPrice: data.salesPrice !== "" ? Number(data.salesPrice) : undefined,
        stock: data.stock !== "" ? Number(data.stock) : undefined,
    }

    if (mode === "create") {
        const { error } = await createProduct(payload) as any
        if (error) { toast.error(error?.data?.message ?? "Failed to create product"); return }
        toast.success("Product created successfully")
    } else {
        const { error } = await updateProduct({ id: product!.id, body: payload }) as any
        if (error) { toast.error(error?.data?.message ?? "Failed to update product"); return }
        toast.success("Product updated successfully")
    }
    onClose()
}

return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            {/* Modal header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900">
                    {mode === "create" ? "Add Product" : "Edit Product"}
                </h2>
                <button onClick={onClose} className="p-1.5 rounded hover:bg-gray-100 text-gray-500 transition-colors">
                    <X size={18} />
                </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="px-6 py-5 space-y-4">
                {/* Title */}
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Title *</label>
                    <input
                        {...register("title")}
                        placeholder="Product title"
                        className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                    {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
                </div>

                {/* Type & Status row */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Type</label>
                        <select
                            {...register("productType")}
                            className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 bg-white"
                        >
                            <option value="SINGLE">Single</option>
                            <option value="VARIABLE">Variable</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Status</label>
                        <select
                            {...register("status")}
                            className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 bg-white"
                        >
                            <option value="DRAFT">Draft</option>
                            <option value="PUBLISHED">Published</option>
                            <option value="ARCHIVED">Archived</option>
                        </select>
                    </div>
                </div>

                {/* Price row */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Regular Price (৳)</label>
                        <input
                            {...register("regularPrice")}
                            type="number"
                            min={0}
                            placeholder="0"
                            className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                        />
                        {errors.regularPrice && <p className="text-red-500 text-xs mt-1">{errors.regularPrice.message}</p>}
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Sales Price (৳)</label>
                        <input
                            {...register("salesPrice")}
                            type="number"
                            min={0}
                            placeholder="0"
                            className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                        />
                        {errors.salesPrice && <p className="text-red-500 text-xs mt-1">{errors.salesPrice.message}</p>}
                    </div>
                </div>

                {/* Stock */}
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Stock</label>
                    <input
                        {...register("stock")}
                        type="number"
                        min={0}
                        placeholder="0"
                        className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                    {errors.stock && <p className="text-red-500 text-xs mt-1">{errors.stock.message}</p>}
                </div>

                {/* Short description */}
                <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">Short Description</label>
                    <textarea
                        {...register("shortDescription")}
                        placeholder="Brief product description..."
                        rows={3}
                        className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none"
                    />
                    {errors.shortDescription && <p className="text-red-500 text-xs mt-1">{errors.shortDescription.message}</p>}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 border border-gray-200 rounded-md py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-gray-900 text-white rounded-md py-2 text-sm font-medium hover:bg-gray-700 transition-colors disabled:opacity-50"
                    >
                        {isSubmitting ? "Saving..." : mode === "create" ? "Create Product" : "Save Changes"}
                    </button>
                </div>
            </form>
        </div>
    </div>
)
}

export default ProductFormModal
