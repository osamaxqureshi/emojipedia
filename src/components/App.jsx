import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
import createEmoji from "./createEmoji";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEmoji)} </dl>
    </div>
  );
}

export default App;
