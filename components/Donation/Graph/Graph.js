import Chart from "chart.js/auto";
import { useRef, useEffect } from "react";
import classes from "./Graph.module.scss";

function Graph(props) {
    const { type, labels, caption, data, bg, title } = props;
    const canvasRef = useRef();
    useEffect(() => {
        const chartRef = canvasRef.current.getContext("2d");
        const config = {
            type,
            data: {
                labels,
                datasets: [{ label: caption, data, backgroundColor: bg, barThickness: 15 }],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                    legend: {
                        position: "top",
                    },
                    title: {
                        display: true,
                        text: title,
                    },
                },
            },
        };
        const mychart = new Chart(chartRef, config);
        // destory existing chart
        return () => {
            mychart.destroy();
        };
    }, [type, labels, caption, data, bg, title]);
    return (
        <div className={classes.Graph}>
            <canvas ref={canvasRef} id="chart" />
        </div>
    );
}
export default Graph;
