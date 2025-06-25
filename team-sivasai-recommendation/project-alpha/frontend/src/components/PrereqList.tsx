type Props = {
  list: string[];
};

const PrereqList: React.FC<Props> = ({ list }) => (
  <div style={{ marginTop: '24px' }}>
    <h3>Prerequisite List</h3>
    <ul style={{ paddingLeft: '20px', margin: '8px 0' }}>
      {list.map((item, index) => (
        <li key={index} style={{ marginBottom: '4px' }}>• {item}</li>
      ))}
    </ul>
  </div>
);

export default PrereqList;