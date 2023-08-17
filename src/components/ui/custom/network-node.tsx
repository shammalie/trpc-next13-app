'use client';

import React from 'react';
import { Handle, Node, NodeProps, Position } from 'reactflow';
import Icon from './dynamic-load-lucid-icon';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

type NodeData = {
  name: string;
  job: string;
  iconName: keyof typeof dynamicIconImports;
};

type CustomNode = Node<NodeData>;

export const CustomNode = React.memo(function CustomNode({ data }: NodeProps<NodeData>) {
  return (
    <div className="px-4 py-2 ring-sm rounded-xl bg-card border-1 border-border">
      <div className="flex">
        <div className="rounded-full w-12 h-12 flex justify-center items-center bg-gray-100">
          <Icon name={data.iconName} />
        </div>
        <div className="ml-2">
          <div className="text-lg font-bold">{data.name}</div>
          <div className="text-gray-500">{data.job}</div>
        </div>
      </div>

      <Handle type="target" position={Position.Top} className="w-8 rounded-md !bg-primary" />
      <Handle type="source" position={Position.Bottom} className="w-8 rounded-md !bg-primary" />
    </div>
  );
});
