import React from 'react';
import './style/_reset.scss';
import './style/_config.scss';

import Btn from './components/atoms/Btn';

function App() {
  return (
    <div className="App">
      {["Primary", "Secondary", "Tertiary"].map(n => <Btn href="/" styleType={n.toLowerCase() as any}>{n} Button Here</Btn>)}<br />
      {["Primary", "Secondary", "Tertiary"].map(n => <Btn disabled href="/" styleType={n.toLowerCase() as any}>{n} Button Here</Btn>)}<br />
      <Btn grow onClick={() => console.log("Dummy")} disabled>asdf</Btn>
    </div>
  );
}

export default App;
