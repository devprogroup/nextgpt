import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { MdClose, MdDelete } from 'react-icons/md';

interface PropType {
    close: () => void;
    onAnalyze: () => void;
}
export default function PasteSampleText({ close, onAnalyze }: PropType) {
    const [sampleTexts, setSampleTexts] = React.useState<string[]>([]);
    const onAddSampleText = (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const sampleText = formData.get('sampleText')?.toString() || '';
        setSampleTexts([...sampleTexts, sampleText]);
        e.currentTarget.reset();
    }
    const onDeleteSampleText = (index: number) => {
        setSampleTexts(sampleTexts.filter((_, i) => i !== index));
    }
    return (
        <div className="p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
                <h2 className="flex items-center gap-2">
                    <FaArrowLeft className="text-gray-400" />
                    <span className="font-bold text-lg">Paste Sample Text</span>
                </h2>
                <button onClick={close} className="bg-gray-200 w-7 h-7 rounded-full flex justify-center items-center text-gray-500"><MdClose /></button>
            </div>
            <div className="grid grid-cols-2 flex-grow gap-4">
                <form className="flex flex-col gap-4" onSubmit={onAddSampleText}>
                    <textarea name="sampleText" className="w-full bg-white shadow-[0px_1px_2px_-1px_rgba(16,24,40,0.05),0px_2px_4px_-2px_rgba(16,24,40,0.1),0px_0px_0px_1px_#EEEFF1] rounded-lg p-4 flex-grow" placeholder="Paste sample text here"></textarea>
                    <button type="submit" className="w-full block bg-white shadow-[0px_1px_2px_-1px_rgba(16,24,40,0.05),0px_2px_4px_-2px_rgba(16,24,40,0.1),0px_0px_0px_1px_#EEEFF1,inset_0px_-1px_0px_#F7F7F8] rounded-lg py-2 nextgpt__font_semibold">Add</button>
                </form>
                <div className="bg-gradient-to-t from-[#FBFBFB] to-[#FFFFFF] shadow-[0px_1px_2px_-1px_rgba(16,24,40,0.05),0px_0px_0px_1px_#EEEFF1,0px_2px_4px_-2px_rgba(16,24,40,0.1),0px_4px_8px_-4px_rgba(16,24,40,0.1),inset_0px_0px_0px_1px_#FFFFFF,inset_0px_0px_3px_4px_#FBFBFB] rounded-[12px] p-4 flex flex-col border">
                    <h3 className="text-sm text-gray-500">Examples</h3>
                    <div className="flex-grow">
                        <ul className="space-y-2">
                            {sampleTexts.map((text, index) => (
                                <li key={index} className="p-2 border rounded-lg relative group">
                                    "{text}"
                                    <button className="bg-gray-200 rounded text-red-700 absolute right-2 top-2 hidden group-hover:block" onClick={() => onDeleteSampleText(index)}><MdDelete /></button>
                                </li>
                            ))}
                        </ul>

                    </div>
                    <div className="flex justify-end">
                        <button className="nextgpt__btn_dark nextgpt__btn_size_md" onClick={onAnalyze}>Analyze</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

