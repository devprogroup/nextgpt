import React from 'react';
import { useSelector } from 'react-redux';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';


import '@xyflow/react/dist/style.css';
import { StoreType } from '@/types';
import Modal from '@/components/create-agent/common/modal';
import { Circuit } from '../../svg';
import { MdArrowBack, MdArrowForward, MdCheck, MdCheckBox } from 'react-icons/md';
import ScriptDetails from './step-details';
import StepDependencies from './step-dependencies';
import StepGraph from './step-graph';


interface PropType {
    isOpen: boolean
    close: () => void
}

export default function ScriptModal({ isOpen, close }: PropType) {
    const script = useSelector((state: StoreType) => state.agent.task.script)

    const [stepIndex, setStepIndex] = React.useState<number>(0);

    return script ? (
        <Modal
            isOpen={isOpen}
            close={close}
            title={script.name}
            titleIcon={<Circuit fill="#FF6A25" />}
        >
            <div className="bg-gray-100 w-[1400px] h-[800px] relative">
                <StepGraph />
                <div className="absolute top-0 right-0 h-full p-4 w-[480px]">
                    <div className="h-full w-full bg-white rounded-lg overflow-hidden shadow-lg">
                        <div className="flex justify-between items-center bg-gray-200 p-2">
                            <div className="flex items-center">
                                <div className="p-1 bg-gray-500 rounded">
                                    <div className="bg-white">
                                        <MdCheck color="gray" size={10} />
                                    </div>
                                </div>
                                <span className="text-gray-500 ml-2">
                                    {script.steps[0].name}
                                </span>
                            </div>
                            <div className="text-gray-500 flex items-center">
                                <button className="mr-1"><MdArrowBack /></button>
                                <button><MdArrowForward /></button>
                            </div>
                        </div>
                        {(script.steps.length > 0 && stepIndex >= 0) && (
                            <div className="">
                                <TabGroup>
                                    <div  className="border-b px-2">
                                        <TabList>
                                            <Tab className="text-gray-500 px-3 py-2 data-[selected]:text-gray-900">Details</Tab>
                                            <Tab className="text-gray-500 px-3 py-2 data-[selected]:text-gray-900">Dependencies</Tab>
                                        </TabList>
                                    </div>
                                    <TabPanels>
                                        <TabPanel className="p-4">
                                            <ScriptDetails stepIndex={stepIndex}/>
                                        </TabPanel>
                                        <TabPanel className="p-4">
                                            <StepDependencies stepIndex={stepIndex} />
                                        </TabPanel>
                                    </TabPanels>
                                </TabGroup>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Modal>
    ) : null;
}
