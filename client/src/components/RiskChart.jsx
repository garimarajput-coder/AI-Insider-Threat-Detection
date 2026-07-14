import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function RiskChart({ highRisk, mediumRisk, lowRisk }) {
  const data = {
    labels: ["High", "Medium", "Low"],
    datasets: [
      {
        data: [highRisk, mediumRisk, lowRisk],
        backgroundColor: [
          "#ef4444",
          "#f59e0b",
          "#22c55e",
        ],
      },
    ],
  };

  return (
    <div className="bg-slate-800 rounded-xl p-5 mb-6">
      <h2 className="text-xl font-bold mb-4">
        📊 Risk Distribution
      </h2>

      <div className="max-w-sm mx-auto">
        <Pie data={data} />
      </div>
    </div>
  );
}

export default RiskChart;