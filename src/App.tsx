import React, { useEffect } from 'react';
import './App.css';


function App() {
  const viewDiv = React.useRef<any>();
  useEffect(() => {
    if (viewDiv.current) {
      import("./data/webScene").then(app => app.initialize(viewDiv.current))
    }
  })
  return (
    <div style={{ height: "500px" }} id="viewDiv" ref={viewDiv}>
    </div>
  );
}

export default App;
