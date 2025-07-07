import { useState } from 'react';

const sampleReports = [
  { id: 1, type: 'Bug', user: 'alice', description: 'Quiz not loading on course page', date: '2024-06-03', status: 'Open' },
  { id: 2, type: 'Feedback', user: 'bob', description: 'Add more React exercises', date: '2024-06-02', status: 'Resolved' },
  { id: 3, type: 'Issue', user: 'grace', description: 'Profile picture upload failed', date: '2024-06-01', status: 'Pending' },
  { id: 4, type: 'Bug', user: 'frank', description: 'Progress not updating after quiz', date: '2024-05-31', status: 'Open' },
  { id: 5, type: 'Feedback', user: 'irene', description: 'Dark mode is awesome!', date: '2024-05-30', status: 'Resolved' },
];

const statusColors: Record<string, string> = {
  Open: '#facc15', // yellow
  Pending: '#38bdf8', // blue
  Resolved: '#22c55e', // green
};

const AdminReports = () => {
  const [reports, setReports] = useState(sampleReports);

  const handleView = (id: number) => {
    alert(`View report ID: ${id}`);
  };

  const handleResolve = (id: number) => {
    setReports(reports.map(r => r.id === id ? { ...r, status: 'Resolved' } : r));
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this report?')) {
      setReports(reports.filter(r => r.id !== id));
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Reports</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Type</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>User</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Description</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Date</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Status</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map(report => (
            <tr key={report.id}>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{report.type}</td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{report.user}</td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{report.description}</td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{report.date}</td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>
                <span style={{ background: statusColors[report.status], color: '#222', borderRadius: 6, padding: '2px 10px', fontSize: 13 }}>
                  {report.status}
                </span>
              </td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>
                <button onClick={() => handleView(report.id)} style={{ marginRight: '0.5rem' }}>View</button>
                {report.status !== 'Resolved' && (
                  <button onClick={() => handleResolve(report.id)} style={{ marginRight: '0.5rem', color: '#22c55e' }}>Resolve</button>
                )}
                <button onClick={() => handleDelete(report.id)} style={{ color: 'red' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminReports; 
