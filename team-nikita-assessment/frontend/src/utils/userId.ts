export const getUserEmailFromToken = (): string | null => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const base64Payload = token.split('.')[1];
    const decodedPayload = atob(base64Payload); // decode base64
    const parsedPayload = JSON.parse(decodedPayload);
    return parsedPayload.email || null;
  } catch (e) {
    console.error('Error decoding token', e);
    return null;
  }
};
