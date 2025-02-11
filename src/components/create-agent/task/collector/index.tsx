"use client"
import React from 'react';
import UploadCsv from './upload-csv';
import { useSelector } from 'react-redux';
import { StoreType } from '@/types';
import EditCollection from './edit-collection';
import { MdAdd } from 'react-icons/md';
import CollectionModal from './collection-modal';

export default function Collector () {
    const collections = useSelector((state:StoreType) => state.agent.task.collections);
    const [showNewModal, setShowNewModal] = React.useState(true);
    return (
        <div className="nextgpt__form-group">
            <div className="flex justify-between items-center">
                <label htmlFor="info_upload" className="">
                    Create a list of info the agent will gather
                </label>
                {collections && (
                    <button
                        className="flex items-center text-gray-500"
                        onClick={() => setShowNewModal(true)}
                    >
                        <MdAdd />
                        <span className="ml-1">Add info</span>
                        </button>
                )}
            </div>
            
            <div id="info_upload">
                {collections ? <EditCollection /> :<UploadCsv onAddManually={()=>{setShowNewModal(true)}} />}
            </div>
            <CollectionModal isOpen={showNewModal} close={() => setShowNewModal(false)} />
        </div>
    );
};
