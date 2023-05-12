import React, { useState } from "react";
import { Tree } from "antd";

const { TreeNode } = Tree;

const data = [
  {
    title: "Node 1",
    key: "1",
    children: [
      { title: "Modulo 01", key: "1-1" },
      { title: "Modulo 02", key: "1-2" },
      { title: "Modulo 03", key: "1-3" },
    ]
  },
  {
    title: "Node 2",
    key: "2",
    children: [
      { title: "Modulo 04", key: "2-1" },
      { title: "Modulo 05", key: "2-2" },
      { title: "Modulo 06", key: "2-3" },
    ]
  }
];

const InteractiveTree = () => {
  const [expandedKeys, setExpandedKeys] = useState([]);

  const handleExpand = (expandedKeys) => {
    setExpandedKeys(expandedKeys);
  };

  return (
    <Tree
      expandedKeys={expandedKeys}
      onExpand={handleExpand}
      selectable={false}
    >
      {data.map((node) => (
        <TreeNode title={node.title} key={node.key}>
          {node.children &&
            node.children.map((child) => (
              <TreeNode title={child.title} key={child.key} />
            ))}
        </TreeNode>
      ))}
    </Tree>
  );
};

export default InteractiveTree;
