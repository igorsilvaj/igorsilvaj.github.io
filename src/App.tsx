import React from 'react';
import './App.css';
import Construction from './components/Construction';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="App">
        <Construction />
      </div>
    );
  }
}

export default App;
