import { Header } from '../Header/Header';
import { Login } from '../Login/Login';
import { Footer } from '../Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Login />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
