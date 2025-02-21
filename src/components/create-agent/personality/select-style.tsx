import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from "@/types";
import { FaArrowRight } from "react-icons/fa";
import { Range } from 'react-range'
import { MdDelete, MdMoreHoriz, MdOutlineDriveFileRenameOutline, MdOutlineMore } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { EditIcon, TrashIcon } from "../svg";
const CUSTOM_STYLE: { key: string, start: string, end: string }[] = [
    {
        key: 'formality',
        start: 'Formality',
        end: 'Casual',
    },
    {
        key: 'seriousness',
        start: 'Funny',
        end: 'Serious',
    },
    {
        key: 'respect',
        start: 'Respectful',
        end: 'Irreverent',
    },
    {
        key: 'nonsense',
        start: 'Nonsense',
        end: 'Entdusiastic',
    }
]

interface PropType {
    onUseStyle: () => void;
}

export default function SelectStyle({ onUseStyle }: PropType) {
    const [selectedStyle, setSelectedStyle] = useState<string>('');
    const communicationStyles = useSelector((state: StoreType) => state.agent.personality.communicationStyles);
    const [abstractness, setAbstractness] = useState<string>('S');
    const [specificity, setSpecificity] = useState<string>('General');
    const [outputLength, setOutputLength] = useState<string>('S');
    const [complexity, setComplexity] = useState<string>('General');
    const [styleValues, setStyleValues] = useState<Record<string, number[]>>({
        formality: [0],
        seriousness: [0],
        respect: [0],
        nonsense: [0]
    })

    return (
        <div className="flex flex-col h-full">
            <div className="flex flex-grow">
                <div className="w-[280px] nextgpt__bg_surface-light border-r nextgpt__border_stroke-light p-4 relative">
                    <h2 className="text-gray-500 text-sm p-2">Styles</h2>
                    <ul>
                        {communicationStyles.preset.map((style) => (
                            <li
                                key={style.key}
                                className={`p-2 hover:bg-gray-100 cursor-pointer rounded-lg flex justify-between ${selectedStyle !== style.key && 'nextgpt__text-muted'}`}
                                onClick={() => setSelectedStyle(style.key)}
                            >
                                <span>{style.name}</span>
                                <span className="italic w-5 h-5 text-sm flex justify-center items-center nextgpt__bg_surface rounded">P</span>
                            </li>
                        ))}
                        {communicationStyles.custom.map((style) => (
                            <li key={style.key} className={`p-2 hover:bg-gray-100 cursor-pointer rounded-lg ${selectedStyle !== style.key && 'nextgpt__text-muted'}`} onClick={() => setSelectedStyle(style.key)}>
                                {style.name}
                            </li>
                        ))}
                    </ul>
                    <div className="bg-white rounded-lg p-4 absolute bottom-4 right-4 left-4">
                        <h2 className="font-semibold mb-1">Have your own voices?</h2>
                        <p className="nextgpt__text-muted mb-2">Share text we can analyse to craft a custom tone.</p>
                        <a className="nextgpt__text-muted font-semibold flex items-center gap-2 cursor-pointer">
                            <span>Share examples</span>
                            <FaArrowRight />
                        </a>
                    </div>
                </div>
                <div className="p-4">
                    <div className="space-y-6">
                        <div className="flex justify-between items-center p-2">
                            <div className="flex items-center gap-2 nextgpt__text-muted">
                                <span className="font-semibold nextgpt__text-color_secondary">Parameters</span>
                                <span className="nextgpt__text-color_placeholder">Explaination</span>
                            </div>
                            <Menu>
                                <MenuButton className="nextgpt__text-color_placeholder"><IoIosMore size={28} /></MenuButton>
                                <MenuItems  anchor="bottom end" className="nextgpt__dropdown p-2 w-[200px]">
                                    <MenuItem>
                                        <div className="flex items-center py-[6px] px-2 rounded-lg hover:bg-gray-100 gap-2 cursor-pointer">
                                            <span className="w-4">
                                                <EditIcon width={18} height={18} />
                                            </span>
                                            <span className="nextgpt__text-size_md">Rename</span>
                                        </div>
                                    </MenuItem>
                                    <MenuItem>
                                        <div className="flex items-center py-[6px] px-2 rounded-lg hover:bg-gray-100 gap-2 cursor-pointer">
                                            <span className="w-4">
                                                <TrashIcon />
                                            </span>
                                            <span className="nextgpt__text-size_md">Delete style</span>
                                        </div>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </div>
                        <div className="nextgpt__bg_surface p-4 rounded-lg">
                            <table>
                                <thead>
                                    <tr>
                                        <td className="w-[120]"></td>
                                        <td className="w-[100px] nextgpt__text-size_sm nextgpt__text-color_placeholder text-center">VERY</td>
                                        <td className="w-[100px] nextgpt__text-size_sm nextgpt__text-color_placeholder text-center">SLIGHTLY</td>
                                        <td className="w-[100px] nextgpt__text-size_sm nextgpt__text-color_placeholder text-center">BALANCED</td>
                                        <td className="w-[100px] nextgpt__text-size_sm nextgpt__text-color_placeholder text-center">SLIGHTLY</td>
                                        <td className="w-[100px] nextgpt__text-size_sm nextgpt__text-color_placeholder text-center">VERY</td>
                                        <td className='w-120'></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {CUSTOM_STYLE.map((style) => (
                                        <tr key={style.key}>
                                            <td className="py-2 nextgpt__text-size_md">{style.start}</td>
                                            <td colSpan={5}>
                                                <div className="relative">
                                                    <div className="bg-gray-200 h-1 absolute w-full rounded-full">
                                                        <div
                                                            className="absolute h-full bg-gray-800 rounded-full"
                                                            style={{
                                                                left: styleValues[style.key][0] >= 0 ? '50%' : `${(50 + styleValues[style.key][0])}%`, width: `${Math.abs(styleValues[style.key][0])}%`
                                                            }}>

                                                        </div>
                                                    </div>
                                                    <Range
                                                        label="Select your value"
                                                        step={0.1}
                                                        min={-50}
                                                        max={50}
                                                        values={styleValues[style.key]}
                                                        onChange={(values) => setStyleValues(prev => ({ ...prev, [style.key]: values }))}
                                                        renderTrack={({ props, children }) => (
                                                            <div
                                                                className="h-2"
                                                                {...props}
                                                            >
                                                                {children}
                                                            </div>
                                                        )}
                                                        renderThumb={({ props }) => (
                                                            <div
                                                                {...props}
                                                                key={props.key}
                                                                className="h-6 w-6 bg-white border border-gray-200 shadow-md rounded-full"
                                                            />
                                                        )}
                                                    />
                                                </div>

                                            </td>
                                            <td className="py-2 text-end">{style.end}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="nextgpt__text-muted nextgpt__text-size_sm">Level of abstraction</label>
                                <div className="flex justify-between items-center">
                                    <span>Abstractness</span>
                                    <span className="flex gap-2">
                                        {['S', 'M', 'L'].map((size) => (
                                            <button
                                                key={size}
                                                className={`nextgpt__button-selector ${size === abstractness && 'active'}`}
                                                onClick={() => setAbstractness(size)}
                                            >
                                                {size}
                                            </button>
                                        ))}


                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Specificity</span>
                                    <span className="flex gap-2">
                                        {['General', 'Balanced', 'Specific'].map((size) => (
                                            <button
                                                key={size}
                                                onClick={() => setSpecificity(size)}
                                                className={`nextgpt__button-selector ${size === specificity && 'active'}`}
                                            >General</button>
                                        ))}


                                    </span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="nextgpt__text-muted nextgpt__text-size_sm">Length & complexity</label>
                                <div className="flex justify-between items-center">
                                    <span>Output length</span>
                                    <span className="flex gap-2">
                                        {['S', 'M', 'L'].map((size) => (
                                            <button
                                                key={size}
                                                className={`nextgpt__button-selector ${size === outputLength && 'active'}`}
                                                onClick={() => setOutputLength(size)}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Complexity</span>
                                    <span className="flex gap-2">
                                        {['General', 'Balanced', 'Specific'].map((size) => (
                                            <button
                                                key={size}
                                                onClick={() => setComplexity(size)}
                                                className={`nextgpt__button-selector ${size === complexity && 'active'}`}
                                            >{size}</button>
                                        ))}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center py-4 px-4 border-t nextgpt__border_stroke-light h-20">
                <button className="nextgpt__btn_primary nextgpt__btn_size_md">Cancel</button>
                <button className="nextgpt__btn_dark nextgpt__btn_size_md" onClick={onUseStyle}>Use style</button>
            </div>
        </div>
    )
}