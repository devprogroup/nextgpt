"use client"
import { StoreType } from '@/types';
import React from 'react';
import { MdHorizontalRule, MdMoreHoriz, MdNotes, MdOutlineHorizontalRule, MdOutlineHorizontalSplit } from 'react-icons/md';
import { useSelector } from 'react-redux';

export default function EditCollection() {
    const collections = useSelector((state: StoreType) => state.agent.task?.collections);
    return (
        <ul>
            {collections?.map((collection, index) => (
                <li key={index}>
                    <div className="flex justify-between items-center py-2 border-b">
                        <div className="flex items-center">
                            <span className="inline-block rounded bg-gray-400 p-0.5 mr-2"><MdNotes color="white" size={10} /></span>
                            <h1 className="mr-2 capitalize">{collection.name}</h1>
                            <span>({collection.validations.length} validations)</span>
                        </div>
                        <div className="flex items-center">
                            {collection.compulsory && <span className="inline-block py-1 px-2 rounded-lg bg-gray-100 mr-2 italic text-gray-500">compulsory</span>}
                            <MdMoreHoriz className="text-gray-300" />
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}