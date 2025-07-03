# NagarSeva – Are Ye Local Hai Apna

A full-stack (MERN) civic grievance platform designed to bridge the communication gap between citizens and local municipal authorities, providing a transparent and structured process for registering, tracking, and resolving public infrastructure complaints.

## Real-World Problem

In Tier-2 and Tier-3 Indian cities, local civic issues—such as potholes, garbage dumps, water leakage, and broken streetlights—often remain unresolved due to:

* Lack of a centralized complaint portal
* Absence of complaint tracking or escalation mechanisms
* Unverified citizen identities
* No transparency or feedback loop regarding resolution status

**NagarSeva – Are Ye Local Hai Apna** addresses these problems through a scalable, secure, and user-friendly complaint management system.

## Demo (Local Setup)

```bash
git clone https://github.com/adityakumar393/NagarSeva---Are-ye-Local-hai-Apna.git

# Backend
cd backend
npm install
npm run dev

# Frontend
cd ../frontend
npm install
npm run dev
```

## Features

### Citizen Portal

* Google-based authentication (for now) Later stage is to authenticate user with UDAI (Aadhar) so only a local residence can login using local location and assigning the particular loacal governing body.
* Complaint registration with image based logging 
* Category, sub-category, and state-based tagging
* Complaint history and real-time status tracking
* Notifications Alerts

### Admin Panel

* Secure login for administrators (verified via city.gov.in email domain) done by superadmin only for security and transparency
* Dashboard to view, filter, and manage submitted complaints
* Ability to update complaint status (Pending, In Progress, Resolved)
* Role-based access control
* Notifications Alerts

## Architecture

* **Frontend**: React (Vite), TailwindCSS
* **Backend**: Node.js, Express.js
* **Database**: MongoDB Atlas (via Mongoose)
* **Authentication**: Firebase (Google OAuth) + JWT
* **File Storage**: Cloudinary (via Multer & multer-storage-cloudinary)
* **User Feedback**: React Toastify

## Tech Stack

| Layer          | Technology                          |
| -------------- | ----------------------------------- |
| Frontend       | React, Vite, Tailwind CSS           |
| Backend        | Node.js, Express.js                 |
| Database       | MongoDB Atlas                       |
| Authentication | Firebase Auth, JWT                  |
| File Uploads   | Cloudinary                          |
| Hosting        | Vercel (frontend), Render (backend) |
| State Mgmt     | React Hooks, LocalStorage           |
| Notifications  | React Toastify                      |

## External Packages

### Authentication

* `firebase`
* `jsonwebtoken`
* `cookie-parser`
* `bcryptjs`

### File Upload

* `cloudinary`
* `multer`
* `multer-storage-cloudinary`

### UI/UX Enhancements

* `react-toastify`
* `clsx`
* `react-router-dom`

### Backend Utilities

* `dotenv`
* `cors`
* `express-async-handler`

## Role-Based Access Flow

```
              +----------------------+
              |    Firebase Login    |
              +----------+-----------+
                         |
              +----------v-----------+
              |     Backend JWT      |
              +----------+-----------+
                         |
     +-------------------+------------------+
     |                                      |
+----v-----+                         +------v------+
| Citizen  |                         | Admin       |
| Role     |                         | Role        |
| Google   |                         | Email+Pwd   |
+----+-----+                         +------+------+
     |                                      |
+----v---------------------+       +--------v-------------+
| Submit/View Complaints   |       | View/Update Complaints |
+--------------------------+       +------------------------+
```

## API Endpoints

| Endpoint                     | Method | Access  | Description                |
| ---------------------------- | ------ | ------- | -------------------------- |
| `/api/auth/google-login`     | POST   | Public  | Google sign-in             |
| `/api/auth/admin-login`      | POST   | Public  | Admin email-password login |
| `/api/complaints/submit`     | POST   | Citizen | Submit a new complaint     |
| `/api/complaints/my`         | GET    | Citizen | Get personal complaints    |
| `/api/complaints/all`        | GET    | Admin   | Get all complaints         |
| `/api/complaints/:id/status` | PATCH  | Admin   | Update complaint status    |

## Test Users

| Role    | Method         | Note                         |
| ------- | -------------- | ---------------------------- |
| Citizen | Google login   | Auto-register via Firebase   |
| Admin   | Email/password | Created manually via MongoDB |

## Scalability & Future Enhancements

* AI-based urgency detection using image/text analysis
* Push notifications via email or SMS
* OTP-based citizen verification
* GIS integration to plot complaints on a map
* Role hierarchy: zonal/state-level admin accounts

## Contributing

We welcome contributions to:

* Refine UI/UX
* Add support for new user roles
* Enhance dashboard analytics

## Author

**Aditya Kumar**
ECE Undergraduate, NIT Patna (2026)
---

If this project resonates with your vision of building scalable civic-tech solutions, feel free to fork, star, and contribute.
