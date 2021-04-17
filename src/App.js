import './App.scss';
import NavbarMenu from './components/layout/navbar-menu';
import RouterComponent from './router';

function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <RouterComponent />
    </div>
  );
}

export default App;
