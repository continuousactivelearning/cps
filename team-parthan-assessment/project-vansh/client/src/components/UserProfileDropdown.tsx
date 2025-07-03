import React, { useState, useRef, useEffect } from "react";
import useSWR, { mutate } from 'swr';
import {
  User,
  LogOut,
  Trophy,
  Clock,
  Target,
  Camera,
  X,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { getDetails, uploadPhoto } from "../services/detailService";
import { useTheme } from "./ThemeProvider";
import api from "../services/api";

interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
  masteredTopics: number;
  totalScore: number;
  streak: number;
}


const UserProfileDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showPhotoUpload, setShowPhotoUpload] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [photo, setPhoto] = useState<string>("");
  const navigate = useNavigate();

  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: "",
    email: "",
    avatar: "",
    masteredTopics: 3,
    totalScore: 85,
    streak: 7,
  });

  const handleSignOut = (): void => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    navigate("/");
    setIsOpen(false);
  };

  const handlePhotoUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserProfile((prev) => ({
          ...prev,
          avatar: e.target?.result as string,
        }));
        setPhoto(e.target?.result as string);
        setShowPhotoUpload(false);
      };
      reader.readAsDataURL(file);
    }
  };
  const triggerFileInput = (): void => {
    fileInputRef.current?.click();
  };

  const removePhoto = (): void => {
    setUserProfile((prev) => ({
      ...prev,
      avatar: "",
    }));
    setShowPhotoUpload(false);
  };
  const { data: details} = useSWR('/me', getDetails, {
    dedupingInterval: 600000,
    revalidateOnFocus: false,
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        if (details) {
          setUserProfile({
            name: details.name,
            email: details.email,
            avatar: details.avatar || '',
            masteredTopics: details.masteredTopics || 0,
        totalScore: details.totalScore || 0,
        streak: details.streak || 0,
      });
    }
  } catch (error) {
    console.log("Error fetching details in mainpage ", error);
  }
};
fetchUserProfile();

  }, [details]);

  useEffect(() => {
    const updatePhoto = async () => {
      try {
        if (photo) {
          await uploadPhoto(photo);
          mutate("/me");
          console.log("Photo uploaded");
        }
      } catch (error) {
        console.error("Error uploading photo:", error);
      }
    };
    updatePhoto();
  }, [photo]);



  return (
    <>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-3 bg-white hover:bg-gray-50 lg:border lg:border-gray-200 rounded-xl px-4 py-3 transition-all duration-200 lg:shadow-sm hover:shadow-md w-full"
        >
          <div
            className="relative w-10 h-10 rounded-full flex items-center justify-center overflow-hidden group cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setShowPhotoUpload(true);
            }}
          >
            {userProfile.avatar ? (
              <img
                src={userProfile.avatar}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="group w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                <User className="w-5 h-5 text-white group-hover:hidden" />
              </div>
            )}
            <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
              <Camera className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
          </div>
          <div className="text-left">
            <div className="font-semibold text-gray-900">
              {userProfile.name}
            </div>
            <div className="text-sm text-gray-500">Level: Expert</div>
          </div>
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-3 w-80 bg-white rounded-2xl shadow-xl border border-gray-200 z-50 overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-indigo-50 to-purple-50">
              <div className="flex items-center space-x-4">
                <div
                  className="relative w-14 h-14 rounded-full overflow-hidden cursor-pointer group"
                  onClick={() => setShowPhotoUpload(true)}
                >
                  {userProfile.avatar ? (
                    <img
                      src={userProfile.avatar}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="group w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                      <User className="w-8 h-8 text-white group-hover:hidden" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    {userProfile.name}
                  </h3>
                  <p className="text-sm text-gray-600">{userProfile.email}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-3 bg-white rounded-xl shadow-sm">
                  <div className="flex items-center justify-center mb-2">
                    <Trophy className="w-5 h-5 text-yellow-500 mr-1" />
                    <span className="font-bold text-gray-900 text-lg">
                      {userProfile.masteredTopics}
                    </span>
                  </div>
                  <div className="text-xs text-gray-600 font-medium">
                    Mastered
                  </div>
                </div>
                <div className="text-center p-3 bg-white rounded-xl shadow-sm">
                  <div className="flex items-center justify-center mb-2">
                    <Target className="w-5 h-5 text-green-500 mr-1" />
                    <span className="font-bold text-gray-900 text-lg">
                      {userProfile.totalScore}%
                    </span>
                  </div>
                  <div className="text-xs text-gray-600 font-medium">
                    Avg Score
                  </div>
                </div>
                <div className="text-center p-3 bg-white rounded-xl shadow-sm">
                  <div className="flex items-center justify-center mb-2">
                    <Clock className="w-5 h-5 text-blue-500 mr-1" />
                    <span className="font-bold text-gray-900 text-lg">
                      {userProfile.streak}
                    </span>
                  </div>
                  <div className="text-xs text-gray-600 font-medium">
                    Day Streak
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 space-y-2">
              
              <button
                onClick={handleSignOut}
                className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-red-50 rounded-xl transition-all duration-200 group"
              >
                <LogOut className="w-5 h-5 text-gray-500 group-hover:text-red-600 transition-colors" />
                <span className="text-gray-700 group-hover:text-red-600 font-medium transition-colors">
                  Sign Out
                </span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Photo Upload Modal */}
      <Dialog open={showPhotoUpload} onOpenChange={setShowPhotoUpload}>
        <DialogContent className="max-w-md w-full rounded-2xl p-6">
          <DialogHeader className="mb-4">
            <div className="flex justify-between items-center">
              <DialogTitle className="text-xl font-bold text-gray-900">
                Update Profile Photo
              </DialogTitle>
            </div>
          </DialogHeader>

          <div className="text-center mb-6">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200">
              {userProfile.avatar ? (
                <img
                  src={userProfile.avatar}
                  alt="Current profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                  <User className="w-10 h-10 text-white" />
                </div>
              )}
            </div>
          </div>
          <DialogTitle className="text-s font-light text-gray-900">
            Maximum file size: 64KB
          </DialogTitle>

          <div className="space-y-3">
            <button
              onClick={triggerFileInput}
              className="w-full flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-xl transition-colors font-medium"
            >
              <Camera className="w-5 h-5" />
              <span>Upload New Photo</span>
            </button>

            {userProfile.avatar && (
              <button
                onClick={removePhoto}
                className="w-full flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-xl transition-colors font-medium"
              >
                <X className="w-5 h-5" />
                <span>Remove Photo</span>
              </button>
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="hidden"
          />
        </DialogContent>
      </Dialog>

      
    </>
  );
}

export default UserProfileDropdown;
