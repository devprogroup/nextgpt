import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import Modal from '@/components/create-agent/common/modal';
import { CollectionType } from '@/types';
import { MdCheck } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { setTask } from '@/store/agent';
import { StoreType } from '@/types';
interface PropType {
    isOpen: boolean;
    close: () => void;
    initialValues?: CollectionType;
}

interface FormValueType {
    name: string;
    description: string;
    validations: string;
    exampleResponse: string;
}

const CollectionModal: React.FC<PropType> = ({ isOpen, close, initialValues }) => {
    const collections = useSelector((state:StoreType) => state.agent.task.collections);

    const [isRequired, setIsRequired] = useState(false)
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormValueType>();
      const onSubmit = (data:FormValueType) => {
        const cleanData = {
            ...data,
            validations: data.validations.split(',').map((item) => item.trim()),
            compulsory: isRequired
        }
        dispatch(setTask({ collections: collections ? [...collections, cleanData] : [cleanData] }))
        close()
      };
    return (
        <Modal
            isOpen={isOpen}
            close={close}
            title="Collect info"
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="border-b border-t min-w-[500px] p-6">
                    <div className="nextgpt__form-container space-y-6">
                        {/* What is being collected */}
                        <div className="nextgpt__form-group">
                            <label className="block">
                                What is the agent collecting?
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. phone number, email address"
                                className="nextgpt__input"
                                {...register('name')}
                            />
                        </div>

                        {/* Description */}
                        <div className="snextgpt__form-group">
                            <label className="block">
                                Description
                            </label>
                            <textarea
                                placeholder='e.g. "This will be used for contact verification"'
                                rows={3}
                                className="nextgpt__input"
                                {...register('description')}
                            />
                        </div>

                        {/* Validations */}
                        <div className="nextgpt__form-group">
                            <label className="block">
                                Any validations?
                            </label>
                            <input
                                type="text"
                                placeholder='e.g. "Must start with +1, include 10 digits"'
                                className="nextgpt__input"
                                {...register('validations')}
                            />
                        </div>

                        {/* Example Response */}
                        <div className="nextgpt__form-group">
                            <label className="block">
                                Example response
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. +1 234 567 3456"
                                className="nextgpt__input"
                                {...register('exampleResponse')}
                            />
                        </div>

                        {/* Required Checkbox */}
                        <label className="flex items-center gap-2">
                            <div
                                className={`flex h-4 w-4 cursor-pointer items-center justify-center rounded border ${isRequired
                                    ? 'border-emerald-500 bg-emerald-500 text-white'
                                    : 'border-gray-300 bg-white'
                                    }`}
                                onClick={() => setIsRequired(!isRequired)}
                                role="checkbox"
                                aria-checked={isRequired}
                                tabIndex={0}
                            >
                                {isRequired && <MdCheck className="h-3.5 w-3.5" />}
                            </div>
                            <span className="text-sm">Agent must ask for this information.</span>
                        </label>
                    </div>
                </div>
                <div className="flex justify-end px-6 py-4">
                    <button
                        type="submit"
                        className="nextgpt__btn-dark rounded-lg"
                    >Confirm</button>
                </div>
            </form>
        </Modal>
    );
};

export default CollectionModal;