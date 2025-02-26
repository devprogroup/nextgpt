"use client"

import React, { useState, useMemo } from "react"
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

import { StepType, StoreType } from "@/types";

interface StepNodeDataType {
    step: StepType,
    expanded: true,
    toggle: () => void
}



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
function StepNode({data}:{data: StepNodeDataType}) {

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
                            {data.step.name} (required)
                        </span>
                    </div>
                    <button onClick={data.toggle}>
                        {data.expanded ? <MdOutlineHorizontalRule /> : <MdAdd />}
                    </button>
                </div>
                {data.expanded && (
                    <div className="bg-white p-4 rounded-lg border-gray-400 border-2 space-y-4">
                        <div>
                            <h2 className="text-lg font-semibold">{data.step.title}</h2>
                            <p className="nextgpt__text-muted">To introduce oneself to the user and gather the user’s name.</p>
                        </div>
                        <div>
                            <label className="block text-sm nextgpt__text-muted">VERBATIM</label>
                            <div className="p-2 rounded-lg border bofer-gray-200 bg-gray-100">
                                <div className="text-sm border-l-2 border-gray-400 pl-2">{data.step.prompt}</div>
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
    const steps = useSelector((state: StoreType) => state.agent.task?.script?.steps)
    const [expanded, setExpanded] = useState<boolean[]>(steps?.map(() => true) || []);

    const toggle = (index: number) => {
        setExpanded((prev) => {
            const newExpanded = [...prev];
            newExpanded[index] = !newExpanded[index];
            return newExpanded;
        });
    }
    const nodes = useMemo<Node[]>(()=>{
        if(!steps) {
            return []
        }

        if(steps.length === 0) {
            return [
            { id: '0', type: 'StartNode', position: { x: 100, y: 0 }, data: {  } },
            { id: '1', type: 'EndNode', position: { x: 100, y: 100 }, data: {  } },
        ]}
        let top = 200
        const nodes: {
            id: string,
            type: string,
            position: {
                x: number,
                y: number
            },
            data: any
        }[] = [{ id: '0', type: 'StartNode', position: { x: 268, y: 100 }, data: { label: '0' } }]

        steps.forEach((step, index)=>{
            nodes.push({
                id: `${index+1}`,
                type: 'StepNode',
                position: { x: 100, y: top },
                data: { step: step, expanded: expanded[index], toggle: () => toggle(index) }
            })
            top += expanded[index] ? 360 : 100
        })
        nodes.push( { id: `${steps.length+1}`, type: 'EndNode', position: { x: 276, y: top }, data: { label: '2' } })

        return nodes
        
    }, [steps, expanded])
    
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