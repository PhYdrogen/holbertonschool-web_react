import logo from './logo.jpg';
import './App.css';
import { getFooterCopy } from '../utils/utils';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <hr/>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label for="email">Email: </label>
        <input id="email" type="text" />
        <label for="password">Password: </label>
        <input id="password" type="password"/>
        <button>OK</button>
      </div>
      <hr/>
      <div className="App-footer">
        <p>{ getFooterCopy(true) }</p>
      </div>
    </div>
  );
}

export default App;
