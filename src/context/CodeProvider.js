import React, { createContext, useState } from "react";
export const CodeContext = createContext();
function CodeProvider({ children }) {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  return (
    <div>
      <CodeContext.Provider value={{ html, setHtml, css, setCss, js, setJs }}>
        {children}
      </CodeContext.Provider>
    </div>
  );
}

export default CodeProvider;
