import React, { useContext } from "react";
import Home from "./components/Home";
import CodeProvider from "./context/CodeProvider";
function App(props) {
  return (
    <div>
      <CodeProvider>
        <Home />
      </CodeProvider>
    </div>
  );
}

export default App;
