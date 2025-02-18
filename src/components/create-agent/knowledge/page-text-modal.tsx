"use client"
import React from "react"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react"
import Modal from "../common/modal"
import { ChunkingStrategy } from "../svg"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import { MdChevronRight } from "react-icons/md"

interface PropType {
    isOpen: boolean,
    close: () => void,
    onOk: () => void

}

const PasteTextModal: React.FC<PropType> = ({ isOpen, close, onOk }) => {

    return (
        <Modal
            isOpen={isOpen}
            close={close}
            title='Paste text'
        >
            <div className="border-t border-b p-6 space-y-4 w-[620px] min-h-[480px] space-y-4">
                <div className="space-y-2">
                    <div className="nextgpt__form-group">
                        <label className="block">Paste your text</label>
                        <textarea className="nextgpt__input"></textarea>
                    </div>
                    <div className="nextgpt__form-group">
                        <label className="block">Name your text</label>
                        <div className="nextgpt__input">
                            <div className="flex">
                                <input type="text" placeholder="Text" className="w-full outline-none" />
                                <span className="text-gray-500 text-sm">.txt</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="rounded-lg overflow-hidden border border-gray-200">
                    <Disclosure as="div" className="space-y-2 bg-gray-100">
                        {({ open }) => (
                            <>
                                <DisclosureButton className="w-full">
                                    <div className="flex justify-between items-center py-2 px-4 ">
                                        <div className="flex items-center space-x-2">
                                            <ChunkingStrategy />
                                            <span>Chunking strategy</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span>Semantic</span>
                                            <span className="nextgpt__text-muted text-sm">
                                                {open ? <FaChevronUp className="text-gray-500 text-sm" /> : <FaChevronDown />}
                                            </span>
                                        </div>
                                    </div>
                                </DisclosureButton>
                                <DisclosurePanel className="text-gray-500">
                                    <div className="py-2 px-4 border-t border-b">
                                        Utilizes advanced algorithms to automatically segment the text into chunks based on semantic understanding, optimizing for coherent meaning within each chunk.
                                    </div>

                                </DisclosurePanel>
                            </>
                        )}
                    </Disclosure>
                    <div className="flex items-center space-x-2 nextgpt__text-muted px-4 py-2">
                        <MdChevronRight />
                        <span>Show advanced settings</span>
                    </div>
                </div>
            </div>
            <div className="px-6 py-4 flex justify-end">
                <button
                    onClick={onOk}
                    className="nextgpt__btn_dark nextgpt__btn_size_md"
                >Add document</button>
            </div>
        </Modal>
    )
}

export default PasteTextModal