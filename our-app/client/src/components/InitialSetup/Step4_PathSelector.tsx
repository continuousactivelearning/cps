import React, { useEffect, useState } from 'react';

interface Props {
  userId: string;
  onNext: () => void;
}

const Step4_PathSelector: React.FC<Props> = ({ userId, onNext }) => {
  const [paths, setPaths] = useState<string[][]>([]);

  useEffect(() => {
    fetch(`/api/users/${userId}/dashboard`)
      .then((res) => res.json())
      .then((data) => {
        // Generate learning paths based on user's assessment data
        const userCourses = data.courses || [];
        const inProgressCourse = userCourses.find((c: any) => c.status === 'in-progress');
        const completedCourses = userCourses.filter((c: any) => c.status === 'completed');
        
        // Simple path generation based on target concept
        const generatedPaths: string[][] = [];
        if (inProgressCourse) {
          generatedPaths.push([inProgressCourse.courseName, "Practice Problems", "Advanced Topics"]);
          generatedPaths.push(["Fundamentals", inProgressCourse.courseName, "Real-world Applications"]);
        }
        setPaths(generatedPaths);
      });
  }, [userId]);

  const handleChoose = (path: string[]) => {
    alert(`You selected: ${path.join(" → ")}`);
    onNext(); // Assume path will be saved by backend already
  };

  return (
    <div>
      <h4>Choose Your Learning Path</h4>
      {paths.map((p, idx) => (
        <div key={idx} className="card p-3 m-2">
          Path {idx + 1}: {p.join(" → ")}
          <button className="btn btn-outline-primary float-end" onClick={() => handleChoose(p)}>
            Choose
          </button>
        </div>
      ))}
    </div>
  );
};

export default Step4_PathSelector;
