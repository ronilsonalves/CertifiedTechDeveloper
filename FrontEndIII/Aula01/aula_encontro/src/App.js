import './App.css';

const profile = 'https://avatars.githubusercontent.com/u/8782579';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="App-logo" alt="logo" />
        <h1>Hello World!</h1>
        <p>
          Este é meu "Olá mundo" em React.
        </p>
        <a
          className="App-link"
          href="https://github.com/ronilsonalves"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/ronilsonalves
        </a>
      </header>
    </div>
  );
}

export default App;
