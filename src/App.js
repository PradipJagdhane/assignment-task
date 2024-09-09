import './App.css';
import LoginPage from './Componets/Auth/loginPage';
import Header from './Componets/Header/Header';
import Navbar from './Componets/Navbar/navbar';
import AllRoutes from './Componets/routes/allRoutes';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Navbar /> */}
    
      <AllRoutes />
    </div>
  );
}

export default App;
