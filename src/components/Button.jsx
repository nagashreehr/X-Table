import React from "react";

export default function Button({ text, action }) {
  return (
    <div style={{ display: "inline-block" }}>
      <button onClick={action}>{text}</button>
    </div>
  );
}
