
// import './App.css';
// import SmCard from './Components/Public/SmCard/SmCard';
// import Navbar from './Components/Public/Navbar/Navbar';
// import ChartCard from './Components/Public/ChartCard/ChartCard';
// import Footer from './Components/Public/Footer/Footer';

// function App() {
//   const data = [
//     ['Task', 'No'],
//     ['Approved', 21],
//     ['Pending', 4],
//     ['Rejected', 2]
//   ];
//   return (
//     <div className="App">
//       <Navbar />  {/* nirosh - navigation bar */}
//       <SmCard width="150px" height="150px" topic="Total Partners" value="24" />
//       <SmCard width="150px" height="150px" topic="Total Products" value="3,420" />
//       <SmCard width="150px" height="150px" topic="Average Time" value="2m 34s" />
//       <SmCard width="150px" height="150px" topic="New Partner Requests" value="10" />
//       <SmCard width="150px" height="150px" topic="New Partner Requests" value="10" />
//       <ChartCard width="250px" height="250px" topic="Request Status" dataArray={data} />
//       <Footer/>

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

//     </div>
//   );
// }

export default App;
