"use client"

import React, { useCallback, useMemo } from "react"
import { useSelector } from "react-redux";
import {
    ReactFlow,
    Background,
    Handle,
    Position,
    Edge,
    Node,
    BackgroundVariant,
} from '@xyflow/react';
import { MdRocket, MdCheck, MdOutlineHorizontalRule, MdAdd } from "react-icons/md";

import { StoreType } from "@/types";

;



function StartNode() {
    return (
        <>
            <div className="bg-white p-2 rounded-full flex">
                <MdRocket size={24} color="#00B8A7" />
                <p>Script begins...</p>
            </div>
            <Handle type="source" position={Position.Bottom} />
        </>
    );
}
function EndNode() {
    return (
        <>
            <Handle type="target" position={Position.Top} />
            <div className="bg-white p-2 rounded-full flex">
                <MdRocket size={24} color="#00B8A7" />
                <p>Script end...</p>
            </div>
        </>
    );
}
function StepNode() {
    const [showDetails, setShowDetails] = React.useState<boolean>(true);
    

    return (
        <>
            <Handle type="target" position={Position.Top} />
            <div className="space-y-1 w-[480px]">
               <div className="flex justify-between items-center bg-white p-2 nextgpt__text-muted rounded-lg border-gray-400 border-2">
                    <div className="flex items-center">
                        <div className="p-1 bg-gray-500 rounded">
                            <div className="bg-white">
                                <MdCheck color="gray" size={10} />
                            </div>
                        </div>
                        <span className="text-gray-500 ml-2">
                            ST-2.1 (required)
                        </span>
                    </div>
                    <button onClick={()=>{setShowDetails(!showDetails)}}>
                        {showDetails ? <MdOutlineHorizontalRule /> : <MdAdd />}
                    </button>
                </div>
                {showDetails && (
                    <div className="bg-white p-4 rounded-lg border-gray-400 border-2 space-y-4">
                        <div>
                            <h2 className="text-lg font-semibold">Present yourself</h2>
                            <p className="nextgpt__text-muted">To introduce oneself to the user and gather the user’s name.</p>
                        </div>
                        <div>
                            <label className="block text-sm nextgpt__text-muted">VERBATIM</label>
                            <div className="p-2 rounded-lg border bofer-gray-200 bg-gray-100">
                                <div className="text-sm border-l-2 border-gray-400 pl-2">Hello, I’m Nestor , your online assistant. My role is to gather all your personal details for your Orange B2B order intended for businesses & professionals. Once I have everything, I’ll connect you straight away with an Orange advisor who will finalise your request with you on WhatsApp. Let’s get to know each other, what is your name?</div>
                            </div>
                        </div>
                    </div>
                )}
                
            </div>
            <Handle type="source" position={Position.Bottom} id="a" />
            
        </>
    );
}

const nodeTypes = { StartNode:StartNode,  StepNode: StepNode, EndNode: EndNode };

export default function StepGraph() {
    const steps = useSelector((state: StoreType) => state.agent.task.script?.steps)
    const nodes = useMemo<Node[]>(()=>{
        if(!steps) {
            return []
        }
        if(steps.length === 0) {
            return [
            { id: '0', type: 'StartNode', position: { x: 100, y: 0 }, data: { label: '1' } },
            { id: '1', type: 'EndNode', position: { x: 100, y: 100 }, data: { label: '2' } },
        ]}
        return [
            { id: '0', type: 'StartNode', position: { x: 100, y: 0 }, data: { label: '0' } },
            ...steps.map((step, index) => ({
                id: `${index+1}`,
                type: 'StepNode',
                position: { x: 100, y: 100 * (index + 1) },
                data: { label: `${index+1}` }
            })),
            { id: `${steps.length+1}`, type: 'EndNode', position: { x: 100, y: 100 * (steps.length + 1) }, data: { label: '2' } },
        ]
    }, [steps])
    
    const edges = useMemo<Edge[]>(()=>{
        if(!steps)
            return [];
        if(steps.length === 0)
            return [{ id: 'e-start-end', source: 'start', target: 'end', animated: true }];
        return [
            { id: 'e-0-1', source: '0', target: '1', animated: true },
            ...steps.map((_, index) => ({
                id: `e-${index+1}-${index + 2}`,
                source: `${index+1}`,
                target: `${index + 2}`,
                animated: true
            })),
        ]
    }, [steps])

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
        >
            <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
        </ReactFlow>
    )
}