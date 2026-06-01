"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { Trash2, Palette, Ruler, AlertCircle } from "lucide-react"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

import ProductImageUpload, { type UploadedImage } from "./ProductImageUpload"
import {
    Product,
    useAdminCreateProductMutation,
    useAdminUpdateProductMutation,
    useRollbackProductImagesMutation,
} from "@/redux/api/productAdminApi"
import { useGetAllBrandsQuery, useGetAllCategoriesQuery } from "@/redux/api/brandsApi"

// ── Constants ────────────────────────────────────────────────
const MAX_PRICE = 99999999.99

// ── Schemas ──────────────────────────────────────────────────
const attributeSchema = z.object({
    attributeType: z.enum(["COLOR", "SIZE"]),
    title: z.string().min(1, "Name is required").max(100),
    description: z.string().max(50).optional(),
    regularPrice: z.coerce.number().positive().max(MAX_PRICE).optional().or(z.literal("")),
    salesPrice: z.coerce.number().positive().max(MAX_PRICE).optional().or(z.literal("")),
    stock: z.coerce.number().int().min(0).optional().or(z.literal("")),
})

const imageSchema = z.object({
    photoURL: z.string().url(),
    publicId: z.string(),
    isPrimary: z.boolean(),
    isThumbnail: z.boolean(),
    sortOrder: z.number().int(),
})

const schema = z.object({
    title: z.string().min(1, "Title is required").max(255),
    productCode: z.string().max(50).optional(),
    barcode: z.string().max(50).optional(),
    productType: z.enum(["SINGLE", "VARIABLE"]),
    priceType: z.enum(["COMMON", "ATTRIBUTE_BASED"]),
    stockType: z.enum(["COMMON", "ATTRIBUTE_BASED"]),
    status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]),
    brandId: z.string().min(1, "Brand is required"),
    categoryId: z.string().min(1, "Category is required"),
    regularPrice: z.coerce.number().positive().max(MAX_PRICE, "Max 99,999,999.99").optional().or(z.literal("")),
    salesPrice: z.coerce.number().positive().max(MAX_PRICE, "Max 99,999,999.99").optional().or(z.literal("")),
    stock: z.coerce.number().int().min(0).optional().or(z.literal("")),
    shortDescription: z.string().max(500).optional(),
    longDescription: z.string().optional(),
    ingredients: z.string().optional(),
    other: z.string().optional(),
    images: z.array(imageSchema),
    attributes: z.array(attributeSchema),
})

type FormData = z.infer<typeof schema>
type TabKey = "basic" | "images" | "pricing" | "attributes" | "details"

// ── Helpers ──────────────────────────────────────────────────
const toNum = (v: unknown) =>
    v !== "" && v !== undefined && v !== null ? Number(v) : undefined

const getServerError = (error: unknown): string => {
    const e = error as { data?: { errors?: { message: string }[]; message?: string } }
    if (e?.data?.errors?.length) return e.data.errors.map((x) => x.message).join(", ")
    return e?.data?.message ?? "Something went wrong"
}

// ── Field style helpers ───────────────────────────────────────
const fCls = "text-sm font-medium text-foreground mb-1.5 block"
const eCls = "text-destructive text-xs mt-1 flex items-center gap-1"
const sCls =
    "w-full border border-input rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-1 focus:ring-ring"

// ── Variant card ─────────────────────────────────────────────
interface VariantCardProps {
    field: FormData["attributes"][number] & { id: string }
    idx: number
    priceType: "COMMON" | "ATTRIBUTE_BASED"
    stockType: "COMMON" | "ATTRIBUTE_BASED"
    register: ReturnType<typeof useForm<FormData>>["register"]
    errors: ReturnType<typeof useForm<FormData>>["formState"]["errors"]
    watch: ReturnType<typeof useForm<FormData>>["watch"]
    setValue: ReturnType<typeof useForm<FormData>>["setValue"]
    onRemove: () => void
}

function VariantCard({
    field,
    idx,
    priceType,
    stockType,
    register,
    errors,
    watch,
    setValue,
    onRemove,
}: VariantCardProps) {
    const isColor = field.attributeType === "COLOR"
    const hexVal =
        (watch(`attributes.${idx}.description` as const) as string) || "#000000"
    const showPricing = priceType === "ATTRIBUTE_BASED"
    const showStock = stockType === "ATTRIBUTE_BASED"

    return (
        <div
            className={cn(
                "rounded-xl border p-4 space-y-3",
                isColor
                    ? "border-pink-200 bg-pink-50/50"
                    : "border-blue-200 bg-blue-50/50"
            )}
        >
            <div className="flex items-center justify-between">
                <Badge
                    className={cn(
                        "text-xs font-semibold uppercase tracking-wide border-0",
                        isColor
                            ? "bg-pink-100 text-pink-700"
                            : "bg-blue-100 text-blue-700"
                    )}
                >
                    {isColor ? (
                        <Palette className="h-3 w-3 mr-1" />
                    ) : (
                        <Ruler className="h-3 w-3 mr-1" />
                    )}
                    {isColor ? "Color" : "Size"} #{idx + 1}
                </Badge>
                <button
                    type="button"
                    onClick={onRemove}
                    className="p-1.5 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                >
                    <Trash2 className="h-4 w-4" />
                </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label className={fCls}>
                        {isColor ? "Color Name *" : "Size Label *"}
                    </label>
                    <Input
                        {...register(`attributes.${idx}.title` as const)}
                        placeholder={isColor ? "e.g. Rose Pink" : "e.g. M / L / XL"}
                    />
                    {errors.attributes?.[idx]?.title && (
                        <p className={eCls}>
                            <AlertCircle className="h-3 w-3" />
                            {errors.attributes[idx]?.title?.message}
                        </p>
                    )}
                </div>
                <div>
                    <label className={fCls}>
                        {isColor ? "Hex Code" : "Code / Label"}
                    </label>
                    <div className="flex gap-2 items-center">
                        {isColor && (
                            <input
                                type="color"
                                value={hexVal}
                                onChange={(e) =>
                                    setValue(
                                        `attributes.${idx}.description` as any,
                                        e.target.value
                                    )
                                }
                                className="h-9 w-10 rounded-md border border-input cursor-pointer shrink-0 p-0.5 bg-white"
                            />
                        )}
                        <Input
                            {...register(`attributes.${idx}.description` as const)}
                            placeholder={isColor ? "#ff0000" : "EU-42"}
                        />
                    </div>
                </div>
            </div>

            {(showPricing || showStock) && (
                <>
                    <Separator className="bg-border/60" />
                    <div
                        className={cn(
                            "grid gap-3",
                            showPricing && showStock
                                ? "grid-cols-3"
                                : showPricing
                                    ? "grid-cols-2"
                                    : "grid-cols-1"
                        )}
                    >
                        {showPricing && (
                            <>
                                <div>
                                    <label className={fCls}>Regular Price</label>
                                    <Input
                                        {...register(
                                            `attributes.${idx}.regularPrice` as const
                                        )}
                                        type="number"
                                        min={0}
                                        step="0.01"
                                        placeholder="0.00"
                                    />
                                </div>
                                <div>
                                    <label className={fCls}>Sales Price</label>
                                    <Input
                                        {...register(
                                            `attributes.${idx}.salesPrice` as const
                                        )}
                                        type="number"
                                        min={0}
                                        step="0.01"
                                        placeholder="0.00"
                                    />
                                </div>
                            </>
                        )}
                        {showStock && (
                            <div>
                                <label className={fCls}>Stock</label>
                                <Input
                                    {...register(`attributes.${idx}.stock` as const)}
                                    type="number"
                                    min={0}
                                    placeholder="0"
                                />
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    )
}

// ── Main ProductFormModal ─────────────────────────────────────
interface Props {
    mode: "create" | "edit"
    product?: Product
    onClose: () => void
}

export default function ProductFormModal({ mode, product, onClose }: Props) {
    const [activeTab, setActiveTab] = useState<TabKey>("basic")
    const newPublicIds = useRef<string[]>([])

    const [createProduct] = useAdminCreateProductMutation()
    const [updateProduct] = useAdminUpdateProductMutation()
    const [rollbackImages] = useRollbackProductImagesMutation()
    const { data: brandsData } = useGetAllBrandsQuery()
    const { data: categoriesData } = useGetAllCategoriesQuery()

    const {
        register,
        handleSubmit,
        reset,
        control,
        watch,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            productType: "SINGLE",
            priceType: "COMMON",
            stockType: "COMMON",
            status: "DRAFT",
            images: [],
            attributes: [],
        },
    })

    const {
        fields: attrFields,
        append: appendAttr,
        remove: removeAttr,
    } = useFieldArray({ control, name: "attributes" })

    const {
        fields: imgFields,
        replace: replaceImages,
    } = useFieldArray({ control, name: "images" })

    const productType = watch("productType")
    const priceType = watch("priceType")
    const stockType = watch("stockType")
    const isVariable = productType === "VARIABLE"

    // Reset tab when switching away from VARIABLE
    useEffect(() => {
        if (!isVariable && activeTab === "attributes") setActiveTab("basic")
    }, [isVariable, activeTab])

    // Populate form for edit mode
    useEffect(() => {
        if (mode === "edit" && product) {
            reset({
                title: product.title,
                productCode: product.productCode ?? "",
                barcode: product.barcode ?? "",
                productType: product.productType,
                priceType: product.priceType,
                stockType: product.stockType,
                status: product.status,
                brandId: product.brandId ?? "",
                categoryId: product.categoryId ?? "",
                regularPrice: product.regularPrice ?? "",
                salesPrice: product.salesPrice ?? "",
                stock: product.stock ?? "",
                shortDescription: product.shortDescription ?? "",
                longDescription: product.longDescription ?? "",
                ingredients: product.ingredients ?? "",
                other: product.other ?? "",
                images: (product.images ?? []).map((img, i) => ({
                    photoURL: img.photoURL,
                    publicId: img.publicId ?? "",
                    isPrimary: img.isPrimary,
                    isThumbnail: img.isThumbnail,
                    sortOrder: img.sortOrder ?? i,
                })),
                attributes: (product.attributes ?? []).map((a) => ({
                    attributeType: a.attributeType,
                    title: a.title,
                    description: a.description ?? "",
                    regularPrice: a.regularPrice ?? "",
                    salesPrice: a.salesPrice ?? "",
                    stock: a.stock ?? "",
                })),
            })
        }
    }, [mode, product, reset])

    const addVariant = (type: "COLOR" | "SIZE") => {
        appendAttr({
            attributeType: type,
            title: "",
            description: type === "COLOR" ? "#000000" : "",
            regularPrice: "",
            salesPrice: "",
            stock: "",
        })
        setActiveTab("attributes")
    }

    // Rollback helper
    const rollback = useCallback(async () => {
        if (newPublicIds.current.length > 0) {
            await rollbackImages({ publicIds: newPublicIds.current }).catch(() => { })
            newPublicIds.current = []
        }
    }, [rollbackImages])

    const handleClose = useCallback(async () => {
        await rollback()
        onClose()
    }, [rollback, onClose])

    const onSubmit = async (data: FormData) => {
        const payload = {
            ...data,
            regularPrice: toNum(data.regularPrice),
            salesPrice: toNum(data.salesPrice),
            stock: toNum(data.stock),
            attributes: data.attributes.map((a) => ({
                ...a,
                regularPrice: toNum(a.regularPrice),
                salesPrice: toNum(a.salesPrice),
                stock: toNum(a.stock),
                description: a.description || undefined,
            })),
            images: data.images.map((img, i) => ({ ...img, sortOrder: i })),
        }

        if (mode === "create") {
            const { error } = (await createProduct(payload as any)) as any
            if (error) {
                toast.error(getServerError(error))
                await rollback()
                return
            }
        } else {
            const { error } = (await updateProduct({
                id: product!.id,
                body: payload as any,
            })) as any
            if (error) {
                toast.error(getServerError(error))
                await rollback()
                return
            }
        }

        newPublicIds.current = []
        toast.success(mode === "create" ? "Product created" : "Product updated")
        onClose()
    }

    // Navigate to first tab that has errors when validation fails
    const onInvalid = (errs: typeof errors) => {
        const hasBasic = !!(errs.title || errs.brandId || errs.categoryId || errs.productCode || errs.barcode)
        const hasPricing = !!(errs.regularPrice || errs.salesPrice || errs.stock)
        const hasAttrs = !!(errs.attributes)
        const hasDetails = !!(errs.shortDescription || errs.longDescription)

        if (hasBasic) setActiveTab("basic")
        else if (hasPricing) setActiveTab("pricing")
        else if (hasAttrs && isVariable) setActiveTab("attributes")
        else if (hasDetails) setActiveTab("details")
    }

    // Compute per-tab error state for red dot indicators
    const tabHasError: Record<TabKey, boolean> = {
        basic: !!(errors.title || errors.brandId || errors.categoryId),
        images: false,
        pricing: !!(errors.regularPrice || errors.salesPrice || errors.stock),
        attributes: !!(errors.attributes),
        details: !!(errors.shortDescription),
    }

    const tabDefs: { key: TabKey; label: string; variableOnly?: boolean }[] = [
        { key: "basic", label: "Basic" },
        { key: "images", label: "Images" },
        { key: "pricing", label: "Pricing" },
        { key: "attributes", label: "Variants", variableOnly: true },
        { key: "details", label: "Details" },
    ]
    const visibleTabs = tabDefs.filter((t) => !t.variableOnly || isVariable)

    const images = imgFields as unknown as UploadedImage[]

    return (
        <Dialog open onOpenChange={(open) => { if (!open) handleClose() }}>
            <DialogContent className="max-w-2xl max-h-[92vh] flex flex-col gap-0 p-0 overflow-hidden">

                <DialogHeader className="px-6 py-4 border-b shrink-0 text-left">
                    <DialogTitle className="text-base">
                        {mode === "create" ? "Add Product" : "Edit Product"}
                    </DialogTitle>
                    {isVariable && (
                        <p className="text-xs text-violet-600 font-medium mt-0.5">
                            Variable Product
                        </p>
                    )}
                </DialogHeader>

                <Tabs
                    value={activeTab}
                    onValueChange={(v) => setActiveTab(v as TabKey)}
                    className="flex flex-col flex-1 overflow-hidden"
                >
                    {/* Tab bar */}
                    <div className="border-b shrink-0 px-2">
                        <TabsList className="h-auto bg-transparent rounded-none p-0 gap-0">
                            {visibleTabs.map((t) => (
                                <TabsTrigger
                                    key={t.key}
                                    value={t.key}
                                    className={cn(
                                        "relative rounded-none border-b-2 border-transparent px-4 py-3 text-sm font-medium",
                                        "text-muted-foreground hover:text-foreground transition-colors gap-1.5",
                                        "data-[state=active]:border-foreground data-[state=active]:text-foreground",
                                        "data-[state=active]:shadow-none data-[state=active]:bg-transparent"
                                    )}
                                >
                                    {t.label}
                                    {tabHasError[t.key] && (
                                        <span className="h-1.5 w-1.5 rounded-full bg-destructive shrink-0" />
                                    )}
                                    {t.key === "attributes" && !tabHasError[t.key] && attrFields.length > 0 && (
                                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-foreground text-background text-[10px] font-bold">
                                            {attrFields.length}
                                        </span>
                                    )}
                                    {t.key === "images" && !tabHasError[t.key] && images.length > 0 && (
                                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-foreground text-background text-[10px] font-bold">
                                            {images.length}
                                        </span>
                                    )}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit, onInvalid)}
                        noValidate
                        className="flex flex-col flex-1 overflow-hidden"
                    >
                        <div className="flex-1 overflow-y-auto px-6 py-5">

                            {/* ─── BASIC ───────────────────────────────────── */}
                            <TabsContent value="basic" className="mt-0 space-y-4">
                                <div>
                                    <Label className={fCls}>Title *</Label>
                                    <Input {...register("title")} placeholder="Product title" />
                                    {errors.title && (
                                        <p className={eCls}>
                                            <AlertCircle className="h-3 w-3" />
                                            {errors.title.message}
                                        </p>
                                    )}
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label className={fCls}>Product Code</Label>
                                        <Input {...register("productCode")} placeholder="SKU-001" />
                                    </div>
                                    <div>
                                        <Label className={fCls}>Barcode</Label>
                                        <Input {...register("barcode")} placeholder="Barcode" />
                                    </div>
                                </div>

                                {/* Product type */}
                                <div>
                                    <Label className={fCls}>Product Type</Label>
                                    <div className="grid grid-cols-2 gap-3 mt-1">
                                        {(["SINGLE", "VARIABLE"] as const).map((type) => (
                                            <label
                                                key={type}
                                                className={cn(
                                                    "flex items-start gap-3 border rounded-xl p-3.5 cursor-pointer transition-all select-none",
                                                    productType === type
                                                        ? "border-foreground bg-foreground text-background"
                                                        : "border-border hover:border-foreground/40"
                                                )}
                                            >
                                                <input
                                                    type="radio"
                                                    {...register("productType")}
                                                    value={type}
                                                    className="mt-0.5 shrink-0"
                                                />
                                                <div>
                                                    <p className="text-sm font-semibold">
                                                        {type === "SINGLE" ? "Single" : "Variable"}
                                                    </p>
                                                    <p
                                                        className={cn(
                                                            "text-xs mt-0.5",
                                                            productType === type
                                                                ? "text-background/70"
                                                                : "text-muted-foreground"
                                                        )}
                                                    >
                                                        {type === "SINGLE"
                                                            ? "One variant, fixed price"
                                                            : "Multiple colors or sizes"}
                                                    </p>
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Variable strategy */}
                                {isVariable && (
                                    <div className="grid grid-cols-2 gap-4 p-4 bg-violet-50 border border-violet-200 rounded-xl">
                                        <div>
                                            <Label className={fCls}>Price Strategy</Label>
                                            <select {...register("priceType")} className={sCls}>
                                                <option value="COMMON">Common (product-level)</option>
                                                <option value="ATTRIBUTE_BASED">Per Variant</option>
                                            </select>
                                        </div>
                                        <div>
                                            <Label className={fCls}>Stock Strategy</Label>
                                            <select {...register("stockType")} className={sCls}>
                                                <option value="COMMON">Common (product-level)</option>
                                                <option value="ATTRIBUTE_BASED">Per Variant</option>
                                            </select>
                                        </div>
                                        <p className="col-span-2 text-xs text-violet-700">
                                            "Per Variant" lets you set different prices/stock for each color or size.
                                        </p>
                                    </div>
                                )}

                                <div>
                                    <Label className={fCls}>Status</Label>
                                    <select {...register("status")} className={sCls}>
                                        <option value="DRAFT">Draft</option>
                                        <option value="PUBLISHED">Published</option>
                                        <option value="ARCHIVED">Archived</option>
                                    </select>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label className={fCls}>Brand *</Label>
                                        <select {...register("brandId")} className={sCls}>
                                            <option value="">-- Select brand --</option>
                                            {brandsData?.data?.map((b) => (
                                                <option key={b.id} value={b.id}>
                                                    {b.name}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.brandId && (
                                            <p className={eCls}>
                                                <AlertCircle className="h-3 w-3" />
                                                {errors.brandId.message}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <Label className={fCls}>Category *</Label>
                                        <select {...register("categoryId")} className={sCls}>
                                            <option value="">-- Select category --</option>
                                            {categoriesData?.data?.map((c) => (
                                                <option key={c.id} value={c.id}>
                                                    {c.name}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.categoryId && (
                                            <p className={eCls}>
                                                <AlertCircle className="h-3 w-3" />
                                                {errors.categoryId.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </TabsContent>

                            {/* ─── IMAGES ──────────────────────────────────── */}
                            <TabsContent value="images" className="mt-0">
                                <ProductImageUpload
                                    images={images}
                                    onChange={(imgs) => replaceImages(imgs)}
                                    onNewPublicId={(id) => {
                                        newPublicIds.current.push(id)
                                    }}
                                />
                            </TabsContent>

                            {/* ─── PRICING & STOCK ─────────────────────────── */}
                            <TabsContent value="pricing" className="mt-0 space-y-4">
                                {isVariable && (
                                    <div className="flex items-start gap-2 p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800">
                                        <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                                        <span>
                                            {priceType === "ATTRIBUTE_BASED" &&
                                                stockType === "ATTRIBUTE_BASED"
                                                ? "Both price and stock are set per variant — go to the Variants tab."
                                                : priceType === "ATTRIBUTE_BASED"
                                                    ? "Prices are set per variant. Stock here applies to all."
                                                    : stockType === "ATTRIBUTE_BASED"
                                                        ? "Stock is set per variant. Prices here apply to all."
                                                        : "These values apply to all variants (common strategy)."}
                                        </span>
                                    </div>
                                )}

                                {priceType !== "ATTRIBUTE_BASED" && (
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label className={fCls}>Regular Price (BDT)</Label>
                                            <Input
                                                {...register("regularPrice")}
                                                type="number"
                                                min={0}
                                                step="0.01"
                                                placeholder="0.00"
                                            />
                                            {errors.regularPrice && (
                                                <p className={eCls}>
                                                    <AlertCircle className="h-3 w-3" />
                                                    {errors.regularPrice.message}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <Label className={fCls}>Sales Price (BDT)</Label>
                                            <Input
                                                {...register("salesPrice")}
                                                type="number"
                                                min={0}
                                                step="0.01"
                                                placeholder="0.00"
                                            />
                                            {errors.salesPrice && (
                                                <p className={eCls}>
                                                    <AlertCircle className="h-3 w-3" />
                                                    {errors.salesPrice.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {stockType !== "ATTRIBUTE_BASED" && (
                                    <div>
                                        <Label className={fCls}>Stock Quantity</Label>
                                        <Input
                                            {...register("stock")}
                                            type="number"
                                            min={0}
                                            placeholder="0"
                                        />
                                        {errors.stock && (
                                            <p className={eCls}>
                                                <AlertCircle className="h-3 w-3" />
                                                {errors.stock.message}
                                            </p>
                                        )}
                                    </div>
                                )}

                                {isVariable &&
                                    priceType === "ATTRIBUTE_BASED" &&
                                    stockType === "ATTRIBUTE_BASED" && (
                                        <div className="border-2 border-dashed border-border rounded-xl py-10 text-center text-muted-foreground">
                                            <p className="text-sm font-medium">
                                                All pricing &amp; stock is set per variant
                                            </p>
                                            <p className="text-xs mt-1">
                                                Go to the Variants tab to configure
                                            </p>
                                        </div>
                                    )}
                            </TabsContent>

                            {/* ─── VARIANTS ────────────────────────────────── */}
                            <TabsContent value="attributes" className="mt-0 space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-semibold">Variants</p>
                                        <p className="text-xs text-muted-foreground mt-0.5">
                                            Add color or size options
                                        </p>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button
                                            type="button"
                                            size="sm"
                                            variant="outline"
                                            onClick={() => addVariant("COLOR")}
                                            className="h-8 text-xs border-pink-300 text-pink-700 hover:bg-pink-50 hover:text-pink-800"
                                        >
                                            <Palette className="h-3 w-3 mr-1" />
                                            Add Color
                                        </Button>
                                        <Button
                                            type="button"
                                            size="sm"
                                            variant="outline"
                                            onClick={() => addVariant("SIZE")}
                                            className="h-8 text-xs border-blue-300 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
                                        >
                                            <Ruler className="h-3 w-3 mr-1" />
                                            Add Size
                                        </Button>
                                    </div>
                                </div>

                                {attrFields.length === 0 ? (
                                    <div className="border-2 border-dashed border-border rounded-xl py-14 text-center text-muted-foreground">
                                        <p className="text-sm font-medium">No variants yet</p>
                                        <p className="text-xs mt-1">
                                            Click "Add Color" or "Add Size" above
                                        </p>
                                    </div>
                                ) : (
                                    <div className="space-y-3">
                                        {attrFields.map((field, idx) => (
                                            <VariantCard
                                                key={field.id}
                                                field={
                                                    field as FormData["attributes"][number] & {
                                                        id: string
                                                    }
                                                }
                                                idx={idx}
                                                priceType={priceType}
                                                stockType={stockType}
                                                register={register}
                                                errors={errors}
                                                watch={watch}
                                                setValue={setValue}
                                                onRemove={() => removeAttr(idx)}
                                            />
                                        ))}
                                    </div>
                                )}
                            </TabsContent>

                            {/* ─── DETAILS ─────────────────────────────────── */}
                            <TabsContent value="details" className="mt-0 space-y-4">
                                <div>
                                    <Label className={fCls}>Short Description</Label>
                                    <Textarea
                                        {...register("shortDescription")}
                                        placeholder="Brief summary (max 500 chars)"
                                        rows={2}
                                        className="resize-none"
                                    />
                                    {errors.shortDescription && (
                                        <p className={eCls}>
                                            <AlertCircle className="h-3 w-3" />
                                            {errors.shortDescription.message}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <Label className={fCls}>Long Description</Label>
                                    <Textarea
                                        {...register("longDescription")}
                                        placeholder="Full product description..."
                                        rows={5}
                                        className="resize-y"
                                    />
                                </div>
                                <div>
                                    <Label className={fCls}>Ingredients</Label>
                                    <Textarea
                                        {...register("ingredients")}
                                        placeholder="Ingredients list..."
                                        rows={3}
                                        className="resize-y"
                                    />
                                </div>
                                <div>
                                    <Label className={fCls}>Other Info</Label>
                                    <Textarea
                                        {...register("other")}
                                        placeholder="Additional information..."
                                        rows={3}
                                        className="resize-y"
                                    />
                                </div>
                            </TabsContent>

                        </div>

                        {/* Footer */}
                        <div className="shrink-0 border-t px-6 py-4 flex gap-3">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={handleClose}
                                className="flex-1"
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1"
                            >
                                {isSubmitting
                                    ? "Saving..."
                                    : mode === "create"
                                        ? "Create Product"
                                        : "Save Changes"}
                            </Button>
                        </div>
                    </form>
                </Tabs>

            </DialogContent>
        </Dialog>
    )
}
