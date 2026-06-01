"use client"

import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { X } from "lucide-react"

const schema = z.object({
    name: z.string().min(1, "Name is required").max(100),
})
type FormData = z.infer<typeof schema>

interface Props {
    title: string
    mode: "create" | "edit"
    defaultName?: string
    isSubmitting?: boolean
    onSubmit: (name: string) => void
    onClose: () => void
}

const NameFormModal = ({ title, mode, defaultName, isSubmitting, onSubmit, onClose }: Props) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
    })

    useEffect(() => {
        reset({ name: defaultName ?? "" })
    }, [defaultName, reset])

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm">
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                    <h2 className="text-base font-semibold text-gray-900">{title}</h2>
                    <button onClick={onClose} className="p-1.5 rounded hover:bg-gray-100 text-gray-500 transition-colors">
                        <X size={16} />
                    </button>
                </div>
                <form onSubmit={handleSubmit((d) => onSubmit(d.name))} noValidate className="px-5 py-4 space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Name *</label>
                        <input
                            {...register("name")}
                            placeholder="Enter name..."
                            className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="flex gap-3">
                        <button type="button" onClick={onClose} className="flex-1 border border-gray-200 rounded-md py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                            Cancel
                        </button>
                        <button type="submit" disabled={isSubmitting} className="flex-1 bg-gray-900 text-white rounded-md py-2 text-sm font-medium hover:bg-gray-700 transition-colors disabled:opacity-50">
                            {isSubmitting ? "Saving..." : mode === "create" ? "Create" : "Save Changes"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NameFormModal
