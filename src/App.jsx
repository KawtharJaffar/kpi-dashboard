import './App.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

function KPICard({ title, value }) {
  return (
    <div className="kpi-card">
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
  );
}

//main funcation 
function App() {
  const revenue = 12500;
  const orders = 150;
  const users = 850;

const revenueData = [
  { month: "Jan", revenue: 4200 },
  { month: "Feb", revenue: 5800 },
  { month: "Mar", revenue: 4900 },
  { month: "Apr", revenue: 7200 },
  { month: "May", revenue: 9100 },
  { month: "Jun", revenue: 12500 },
];



  return (
    <div>
      <h1>My KPI Dashboard</h1>

      <div className="dashboard-grid">
        <KPICard title="Total Revenue" value={revenue} />
        <KPICard title="Total Orders" value={orders} />
        <KPICard title="Total Users" value={users} />
      </div>

      <div className="chart-card">
        <h2>Monthly Revenue</h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={revenueData}>
            <XAxis dataKey="month" />
           <YAxis
            width={85}
          tickFormatter={(value) => `$${value.toLocaleString()}`} />
          <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
            <Bar dataKey="revenue" fill="#6366f1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}


export default App;
