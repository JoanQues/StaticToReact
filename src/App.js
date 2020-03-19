import React from 'react';
import Menu from "./Menu";
import 'bootstrap/dist/css/bootstrap.css';
import Aside from "./Aside";
import Section from "./Section";
import Footer from "./Footer";
import './style.css';

function App() {
  return (
    <div className="App container">
      <header className="App-header header">
    <Menu/>
      </header>
      <main className="row">
        <Aside/>
        <Section/>
      </main>
      <footer className="row footer">
<Footer/>
      </footer>
    </div>
  );
}

export default App;
