import {
  FaUsers,
  FaExclamationTriangle,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import RiskChart from "./components/RiskChart";

function App() {
  const [activities, setActivities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

useEffect(() => {
  fetch(`${API_URL}/api/activities`)
    .then((res) => res.json())
    .then((data) => setActivities(data))
    .catch((err) => console.error(err));
}, []);

  const highRisk = activities.filter(
    (a) => a.riskPoints >= 35
  ).length;

  const mediumRisk = activities.filter(
    (a) => a.riskPoints >= 21 && a.riskPoints < 35
  ).length;

  const lowRisk = activities.filter(
    (a) => a.riskPoints < 21
  ).length;

  const totalRisk = activities.reduce(
    (sum, a) => sum + a.riskPoints,
    0
  );

  const filteredActivities = activities.filter((activity) =>
    activity.username.toLowerCase().includes(searchTerm.toLowerCase())
  );
return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
  🛡️ AI Insider Threat Detection Dashboard
</h1>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
  <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 flex items-center justify-between hover:scale-105 transition-transform duration-300">
  <div>
    <p className="text-gray-400 text-sm">Total Users</p>
    <h2 className="text-3xl font-bold">{activities.length}</h2>
  </div>

  <FaUsers className="text-blue-400 text-4xl" />
</div>

  <div className="bg-red-900/30 rounded-xl p-6 shadow-lg border border-red-700 flex items-center justify-between hover:scale-105 transition-transform duration-300">
  <div>
    <p className="text-red-300 text-sm">High Risk</p>
    <h2 className="text-3xl font-bold">{highRisk}</h2>
  </div>

  <FaExclamationTriangle className="text-red-400 text-4xl" />
</div>

<div className="bg-yellow-900/30 rounded-xl p-6 shadow-lg border border-yellow-700 flex items-center justify-between hover:scale-105 transition-transform duration-300">
  <div>
    <p className="text-yellow-300 text-sm">Medium Risk</p>
    <h2 className="text-3xl font-bold text-white">{mediumRisk}</h2>
  </div>

  <FaShieldAlt className="text-yellow-400 text-4xl" />
</div>

  <div className="bg-green-900/30 rounded-xl p-6 shadow-lg border border-green-700 flex items-center justify-between hover:scale-105 transition-transform duration-300">
  <div>
    <p className="text-green-300 text-sm">Low Risk</p>
    <h2 className="text-3xl font-bold text-white">{lowRisk}</h2>
  </div>

  <FaCheckCircle className="text-green-400 text-4xl" />
</div>
</div>

<RiskChart
  highRisk={highRisk}
  mediumRisk={mediumRisk}
  lowRisk={lowRisk}
/>
<div className="bg-slate-800 rounded-xl p-5 mb-6 border border-blue-500">
  <h2 className="text-2xl font-bold text-blue-400 mb-3">
    🤖 AI Security Summary
  </h2>

  <p>
    The system analyzed <strong>{activities.length}</strong> user activities.
    It detected <strong>{highRisk}</strong> high-risk events,
    <strong> {mediumRisk}</strong> medium-risk events, and
    <strong> {lowRisk}</strong> low-risk events.
  </p>

  <p className="mt-3">
    Immediate investigation is recommended for users performing sensitive
    actions such as payroll downloads and HR database access.
  </p>
</div>

<div className="bg-red-900 border border-red-500 rounded-xl p-5 mb-6">
  <h2 className="text-2xl font-bold text-red-300 mb-3">
    🚨 Security Alerts
  </h2>

  {activities
    .filter((activity) => activity.riskPoints >= 35)
    .map((activity, index) => (
      <div key={index} className="mb-2">
        <p>
          <strong>{activity.username}</strong> performed{" "}
          <span className="text-red-300">{activity.action}</span>
          {" "}({activity.riskPoints} Risk Points)
        </p>
      </div>
    ))}
</div>
<div className="mb-6">
  <input
    type="text"
    placeholder="🔍 Search by username..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full p-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
  />
</div>

<div className="grid gap-4">
  {filteredActivities.map((activity, index) => (
    <div
      key={index}
      className="bg-slate-800 rounded-xl p-5 border border-slate-700"
    >
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">{activity.username}</h2>
          <p>💻 {activity.device}</p>
          <p>🌐 {activity.ipAddress}</p>
          <p>📌 {activity.action}</p>
          <div className="mt-4 bg-slate-700 rounded-lg p-3 border-l-4 border-cyan-400">
  <p className="text-cyan-300 font-semibold">🤖 AI Analysis</p>

  <p className="text-gray-300 text-sm mt-1">
    {activity.action.toLowerCase().includes("failed")
      ? "Multiple failed login attempts detected. This activity may indicate a brute-force or unauthorized access attempt."

      : activity.action.toLowerCase().includes("download")
      ? "Large data downloads can indicate potential insider data exfiltration. Verify whether this action was authorized."

      : activity.action.toLowerCase().includes("usb")
      ? "USB device activity can pose a risk of data leakage. Review if the device usage complies with security policies."

      : activity.action.toLowerCase().includes("hr")
      ? "Access to HR records should match the user's responsibilities. Verify if this access was appropriate."

      : "This activity appears normal but should be monitored for unusual behavior patterns."}
  </p>
</div>
        </div>


        <div className="text-right">
          {activity.riskPoints >= 35 ? (
            <span className="bg-red-600 px-4 py-2 rounded-lg">
              🔴 High
            </span>
          ) : activity.riskPoints >= 21 ? (
            <span className="bg-yellow-500 text-black px-4 py-2 rounded-lg">
              🟠 Medium
            </span>
          ) : (
            <span className="bg-green-600 px-4 py-2 rounded-lg">
              🟢 Low
            </span>
          )}

          <p className="mt-3 font-bold">
            {activity.riskPoints} pts
          </p>
        </div>
      </div>
    </div>
  ))}
  <footer className="mt-10 border-t border-slate-700 pt-6 text-center text-gray-400">
  <p className="text-lg font-semibold text-white">
    AI Insider Threat Detection Dashboard
  </p>

  <p className="mt-2">
    Powered by React • Node.js • MongoDB
  </p>

  <p className="mt-1 text-sm">
    AI-Based Risk Analysis & Security Monitoring
  </p>
  <p className="mt-4 text-xs text-gray-500">
  © 2026 AI Insider Threat Detection Dashboard
</p>
</footer>
</div>
    </div>
  );
}

export default App;
