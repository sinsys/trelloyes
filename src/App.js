import React from 'react';
import List from './composition/List';
import Card from './composition/Card';

import './App.css';

function App() {
  return (
    <section id="appWrapper">
      <Card />
      <List />
    </section>
  );
}

export default App;
