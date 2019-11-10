import React from 'react';
import {Component} from 'react';
import List from './composition/List';
import './App.css';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      cards: {}      
    }
  }

  render() {
    const {store} = this.props;
    console.log(store);
    return (
      <main id="appWrapper">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <section className="App-list">
          <List />
          {store.lists.forEach(id => {
            console.log(id);
          })}
        </section>
      </main>      
    )
  }
}

export default App;
