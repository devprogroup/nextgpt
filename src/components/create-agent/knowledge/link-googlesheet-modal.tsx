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
interface PropType {
    isOpen: boolean;
    close: () => void;
    onOk: () => void;
}
const LinkGoogleSheetModal: React.FC<PropType> = ({ isOpen, close, onOk }) => {
    return (
        <Modal
            isOpen={isOpen}
            close={close}
            title='Link a Google Sheet'
        >
            <div className="border-t border-b p-6 space-y-4 w-[620px] min-h-[480px] space-y-4">
                <div className="nextgpt__form-container">
                    <div className="nextgpt__form-group">
                        <div>
                            <label className="block">Google Sheet URL</label>
                            <p className="nextgpt__text-muted">Please provide the public link to your Google Sheet.</p>
                        </div>
                        
                        <input className="nextgpt__input" />
                    </div>
                    <div className="nextgpt__form-group">
                        <label className="block">Name your Google Sheet</label>
                            <input type="text" placeholder="Text" className="nextgpt__input" />
                    </div>
                </div>

                
            </div>
            <div className="px-6 py-4 flex justify-end">
                <button
                    onClick={onOk}
                    className="nextgpt__btn_dark nextgpt__btn_dark nextgpt__btn_size_md"
                >Add document</button>
            </div>
        </Modal>
    )
};

export default LinkGoogleSheetModal;