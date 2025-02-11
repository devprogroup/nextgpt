'use client';

import BottomNav from '@/components/create-agent/common/bottom-nav';
import React from 'react';

export default function Skills() {
    return (
        <div>
            <div className="space-y-4">
                <div>
                    <input placeholder="Search over 100+ tasks agents can perform" />
                </div>
                <div className="nextgpt__agent_border border-dashed py-6 rounded-md text-center">
                    <p className="text-center font-semibold">Add your first skill</p>
                    <p className="nextgpt__agent_text-muted mb-6">Give your agent more context and resource to handle tasks.</p>
                    <button className="bg-gray-200 py-1 px-3 rounded-lg">Create skill</button>
                </div>
            </div>
        </div>
    );
};

