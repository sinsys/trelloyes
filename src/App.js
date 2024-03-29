import React from 'react';
import {Component} from 'react';
import List from './composition/List';
import './App.css';

function consoleDebug(data, dataType){
  switch(dataType){
    case 'array':
      data.forEach(item => {
        console.log(item);
      });
      break;
    case 'object':
      Object.keys(data).forEach(key => {
        console.log(data[key]);
      })
      break;
    default:
      console.log("I don't understand what type of data I'm analyzing");
  }
}

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      cards: {}      
    }
  }

  render() {
    const {store} = this.props;
    consoleDebug(store.lists, 'array');
    consoleDebug(store.allCards, 'object');
    return (
      <main id="App-wrapper">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <section className="App-list">
          {store.lists.map(listItem => (
            <List
              key={listItem.id}
              header={listItem.header}
              cards={listItem.cardIds.map(id => store.allCards[id])}
            />
          ))}
        </section>
      </main>      
    )
  }
}

export default App;


//   render() {
//     const { store } = this.props
//     return (
//       <main className='App'>
//         <header className='App-header'>
//           <h1>Trelloyes!</h1>
//         </header>
//         <div className='App-list'>
//           {store.lists.map(list => (
//             <List
//               key={list.id}
//               header={list.header}
//               cards={list.cardIds.map(id => store.allCards[id])}
//             />
//           ))}
//         </div>
//       </main>
//     );
//   }
// }