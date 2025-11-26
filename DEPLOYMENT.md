# QuickCart - Vercel Deployment Guide

## Issues Fixed ✅
- Fixed middleware.js syntax error (removed extra backticks)
- Moved API route to correct location
- Created .env.example for reference
- Updated .gitignore to exclude .env files
- Removed unused Inngest variables
- Added production warnings

## CRITICAL: Before Deployment

### 1. MongoDB Atlas (REQUIRED)
Current: `mongodb://localhost:27017` - **WON'T WORK ON VERCEL**

Steps:
1. Go to https://cloud.mongodb.com
2. Create free cluster
3. Get connection string
4. Replace in environment variables

Example: `mongodb+srv://user:pass@cluster.mongodb.net/quickcart`

### 2. Cloudinary (REQUIRED)
Current: Empty credentials - **IMAGE UPLOADS WILL FAIL**

Steps:
1. Go to https://cloudinary.com/console
2. Copy Cloud Name, API Key, API Secret
3. Add to environment variables

### 3. Clerk Authentication
Already configured with test keys - verify they're correct

## Deploy to Vercel

1. Push to GitHub:
```bash
git add .
git commit -m "Production ready"
git push origin main
```

2. Import to Vercel:
- Go to https://vercel.com/new
- Import your repository
- Add environment variables (see .env.example)
- Deploy

## Environment Variables for Vercel

Copy from .env.example and update:
- MONGODB_URI (use Atlas URI)
- CLOUDINARY_CLOUD_NAME
- CLOUDINARY_API_KEY
- CLOUDINARY_API_SECRET
- All CLERK variables

## Common Errors

**MongoDB connection failed:** Check Atlas URI and whitelist 0.0.0.0/0
**Cloudinary upload failed:** Verify credentials are correct
**Build failed:** Check Vercel logs for details

## Post-Deployment Testing

- [ ] Sign up/Sign in works
- [ ] Products display
- [ ] Cart functionality
- [ ] Images load
- [ ] Database operations work
