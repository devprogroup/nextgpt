import React from 'react';
import Modal from '../common/modal';
import { MdEmail, MdPhone, MdWhatsapp } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '@/types';
import { setKnowledge } from '@/store/agent';

const ALTERNATIVE_METHODS = [
    {
        key: 'whatsapp',
        label: 'Whatsapp',
        icon: <MdWhatsapp size={24} />,
        descriptionPlaceholder: 'Enter the whatsapp number'
    },
    {
        key: 'phone',
        label: 'Phone number',
        icon: <MdPhone size={24} />,
        descriptionPlaceholder: 'Enter the phone number'
    },
    {
        key: 'email',
        label: 'Email',
        icon: <MdEmail size={24} />,
        descriptionPlaceholder: 'Enter the email address'
    }
]

interface AlternativeModalProps {
    isOpen: boolean;
    close: () => void;
}

const AlternativeModal: React.FC<AlternativeModalProps> = ({ isOpen, close }) => {
    const [selectedMethod, setSelectedMethod] = React.useState('');
    const [value, setValue] = React.useState('');
    const [description, setDescription] = React.useState('');
    const dispatch = useDispatch()
    const alternatives = useSelector((state: StoreType) => state.agent.knowledge.alternatives)
    const onConfirm = () => {
        if (selectedMethod === '') {
            return;
        }
        dispatch(setKnowledge({
            alternatives: [
                ...alternatives,
                {
                    method: selectedMethod,
                    value: value,
                    name: ALTERNATIVE_METHODS.find(it => it.key === selectedMethod)?.label || '',
                    description: description,
                }
            ]
        }));
        close();
    }
    return (
        <Modal
            title="Select alternative"
            isOpen={isOpen}
            close={close}
        >
            <div className="p-6 border-t border-b min-w-[640px]">
                <div className="nextgpt__form-container">
                    <div className="nextgpt__form-group">
                        <label className="nextgpt__label">Alternative method</label>
                        <ul className="grid grid-cols-2 gap-3">
                            {ALTERNATIVE_METHODS.map((it) => (
                                <li
                                    key={it.key}
                                    className="border  rounded-lg flex w-full px-4 py-2 justify-between items-center"
                                    onClick={() => setSelectedMethod(it.key)}
                                >
                                    <div className={`flex items-center gap-2 ${selectedMethod === it.key ? 'text-gray-500' : ''}`}>
                                        <span>{it.icon}</span>
                                        <span>{it.label}</span>
                                    </div>
                                    {selectedMethod === it.key ? (
                                        <span className="border w-5 h-5 flex rounded-full justify-center items-center bg-gray-400">
                                            <span className="h-2 w-2 bg-white rounded-full"></span>
                                        </span>
                                    ) : (<span className="h-5 w-5 block rounded-full border"></span>)}

                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="nextgpt__form-group">
                        <label className="nextgpt__label">Value</label>
                        <input type="text" className="nextgpt__input" value={value} onChange={(e)=>{setValue(e.target.value)}} />
                    </div>
                    <div className="nextgpt__form-group">
                        <label className="nextgpt__label">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="nextgpt__input"
                            rows={4}
                            placeholder={selectedMethod !== '' ? ALTERNATIVE_METHODS.find(it => it.key === selectedMethod)?.descriptionPlaceholder : ''}
                        >
                        </textarea>
                    </div>

                </div>
            </div>
            <div className="px-6 py-4 flex justify-end">
                <button className="nextgpt__btn-dark" onClick={onConfirm}>Confirm</button>
            </div>
        </Modal>
    );
};

export default AlternativeModal;