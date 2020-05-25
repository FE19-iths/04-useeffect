import React from 'react';
import './App.css';
import Effect from './components/Effect';
import FetchSimple from './components/FetchSimple';

function App() {
    return (
        <div className="App">
        <header className="App-header">
            <h1> useEffect demo </h1>
        </header>
        <main>
            <Effect />
            <FetchSimple />
        </main>
        </div>
    );
}

export default App;
