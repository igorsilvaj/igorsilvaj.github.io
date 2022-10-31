import React from 'react';
import './App.css';
import TestComponent from './components/TestComponent';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="App">
        <TestComponent />
      </div>
    );
  }
}

export default App;
