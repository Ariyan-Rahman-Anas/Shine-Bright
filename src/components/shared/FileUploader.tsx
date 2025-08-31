// import { useState, useRef, useCallback } from 'react'
// import { RxCross2 } from 'react-icons/rx'
// import { IoAlertCircleOutline, IoCloudUploadOutline } from 'react-icons/io5'
// import { BsFileImage } from 'react-icons/bs'
// import Image from 'next/image'

// interface FileUploadItem {
//     id: string
//     file: File
//     preview: string
//     status: 'uploading' | 'success' | 'error'
//     progress?: number
// }

// interface FileUploaderProps {
//     maxFiles?: number
//     maxSizePerFile?: number // in MB
//     acceptedTypes?: string[]
//     onFilesChange?: (files: File[]) => void
//     onError?: (error: string) => void
//     className?: string
//     label?: string
//     description?: string
// }

// const FileUploader = ({
//     maxFiles = 20,
//     maxSizePerFile = 10,
//     acceptedTypes = ['image/*', 'video/*'],
//     onFilesChange,
//     onError,
//     className = '',
//     label = 'Upload Images',
//     description = 'Please upload the images/videos of the product you want to return.'
// }: FileUploaderProps) => {
//     const [uploadedFiles, setUploadedFiles] = useState<FileUploadItem[]>([])
//     const [isDragOver, setIsDragOver] = useState(false)
//     const fileInputRef = useRef<HTMLInputElement>(null)

//     const validateFile = (file: File): string | null => {
//         // Check file size
//         if (file.size > maxSizePerFile * 1024 * 1024) {
//             return `File size must be less than ${maxSizePerFile}MB`
//         }

//         // Check file type
//         const isValidType = acceptedTypes.some(type => {
//             if (type.endsWith('/*')) {
//                 return file.type.startsWith(type.replace('/*', '/'))
//             }
//             return file.type === type
//         })

//         if (!isValidType) {
//             return 'Invalid file type. Please upload images or videos only.'
//         }

//         return null
//     }

//     const createFilePreview = (file: File): Promise<string> => {
//         return new Promise((resolve) => {
//             if (file.type.startsWith('image/')) {
//                 const reader = new FileReader()
//                 reader.onload = (e) => resolve(e.target?.result as string)
//                 reader.readAsDataURL(file)
//             } else {
//                 // For videos, create a placeholder or thumbnail
//                 resolve('/api/placeholder/100/100')
//             }
//         })
//     }

//     const handleFiles = useCallback(async (files: FileList) => {
//         const fileArray = Array.from(files)

//         // Check total file limit
//         if (uploadedFiles.length + fileArray.length > maxFiles) {
//             onError?.(`Maximum ${maxFiles} files allowed`)
//             return
//         }

//         // Process each file
//         for (const file of fileArray) {
//             const error = validateFile(file)
//             if (error) {
//                 onError?.(error)
//                 continue
//             }

//             const preview = await createFilePreview(file)
//             const fileItem: FileUploadItem = {
//                 id: `${Date.now()}-${Math.random()}`,
//                 file,
//                 preview,
//                 status: 'uploading',
//                 progress: 0
//             }

//             setUploadedFiles(prev => [...prev, fileItem])

//             // Simulate upload progress
//             const uploadProgress = setInterval(() => {
//                 setUploadedFiles(prev =>
//                     prev.map(item =>
//                         item.id === fileItem.id && item.progress! < 100
//                             ? { ...item, progress: item.progress! + 20 }
//                             : item
//                     )
//                 )
//             }, 200)

//             // Complete upload after simulation
//             setTimeout(() => {
//                 clearInterval(uploadProgress)
//                 setUploadedFiles(prev =>
//                     prev.map(item =>
//                         item.id === fileItem.id
//                             ? { ...item, status: 'success', progress: 100 }
//                             : item
//                     )
//                 )
//             }, 1000)
//         }

//         // Update parent component
//         const allFiles = [...uploadedFiles.map(item => item.file), ...fileArray]
//         onFilesChange?.(allFiles)
//     }, [uploadedFiles, maxFiles, onError, onFilesChange])

//     const removeFile = (fileId: string) => {
//         setUploadedFiles(prev => {
//             const updated = prev.filter(item => item.id !== fileId)
//             onFilesChange?.(updated.map(item => item.file))
//             return updated
//         })
//     }

//     const handleDragOver = (e: React.DragEvent) => {
//         e.preventDefault()
//         setIsDragOver(true)
//     }

//     const handleDragLeave = (e: React.DragEvent) => {
//         e.preventDefault()
//         setIsDragOver(false)
//     }

//     const handleDrop = (e: React.DragEvent) => {
//         e.preventDefault()
//         setIsDragOver(false)
//         const files = e.dataTransfer.files
//         if (files.length > 0) {
//             handleFiles(files)
//         }
//     }

//     const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         if (e.target.files) {
//             handleFiles(e.target.files)
//         }
//     }

//     const openFileDialog = () => {
//         fileInputRef.current?.click()
//     }

//     return (
//         <div className={`space-y-4 ${className}`}>
//             {/* Label and Description */}
//             <div>
//                 <h3 className="text-sm font-medium text-blackCustom mb-1">
//                     {label} (Upto {maxFiles})
//                 </h3>
//                 <p className="text-sm text-bColor3">
//                     {description}
//                 </p>
//             </div>

//             {/* Upload Area */}
//             <div
//                 onDragOver={handleDragOver}
//                 onDragLeave={handleDragLeave}
//                 onDrop={handleDrop}
//                 onClick={openFileDialog}
//                 className={`
//           relative border-2 border-dashed rounded p-2 text-center cursor-pointer transition-colors
//           ${isDragOver
//                         ? 'border-mColor4 bg-mColor1'
//                         : 'border-bColor1 hover:border-bColor4 hover:bg-bColor1/10'
//                     }
//         `}
//             >
//                 <div className="flex items-center justify-center gap-2">
//                     <IoCloudUploadOutline size={18} className=" text-purple-600" />
//                     <p className="text-sm font-medium text-blackCustom">Browse files</p>
//                 </div>

//                 <input
//                     ref={fileInputRef}
//                     type="file"
//                     multiple
//                     accept={acceptedTypes.join(',')}
//                     onChange={handleFileInputChange}
//                     className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                 />
//             </div>

//             {/* Uploaded Files Grid */}
//             {uploadedFiles.length > 0 && (
//                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//                     {uploadedFiles.map((fileItem) => (
//                         <div key={fileItem.id} className="relative group">
//                             <div className="aspect-square rounded-lg overflow-hidden border-2 border-gray-200">
//                                 {fileItem.file.type.startsWith('image/') ? (
//                                     <Image
//                                         src={fileItem.preview}
//                                         alt="Upload preview"
//                                         className="w-full h-full object-cover"
//                                     />
//                                 ) : (
//                                     <div className="w-full h-full bg-gray-100 flex items-center justify-center">
//                                         <BsFileImage className="w-8 h-8 text-bColor3" />
//                                     </div>
//                                 )}

//                                 {/* Progress Overlay */}
//                                 {fileItem.status === 'uploading' && (
//                                     <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//                                         <div className="text-white text-xs">
//                                             {fileItem.progress}%
//                                         </div>
//                                     </div>
//                                 )}

//                                 {/* Error Overlay */}
//                                 {fileItem.status === 'error' && (
//                                     <div className="absolute inset-0 bg-red-500 bg-opacity-75 flex items-center justify-center">
//                                         <IoAlertCircleOutline className="w-6 h-6 text-white" />
//                                     </div>
//                                 )}
//                             </div>

//                             {/* Remove Button */}
//                             <button
//                                 onClick={(e) => {
//                                     e.stopPropagation()
//                                     removeFile(fileItem.id)
//                                 }}
//                                 className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
//                             >
//                                 <RxCross2 className="w-3 h-3" />
//                             </button>

//                             {/* File Name */}
//                             <p className="mt-1 text-xs text-bColor3 truncate">
//                                 {fileItem.file.name}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             )}

//             {/* File Count */}
//             {uploadedFiles.length > 0 && (
//                 <div className="text-sm text-gray-500">
//                     {uploadedFiles.length} of {maxFiles} files uploaded
//                 </div>
//             )}
//         </div>
//     )
// }

// export default FileUploader
















import { useState, useRef, useCallback } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { IoAlertCircleOutline, IoCloudUploadOutline } from 'react-icons/io5'
import { BsFileImage } from 'react-icons/bs'
import Image from 'next/image'

interface FileUploadItem {
    id: string
    file: File
    preview: string
    status: 'uploading' | 'success' | 'error'
    progress?: number
}

interface FileUploaderProps {
    maxFiles?: number
    maxSizePerFile?: number // in MB
    acceptedTypes?: string[]
    onFilesChange?: (files: File[]) => void
    onError?: (error: string) => void
    className?: string
    label?: string
    description?: string
}

const FileUploader = ({
    maxFiles = 20,
    maxSizePerFile = 10,
    acceptedTypes = ['image/*', 'video/*'],
    onFilesChange,
    onError,
    className = '',
    label = 'Upload Images',
    description = 'Please upload the images/videos of the product you want to return.'
}: FileUploaderProps) => {
    const [uploadedFiles, setUploadedFiles] = useState<FileUploadItem[]>([])
    const [isDragOver, setIsDragOver] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const createFilePreview = (file: File): Promise<string> => {
        return new Promise((resolve) => {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader()
                reader.onload = (e) => resolve(e.target?.result as string)
                reader.readAsDataURL(file)
            } else {
                // For videos, create a placeholder or thumbnail
                resolve('/api/placeholder/100/100')
            }
        })
    }

    const handleFiles = useCallback(async (files: FileList) => {
        // Move validateFile inside the callback to avoid dependency issues
        const validateFile = (file: File): string | null => {
            // Check file size
            if (file.size > maxSizePerFile * 1024 * 1024) {
                return `File size must be less than ${maxSizePerFile}MB`
            }

            // Check file type
            const isValidType = acceptedTypes.some(type => {
                if (type.endsWith('/*')) {
                    return file.type.startsWith(type.replace('/*', '/'))
                }
                return file.type === type
            })

            if (!isValidType) {
                return 'Invalid file type. Please upload images or videos only.'
            }

            return null
        }

        const fileArray = Array.from(files)

        // Check total file limit
        if (uploadedFiles?.length + fileArray?.length > maxFiles) {
            onError?.(`Maximum ${maxFiles} files allowed`)
            return
        }

        // Process each file
        for (const file of fileArray) {
            const error = validateFile(file)
            if (error) {
                onError?.(error)
                continue
            }

            const preview = await createFilePreview(file)
            const fileItem: FileUploadItem = {
                id: `${Date.now()}-${Math.random()}`,
                file,
                preview,
                status: 'uploading',
                progress: 0
            }

            setUploadedFiles(prev => [...prev, fileItem])

            // Simulate upload progress
            const uploadProgress = setInterval(() => {
                setUploadedFiles(prev =>
                    prev.map(item =>
                        item.id === fileItem.id && item.progress! < 100
                            ? { ...item, progress: item.progress! + 20 }
                            : item
                    )
                )
            }, 200)

            // Complete upload after simulation
            setTimeout(() => {
                clearInterval(uploadProgress)
                setUploadedFiles(prev =>
                    prev.map(item =>
                        item.id === fileItem.id
                            ? { ...item, status: 'success', progress: 100 }
                            : item
                    )
                )
            }, 1000)
        }

        // Update parent component
        const allFiles = [...uploadedFiles.map(item => item.file), ...fileArray]
        onFilesChange?.(allFiles)
    }, [uploadedFiles, maxFiles, maxSizePerFile, acceptedTypes, onError, onFilesChange])

    const removeFile = (fileId: string) => {
        setUploadedFiles(prev => {
            const updated = prev.filter(item => item.id !== fileId)
            onFilesChange?.(updated.map(item => item.file))
            return updated
        })
    }

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragOver(true)
    }

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragOver(false)
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragOver(false)
        const files = e.dataTransfer.files
        if (files?.length > 0) {
            handleFiles(files)
        }
    }

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            handleFiles(e.target.files)
        }
    }

    const openFileDialog = () => {
        fileInputRef.current?.click()
    }

    return (
        <div className={`space-y-4 ${className}`}>
            {/* Label and Description */}
            <div>
                <h3 className="text-sm font-medium text-blackCustom mb-1">
                    {label} (Upto {maxFiles})
                </h3>
                <p className="text-sm text-bColor3">
                    {description}
                </p>
            </div>

            {/* Upload Area */}
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={openFileDialog}
                className={`
          relative border-2 border-dashed rounded p-2 text-center cursor-pointer transition-colors
          ${isDragOver
                        ? 'border-mColor4 bg-mColor1'
                        : 'border-bColor1 hover:border-bColor4 hover:bg-bColor1/10'
                    }
        `}
            >
                <div className="flex items-center justify-center gap-2">
                    <IoCloudUploadOutline size={18} className=" text-purple-600" />
                    <p className="text-sm font-medium text-blackCustom">Browse files</p>
                </div>

                <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept={acceptedTypes.join(',')}
                    onChange={handleFileInputChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
            </div>

            {/* Uploaded Files Grid */}
            {uploadedFiles?.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {uploadedFiles.map((fileItem) => (
                        <div key={fileItem.id} className="relative group">
                            <div className="aspect-square rounded-lg overflow-hidden border-2 border-gray-200">
                                {fileItem.file.type.startsWith('image/') ? (
                                    <Image
                                        src={fileItem.preview}
                                        alt="Upload preview"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                                        <BsFileImage className="w-8 h-8 text-bColor3" />
                                    </div>
                                )}

                                {/* Progress Overlay */}
                                {fileItem.status === 'uploading' && (
                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                        <div className="text-white text-xs">
                                            {fileItem.progress}%
                                        </div>
                                    </div>
                                )}

                                {/* Error Overlay */}
                                {fileItem.status === 'error' && (
                                    <div className="absolute inset-0 bg-red-500 bg-opacity-75 flex items-center justify-center">
                                        <IoAlertCircleOutline className="w-6 h-6 text-white" />
                                    </div>
                                )}
                            </div>

                            {/* Remove Button */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation()
                                    removeFile(fileItem.id)
                                }}
                                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
                            >
                                <RxCross2 className="w-3 h-3" />
                            </button>

                            {/* File Name */}
                            <p className="mt-1 text-xs text-bColor3 truncate">
                                {fileItem.file.name}
                            </p>
                        </div>
                    ))}
                </div>
            )}

            {/* File Count */}
            {uploadedFiles?.length > 0 && (
                <div className="text-sm text-gray-500">
                    {uploadedFiles?.length} of {maxFiles} files uploaded
                </div>
            )}
        </div>
    )
}

export default FileUploader