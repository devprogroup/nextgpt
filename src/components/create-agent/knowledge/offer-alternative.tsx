"use client"
import { StoreType } from '@/types';
import React from 'react';
import { useSelector } from 'react-redux';
import AlternativeModal from './alternative-modal';
import { MdWhatsapp, MdPhone, MdEmail } from 'react-icons/md';

const OfferAlternative: React.FC = () => {
    const alternatives = useSelector((state: StoreType) => state.agent.knowledge?.alternatives);
    const [isModalOpen, setIsModalOpen] = React.useState(true);

    const onAddAlternativeClick = () => {
        setIsModalOpen(true);
        
    }
    return alternatives && alternatives.length > 0 ? (
        <ul>
            {alternatives.map((alternative, index) => (
                <li key={index} className="flex rounded-lg border">
                    <div className="bg-gray-200 flex items-center justify-center w-12 text-gray-500">
                        {alternative.method === 'whatsapp' && (
                            <MdWhatsapp size={24} />
                        )}
                        
                        {alternative.method === 'phone' && (
                            <MdPhone size={24} />
                        )}
                        {alternative.method === 'email' && (
                            <MdEmail size={24} />
                        )}
                    </div>
                    <div className="flex gap-2 items-center py-2 px-4">
                        <p>{alternative.name}</p>
                        <p className="nextgpt__text-muted">{alternative.value}</p>
                    </div>
                </li>
            ))}
        </ul>
    ) : (
        <div className="border-dashed border py-2 px-4 rounded-lg flex justify-between items-center">
            <p className="nextgpt__text-muted text-sm">No alternatives available.</p>
            <button className="nextgpt__btn_primary" onClick={onAddAlternativeClick}>Add alternative</button>
            <AlternativeModal isOpen={isModalOpen} close={() => setIsModalOpen(false)} />
        </div>
    )
};

export default OfferAlternative;