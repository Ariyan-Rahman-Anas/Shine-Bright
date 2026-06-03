"use client"

import { useRef, useState } from "react"
import { ImagePlus, Star, Bookmark, Trash2, Loader2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useUploadProductImageMutation } from "@/redux/api/productAdminApi"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

export interface UploadedImage {
    photoURL: string
    publicId: string
    isPrimary: boolean
    isThumbnail: boolean
    sortOrder: number
}

interface Props {
    images: UploadedImage[]
    onChange: (images: UploadedImage[]) => void
    onNewPublicId: (publicId: string) => void
}

export default function ProductImageUpload({ images, onChange, onNewPublicId }: Props) {
    const inputRef = useRef<HTMLInputElement>(null)
    const [uploading, setUploading] = useState(false)
    const [uploadImage] = useUploadProductImageMutation()

    const handleFiles = async (files: FileList | null) => {
        if (!files || files.length === 0) return
        setUploading(true)
        const incoming = Array.from(files)
        for (const file of incoming) {
            if (!file.type.startsWith("image/")) { toast.error(`${file.name} is not an image`); continue }
            if (file.size > 5 * 1024 * 1024) { toast.error(`${file.name} exceeds 5 MB`); continue }

            const formData = new FormData()
            formData.append("image", file)
            const result = await uploadImage(formData)
            if ("error" in result) { toast.error("Upload failed for " + file.name); continue }

            const { url, publicId } = result.data.data
            onNewPublicId(publicId)
            onChange([
                ...images,
                {
                    photoURL: url,
                    publicId,
                    isPrimary: images.length === 0, // first image = primary by default
                    isThumbnail: images.length === 0,
                    sortOrder: images.length,
                },
            ])
        }
        setUploading(false)
    }

    const setAsPrimary = (idx: number) => {
        onChange(images.map((img, i) => ({ ...img, isPrimary: i === idx })))
    }

    const setAsThumbnail = (idx: number) => {
        onChange(images.map((img, i) => ({ ...img, isThumbnail: i === idx })))
    }

    const remove = (idx: number) => {
        onChange(images.filter((_, i) => i !== idx).map((img, i) => ({ ...img, sortOrder: i })))
    }

    const onDrop = (e: React.DragEvent) => {
        e.preventDefault()
        handleFiles(e.dataTransfer.files)
    }

    return (
        <div className="space-y-4">
            {/* Drop zone */}
            <div
                onClick={() => inputRef.current?.click()}
                onDrop={onDrop}
                onDragOver={(e) => e.preventDefault()}
                className="border-2 border-dashed border-border rounded-xl p-8 text-center cursor-pointer hover:border-primary/50 hover:bg-muted/30 transition-colors"
            >
                <input
                    ref={inputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={(e) => handleFiles(e.target.files)}
                />
                {uploading ? (
                    <div className="flex flex-col items-center gap-2 text-muted-foreground">
                        <Loader2 className="h-8 w-8 animate-spin" />
                        <p className="text-sm">Uploading...</p>
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-2 text-muted-foreground">
                        <ImagePlus className="h-8 w-8" />
                        <p className="text-sm font-medium">Drop images here or click to upload</p>
                        <p className="text-xs">PNG, JPG, WEBP up to 5 MB each</p>
                    </div>
                )}
            </div>

            {/* Preview grid */}
            {images.length > 0 && (
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                    {images.map((img, idx) => (
                        <div key={img.publicId} className="relative group rounded-lg overflow-hidden border border-border aspect-square bg-muted">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={img.photoURL} alt={`Product image ${idx + 1}`} className="w-full h-full object-cover" />

                            {/* Badges */}
                            <div className="absolute top-1 left-1 flex flex-col gap-1">
                                {img.isPrimary && (
                                    <Badge className="text-[9px] px-1 py-0 gap-0.5 bg-amber-500 border-0">
                                        <Star className="h-2.5 w-2.5" /> Primary
                                    </Badge>
                                )}
                                {img.isThumbnail && !img.isPrimary && (
                                    <Badge className="text-[9px] px-1 py-0 gap-0.5 bg-blue-500 border-0">
                                        <Bookmark className="h-2.5 w-2.5" /> Thumb
                                    </Badge>
                                )}
                            </div>

                            {/* Hover overlay */}
                            <div className={cn(
                                "absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-1.5 opacity-0 transition-opacity",
                                "group-hover:opacity-100"
                            )}>
                                {!img.isPrimary && (
                                    <button
                                        type="button"
                                        onClick={() => setAsPrimary(idx)}
                                        className="flex items-center gap-1 text-[10px] bg-amber-500 hover:bg-amber-600 text-white px-2 py-1 rounded-md font-medium transition-colors"
                                    >
                                        <Star className="h-3 w-3" /> Set Primary
                                    </button>
                                )}
                                {!img.isThumbnail && (
                                    <button
                                        type="button"
                                        onClick={() => setAsThumbnail(idx)}
                                        className="flex items-center gap-1 text-[10px] bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md font-medium transition-colors"
                                    >
                                        <Bookmark className="h-3 w-3" /> Set Thumb
                                    </button>
                                )}
                                <button
                                    type="button"
                                    onClick={() => remove(idx)}
                                    className="flex items-center gap-1 text-[10px] bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md font-medium transition-colors"
                                >
                                    <Trash2 className="h-3 w-3" /> Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {images.length > 0 && (
                <p className="text-xs text-muted-foreground">
                    {images.length} image{images.length > 1 ? "s" : ""} &middot; Hover over an image to set it as primary or thumbnail
                </p>
            )}
        </div>
    )
}
