import React, { useState, useRef, useEffect } from "react";
import useSWR, { mutate } from 'swr';
import {
  User,
  Settings,
  LogOut,
  Trophy,
  Clock,
  Target,
  Camera,
  X,
  Bell,
  Shield,
  Palette,
  Download,
  HelpCircle,
  Volume2,
  VolumeX,
  Globe,
  Mail,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { getDetails, uploadPhoto } from "../services/detailService";

interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
  masteredTopics: number;
  totalScore: number;
  streak: number;
}

interface SettingsOptions {
  notifications: boolean;
  soundEffects: boolean;
  language: string;
  emailUpdates: boolean;
  darkMode: boolean;
}

const UserProfileDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);
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

  const [settings, setSettings] = useState<SettingsOptions>({
    notifications: true,
    soundEffects: true,
    language: "English",
    emailUpdates: true,
    darkMode: false,
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

  const handleSettingChange = (
    key: keyof SettingsOptions,
    value: boolean | string
  ): void => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
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
                onClick={() => setShowSettings(true)}
                className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 rounded-xl transition-all duration-200 group"
              >
                <Settings className="w-5 h-5 text-gray-500 group-hover:text-indigo-600 transition-colors" />
                <span className="text-gray-700 font-medium">Settings</span>
              </button>
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

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-gray-900">Settings</h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Notifications */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Bell className="w-5 h-5 mr-2 text-indigo-600" />
                  Notifications
                </h4>
                <div className="space-y-3 pl-7">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Push Notifications</span>
                    <button
                      onClick={() =>
                        handleSettingChange(
                          "notifications",
                          !settings.notifications
                        )
                      }
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.notifications ? "bg-indigo-600" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.notifications
                            ? "translate-x-6"
                            : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Email Updates</span>
                    <button
                      onClick={() =>
                        handleSettingChange(
                          "emailUpdates",
                          !settings.emailUpdates
                        )
                      }
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.emailUpdates ? "bg-indigo-600" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.emailUpdates
                            ? "translate-x-6"
                            : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Appearance */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Palette className="w-5 h-5 mr-2 text-indigo-600" />
                  Appearance
                </h4>
                <div className="space-y-3 pl-7">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Dark Mode</span>
                    <button
                      onClick={() =>
                        handleSettingChange("darkMode", !settings.darkMode)
                      }
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.darkMode ? "bg-indigo-600" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.darkMode ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Audio */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Volume2 className="w-5 h-5 mr-2 text-indigo-600" />
                  Audio
                </h4>
                <div className="space-y-3 pl-7">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 flex items-center">
                      {settings.soundEffects ? (
                        <Volume2 className="w-4 h-4 mr-2" />
                      ) : (
                        <VolumeX className="w-4 h-4 mr-2" />
                      )}
                      Sound Effects
                    </span>
                    <button
                      onClick={() =>
                        handleSettingChange(
                          "soundEffects",
                          !settings.soundEffects
                        )
                      }
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        settings.soundEffects ? "bg-indigo-600" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          settings.soundEffects
                            ? "translate-x-6"
                            : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Language */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-indigo-600" />
                  Language
                </h4>
                <div className="pl-7">
                  <select
                    value={settings.language}
                    onChange={(e) =>
                      handleSettingChange("language", e.target.value)
                    }
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="English">English</option>
                    <option value="Spanish">Español</option>
                    <option value="French">Français</option>
                    <option value="German">Deutsch</option>
                    <option value="Chinese">中文</option>
                  </select>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-indigo-600" />
                  Account
                </h4>
                <div className="space-y-2 pl-7">
                  <button className="w-full text-left p-3 hover:bg-gray-50 rounded-xl transition-colors flex items-center">
                    <Download className="w-4 h-4 mr-3 text-gray-500" />
                    <span className="text-gray-700">Export Data</span>
                  </button>
                  <button className="w-full text-left p-3 hover:bg-gray-50 rounded-xl transition-colors flex items-center">
                    <HelpCircle className="w-4 h-4 mr-3 text-gray-500" />
                    <span className="text-gray-700">Help & Support</span>
                  </button>
                  <button className="w-full text-left p-3 hover:bg-gray-50 rounded-xl transition-colors flex items-center">
                    <Mail className="w-4 h-4 mr-3 text-gray-500" />
                    <span className="text-gray-700">Contact Us</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 p-6">
              <button
                onClick={() => setShowSettings(false)}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-xl transition-colors font-medium"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfileDropdown;
