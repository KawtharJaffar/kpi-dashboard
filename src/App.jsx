import './App.css';
function KPICard({ title, value }) {
  return (
    <div className="kpi-card">
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
  );
}

function App() {
  const revenue = 12500;
  const orders = 150;
  const users = 850;

  return (

  <div>
    <h1>My KPI Dashboard</h1>

    <div className="dashboard-grid">
      <KPICard title="Total Revenue" value={revenue} />
      <KPICard title="Total Orders" value={orders} />
      <KPICard title="Total Users" value={users} />
    </div>
  </div>
);
}

export default App;
