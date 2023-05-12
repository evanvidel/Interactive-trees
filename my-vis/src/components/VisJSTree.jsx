import React, { useRef, useEffect } from "react";
import { DataSet } from "vis-data/esnext";
import { Network } from "vis-network/esnext";
import "vis-network/styles/vis-network.css";

function VisJSTree() {
  const containerRef = useRef(null);
  const nodes = new DataSet([
    { id: 1, label: "Node 1" },
    { id: 2, label: "Node 2" },
    { id: 3, label: "Node 3" },
    { id: 4, label: "Node 4" },
    { id: 5, label: "Node 5" },
    { id: 6, label: "Node 6" },
    { id: 7, label: "Node 7" },
    { id: 8, label: "Node 8" },
  ]);
  const edges = new DataSet([
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 6 },
    { from: 3, to: 7 },
    { from: 4, to: 8 },
  ]);

  const data = { nodes, edges };
  const options = {
    layout: {
      hierarchical: {
        direction: "UD",
        sortMethod: "directed",
      },
    },
    edges: {
      arrows: {
        to: true,
      },
    },
  };

  useEffect(() => {
    const network = new Network(containerRef.current, data, options);
    return () => {
      network.destroy();
    };
  }, []);

  return <div ref={containerRef} style={{ height: "1000px" }} />;
}

export default VisJSTree;
