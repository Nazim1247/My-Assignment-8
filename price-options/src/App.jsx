import LineChart from "./Component/LineChart/LineChart";
import BarCharts from "./Component/LineCharts/BarCharts/BarCharts";
import LineCharts from "./Component/LineCharts/LineCharts";
// import DaisyNav from "./Component/Navbar/DaisyNav";
import Navbar from "./Component/Navbar/Navbar";
import Phones from "./Component/Phones/Phones";
import PriceOptions from "./Component/PriceOptions/PriceOptions";


const App = () => {
  return (
    <div>
      {/* <DaisyNav></DaisyNav> */}
      <Navbar></Navbar>
      <h3 className="text-5xl bg-red-300 text-white">Price Options</h3>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
      <LineCharts></LineCharts>
      <BarCharts></BarCharts>
      
      
    </div>
  );
};

export default App;