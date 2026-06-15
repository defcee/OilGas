# OilGuard - Deployment Guide

## 📦 Deployment Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    User Browser                              │
└──────────────────────┬──────────────────────────────────────┘
                       │
        ┌──────────────┴──────────────┐
        │                             │
        ▼                             ▼
    ┌─────────────┐          ┌──────────────┐
    │   cPanel    │          │   Render     │
    │  (Frontend) │          │  (Backend)   │
    │  Static /dist           Express.js    │
    └─────────────┘          └──────┬───────┘
                                    │
                                    ▼
                             ┌──────────────┐
                             │     Neon     │
                             │  PostgreSQL  │
                             └──────────────┘
```

---

## 🌐 Frontend Deployment (cPanel)

### Prerequisites
- cPanel hosting account with SSH access
- Domain connected to hosting
- Node.js build completed locally

### Deployment Steps

#### 1. Build the Frontend
```bash
pnpm build:client
```
Output: `/dist/spa` folder with static files

#### 2. Connect to cPanel via SSH
```bash
ssh username@your-domain.com
```

#### 3. Navigate to Public HTML
```bash
cd public_html
# or for subdomain:
cd subdomains/app/public_html
```

#### 4. Upload `/dist/spa` Contents
Option A: Using SCP
```bash
scp -r dist/spa/* username@your-domain.com:~/public_html/
```

Option B: Using cPanel File Manager
1. Zip the `/dist/spa` folder
2. Upload to public_html via cPanel
3. Extract the archive

#### 5. Configure .htaccess for React Router
Create or update `.htaccess` in public_html:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

This ensures all routes redirect to index.html for React Router SPA handling.

#### 6. Configure CORS (if API on different domain)
In your cPanel:
- Point API_URL environment variable to Render backend
- Or configure CORS headers in Render backend

---

## ⚙️ Backend Deployment (Render)

### Prerequisites
- Render account (render.com)
- GitHub repository with code
- Environment variables configured

### Deployment Steps

#### 1. Create Render Web Service
1. Login to render.com
2. Click "New +"
3. Select "Web Service"
4. Connect GitHub repository

#### 2. Configure Build Settings
**Build Command:**
```bash
pnpm install && pnpm build:server
```

**Start Command:**
```bash
pnpm start
```

**Runtime:** Node

#### 3. Set Environment Variables
In Render dashboard, add:
```
NODE_ENV=production
DATABASE_URL=postgresql://...  # From Neon
JWT_SECRET=your-secret-key
RESEND_API_KEY=your-resend-key
PING_MESSAGE=ping pong
```

#### 4. Deploy
- Render auto-deploys on GitHub push
- Or manually trigger via dashboard
- Monitor build logs in Render dashboard

#### 5. Get Backend URL
Once deployed:
```
https://your-app-name.onrender.com
```

---

## 🗄️ Database Setup (Neon PostgreSQL)

### Prerequisites
- Neon account (neon.tech)
- Free tier available (test environment)

### Setup Steps

#### 1. Create Neon Project
1. Login to neon.tech
2. Create new project
3. Select PostgreSQL version
4. Get connection string

#### 2. Connection String Format
```
postgresql://username:password@host/database?sslmode=require
```

#### 3. Set DATABASE_URL
In Render environment variables:
```
DATABASE_URL=postgresql://user:pass@host/dbname?sslmode=require
```

#### 4. Run Migrations
When Prisma is implemented:
```bash
npx prisma migrate deploy
```

---

## 📧 Email Service (Resend)

### Setup

#### 1. Create Resend Account
Visit resend.com and sign up

#### 2. Create API Key
1. Go to Settings → API Keys
2. Create new API key
3. Copy the key

#### 3. Configure in Backend
Add to Render environment:
```
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

#### 4. Send Emails
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'notifications@yourdomain.com',
  to: 'user@example.com',
  subject: 'Report Approved',
  html: '<p>Your waste report has been approved.</p>',
});
```

---

## 🔐 SSL/HTTPS

### cPanel
- Usually auto-configured with Let's Encrypt
- Check: Setup SSL/TLS in cPanel dashboard

### Render
- Auto-configured with SSL certificate
- All domains get HTTPS by default

### Domain Setup
1. Point domain DNS to cPanel nameservers
2. Configure SSL certificate (free with cPanel)
3. Redirect http → https (1-click in cPanel)

---

## 🔑 Environment Variables

### Required Variables

**Frontend (.env or build config)**
```
VITE_PUBLIC_API_URL=https://your-backend.onrender.com
VITE_PUBLIC_BUILDER_KEY=xxxx
```

**Backend (Render)**
```
NODE_ENV=production
DATABASE_URL=postgresql://...
JWT_SECRET=your-jwt-secret-key
RESEND_API_KEY=re_xxxxx
CORS_ORIGIN=https://your-domain.com
```

### Secure Variables
- Never commit secrets to Git
- Use Render's environment variable system
- Use cPanel environment variables for frontend API URLs

---

## 📋 Pre-Deployment Checklist

### Frontend
- [ ] Build succeeds: `pnpm build:client`
- [ ] No TypeScript errors: `pnpm typecheck`
- [ ] Images paths use `/assets/` for cPanel
- [ ] API endpoints use environment variables
- [ ] .htaccess configured for SPA routing

### Backend
- [ ] Build succeeds: `pnpm build:server`
- [ ] All endpoints tested locally
- [ ] Database migrations ready
- [ ] Environment variables documented
- [ ] CORS configured correctly
- [ ] Error handling implemented

### Database
- [ ] Neon account created
- [ ] Connection string obtained
- [ ] Migrations prepared (if using Prisma)
- [ ] Database backed up (for production)

### General
- [ ] Domain configured
- [ ] SSL certificates installed
- [ ] Monitoring setup (optional)
- [ ] Backup strategy planned
- [ ] Team access configured

---

## 🐛 Troubleshooting

### Frontend Not Loading
**Issue**: Blank page, 404 on refresh
**Solution**: 
- Check .htaccess configuration
- Verify `/dist/spa` files uploaded
- Clear browser cache (Ctrl+F5)
- Check cPanel error logs

### API Calls Failing
**Issue**: CORS errors, 404 on API routes
**Solution**:
- Verify Render backend is running
- Check CORS_ORIGIN environment variable
- Verify DATABASE_URL is correct
- Check Render logs for errors

### Database Connection Issues
**Issue**: "database connection refused"
**Solution**:
- Verify DATABASE_URL format
- Check Neon project is active
- Ensure IP whitelist allows Render
- Test connection with psql

### Build Fails on Render
**Issue**: "Build failed" in Render
**Solution**:
- Check build logs in Render dashboard
- Verify pnpm version in package.json
- Ensure all dependencies are in package.json
- Check Node version compatibility

---

## 📊 Monitoring & Maintenance

### Render Monitoring
- Dashboard shows deployment status
- Real-time error logs
- Performance metrics
- Auto-redeploy on Git push

### cPanel Monitoring
- Check error logs: `public_html/error.log`
- Monitor disk space
- Check CPU usage
- Review access logs

### Database Monitoring
- Neon dashboard shows connections
- Monitor query performance
- Set up backups
- Monitor storage usage

---

## 🚀 Scaling Considerations

### Frontend
- cPanel: Standard shared hosting scales to small-medium traffic
- For high traffic: Consider CDN (Cloudflare)

### Backend
- Render: Auto-scales with paid plans
- Start with Free/Pro tier for testing
- Upgrade to dedicated instances for production

### Database
- Neon: Scales with plan tier
- Monitor connection count
- Add read replicas if needed

---

## 📝 Deployment Checklist Template

Use this checklist before each deployment:

```markdown
## Deployment Checklist - [DATE]

### Code Changes
- [ ] All tests passing locally
- [ ] TypeScript compilation succeeds
- [ ] No console errors in browser
- [ ] Git commits are clean

### Frontend (cPanel)
- [ ] Build: pnpm build:client
- [ ] Upload /dist/spa to public_html
- [ ] Verify .htaccess is configured
- [ ] Test homepage loads
- [ ] Test login page
- [ ] Test routing (refresh page works)

### Backend (Render)
- [ ] Build: pnpm build:server
- [ ] All environment variables set
- [ ] Test /api/ping endpoint
- [ ] Test authentication endpoints
- [ ] Check logs for errors

### Integration
- [ ] Frontend connects to backend
- [ ] Login/Register works end-to-end
- [ ] CORS configured correctly
- [ ] Images load from /assets/

### Final Checks
- [ ] Test on mobile browser
- [ ] Test on different browser
- [ ] Clear cache and reload
- [ ] Monitor error logs
```

---

## 🔄 Rollback Strategy

If something goes wrong:

### Frontend Rollback
1. Keep previous version in cPanel
2. Re-upload previous `/dist/spa`
3. Verify site works

### Backend Rollback
1. Render keeps deployment history
2. Click previous deployment
3. Click "Redeploy"
4. Verify endpoints respond

---

## 📞 Support Links

- **Render Docs**: https://render.com/docs
- **Neon Docs**: https://neon.tech/docs
- **Resend Docs**: https://resend.com/docs
- **cPanel Support**: Contact your hosting provider
- **React Router SPA**: https://reactrouter.com/start/library/spa

---

**Remember**: Always test in development before deploying to production! 🚀
