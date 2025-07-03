// backend/services/googleAuthService.ts
import axios from 'axios';

export const getGoogleUser = async (idToken: string, accessToken: string) => {
  const res = await axios.get(
    `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`,
    {
      headers: { Authorization: `Bearer ${idToken}` },
    }
  );

  return res.data;
};
