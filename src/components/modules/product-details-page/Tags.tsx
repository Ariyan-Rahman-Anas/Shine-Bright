"use client"

import Image from 'next/image';
import { useSelector } from 'react-redux';

export const WithOutPhotoTags = ({ tags }: any) => {
    const { selected } = useSelector((state: any) => state.category)
    const withoutImgTags = tags?.filter((tag: any) => tag?.photo_path === null) || [];

    return (
        <div>
            {withoutImgTags && withoutImgTags?.length > 0 && (
                <div className="flex items-center flex-wrap gap-1.5">
                    {withoutImgTags.map(({ title }: any, index: number) => (
                        <div key={index} className='flex items-center gap-1.5 rounded-full border px-2 w-fit'>
                            <div className={`h-2 w-2 rounded-full ${selected === "makeup" ? "bg-mBtnBg" : "bg-sBtnBg"} `}></div>
                            <span> {title}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}




export const WithPhotoTags = ({ tags }: any) => {
    const withImgTags = tags?.filter((tag: any) => tag?.photo_path !== null) || [];

    return (
        <div>
            {withImgTags && withImgTags?.length > 0 && (
                <div className="flex items-center flex-wrap gap-6 my-6">
                    {withImgTags?.map(({ title, photo_path }: any, index: number) => (
                        <div key={index} className='flex items-center gap-1.5'>
                            <div className='border border-black rounded-full'>
                                <Image src={photo_path} alt={title} width={50} height={50} className='h-12 w-12 rounded-full' />
                            </div>
                            <span
                                className={`text-sm uppercase rounded`}
                            >
                                {title}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}