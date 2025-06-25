interface LearnedConceptCardProps {
  title: string;
}

const LearnedConceptCard = ({ title }: LearnedConceptCardProps) => {
  return (
    <div className="card text-center bg-secondary-subtle text-white h-100 shadow-sm border border-primary">
      <div className="card-body">
        <h4 className="card-title text-info mb-2">{title}</h4>
        <p className="card-text text-muted">Status: <i className="fas fa-check-circle text-success me-1"></i> Completed</p>
      </div>
    </div>
  );
};

export default LearnedConceptCard;