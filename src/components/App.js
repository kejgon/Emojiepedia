//jshint esversion:6
import React from "react";
import Emoji from "./Emojies";
import emojipedias from "../emojipedia";



function createEmoji(emojie) {
  return (
    <Emoji
      id={emojie.id}
      key={emojie.id}
      emoji={emojie.emoji}
      name={emojie.name}
      meaning={emojie.meaning}

    />

  );
}


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedias.map(createEmoji)}

      </dl>

    </div>
  )
}

export default App;
