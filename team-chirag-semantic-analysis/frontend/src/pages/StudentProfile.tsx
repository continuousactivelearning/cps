import CloseIcon from "@mui/icons-material/Close";
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
import { useEffect, useState } from "react";
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
        background: (theme) =>
          theme.palette.mode === "light"
            ? "linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)"
            : "linear-gradient(135deg, #232526 0%, #1c1c1c 100%)",
        color: "text.primary",
        py: 6,
      }}
    >
      <Container maxWidth="sm" sx={{ position: "relative" }}>
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
            }}
          >
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
              <Box>
                <Typography variant="overline" color="text.secondary">
                  Programming Experience
                </Typography>
                <Typography variant="body1" fontWeight={500}>
                  {profile.programmingExperience || "N/A"}
                </Typography>
              </Box>
              <Box>
                <Typography variant="overline" color="text.secondary">
                  DSA Experience
                </Typography>
                <Typography variant="body1" fontWeight={500}>
                  {profile.dsaExperience || "N/A"}
                </Typography>
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

            {/* Learning Goals */}
            <Box mb={4}>
              <Typography variant="overline" color="text.secondary">
                Learning Goals
              </Typography>
              <Box mt={1} display="flex" flexWrap="wrap" gap={1}>
                {(profile.learningGoals || []).length > 0 ? (
                  profile.learningGoals!.map((goal, index) => (
                    <Chip
                      key={index}
                      label={goal}
                      color="success"
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
            <Box>
              <Typography variant="overline" color="text.secondary">
                Learning Pace
              </Typography>
              <Typography variant="body1" fontWeight={500}>
                {profile.preferredPace || "N/A"}
              </Typography>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default StudentProfile;
