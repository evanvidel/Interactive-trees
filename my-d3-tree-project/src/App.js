import ReactD3Tree from "react-d3-tree";

function App() {
  const myTreeData = [
    {
      name:"Parent Node",
      
      children: [
        {
          name: "Child Node 1",
          attributes: {
            keyA: "val A",
            keyB: "val B",
            keyC: "val C"
          }
        },
        {
          name: "Child Node 2",
          attributes: {
            keyD: "val D",
            keyE: "val E",
            keyF: "val "
          }
        }
      ]
    }
  ]
  return (
    <div  style={{ width: "100vw", height: "100vh" }} >
      <ReactD3Tree data={myTreeData}/>
    </div>
  )
}

export default App;