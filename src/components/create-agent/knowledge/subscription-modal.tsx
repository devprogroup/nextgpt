import React, { useState } from 'react';
import Modal from '../common/modal';
import { SubscriptionIcon } from '../svg';
import { MdCheck, MdDriveFolderUpload, MdOutlineUploadFile, MdSearch, MdWeb } from 'react-icons/md';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { TfiWorld } from 'react-icons/tfi';
import { TbBrandGoogleDrive, TbBrandNotion, TbBrandOnedrive, TbNotes } from 'react-icons/tb';

import ScrapeModal from './scrape-modal';
import PasteTextModal from './page-text-modal';
import LinkGoogleSheetModal from './link-googlesheet-modal';

const styles = [
    {
        id: "direct",
        icon: "/create-agent/knowledge/direct.png",
        title: "Direct",
        description: "The agent can answer right away to the user as they will provide all the information at once.",
    },
    {
        id: "probing",
        icon: "/create-agent/knowledge/probing.png",
        title: "Probing",
        description: "The agent will ask follow-up questions to accurately gather necessary information.",
    },
    {
        id: "searching",
        icon: "/create-agent/knowledge/searching.png",
        title: "Searching",
        description: "The agent should identify key questions, conduct searches, and organize the data for clarity.",
    },
]

interface PropType {
    isOpen: boolean;
    close: () => void;
}
const SubscriptionModal: React.FC<PropType> = ({ isOpen, close }) => {
    const [selectedStyle, setSelectedStyle] = useState("searching")
    const [showScrapeModal, setShowScrapeModal] = useState(false)
    const [showPasteTextModal, setShowPasteTextModal] = useState(false)
    const [showGoogleSheetModal, setShowGoogleSheetModal] = useState(true)

    return (
        <>
            <Modal
                isOpen={isOpen}
                close={close}
                title="Gym subscriptions"
                titleIcon={<span className="bg-gray-400 flex items-center justify-center p-0.5 rounded"><SubscriptionIcon width={24} height={24} /></span>}
            >
                <div className="grid grid-cols-2 border-t border-b border-gray-200 min-h-[680px] max-w-[1200px]">
                    <div className="space-y-6 p-6 border-r border-dashed border-gray-200">
                        <div className="space-y-2">
                            <h2 className="text-lg font-semibold">Select information retrieval style</h2>
                            <p className="text-sm text-gray-600">
                                You can decide how your agent acts when it searches for information to answer questions.
                            </p>
                        </div>

                        <div className="space-y-2">
                            {styles.map((style) => (
                                <div
                                    key={style.id}
                                    onClick={() => setSelectedStyle(style.id)}
                                    className={`flex items-center cursor-pointer rounded-lg border px-4 py-2 transition-colors ${selectedStyle === style.id ? "border-gray-200 bg-gray-50" : "border-gray-200 hover:border-gray-300"
                                        }`}
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex gap-3 items-center">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-lg">
                                                <img src={style.icon} alt={style.title} className="h-8 w-8" />
                                            </div>
                                            <div className="">
                                                <h2>{style.title}</h2>
                                                <p className="text-sm text-gray-600">{style.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-16 flex items-center justify-end">
                                        {selectedStyle === style.id && (
                                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-[14px] text-white"><MdCheck /></span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">When should the user retrieve info for this topic?</label>
                            <textarea
                                placeholder="Outline a scenario..."
                                rows={4}
                                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                            />
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="space-y-2">
                            <h2 className="text-lg font-semibold">Documents linked to this topic</h2>
                            <div className="flex gap-2">
                                <div className="flex items-center gap-2 nextgpt__input">
                                    <MdSearch />
                                    <input type="text" className="outline-none" />
                                </div>
                                <Menu>
                                    <MenuButton className="bg-gray-100 border border-gray-200 w-32 rounded-lg">Add new</MenuButton>
                                    <MenuItems anchor="bottom end" className="shadow-lg min-w-[200px] rounded border mt-1">
                                        <div className="p-4 space-y-2">
                                            <h2 className="nextgpt__text-muted text-sm">Upload</h2>
                                            <MenuItem>
                                                <div className="flex items-center gap-2">
                                                    <MdOutlineUploadFile className="text-gray-500 text-lg" />
                                                    <span className="text-sm">File</span>
                                                </div>
                                            </MenuItem>
                                            <MenuItem>
                                                <div className="flex items-center gap-2">
                                                    <MdDriveFolderUpload className="text-gray-500 text-lg" />
                                                    <span className="text-sm">Folder</span>
                                                </div>
                                            </MenuItem>
                                            <hr />
                                            <h2 className="nextgpt__text-muted text-sm">Static data</h2>
                                            <MenuItem>
                                                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setShowScrapeModal(true)}>
                                                    <TfiWorld className="text-gray-500 text-lg" />
                                                    <span className="text-sm">Scrape a website</span>
                                                </div>
                                            </MenuItem>
                                            <MenuItem>
                                                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setShowPasteTextModal(true)}>
                                                    <TbNotes className="text-gray-500 text-lg" />
                                                    <span className="text-sm">Paste text</span>
                                                </div>
                                            </MenuItem>
                                            <MenuItem>
                                                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setShowGoogleSheetModal(true)}>
                                                    <MdDriveFolderUpload className="text-gray-500 text-lg" />
                                                    <span className="text-sm">Link a Google Sheet</span>
                                                </div>
                                            </MenuItem>
                                            <hr />
                                            <h2 className="nextgpt__text-muted text-sm">Live data</h2>
                                            <MenuItem>
                                                <div className="flex items-center gap-2">
                                                    <TbBrandNotion className="text-gray-500 text-lg" />
                                                    <span className="text-sm">Connect to Notion</span>
                                                </div>
                                            </MenuItem>
                                            <MenuItem>
                                                <div className="flex items-center gap-2">
                                                    <TbBrandGoogleDrive className="text-gray-500 text-lg" />
                                                    <span className="text-sm">Connect to G-Drive</span>
                                                </div>
                                            </MenuItem>
                                            <MenuItem>
                                                <div className="flex items-center gap-2">
                                                    <TbBrandOnedrive className="text-gray-500 text-lg" />
                                                    <span className="text-sm">One Drive</span>
                                                </div>
                                            </MenuItem>
                                        </div>

                                    </MenuItems>
                                </Menu>

                            </div>
                        </div>
                    </div>


                </div>
                <div className='flex justify-between px-6 py-4'>
                    <button className="nextgpt__btn-primary">Cancel</button>
                    <button className="nextgpt__btn-dark">Add topic</button>
                </div>
            </Modal>
            <ScrapeModal
                key="scrape-modal"
                isOpen={showScrapeModal}
                close={() => setShowScrapeModal(false)}
                onOk={() => setShowScrapeModal(false)}
            />

            <PasteTextModal
                key="paste-text-modal"
                isOpen={showPasteTextModal}
                close={() => setShowPasteTextModal(false)}
                onOk={() => setShowPasteTextModal(false)}
            />
            <LinkGoogleSheetModal
                key="link-googlesheet-modal"
                isOpen={showGoogleSheetModal}
                close={() => setShowGoogleSheetModal(false)}
                onOk={() => setShowGoogleSheetModal(false)}
            />
        </>
    );
};

export default SubscriptionModal;