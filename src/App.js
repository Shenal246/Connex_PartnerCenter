
import './App.css';
import SmCard from './Components/Public/SmCard/SmCard';
import Navbar from './Components/Public/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>  {/* nirosh - navigation bar */}
      <SmCard width="150px" height="150px" topic="Total Partners" value="24" />
      <SmCard width="150px" height="150px" topic="Total Products" value="3,420" />
      <SmCard width="150px" height="150px" topic="Average Time" value="2m 34s" />
      <SmCard width="150px" height="150px" topic="New Partner Requests" value="10" />
    </div>
  );
}

export default App;
