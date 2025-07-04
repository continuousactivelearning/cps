# Backend Deployment Guide for Render

## 🚀 Quick Setup

### 1. Environment Variables
Set these in your Render dashboard:

```
PORT=5000
NODE_ENV=production
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-super-secret-jwt-key
```

### 2. Build Configuration
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- **Node Version**: 18.x or higher

### 3. Common Issues & Solutions

#### Issue: "No open ports detected"
**Solution**: Make sure your server listens on `process.env.PORT`:
```typescript
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
```

#### Issue: TypeScript compilation fails
**Solution**: 
1. Check that all `@types` packages are in `dependencies` (not `devDependencies`)
2. Ensure `tsconfig.json` is properly configured
3. Run `npm run build` locally to test

#### Issue: CORS errors
**Solution**: Update allowed origins in `index.ts`:
```typescript
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  'https://your-frontend-domain.com'
];
```

#### Issue: MongoDB connection fails
**Solution**:
1. Check your MongoDB connection string
2. Ensure MongoDB Atlas IP whitelist includes `0.0.0.0/0` (all IPs)
3. Verify database user has proper permissions

### 4. Testing Locally

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Start the server
npm start

# Test the health endpoint
curl http://localhost:5000/
```

### 5. Health Check Endpoint
Your server should respond to:
```
GET /
```
Response: `{"message":"Server is running 🚀","timestamp":"...","environment":"production"}`

### 6. Troubleshooting

#### Check Build Logs
```bash
npm run build
```

#### Check TypeScript Compilation
```bash
npx tsc --noEmit
```

#### Test MongoDB Connection
```bash
node -e "
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));
"
```

### 7. Render-Specific Notes

- **Auto-Deploy**: Enable auto-deploy on git push
- **Health Checks**: Render will ping your `/` endpoint
- **Environment**: Set `NODE_ENV=production`
- **Port**: Always use `process.env.PORT`

### 8. Security Checklist

- [ ] JWT_SECRET is set and secure
- [ ] MongoDB connection string is secure
- [ ] CORS origins are properly configured
- [ ] No sensitive data in code
- [ ] Environment variables are set in Render dashboard

### 9. Performance Tips

- Enable MongoDB connection pooling
- Use compression middleware
- Implement proper error handling
- Add request logging for debugging 
