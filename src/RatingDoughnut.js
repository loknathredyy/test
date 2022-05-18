import { useEffect, useState } from "react";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
// import "ch"
ChartJs.register(ChartDataLabels, Tooltip, Title, ArcElement, Legend);

export const RatingDoughnut = () => {
    let datas = [1001, 1130, 4318]
    const [data, setData] = useState({
        datasets: [
            {
                data: [1001, 1130, 4318],
                backgroundColor: [
                    'rgb(238, 80, 79)',
                    'rgb(255, 207, 97)',
                    'rgb(108, 222, 129)'
                ],
                cutout: "60%",
                borderWidth: "",
            },
        ],
    });
    return (
        <div
            className="doughnut"
            style={{
                width: "250px",
            }}
        >
            <Doughnut
                data={data}
                width={90}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "",
                            padding: {
                                bottom: 50
                            },
                            weight: "bold",
                            color: "#00325c",
                            font: {
                                size: 13
                            },
                            align: "start"
                        },
                        datalabels: {
                            display: true,
                            formatter: function (value, context) {
                                // return context.chart.data.labels[context.dataIndex];
                                const datapoints = context.chart.data.datasets[0].data;
                                function totalSum(total, datapoint) {
                                    return total + datapoint;
                                }
                                const totalValue = datapoints.reduce(totalSum, 0);
                                const percentageValue = ((value / totalValue) * 100).toFixed(0);

                                return `${percentageValue}%`;
                            },
                            color: "black",
                            align: "end",
                            anchor: "end",
                            padding: {
                                left: -5
                            },
                            labels: {
                                padding: { top: 10 },
                                position: "outside",
                                title: {
                                    font: {
                                        weight: "bold"

                                    }
                                },
                            }

                        },
                    }
                }
                }
            />
            <div className="legendLabels">
                <div className="legend">
                    <div className="ratingLabels">
                        <div className="legendColor1">

                        </div>
                        <div>
                            Detractors(0-6)
                        </div>
                    </div>
                    <div className="ratingData">
                        {datas[0]}
                    </div>
                </div>
                <div className="legend">
                    <div className="ratingLabels">
                        <div className="legendColor2">
                        </div>
                        <div>
                            Passives(7-8)
                        </div>
                    </div>
                    <div className="ratingData">
                        {datas[1]}
                    </div>
                </div>
                <div className="legend">
                    <div className="ratingLabels">
                        <div className="legendColor3">

                        </div>
                        <div>
                            Promoters(9-10)
                        </div>
                    </div>
                    <div className="ratingData">
                        {datas[2]}
                    </div>
                </div>
            </div>
        </div>
    );
}
