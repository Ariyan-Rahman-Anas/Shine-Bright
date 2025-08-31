import FileUploader from '@/components/shared/FileUploader'
import SecondaryButton from '@/components/shared/SecondaryButton'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import ReturnRequestSuccessModal from './ReturnRequestSuccessModal'

interface ReturnRequestProps {
    orderId?: string
    selectedItems?: number
    totalItems?: number
}

const ReturnRequestForm = ({
    orderId = "DFG34455DFG",
    selectedItems = 6,
    totalItems = 6
}: ReturnRequestProps) => {
    const router = useRouter()
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
    const [returnReason, setReturnReason] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errors, setErrors] = useState<string[]>([])
    console.log(isSubmitting)

    const handleFilesChange = (files: File[]) => {
        setUploadedFiles(files)
        // Clear file-related errors
        setErrors(prev => prev.filter(error => !error.includes('image') && !error.includes('file')))
    }

    const handleFileError = (error: string) => {
        setErrors(prev => [...prev.filter(e => e !== error), error])
    }

    const validateForm = (): boolean => {
        const newErrors: string[] = []

        if (uploadedFiles?.length === 0) {
            newErrors.push('Please upload at least one image or video of the issue')
        }

        if (!returnReason.trim()) {
            newErrors.push('Please provide a reason for the return')
        } else if (returnReason.trim()?.length < 10) {
            newErrors.push('Return reason must be at least 10 characters long')
        }

        setErrors(newErrors)
        return newErrors?.length === 0
    }

    const handleSubmit = async () => {
        if (!validateForm()) return

        setIsSubmitting(true)

        try {
            // Create FormData for file upload
            const formData = new FormData()
            formData.append('orderId', orderId)
            formData.append('returnReason', returnReason)
            formData.append('selectedItems', selectedItems.toString())

            uploadedFiles.forEach((file, index) => {
                formData.append(`files[${index}]`, file)
            })

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000))

            // Handle success
            alert('Return request submitted successfully!')

            // Reset form
            setUploadedFiles([])
            setReturnReason('')
            setErrors([])

        } catch (error) {
            console.error('Error submitting return request:', error)
            setErrors(['Failed to submit return request. Please try again.'])
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleCancel = () => {
        // Reset form
        setUploadedFiles([])
        setReturnReason('')
        setErrors([])
        router.replace("/user/orders")
    }

    return (
        <div className="flex items-start flex-col md:flex-row gap-6">
            {/* Main Content - Left Side */}
            <div className="w-full md:w-[70%] space-y-8">

                {/* Error Display */}
                {errors?.length > 0 && (
                    <div className="border border-red-200 rounded-lg p-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <svg className="w-5 h-5 text-error" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <h3 className="text-sm font-medium text-error">
                                    Please fix the following errors:
                                </h3>
                                <ul className="mt-2 text-sm text-error list-disc list-inside">
                                    {errors.map((error, index) => (
                                        <li key={index}>{error}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {/* File Upload Section */}
                <FileUploader
                    maxFiles={20}
                    maxSizePerFile={10}
                    acceptedTypes={['image/*', 'video/*']}
                    onFilesChange={handleFilesChange}
                    onError={handleFileError}
                    label="Upload Images"
                    description="Please Upload the images/videos of the product you want to return. Kindly take a clear image/ video of the reason which was stated previously."
                    className=""
                />

                {/* Reason Text Area */}
                <div className="space-y-2">
                    <label htmlFor="returnReason" className="block text-sm font-medium text-gray-900">
                        Write Your Reason For Return And Your Experience
                    </label>
                    <textarea
                        id="returnReason"
                        value={returnReason}
                        onChange={(e) => setReturnReason(e.target.value)}
                        placeholder="Write Your Reason For Return And Your Experience"
                        rows={8}
                        className="input-field resize-none"
                    />
                </div>
            </div>

            {/* Sidebar - Right Side */}
            <div className="w-[30%] border-2 border-bColor1/50 rounded-lg p-4 sticky top-6 text-sm ">
                <div>
                    <div className="font-medium">
                        ORDER ID: <span className="text-blackCustom">{orderId}</span>
                    </div>

                    <div className="my-2">
                        Items Selected: <span className="font-medium text-blackCustom">
                            {selectedItems}/{totalItems}
                        </span>
                    </div>

                    <p className="mb-6">Please note: Item must be returned unused and in their original Conditions (including all labels and tags intact). Product must not contain personal data or have been manufacturer-registered (mobile phones, tablets, computers). Read our <Link href="/about" className='underline text-blackCustom underline-offset-2 ' >Return Policy</Link> to find out more.</p>
                </div>
                <div className="space-y-3">
                    <div className='flex items-center gap-3'>
                        <div className='w-full'>
                            <ReturnRequestSuccessModal  onClick={handleSubmit}  />
                        </div>
                        {/* <SecondaryButton title="Submit Request" onClick={handleSubmit} className={`border w-full py-1.5 ${selected === "makeup" ? "bg-mColor3/80 text-blackCustom border-mColor3/80 " : "bg-sColor6 text-whiteCustom border-sColor6"}`} /> */}
                        <SecondaryButton title="Cancel" onClick={handleCancel} className="border border-bColor1 w-full py-1.5" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReturnRequestForm