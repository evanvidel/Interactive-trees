import React, { useState } from "react";
import { Treebeard } from "react-treebeard";

function TreebeardExample() {
  const [data, setData] = useState({
    name: "Curso de React",
    toggled: true,
    children: [
      {
        name: "Modulo 01",
        children: [
          { name: "Introdução" },
          { name: "Fundamentos do React" },
          { name: "Avançando em React" },
          { name: "React e CSS" },
          { name: "Formulário em React" }
        ],
      },
      {
        name: "Modulo 02",
        children: [
          { name: "Requisição HTTP com React" },
          { name: "React Route" },
          { name: "Introdução a API" },
          { name: "Context API do React" },
          { name: "Eantenda Hooks do React" },
        ],
      },
    ],
  });

  const onToggle = (node, toggled) => {
    if (node.children) {
      node.toggled = toggled;
    }
    setData({ ...data });
  };

  return <Treebeard data={data} onToggle={onToggle} />;
}

export default TreebeardExample;
