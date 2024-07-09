import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Public/Navbar/Navbar';
import Tpnt from './Components/Public/topnotch/Tpnt';
import Progress from './Components/Public/Progress/Progress';
import SmCard from './Components/Public/SmCard/SmCard';

function App() {
  return (
    <>
    <Navbar/>  {/* nirosh - navigation bar */}
    <Tpnt/>
    <SmCard width="150px" height="150px" topic="Total Partners" value="24" />
  
    <Progress width="300px" height="60px" topic="Total Partners" value={"69"}/>
    
    </>
  );
}

export default App;
