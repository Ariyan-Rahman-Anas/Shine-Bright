"use client"

import SecondaryButton from "./SecondaryButton";

type ModalType = {
    tiggerTitle?: string
    className?: string
    body?: React.ReactNode
    openModal?: boolean
    onClick?: () => void
    setOpenModal?: (open: boolean) => void
}

const ModalTemplate = ({ tiggerTitle, body, openModal, onClick, setOpenModal, className }: ModalType) => {
    return (
        <div>
            <div 
                onClick={() => setOpenModal?.(true)}
                className="cursor-pointer flex items-center justify-center"
            >
                <SecondaryButton
                    title={tiggerTitle}
                    onClick={onClick}
                    className={`w-fit text-base font-medium ${className}`}
                />
            </div>

            <div 
                onClick={() => setOpenModal?.(false)} 
                className={`fixed z-[100] flex items-center justify-center ${openModal ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 bg-black/40 duration-500`}
            >
                <div 
                    onClick={(e_) => e_.stopPropagation()} 
                    className={`absolute mx-4 min-w-[22rem] min-h-[12rem] flex items-center justify-center rounded-lg bg-whiteCustom text-center drop-shadow-2xl ${openModal ? 'opacity-1 translate-y-0 duration-300' : 'translate-y-20 opacity-0 duration-150'}`}
                >
                    <div className="w-full">
                        {body}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalTemplate