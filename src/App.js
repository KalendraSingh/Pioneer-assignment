
import './App.css';
import CryptoPrices from './components/CryptoPrices';
import MetaMask from './components/Metamask';
import PopulationGraph from './components/PopulationGraph';
import Twitter from './components/Twitter';
import Dashboard from './pages/Dashboard';
import { Route,Routes } from 'react-router-dom';
import Organization from "./pages/Organization"
import Assets from './pages/Assets';
import Trade from './pages/Trade';
import History from './pages/History';
import Wallet from './pages/Wallet';


function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Dashboard />} exact />
        <Route path='/org' element = {<Organization/>}/>
        <Route path='/assets' element = {<Assets/>}/>
        <Route path='/trade' element = {<Trade/>}/>
        <Route path='/history' element = {<History/>}/>
        <Route path='/wallet' element = {<Wallet/>}/>
     </Routes>
    </div>
  );
}

export default App;
