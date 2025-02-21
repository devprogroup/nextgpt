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
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-gray-900 bg-opacity-50">
                <DialogPanel className="border bg-white rounded-3xl overflow-hidden">
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