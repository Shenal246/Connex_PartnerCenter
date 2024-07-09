
import './App.css';
import SmCard from './Components/Public/SmCard/SmCard';
import Navbar from './Components/Public/Navbar/Navbar';
import ChartCard from './Components/Public/ChartCard/ChartCard';
import Footer from './Components/Public/Footer/Footer';
import Tpnt from './Components/Public/topnotch/Tpnt';

function App() {
  const data = [
    ['Task', 'No'],
    ['Approved', 21],
    ['Pending', 4],
    ['Rejected', 2]
  ];
  return (
    <>
    <div className='asdfghjk'>
      <Navbar />  {/* nirosh - navigation bar */}
      {/* <Tpnt /> */}
      
      <SmCard width="150px" height="150px" topic="Total Partners" value="24" />
      <SmCard width="150px" height="150px" topic="Total Products" value="3,420" />
      <SmCard width="150px" height="150px" topic="Average Time" value="2m 34s" />
      <SmCard width="150px" height="150px" topic="New Partner Requests" value="10" />
      <SmCard width="150px" height="150px" topic="New Partner Requests" value="10" />
      <ChartCard width="250px" height="250px" topic="Request Status" dataArray={data} /><br/>
      </div>
      <Footer />
    </>
  );
}

export default App;
