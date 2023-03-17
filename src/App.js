import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <p>Welcome to BetterReads.</p>
        <p>"It's like goodreads," she said. "But <i>better</i>".</p>
      </header>
      <div className='nav-bar'>
        <p><i className='fa-solid fa-house'></i> <i className='fa-solid fa-user'></i> <i class="fa-solid fa-magnifying-glass"></i></p>
        <p>Welcome, fellow bookworm!</p>
      </div>
      <footer>
        <p>(c) 2023 BetterReads</p>
        <p><i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-twitter"></i></p>
      </footer>
    </div>
  );
}

export default App;
