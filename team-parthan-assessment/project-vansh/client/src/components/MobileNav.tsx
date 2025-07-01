import React from 'react';
import { CheckCircle, Menu, RotateCcw, User } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../components/ui/sheet";
import UserStats from './UserStats';
import type { CustomContent, Topic, UserProfile } from '../interface/types';
import UserProfileD from './UserProfileDropdown';
import InstructorEnrollmentCard from './EnrollmentCard';
import RaiseConcern from './RaiseConcern';
import RecentActivity from './RecentActivity';

interface MobileNavProps {
  userProfile: UserProfile;
  onUploadClick: () => void;
  activeTab: 'topics' | 'custom';
  onTabChange: (tab: 'topics' | 'custom') => void;
  showUploadConcern: boolean;
  setShowUploadConcern: (show: boolean) => void;
  statusMessage: { type: 'success' | 'error'; message: string } | null;
  setStatusMessage: (status: { type: 'success' | 'error'; message: string }) => void;
  topics: Topic[]
  customContents: CustomContent[]
}

const MobileNav: React.FC<MobileNavProps> = ({
  userProfile,
  topics,
  customContents,
  showUploadConcern,
  setShowUploadConcern,
  statusMessage,
  setStatusMessage
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-100">
        <div className="h-screen overflow-y-auto p-6 space-y-6">
        <div className="mt-6 space-y-6">
          {/* User Profile Section */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg">
            <UserProfileD />
          </div>
          <div>
            <UserStats customContents={customContents} userProfile={userProfile} topics={topics} />
          </div>
          <InstructorEnrollmentCard user={userProfile} />

            <div>
              <button
                onClick={() => setShowUploadConcern(true)}
                className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white px-3 md:px-4 py-2 rounded-lg transition-colors"
              >
                Submit Concern
              </button>

              {showUploadConcern && (
                <div className="fixed inset-0 bg-white dark:bg-gray-800  flex justify-center items-start z-50 overflow-auto p-6">
                  {/* <div className="relative bg-white max-w-3xl w-full rounded-lg shadow-lg">
            <button
              onClick={() => setShowUploadConcern(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <SubmitConcernPage enrolledUnder = {userProfile.enrolledUnder} topics={topics}  
            onClose={() => setShowUploadConcern(false)}
  onSubmitStatus={(status) => setStatusMessage(status)} />
          </div> */}
                  <RaiseConcern enrolledUnder={userProfile.enrolledUnder} topics={topics} onClose={() => setShowUploadConcern(false)} />
                  {statusMessage && (
                    <div
                      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded shadow-lg z-[60] text-white ${statusMessage.type === 'success' ? 'bg-green-600' : 'bg-red-600'
                        }`}
                    >
                      {statusMessage.message}
                    </div>
                  )}
                </div>
              )}
            </div>

            <RecentActivity topics={topics} />
          
        
        </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;