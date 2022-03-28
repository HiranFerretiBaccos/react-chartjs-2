import React, { useState } from 'react';
import BarChart from "./components/libraries/BarChart";
import LineChart from "./components/libraries/LineChart";
import PieChart from "./components/libraries/PieChart";
import { Data } from "./components/libraries/Data";

function App() {

  const [userDataState, setUserDataState] = useState({
    labels: Data.map((data) => data.valuesBelow),
    datasets: [
      {
        label: "Atlas Schindler Chart",
        data: Data.map((data) => data.dataInside),
        backgroundColor: [
          'red',
          'orange',
          'yellow',
          'green',
          'blue',
          'purple',
        ],
        borderColor: "#000",
        borderWidth: 2,
      },
    ],
  });

  return (
    <>
      {/*Gráficos*/}
      <div Style='margin: 2rem 0 2rem 0; display: flex; justify-content: space-evenly; text-decoration: underline'>
        <div style={{ width: 500 }}>
          <h2 Style='text-align: center'>Bar Chart</h2>
          <BarChart chartData={userDataState} />
        </div>
        <div style={{ width: 500 }}>
          <h2 Style='text-align: center'>Line Chart</h2>
          <LineChart chartData={userDataState} />
        </div>
        <div style={{ width: 300 }}>
          <h2 Style='text-align: center'>Pie Chart</h2>
          <PieChart chartData={userDataState} />
        </div>
      </div>
    </>
  )
}

export default App;