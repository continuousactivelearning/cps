interface LearnedConceptCardProps {
  title: string;
}

const LearnedConceptCard = ({ title }: LearnedConceptCardProps) => {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "1rem",
      margin: "0.5rem",
      backgroundColor: "#e3f2fd"
    }}>
      <h4>{title}</h4>
      <p>Status: ✅ Completed</p>
    </div>
  );
};

export default LearnedConceptCard;
