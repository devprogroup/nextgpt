"use client"

import React from "react"
import { Dialog, DialogPanel } from '@headlessui/react'
interface PropType {
    progress: number | null,
    title: string,
    bannerImg: string,
    children: React.ReactNode,
}

export function ProgressModal({
    progress,
    title,
    bannerImg,
    children,
    
}: PropType) {
    return (
        <Dialog
            open={progress !== null && progress < 100}
            onClose={()=>{}}
            className="relative z-50"
            >
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-gray-900 bg-opacity-50">
                <DialogPanel className="border bg-white rounded-3xl px-24 py-12">
                    <div className="space-y-6">
                        {bannerImg && (
                            <div className="flex items-center justify-center">
                                <img src={bannerImg} className="h-24" />
                            </div>
                        )}
                        {title && (
                            <h2 className="text-lg font-bold text-center">{title} ({progress}%)</h2>
                        )}
                        <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                            <div style={{width: `${progress}%`}} className="bg-gray-500 h-full rounded-full transition-width duration-100"></div>
                        </div>
                    </div>
                    
                    {children}
                </DialogPanel>
            </div>
        </Dialog>
    )
}