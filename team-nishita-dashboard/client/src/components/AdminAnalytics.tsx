const metrics = [
  { label: 'Total Users', value: 1234 },
  { label: 'Active Users', value: 89 },
  { label: 'Completion Rate', value: '87%' },
  { label: 'Courses', value: 42 },
];

const recentActivity = [
  { time: '2024-06-03 10:15', activity: 'User alice completed "React Fundamentals"' },
  { time: '2024-06-03 09:50', activity: 'User bob registered' },
  { time: '2024-06-03 09:30', activity: 'User grace completed "Node.js Basics"' },
  { time: '2024-06-02 18:20', activity: 'User jane_admin added new course "TypeScript Essentials"' },
  { time: '2024-06-02 17:05', activity: 'User frank completed "CSS Flexbox"' },
];

const AdminAnalytics = () => (
  <div style={{ padding: '2rem' }}>
    <h2>Analytics</h2>
    <div style={{ display: 'flex', gap: '2rem', margin: '2rem 0' }}>
      {metrics.map((m) => (
        <div key={m.label} style={{ background: '#eaf1fb', borderRadius: 8, padding: '1.5rem 2rem', minWidth: 150, textAlign: 'center', boxShadow: '0 1px 4px #0001', border: '1.5px solid #d1d5db' }}>
          <div style={{ fontSize: 22, fontWeight: 600, color: '#111' }}>{m.value}</div>
          <div style={{ color: '#555', marginTop: 6 }}>{m.label}</div>
        </div>
      ))}
    </div>
    <div style={{ marginTop: '2rem' }}>
      <h3>Recent Activity & Trends</h3>
      <ul style={{ marginTop: 12, paddingLeft: 0, listStyle: 'none' }}>
        {recentActivity.map((item, idx) => (
          <li key={idx} style={{ padding: '0.75rem 0', borderBottom: '1px solid #eee' }}>
            <span style={{ color: '#888', fontSize: 13, marginRight: 12 }}>{item.time}</span>
            <span>{item.activity}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default AdminAnalytics; 
