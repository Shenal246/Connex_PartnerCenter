
import './App.css';
import SmCard from './Components/Public/SmCard/SmCard';
import Navbar from './Components/Public/Navbar/Navbar';
import ChartCard from './Components/Public/ChartCard/ChartCard';
import Footer from './Components/Public/Footer/Footer';
import Tpnt from './Components/Public/topnotch/Tpnt';
import Progress from './Components/Public/Progress/Progress';

function App() {
  const data = [
    ['Task', 'No'],
    ['Approved', 21],
    ['Pending', 4],
    ['Rejected', 2]
  ];
  return (
    <>
      <div className='asdfghjk row'>
        <Navbar />  {/* nirosh - navigation bar */}
        {/* <Tpnt /> */}

        <SmCard width="16vh" height="16vh" topic="Total Partners" value="24" />
        <SmCard width="16vh" height="16vh" topic="Total Products" value="3,420" />
        <SmCard width="16vh" height="16vh" topic="Average Time" value="2m 34s" />
        <SmCard width="16vh" height="16vh" topic="New Partner Requests" value="10" />
        <SmCard width="16vh" height="16vh" topic="New Partner Requests" value="10" />
        <ChartCard width="25vh" height="25vh" topic="Request Status" dataArray={data} />
        <Progress width="30vh" height="7vh" topic="Total Partners" value={"69"} />

      </div>
      <Footer />
    </>
  );
}

export default App;
