import {
  Avatar,
  Box,
  Chip,
  Divider,
  Input,
  Paper,
  Typography,
  IconButton,
  Container,
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

  return (
    
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Paper elevation={8} sx={{ p: { xs: 3, sm: 4 }, borderRadius: 4 }}>
            {/* Avatar + Name + Email */}
            <Box textAlign="center" mb={3} position="relative">
              <Box sx={{ position: "relative", width: 100, height: 100, mx: "auto" }}>
                <Avatar
                  src={profile.profileImage}
                  sx={{
                    width: 100,
                    height: 100,
                    border: "3px solid white",
                    boxShadow: 3,
                  }}
                >
                  {profile.name?.[0]?.toUpperCase() || "U"}
                </Avatar>
                <IconButton
                  color="primary"
                  component="label"
                  sx={{ position: "absolute", bottom: 0, right: 0 }}
                >
                  <PhotoCameraIcon />
                  <Input
                    type="file"
                    sx={{ display: "none" }}
                    onChange={handleImageUpload}
                  />
                </IconButton>
              </Box>
              <Typography variant="h5" fontWeight={600} mt={2} color="primary.main">
                {profile.name || "Your Name"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {profile.email || "your-email@example.com"}
              </Typography>
            </Box>

            <Divider sx={{ mb: 3 }} />

            {/* Info Section */}
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 3, mb: 3 }}>
              <Box>
                <Typography variant="overline" color="text.secondary">Programming Experience</Typography>
                <Typography variant="body1">{profile.programmingExperience || "N/A"}</Typography>
              </Box>
              <Box>
                <Typography variant="overline" color="text.secondary">DSA Experience</Typography>
                <Typography variant="body1">{profile.dsaExperience || "N/A"}</Typography>
              </Box>
            </Box>

            <Divider sx={{ mb: 3 }} />

            {/* Known Languages */}
            <Box mb={3}>
              <Typography variant="overline" color="text.secondary">Known Languages</Typography>
              <Box mt={1} display="flex" flexWrap="wrap" gap={1}>
                {(profile.knownLanguages || []).map((lang, index) => (
                  <Chip
                    key={index}
                    label={lang}
                    color="primary"
                    sx={{ borderRadius: 2 }}
                  />
                ))}
              </Box>
            </Box>

            {/* Learning Goals */}
            <Box mb={3}>
              <Typography variant="overline" color="text.secondary">Learning Goals</Typography>
              <Box mt={1} display="flex" flexWrap="wrap" gap={1}>
                {(profile.learningGoals || []).map((goal, index) => (
                  <Chip
                    key={index}
                    label={goal}
                    color="success"
                    variant="outlined"
                    sx={{ borderRadius: 2 }}
                  />
                ))}
              </Box>
            </Box>

            {/* Focus Areas */}
            <Box mb={3}>
              <Typography variant="overline" color="text.secondary">Focus Areas</Typography>
              <Box mt={1} display="flex" flexWrap="wrap" gap={1}>
                {(profile.focusAreas || []).map((area, index) => (
                  <Chip
                    key={index}
                    label={area}
                    color="secondary"
                    variant="outlined"
                    sx={{ borderRadius: 2 }}
                  />
                ))}
              </Box>
            </Box>
                <Box
  sx={{
    minHeight: "100vh",
    background: (theme) =>
      theme.palette.mode === "light"
        ? "linear-gradient(135deg, #e3f2fd, #ffffff)"
        : "linear-gradient(135deg, #212121, #121212)",
    color: "text.primary",
    p: 3
  }}
>
  {/* ... */}
</Box>

            {/* Learning Pace */}
            <Box>
              <Typography variant="overline" color="text.secondary">Learning Pace</Typography>
              <Typography variant="body1">{profile.preferredPace || "N/A"}</Typography>
            </Box>
          </Paper>
        </motion.div>
      </Container>
   
  );
};

export default StudentProfile;
