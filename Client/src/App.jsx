import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>This page is online</h1>
      <nav>
        <ul>
          <li>
            <Link to="/home">Go to Home Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
