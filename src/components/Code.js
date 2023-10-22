import React, { useContext } from "react";
import logo from "../images/logo.avif";
import Editor from "./Editor";
import { CodeContext } from "../context/CodeProvider";
function Code(props) {
  const { html, setHtml, css, setCss, js, setJs } = useContext(CodeContext);
  return (
    <div>
      <header
        style={{
          display: "flex",
          marginBottom: 1,
          backgroundColor: "#151515",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <img
          src={logo}
          style={{ height: 50, width: 50, borderRadius: 50, padding: 10 }}
          alt=""
        />
        <h2 style={{ color: "white" }}>Happy Coding!!</h2>
      </header>
      <div style={{ display: "flex", height: "50vh" }}>
        <Editor
          heading="HTML"
          language="xml"
          icon="/"
          color="red"
          value={html}
          onChange={setHtml}
        />
        <Editor
          heading="CSS"
          language="css"
          icon="*"
          color="skyblue"
          value={css}
          onChange={setCss}
        />
        <Editor
          heading="JS"
          language="javascript"
          icon="( )"
          color="yellow"
          value={js}
          onChange={setJs}
        />
      </div>
    </div>
  );
}

export default Code;
