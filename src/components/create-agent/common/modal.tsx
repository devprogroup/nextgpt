"use client"

import React from "react"
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { MdClose } from 'react-icons/md'

interface ModalPropsType {
    isOpen: boolean,
    close: () => void,
    title: string,
    showTitle?: boolean,
    showCloseButton?: boolean,
    titleIcon?: React.ReactNode,
    children: React.ReactNode,
}
export default function Modal({
    isOpen,
    close,
    title,
    showTitle = true,
    children,
    showCloseButton = true,
    titleIcon
}: ModalPropsType) {
    return (
        <Dialog
            open={isOpen}
            onClose={close}
            className="relative z-50"
        >
            <div className="fixed inset-0 flex w-screen items-center justify-center bg-[rgba(7,7,18,0.08)] backdrop-blur-[2px]">
                <DialogPanel className="bg-white border border-[#EEEFF1] shadow-[0px_1px_2px_-1px_rgba(82,88,102,0.02),0px_2px_4px_-2px_rgba(82,88,102,0.04),0px_4px_8px_-4px_rgba(82,88,102,0.08),0px_8px_16px_-8px_rgba(82,88,102,0.16),0px_16px_32px_-16px_rgba(82,88,102,0.32),0px_24px_48px_-24px_rgba(82,88,102,0.48)] rounded-[20px] overflow-hidden">
                    {showTitle && (
                        <DialogTitle className="px-6 py-3 flex justify-between items-center">
                            <div className="font-bold text-xl mr-6 flex items-center nextgpt__text-size:xl nextgpt__font_bold">
                                {titleIcon}
                                <span className={titleIcon ? 'ml-2' : ''}>{title}</span>
                            </div>
                            {showCloseButton && (
                                <button
                                    className="nextgpt__bg_surface text-[#868B98] w-[32px] h-[32px] flex justify-center items-center rounded-full"
                                    onClick={close}
                                ><MdClose /></button>
                            )}
                        </DialogTitle>
                    )}

                    {children}
                </DialogPanel>
            </div>
        </Dialog>
    )
}