
import React from 'react';
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { RatingDoughnut } from './RatingDoughnut';

ChartJS.register(
    ChartDataLabels,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

let datas = [12,4,5,6,7,35,25]

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
    datalabels:{
        formatter: function (value, context) {
            // return context.chart.data.labels[context.dataIndex];
           
            return `${value}%`;
          },
        anchor:'end',
        align:"bottom"
    }
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
      ticks: {
        callback: function (val, index) {
          return `${val}%`;
        },
      },
    },
  },
  
};

const labels = [
"Face Wash",
 "Face cream",
 "moisturizer",
"Face pack",
 "Toners &...",
 "Face Gel",
];


export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: datas.map(d=>d),
      backgroundColor: 'rgb(238, 80, 79)',
      barThickness: 40,
    },
    {
      label: 'Dataset 2',
      data:datas.map(d=>d),
      backgroundColor:'rgb(255, 207, 97)',
      barThickness: 40,
    },
    {
      label: 'Dataset 3',
      data: datas.map(d=>d),
      backgroundColor: 'rgb(0, 188, 138)',
      barThickness: 40,
    },
    
  ],
};

export function StackedChart() {
  return(
      <div className='rating'>
      <div className='multiRatingChart'>
      <Bar height={200} options={options} data={data} />;
      </div>
      <RatingDoughnut/>
      </div>
  ) 
}
