import ControlledEditor from "@monaco-editor/react";
import { MonacoProps } from "../types";
const MonacoEditor = (props: MonacoProps) => {
  const { language, displayName, value, onChange, height, width } = props;
  function handleChange(ev: any, value: string) {
    onChange(value);
  }
  return (
    <div className="editor-container">
      <div className="editor-title">
        <button>{displayName}</button>
      </div>
      <ControlledEditor
        // onBeforeChange={handleChange}
        value={value}
        className=""
        height={height}
        width={width}
        language={language}
        onChange={handleChange}
        // theme="vs-dark"
      />
    </div>
  );
};

export default MonacoEditor;
