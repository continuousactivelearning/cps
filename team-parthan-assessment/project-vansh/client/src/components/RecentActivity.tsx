import { CheckCircle, Clock, RotateCcw, User } from "lucide-react";
import type { Topic } from "../interface/types"

interface RecentActivityProps {
  
  topics: Topic[]

}

const RecentActivity: React.FC<RecentActivityProps> = ({
  topics,
}) => {
  return (

    <>
    {/* User Profile Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900 flex items-center">
                  <User className="w-5 h-5 mr-2 text-indigo-600" />
                  Recent Activity
                </h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-3">
                {topics.filter(t => t.lastAttempt).sort((a, b) =>
                  new Date(b.lastAttempt!).getTime() - new Date(a.lastAttempt!).getTime()
                ).slice(0, 5).map(topic => (
                  <div key={topic.id} className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      {topic.status === 'mastered' ?
                        <CheckCircle className="w-4 h-4 text-green-500" /> :
                        <Clock className="w-4 h-4 text-yellow-500" />
                      }
                      <span className="text-gray-700">{topic.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">
                        {topic.lastAttempt?.toLocaleDateString()}
                      </div>
                      <div className="text-xs font-medium text-gray-600">
                        {(topic.bestScore || 0) / (topic.totalQuestions || 1) * 100}% best
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
    </>
    
  );
};

export default RecentActivity;


