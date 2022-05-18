import { useEffect, useState } from "react";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJs.register(ChartDataLabels,Tooltip, Title, ArcElement, Legend);

export const Doughnut1 =() =>{
  const [data, setData] = useState({
    datasets: [
      {
        data: [16, 16, 16, 16, 16, 16],
        backgroundColor: [
          "#96bf00",
          "#0697cc",
          "#e64437",
          "#f7a110",
          "#375e6e",
          "#0f1628",
        ],
        cutout: "40%",
        borderWidth:"",
      },
      {
        data:[1],
        backgroundColor:["white"],
        borderWidth:"",
      }
    ],
  });
  return (
    <div
      className="doughnut"
      style={{
        width: "300px",
        height: "300px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Doughnut
        data={data}
        width={150}
        options={{
          maintainAspectRatio: false,
          plugins: {
            tooltip: {
              callbacks: {
                labelTextColor: (context) => {
                  return 'black'
                },
                label: function (context) {
                  // console.log(context)
                  let array = ["hi", "hello", "good", "not", "well", "cool"];
                  for (let i in array) {
                    let index = context.dataIndex
                    return `${array[index]}`;
                  }
                },
              },
              padding: 10,
              backgroundColor: "white",
            },
            datalabels: {
              display: true,
              formatter: (value, context) => {
                let datalabel = ["01", "02", "03", "04", "05", "06"]
                console.log(context.dataIndex)
                for (let i in datalabel) {
                  let index = context.dataIndex
                  return `${datalabel[index]}`;
                }
              },
              color: "white",
            },
          },
        }
        }
      />
    </div>
  );
}
