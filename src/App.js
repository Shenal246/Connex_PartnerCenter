
import './App.css';
import SmCard from './Components/Public/SmCard/SmCard';

function App() {
  return (
    <div className="App">
      <SmCard width="150px" height="150px" topic="Total Partners" value="24" />
      <SmCard width="150px" height="150px" topic="Total Products" value="3,420" />
      <SmCard width="150px" height="150px" topic="Average Time" value="2m 34s" />
      <SmCard width="150px" height="150px" topic="New Partner Requests" value="10" />
    </div>
  );
}

export default App;
