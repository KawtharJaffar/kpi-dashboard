
function KPICard({ title, value }) {
  return (
    <div>
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

      <KPICard title="Total Revenue" value={revenue} />
      <KPICard title="Total Orders" value={orders} />
      <KPICard title="Total Users" value={users} />
    </div>
  );
}

export default App;
