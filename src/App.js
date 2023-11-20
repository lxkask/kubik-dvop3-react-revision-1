import React from 'react';
import Card from './Card';
import CardDynamic from './CardDynamic';

function App() {
  return (
    <div className="App">
      <Card />
      <CardDynamic title="První karta" description="Popis první karty" link="https://vitejs.dev/guide/" />
      <CardDynamic title="Druhá karta" description="Popis druhé karty" link="#" />
      <CardDynamic title="Třetí karta" description="Popis třetí karty" link="#" />
      <CardDynamic title="Čtvrtá karta" description="Popis čtvrté karty" link="#" />
    </div>
  );
}

export default App;
