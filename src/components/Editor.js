import React, { useState } from "react";
// import { FaRes } from "react-icons/fa";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { FaLock, FaLockOpen } from "react-icons/fa";

function Editor(props) {
  const [copied, setCopied] = useState(false);
  const [lock, setLock] = useState(false);
  const { heading, language, icon, color, value, onChange } = props;
  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <div
      style={{
        flexGrow: 1,
        flexBasis: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#151515",
        }}
      >
        <div
          style={{
            display: "flex",
            backgroundColor: "#063643",

            width: "100px",
          }}
        >
          <p
            style={{
              backgroundColor: color,
              height: 23,
              width: 20,
              borderRadius: 5,
              textAlign: "center",
              margin: 4,
            }}
          >
            {icon}
          </p>
          <p style={{ color: "white", fontWeight: "bold", margin: 4 }}>
            {heading}
          </p>
        </div>
        <div>
          {lock ? (
            <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
              <button
                style={{
                  backgroundColor: "#2a88ed",
                  border: "none",
                  outline: "none",
                  borderRadius: 4,
                  padding: 4,
                  margin: 4,
                }}
              >
                Copy
              </button>
            </CopyToClipboard>
          ) : (
            <div></div>
          )}

          <button onClick={() => setLock(!lock)} style={{ marginRight: 15 }}>
            {lock ? <FaLockOpen /> : <FaLock />}
          </button>
        </div>
      </div>
      <div style={{ overflowY: "scroll" }}>
        <ControlledEditor
          onBeforeChange={handleChange}
          value={value}
          options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            lineNumbers: true,

            theme: "material",
          }}
        />
      </div>
    </div>
  );
}

export default Editor;
