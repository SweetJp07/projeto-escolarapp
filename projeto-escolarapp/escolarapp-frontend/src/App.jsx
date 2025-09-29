import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import './index.css';

function App() {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <div className="App">
      {isLoginView
        ? <Login onSwitch={() => setIsLoginView(false)} />
        : <Register onSwitch={() => setIsLoginView(true)} />
      }
    </div>
  );
}

export default App;