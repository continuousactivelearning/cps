# Environment Configuration

This project automatically switches between development and production backend URLs based on the environment.

## How it works

The application uses Vite's built-in environment detection:

- **Development mode** (`npm run dev`): Uses `http://localhost:5000`
- **Production mode** (`npm run build`): Uses `https://ssmp-backend.onrender.com`

## Configuration Files

### `src/config/api.ts`
This is the main configuration file that:
- Detects the environment using `import.meta.env.DEV`
- Sets the appropriate base URLs
- Provides centralized API endpoints

### Key Variables

```typescript
// Base URLs
API_BASE_URL: Development or production backend URL
WS_BASE_URL: WebSocket URL (same as API_BASE_URL)

// API Endpoints
API_ENDPOINTS: Object containing all API endpoints
```

## Usage

Instead of hardcoding URLs, use the configuration:

```typescript
// ❌ Don't do this
axios.get('http://localhost:5000/api/auth/login')

// ✅ Do this
import { API_ENDPOINTS } from '../config/api'
axios.get(API_ENDPOINTS.LOGIN)
```

## Environment Detection

The system automatically detects the environment:

- **Development**: When running `npm run dev` or `vite dev`
- **Production**: When running `npm run build` or in production deployment

## Adding New Endpoints

To add a new API endpoint:

1. Add it to the `API_ENDPOINTS` object in `src/config/api.ts`
2. Use the endpoint in your components

Example:
```typescript
// In api.ts
export const API_ENDPOINTS = {
  // ... existing endpoints
  NEW_ENDPOINT: `${API_BASE_URL}/api/new-endpoint`,
  DYNAMIC_ENDPOINT: (id: string) => `${API_BASE_URL}/api/endpoint/${id}`,
};

// In your component
import { API_ENDPOINTS } from '../config/api'
axios.get(API_ENDPOINTS.NEW_ENDPOINT)
```

## WebSocket Configuration

WebSocket connections also automatically use the correct URL:

```typescript
// In WebSocketContext.tsx
import { WS_BASE_URL } from '../config/api'
const socket = io(WS_BASE_URL, { ... })
```

## Benefits

1. **Automatic environment switching**: No manual URL changes needed
2. **Centralized configuration**: All URLs in one place
3. **Type safety**: TypeScript support for all endpoints
4. **Easy maintenance**: Update URLs in one location
5. **Production ready**: Automatically uses production URLs when built 