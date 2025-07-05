import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import {
  Avatar,
  Box,
  Chip,
  Container,
  Divider,
  IconButton,
  Input,
  Paper,
  Tooltip,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useTheme } from "../hooks/useTheme";
import { userService } from "../services/userService";

interface UserProfile {
  name?: string;
  email?: string;
  programmingExperience?: string;
  knownLanguages?: string[];
  dsaExperience?: string;
  learningGoals?: string[];
  preferredPace?: string;
  focusAreas?: string[];
  profileImage?: string;
}

const StudentProfile = () => {
  const [profile, setProfile] = useState<UserProfile>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { theme } = useTheme();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        setError(null);

        // Check localStorage for user data first
        const raw = localStorage.getItem("userProfile");
        let localUserData = null;
        if (raw) {
          localUserData = JSON.parse(raw);
          console.log('📦 Found localStorage data:', localUserData);
        }

        // If we have user email from localStorage, fetch from MongoDB
        const userEmail = localUserData?.email;
        
        if (userEmail) {
          console.log('🔍 Fetching profile for:', userEmail);
          console.log('🔍 Auth source: localStorage');
          
          try {
            const apiProfile = await userService.getUserProfile(userEmail);
            console.log('📊 API Profile response:', apiProfile);
            
            if (apiProfile) {
              // Transform API response to component state
              const transformedProfile: UserProfile = {
                name: apiProfile.name || localUserData?.name || 'User',
                email: apiProfile.email || userEmail,
                profileImage: apiProfile.avatar || localUserData?.avatar || undefined,
                programmingExperience: apiProfile.userInfo?.programmingExperience || undefined,
                knownLanguages: apiProfile.userInfo?.knownLanguages || [],
                dsaExperience: apiProfile.userInfo?.dsaExperience || undefined,
                preferredPace: apiProfile.userInfo?.preferredPace || undefined,
                // Extract focus areas from known concepts topics
                focusAreas: apiProfile.knownConcepts?.topics?.map(topic => topic.name) || [],
                learningGoals: [] // This might need to be added to the backend model
              };
              console.log('✅ Transformed profile:', transformedProfile);
              setProfile(transformedProfile);
            } else {
              console.log('⚠️ No API profile found, using localStorage data');
              // Fallback to localStorage user info
              setProfile({
                name: localUserData?.name || 'User',
                email: userEmail,
                profileImage: localUserData?.avatar || undefined,
              });
            }
          } catch (apiError) {
            console.error('❌ API Error:', apiError);
            // Fallback to localStorage user info
            setProfile({
              name: localUserData?.name || 'User',
              email: userEmail,
              profileImage: localUserData?.avatar || undefined,
            });
          }
        } else {
          console.log('🔍 No authenticated user, checking localStorage only');
          // Fallback to localStorage for non-authenticated users
          if (localUserData) {
            console.log('📦 Using localStorage data only');
            setProfile({
              name: localUserData.name || 'User',
              email: localUserData.email,
              profileImage: localUserData.avatar,
              // Try to extract any other data from localStorage
              programmingExperience: localUserData.programmingExperience,
              knownLanguages: localUserData.knownLanguages || [],
              dsaExperience: localUserData.dsaExperience,
              preferredPace: localUserData.preferredPace,
              focusAreas: localUserData.focusAreas || [],
            });
          } else {
            console.log('⚠️ No user data found anywhere');
            setProfile({});
          }
        }
      } catch (err) {
        console.error('❌ Error fetching user profile:', err);
        setError('Failed to load profile. Please try again.');
        
        // Final fallback to localStorage on error
        const raw = localStorage.getItem("userProfile");
        if (raw) {
          const localUserData = JSON.parse(raw);
          setProfile({
            name: localUserData.name || 'User',
            email: localUserData.email,
            profileImage: localUserData.avatar,
          });
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const imageDataUrl = reader.result as string;
        const newProfile = { ...profile, profileImage: imageDataUrl };
        setProfile(newProfile);
        
        // Save to localStorage as backup
        localStorage.setItem("userProfile", JSON.stringify(newProfile));
        
        // TODO: Add API call to update avatar in backend
        // This would require adding an endpoint to update user avatar
        try {
          const userEmail = profile.email;
          if (userEmail) {
            console.log('Updating avatar in backend for:', userEmail);
            await userService.updateUserAvatar(userEmail, imageDataUrl);
            console.log('Avatar updated successfully in backend');
          }
        } catch (error) {
          console.error('Failed to update avatar in backend:', error);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{
        background:
          theme === "light"
            ? "linear-gradient(120deg, #a7f3d0 0%, #f0fdfa 50%, #e0e7ff 100%)"
            : "#111", // Pure black in dark mode
      }}
    >
      <Header /> {/* ✅ Header with theme toggle */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          py: 6,
          color: "text.primary",
        }}
      >
        {/* Decorative SVG Blob */}
        <Box
          sx={{
            position: "absolute",
            top: { xs: -120, md: -180 },
            left: { xs: -80, md: -120 },
            width: { xs: 300, md: 500 },
            height: { xs: 300, md: 500 },
            zIndex: 0,
            opacity: 0.25,
            pointerEvents: "none",
          }}
        >
          <svg viewBox="0 0 500 500" width="100%" height="100%">
            <defs>
              <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#a7f3d0" />
              </linearGradient>
            </defs>
            <path
              fill="url(#blobGradient)"
              d="M421.5,314Q406,378,344,410.5Q282,443,221.5,420Q161,397,109.5,353Q58,309,77.5,239.5Q97,170,151,132Q205,94,267.5,87Q330,80,376,127Q422,174,429,237Q436,300,421.5,314Z"
            />
          </svg>
        </Box>

        {/* Decorative blurred circle */}
        <Box
          sx={{
            position: "absolute",
            bottom: -100,
            right: -100,
            width: 250,
            height: 250,
            bgcolor: "#38bdf8",
            borderRadius: "50%",
            filter: "blur(80px)",
            opacity: 0.18,
            zIndex: 0,
          }}
        />

        <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              zIndex: 10,
              bgcolor: "background.paper",
              boxShadow: 2,
              "&:hover": { bgcolor: "grey.200" },
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Loading State */}
          {loading && (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
              <CircularProgress size={60} />
              <Typography variant="h6" sx={{ ml: 2 }}>
                Loading profile...
              </Typography>
            </Box>
          )}

          {/* Error State */}
          {error && !loading && (
            <Alert severity="error" sx={{ mt: 6, mb: 4 }}>
              {error}
            </Alert>
          )}

          {/* Profile Content */}
          {!loading && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
            <Paper
              elevation={8}
              sx={{
                p: { xs: 3, sm: 5 },
                borderRadius: 4,
                mt: 6,
                boxShadow: 6,
                position: "relative",
                bgcolor: "background.paper", // ✅ react to theme
                backdropFilter: "blur(2px)",
              }}
            >
              {/* Heading */}
              <Box display="flex" alignItems="center" justifyContent="center" mb={2} gap={1}>
                <PersonIcon color="primary" sx={{ fontSize: 32 }} />
                <Typography variant="h4" fontWeight={700} color="primary.main">
                  Student Profile
                </Typography>
              </Box>

              {/* Avatar */}
              <Box textAlign="center" mb={4} position="relative">
                <Box sx={{ position: "relative", width: 110, height: 110, mx: "auto" }}>
                  <Avatar
                    src={profile.profileImage}
                    sx={{
                      width: 110,
                      height: 110,
                      border: "4px solid white",
                      boxShadow: 3,
                      fontSize: 40,
                    }}
                  >
                    {profile.name?.[0]?.toUpperCase() || "U"}
                  </Avatar>
                  <Tooltip title="Upload Profile Picture">
                    <IconButton
                      color="primary"
                      component="label"
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        bgcolor: "background.paper",
                        boxShadow: 2,
                        "&:hover": { bgcolor: "grey.200" },
                      }}
                    >
                      <PhotoCameraIcon />
                      <Input type="file" sx={{ display: "none" }} onChange={handleImageUpload} />
                    </IconButton>
                  </Tooltip>
                </Box>
                <Typography variant="h5" fontWeight={700} mt={2} color="primary.main">
                  {profile.name || "Your Name"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {profile.email || "your-email@example.com"}
                </Typography>
              </Box>

              <Divider sx={{ mb: 4 }} />

              {/* Learning Progress Summary */}
              {profile.focusAreas && profile.focusAreas.length > 0 && (
                <Box mb={4}>
                  <Typography variant="overline" color="text.secondary">
                    Learning Progress
                  </Typography>
                  <Box mt={1} display="flex" flexWrap="wrap" gap={2}>
                    <Chip 
                      label={`${profile.focusAreas.length} Topics Known`} 
                      color="success" 
                      sx={{ borderRadius: 2 }} 
                    />
                  </Box>
                </Box>
              )}

              {/* Programming & DSA Experience */}

              {/* Programming & DSA Experience */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                  gap: 3,
                  mb: 4,
                }}
              >
                <Box>
                  <Typography variant="overline" color="text.secondary">
                    Programming Experience
                  </Typography>
                  <Box mt={1} display="flex" flexWrap="wrap" gap={1}>
                    {profile.programmingExperience ? (
                      <Chip label={profile.programmingExperience} color="info" sx={{ borderRadius: 2 }} />
                    ) : (
                      <Typography variant="body2" color="text.disabled">
                        N/A
                      </Typography>
                    )}
                  </Box>
                </Box>
                <Box>
                  <Typography variant="overline" color="text.secondary">
                    DSA Experience
                  </Typography>
                  <Box mt={1} display="flex" flexWrap="wrap" gap={1}>
                    {profile.dsaExperience ? (
                      <Chip label={profile.dsaExperience} color="success" sx={{ borderRadius: 2 }} />
                    ) : (
                      <Typography variant="body2" color="text.disabled">
                        N/A
                      </Typography>
                    )}
                  </Box>
                </Box>
              </Box>

              <Divider sx={{ mb: 4 }} />

              {/* Known Languages */}
              <Box mb={4}>
                <Typography variant="overline" color="text.secondary">
                  Known Languages
                </Typography>
                <Box mt={1} display="flex" flexWrap="wrap" gap={1}>
                  {(profile.knownLanguages || []).length > 0 ? (
                    profile.knownLanguages!.map((lang, index) => (
                      <Chip key={index} label={lang} color="primary" sx={{ borderRadius: 2 }} />
                    ))
                  ) : (
                    <Typography variant="body2" color="text.disabled">
                      N/A
                    </Typography>
                  )}
                </Box>
              </Box>

              {/* Focus Areas */}
              <Box mb={4}>
                <Typography variant="overline" color="text.secondary">
                  Focus Areas
                </Typography>
                <Box mt={1} display="flex" flexWrap="wrap" gap={1}>
                  {(profile.focusAreas || []).length > 0 ? (
                    profile.focusAreas!.map((area, index) => (
                      <Chip key={index} label={area} color="secondary" variant="outlined" sx={{ borderRadius: 2 }} />
                    ))
                  ) : (
                    <Typography variant="body2" color="text.disabled">
                      N/A
                    </Typography>
                  )}
                </Box>
              </Box>

              {/* Learning Pace */}
              <Box mb={4}>
                <Typography variant="overline" color="text.secondary">
                  Learning Pace
                </Typography>
                <Box mt={1} display="flex" flexWrap="wrap" gap={1}>
                  {profile.preferredPace ? (
                    <Chip label={profile.preferredPace} color="warning" sx={{ borderRadius: 2 }} />
                  ) : (
                    <Typography variant="body2" color="text.disabled">
                      N/A
                    </Typography>
                  )}
                </Box>
              </Box>
            </Paper>
          </motion.div>
        )}
        </Container>
      </Box>
    </div>
  );
};

export default StudentProfile;
