import React, { useState } from 'react';
import './App.css';
import Effect from './components/Effect';
import FetchSimple from './components/FetchSimple';
import Clock from './components/Clock';

function App() {
    const [view, setView] = useState('clock');
    let content = null;
    if( view === 'effect' ) {
        content = <Effect />;
    } else if( view === 'fetch' ) {
        content = <FetchSimple />;
    } else {
        content = <Clock />;
    }
    return (
        <div className="App">
        <header className="App-header">
            <h1> useEffect demo </h1>
        </header>
        <main>
            <nav>
                <button onClick={() => setView('effect')}>Effect hook</button>
                <button onClick={() => setView('fetch')}>Fetch (Chuck Norris)</button>
                <button onClick={() => setView('clock')}>Klocka</button>
            </nav>
            {content}
        </main>
        </div>
    );
}

export default App;
