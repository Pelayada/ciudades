
import { PlacesProvider } from '../../commons/context/PlacesProvider';
import { Routes } from '../../routes/Routes';
import './App.css';

function App() {
  return (
    <PlacesProvider>
      <Routes />
    </PlacesProvider>
  );
}

export default App;
