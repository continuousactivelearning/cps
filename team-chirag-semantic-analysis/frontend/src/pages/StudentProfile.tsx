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
} from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  useEffect(() => {
    const raw = localStorage.getItem("userProfile");
    if (raw) setProfile(JSON.parse(raw));
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newProfile = { ...profile, profileImage: reader.result as string };
        setProfile(newProfile);
        localStorage.setItem("userProfile", JSON.stringify(newProfile));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClose = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        py: 6,
        // Vibrant gradient background
        background: {
          xs: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
          md: "linear-gradient(120deg, #a7f3d0 0%, #f0fdfa 50%, #e0e7ff 100%)",
        },
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
      {/* Decorative bottom right blurred circle */}
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
              background: "rgba(255,255,255,0.95)",
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
            {/* Avatar + Name + Email */}
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
                    <Input
                      type="file"
                      sx={{ display: "none" }}
                      onChange={handleImageUpload}
                    />
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

            {/* Info Grid */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: 3,
                mb: 4,
              }}
            >
              {/* Programming Experience */}
              <Box>
                <Typography variant="overline" color="text.secondary">
                  Programming Experience
                </Typography>
                <Box mt={1} display="flex" flexWrap="wrap" gap={1}>
                  {profile.programmingExperience ? (
                    <Chip
                      label={profile.programmingExperience}
                      color="info"
                      sx={{ borderRadius: 2 }}
                    />
                  ) : (
                    <Typography variant="body2" color="text.disabled">
                      N/A
                    </Typography>
                  )}
                </Box>
              </Box>
              {/* DSA Experience */}
              <Box>
                <Typography variant="overline" color="text.secondary">
                  DSA Experience
                </Typography>
                <Box mt={1} display="flex" flexWrap="wrap" gap={1}>
                  {profile.dsaExperience ? (
                    <Chip
                      label={profile.dsaExperience}
                      color="success"
                      sx={{ borderRadius: 2 }}
                    />
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
                    <Chip
                      key={index}
                      label={lang}
                      color="primary"
                      sx={{ borderRadius: 2 }}
                    />
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
                    <Chip
                      key={index}
                      label={area}
                      color="secondary"
                      variant="outlined"
                      sx={{ borderRadius: 2 }}
                    />
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
                  <Chip
                    label={profile.preferredPace}
                    color="warning"
                    sx={{ borderRadius: 2 }}
                  />
                ) : (
                  <Typography variant="body2" color="text.disabled">
                    N/A
                  </Typography>
                )}
              </Box>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default StudentProfile;
