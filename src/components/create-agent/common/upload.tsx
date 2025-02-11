"use client"
import React from "react"

interface PropType {
    title: string,
    subtitle: string,
    children?: React.ReactNode
}
export default function Upload({
    title,
    subtitle,
    children
}: PropType) {
    return (
        <div className="nextgpt__agent_border border-dashed py-6 rounded-md text-center">
            <p className="text-center font-semibold">{title}</p>
            <p className="nextgpt__agent_text-muted mb-6">{subtitle}</p>
            {children}
        </div>
    )
}