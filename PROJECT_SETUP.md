# Oil & Gas Waste Management System - Setup Guide

## 🚀 Project Overview

**OilGuard** is an enterprise-grade web application for managing waste operations and environmental compliance in the oil and gas industry. The system tracks waste disposal, site activities, and enforces HSE compliance across distributed operations.

### Core Features
- ✅ Role-based access control (Admin, HSE Officer, Field Worker)
- ✅ Multi-site management with GPS tracking
- ✅ Waste tracking (drilling mud, produced water, drill cuttings)
- ✅ Chain of custody for waste disposal
- ✅ Environmental compliance monitoring
- ✅ Real-time reporting and analytics

---

## 🏗️ Architecture

### Frontend (Vite + React)
- **Location**: `/client`
- **Technology**: React 18, React Router 6, TailwindCSS 3, TypeScript
- **Build Output**: `/dist` (static files for cPanel deployment)

### Backend (Express.js)
- **Location**: `/server`
- **Technology**: Node.js, Express 5, TypeScript
- **Deployment**: Render or similar Node.js hosting

### Database (Future: Neon PostgreSQL)
- **ORM**: Prisma (when implemented)
- **Configuration**: Will be in `prisma/schema.prisma`

### Email Service (Future: Resend API)
- **Purpose**: Transactional emails for notifications
- **Configuration**: Backend environment variable

---

## 🎨 UI Theme

The application uses a professional oil & gas industry theme:

**Primary Color**: Deep ocean blue (`#0052CC`) - Trust, security, stability
**Accent Color**: Safety orange (`#FF8800`) - Alerts, warnings, critical actions
**Background**: Light professional grey/white

**Tailwind Configuration**: See `tailwind.config.ts` and `client/global.css`

---

## 📁 Project Structure

```
├── client/
│   ├── pages/
│   │   ├── Index.tsx              # Homepage (marketing landing)
│   │   ├── Login.tsx              # Login page
│   │   ├── Register.tsx           # Registration with role/site selection
│   │   ├── Dashboard.tsx          # Role-based redirect
│   │   ├── AdminDashboard.tsx     # Admin interface
│   │   ├── HSEDashboard.tsx       # HSE officer interface
│   │   ├── WorkerDashboard.tsx    # Field worker interface
│   │   └── NotFound.tsx           # 404 page
│   ├── components/
│   │   └── ui/                    # Pre-built UI component library
│   ├── App.tsx                    # Route setup and app wrapper
│   ├── global.css                 # Tailwind theme + global styles
│   └── vite-env.d.ts
│
├── server/
│   ├── routes/
│   │   ├── auth.ts                # Login/Register/Auth endpoints
│   │   ├── sites.ts               # Site management endpoints
│   │   ├── waste.ts               # Waste report endpoints (TODO)
│   │   ├── disposal.ts            # Disposal tracking (TODO)
│   │   └── admin.ts               # Admin-only endpoints (TODO)
│   └── index.ts                   # Express server setup
│
├── shared/
│   └── api.ts                     # Shared type definitions
│
├── package.json                   # Dependencies
├── tailwind.config.ts             # Tailwind configuration
├── tsconfig.json                  # TypeScript configuration
└── vite.config.ts                 # Vite configuration
```

---

## 🔑 User Roles & Dashboards

### 👨‍💼 Administrator
**Responsibilities**: System management, user assignment, compliance oversight
**Dashboard**: `/admin`
**Capabilities**:
- Create and manage working sites
- Assign HSE Officers and Field Workers to sites
- View all reports across all sites
- Manage user permissions
- View audit logs
- Export compliance reports

### 🟡 HSE Officer
**Responsibilities**: Environmental compliance and report approval
**Dashboard**: `/hse-dashboard`
**Capabilities**:
- View all reports from assigned site
- Approve or flag waste reports
- Monitor waste volume trends
- Track disposal status
- Generate compliance reports
- Receive anomaly alerts

### 🟢 Field Worker
**Responsibilities**: Report field activities and waste
**Dashboard**: `/worker-dashboard`
**Capabilities**:
- Submit waste reports (drilling mud, produced water, drill cuttings)
- Upload images/videos
- Auto GPS capture
- View own submitted reports
- View site activity history

---

## 🔐 Authentication Flow

### Registration
1. User navigates to `/register`
2. Fills form: Name, Email, Password, Role, Assigned Site
3. Must select one of the available working sites
4. Account created with role-based permissions
5. Redirects to login

### Login
1. User enters email & password
2. Backend validates credentials
3. JWT token issued
4. User redirected to role-specific dashboard:
   - Admin → `/admin`
   - HSE Officer → `/hse-dashboard`
   - Field Worker → `/worker-dashboard`

### Authorization
- Each request includes Bearer token
- Backend validates token
- Site-based access control enforced
- Users can only access their assigned site

---

## 🌐 API Endpoints

### Authentication
```
POST   /api/auth/register          # Register new user
POST   /api/auth/login             # User login
GET    /api/auth/me                # Get current user
```

### Sites Management
```
GET    /api/sites                  # Get all sites
GET    /api/sites/:id              # Get site details
POST   /api/sites                  # Create new site (Admin only)
```

### Waste Reports
```
POST   /api/waste                  # Submit waste report
GET    /api/waste/site/:siteId     # Get reports for site
PATCH  /api/waste/:id/status       # Update report status
POST   /api/waste/:id/approve      # Approve report (HSE)
POST   /api/waste/:id/flag         # Flag report (HSE)
```

### Disposal Management
```
POST   /api/disposal               # Create disposal record
GET    /api/disposal/:id           # Get disposal details
PATCH  /api/disposal/:id/verify    # Verify disposal (HSE)
```

### Admin Operations
```
GET    /api/admin/users            # List all users
POST   /api/users/assign-site      # Assign user to site
GET    /api/admin/overview         # System analytics
```

---

## 🚀 Development

### Start Development Server
```bash
pnpm dev
```
- Frontend: http://localhost:8080
- Backend: http://localhost:8080/api
- Hot reload enabled for both client and server

### Build for Production
```bash
pnpm build
```
- Frontend: `/dist/spa` (static files)
- Backend: `/dist/server` (Node.js bundle)

### Type Checking
```bash
pnpm typecheck
```

### Run Tests
```bash
pnpm test
```

---

## 📊 Database Schema (Future Implementation)

### users
```sql
id (UUID)
name (string)
email (string, unique)
password_hash (string)
role (enum: admin | hse_officer | field_worker)
site_id (FK → sites)
created_at (timestamp)
```

### sites
```sql
id (UUID)
name (string)
latitude (float)
longitude (float)
company (string)
status (enum: active | inactive)
created_at (timestamp)
```

### waste_reports
```sql
id (UUID)
site_id (FK → sites)
user_id (FK → users)
waste_type (enum: drilling_mud | produced_water | drill_cuttings)
volume (decimal)
description (text)
gps_lat (float)
gps_lng (float)
media_urls (JSON)
status (enum: pending | reviewed | approved | flagged)
created_at (timestamp)
updated_at (timestamp)
```

### disposal_records
```sql
id (UUID)
waste_report_id (FK → waste_reports)
transporter (string)
vehicle_id (string)
driver_name (string)
disposal_method (enum: injection_well | recycling | treatment_plant | solidification)
status (enum: pending | in_transit | completed | verified)
verified_by (FK → users, nullable)
created_at (timestamp)
updated_at (timestamp)
```

### audit_logs
```sql
id (UUID)
user_id (FK → users)
action (string)
metadata (JSON)
created_at (timestamp)
```

---

## 🎯 Implementation Roadmap

### Phase 1: Core Infrastructure ✅
- [x] Homepage with marketing content
- [x] Auth system (Login/Register)
- [x] Role-based routing
- [x] Dashboard templates
- [x] Backend API scaffolding

### Phase 2: Waste Management (TODO)
- [ ] Waste report form with GPS capture
- [ ] Media upload functionality
- [ ] Report submission workflow
- [ ] Report list/history view

### Phase 3: HSE Compliance (TODO)
- [ ] Approval workflow UI
- [ ] Report review interface
- [ ] Alert system
- [ ] Compliance analytics

### Phase 4: Admin Features (TODO)
- [ ] Site management CRUD
- [ ] User assignment interface
- [ ] Analytics dashboard
- [ ] Audit log viewer

### Phase 5: Data Integration (TODO)
- [ ] Database setup (Neon PostgreSQL)
- [ ] Prisma ORM implementation
- [ ] Data persistence
- [ ] Advanced queries

### Phase 6: Advanced Features (TODO)
- [ ] Email notifications (Resend)
- [ ] Real-time updates (WebSockets)
- [ ] Map visualization
- [ ] Export functionality
- [ ] Mobile app (React Native)

---

## 🔗 Quick Links

### Frontend Pages
- Homepage: `/`
- Login: `/login`
- Register: `/register`
- Admin Dashboard: `/admin`
- HSE Dashboard: `/hse-dashboard`
- Worker Dashboard: `/worker-dashboard`

### Configuration Files
- **Tailwind Theme**: `tailwind.config.ts`, `client/global.css`
- **TypeScript**: `tsconfig.json`
- **Vite**: `vite.config.ts`
- **API Types**: `shared/api.ts`

---

## 🧪 Testing the Application

### Test Credentials (Mock)
```
Email: test@example.com
Password: password123
Role: field_worker
Site: North Field Platform A
```

### Test Workflows
1. **Registration Flow**: Visit `/register`, create account
2. **Login**: Use test credentials at `/login`
3. **Role-Based Access**: Check dashboard based on role
4. **Navigation**: Use logout buttons to return to login

---

## 📝 Next Steps

To continue building out the application, prompt the assistant to:

1. **Implement Waste Reporting**
   - "Build the waste report submission form with GPS capture and media upload"

2. **Create Report Management**
   - "Add report listing, filtering, and detailed view pages"

3. **Build HSE Approval System**
   - "Implement the HSE officer approval/flagging workflow"

4. **Setup Database**
   - "Connect Neon PostgreSQL and implement Prisma models"

5. **Add Email Notifications**
   - "Integrate Resend API for transactional emails"

6. **Create Analytics**
   - "Build compliance analytics and reporting dashboard"

---

## 📞 Support

For issues or questions during development:
- Check the `AGENTS.md` file for tech stack details
- Review component library in `client/components/ui/`
- Check shared types in `shared/api.ts`
- Server routes in `server/routes/`

**Happy coding! 🛢️**
