import React, { useState } from "react";


import { FaArrowLeft } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Range } from "react-range";

const CUSTOM_STYLE = [
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
    close: () => void;
    create: () => void;
}
export default function AnalyzeResult({ close, create }: PropType) {
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
        <div className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-4 p-4">
                <h2 className="flex items-center gap-2">
                    <FaArrowLeft className="text-gray-400" />
                    <span className="font-bold text-lg">Paste Sample Text</span>
                </h2>
                <button onClick={close} className="bg-gray-200 w-7 h-7 rounded-full flex justify-center items-center text-gray-500"><MdClose /></button>
            </div>
            <div className="flex py-2 flex-grow">

                <div className="p-4">
                    <div className="space-y-6">
                        <div className="nextgpt__bg_surface p-4 rounded-lg">
                            <table>
                                <thead>
                                    <tr>
                                        <td className="w-[120]"></td>
                                        <td className="w-[100px] text-sm text-gray-600">VERY</td>
                                        <td className="w-[100px] text-sm text-gray-600">SLIGHTLY</td>
                                        <td className="w-[100px] text-sm text-gray-600">BALANCED</td>
                                        <td className="w-[100px] text-sm text-gray-600">SLIGHTLY</td>
                                        <td className="w-[100px] text-sm text-gray-600">VERY</td>
                                        <td className='w-120'></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {CUSTOM_STYLE.map((style) => (
                                        <tr key={style.key}>
                                            <td className="py-2">{style.start}</td>
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
                                <label className="nextgpt__text-muted text-sm">Level of abstraction</label>
                                <div className="flex justify-between items-center">
                                    <span>Abstractness</span>
                                    <span className="flex gap-2">
                                        {['S', 'M', 'L'].map((size) => (
                                            <button
                                                key={size}
                                                className={`rounded-full py-1 px-5 border ${size === abstractness && 'bg-gray-200'}`}
                                                onClick={() => setAbstractness(size)}
                                            >{size}</button>
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
                                                className={`rounded-full py-1 px-5 border ${size === specificity && 'bg-gray-200'}`}
                                            >General</button>
                                        ))}


                                    </span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="nextgpt__text-muted text-sm">Length & complexity</label>
                                <div className="flex justify-between items-center">
                                    <span>Output length</span>
                                    <span className="flex gap-2">
                                        {['S', 'M', 'L'].map((size) => (
                                            <button
                                                key={size}
                                                className={`rounded-full py-1 px-5 border ${size === outputLength && 'bg-gray-200'}`}
                                                onClick={() => setOutputLength(size)}
                                            >{size}</button>
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
                                                className={`rounded-full py-1 px-5 border ${size === complexity && 'bg-gray-200'}`}
                                            >{size}</button>
                                        ))}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[380px] border-l border-gray-300 p-4 flex flex-col justify-end">
                    <div className="flex justify-end">
                        <div className="w-[80%] nextgpt__bg_surface p-2 rounded-lg">Respond via email to a customer who received the wrong item in their order.</div>
                    </div>
                    <div className="flex gap-2 mt-4">
                        <div className="min-w-8 max-w-8">
                            <img src="/create-agent/avatar.png" alt="Avatar" className="rounded-lg" />
                        </div>
                        <div>
                            <p>The speaker discusses how pricing can be adjusted for individual models within a product bundle:</p>
                            <div className="h-8"></div>
                            <ol className="list-decimal">
                                <li><h1 className="font-bold text-lg">Quantity based pricing</h1></li>
                                <ul className="list-disc ml-4">
                                    <li className="text-sm">Pricing is influenced by the quantity of a product.</li>
                                </ul>
                            </ol>

                        </div>
                    </div>
                    <button className="rounded-lg px-4 text-gray-500 p-2 mt-4 bg-gray-100 text-start">Try this style...</button>
                </div>
            </div>
            <div className="flex justify-between py-4 px-4 border-t border-gray-300">
                <button className="bg-gray-100 border px-4 py-2 rounded-lg" onClick={close}>Cancel</button>
                <button className="nextgpt__btn-dark" onClick={create}>Create style</button>
            </div>
        </div>

    );
}