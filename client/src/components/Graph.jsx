import React, { useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
import { json } from 'react-router-dom';
//   import faker from 'faker';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
//   export const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top' as const,
//       },
//       title: {
//         display: true,
//         text: 'Chart.js Line Chart',
//       },
//     },
//   };
  


const Graph = ({ city, title }) => {
//   const [graphData, setGraphData] = useState({});

//   useEffect(() => {
//     fetchWeatherGraphData(city);
//   }, [city]);

//   const fetchWeatherGraphData = async (city) => {
//     try {
//       const response = await fetch(`http://127.0.0.1:5000/graph/${city}`);
//       const data = await response.json();
//       setGraphData(data);
//     } catch (error) {
//       console.error('Error fetching weather graph data:', error);
//     }
//   };

const [graph, setGraph] = useState([]);
useEffect(() => {
    const getData = async () => {
        const data = await fetch(`http://127.0.0.1:5000/graph/${city}`);
        const json = await data.json();
        console.log(json);
        setGraph(json);
    }

    getData(city);
}, []);

    // const labels = ['14-4-24', '15-4-24', '16-4-24', '17-4-24', '18-4-24', '19-4-24', '20-4-24', '21-4-24', '22-4-24', '23-4-24'];
     const data = {
      labels:graph?.dates,
      datasets: [
        {
          label: 'Temprature',
          data: graph?.temperatures,
            // data: gr,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Aqi',
          data: graph?.aqis,
          borderColor: 'rgba(9, 1, 39, 1)',
          backgroundColor: 'rgba(9, 1, 39, 1)',
        },
        {
            label: 'humidity',
            data: graph?.humidities,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rrgba(9, 1, 39, 1)',
          },
      ],
    };

  return (


    
    <div style={{marginBottom: "120px"}}>
      <h2>{title} {city}</h2>
      <Line
        data={data}
        updateMode='resize'
        style={{width:"800px", height: "700px", marginTop: "30px"}}
        // options={}
      />
    </div>
  );
};

export default Graph;
