import React, { useContext, useState } from "react";
import { CodeContext } from "../context/CodeProvider";

function Result(props) {
  const { html, css, js } = useContext(CodeContext);
  const [sourceCode, setSourceCode] = useState("");
  const code = ` <html>
  <body>${html}</body>
  <style>${css}</style>
  <script>${js}</script>
</html>
    `;

  const onHandleResult = () => {
    setSourceCode(code);
  };

  console.log(sourceCode);
  return (
    <div>
      <button
        onClick={onHandleResult}
        style={{
          backgroundColor: "#2a88ed",
          border: "none",
          outline: "none",
          borderRadius: 4,
          padding: 4,
          margin: 4,
          color: "white",
        }}
      >
        Save & Run
      </button>
      <iframe
        srcDoc={sourceCode}
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default Result;
