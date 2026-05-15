# Dr. Ali AI Academy Website

This repository contains the complete frontend codebase for the Dr. Ali AI Academy website. It is built using **React, Vite, and Vanilla CSS** to ensure a high-performance, SEO-friendly, and highly customizable academic platform.

## 1. Website Copy & Content Management
All website copy, including the About section, course details, research mentorship services, and testimonials, are centralized in `src/data.js`. 
**How to update content yourself:**
1. Open `src/data.js`.
2. Locate the `courses` array. To add a new course, simply copy an existing block `{ id: "...", title: "..." }` and paste it below, filling in the new details.
3. The changes will instantly reflect across the Home page, Courses page, and Registration form dropdowns. No need to edit HTML/CSS!

## 2. Suggested Layout
The website follows a modern, trust-building academic layout:
- **Navigation:** Sticky top bar with clear links.
- **Home:** High-impact hero section -> Benefits -> Featured Courses.
- **Courses:** Grid layout with standardized Course Cards.
- **Course Detail:** 2-column layout. Left: Syllabus/Outcomes. Right: Sticky summary card with Fee and "Register Now" button.
- **Portal:** Sidebar for folders, main area for files (video, pdf, colab).

## 3. Course Registration Flow
1. Student clicks "Register Now" (either globally or from a specific course page).
2. They are routed to `/register`. If they clicked from a specific course, that course is automatically pre-selected in the dropdown.
3. Student fills out Name, Email, WhatsApp, Education, and selects timing.
4. *Current State:* The form alerts success. 
5. *Next Step:* Connect the form's `onSubmit` handler to a free service like **Formspree.io**. You just paste an endpoint URL into the `<form action="...">`, and you will receive an email every time a student registers.

## 4. Admin-Friendly Method to Upload Lectures
Currently, the "Student Portal" (`src/pages/Portal.jsx`) reads from `siteData.lectures` in `src/data.js`.
To upload a lecture:
1. Upload your video to YouTube (Unlisted) or Google Drive.
2. Upload your PDF slides or Notebooks to Google Drive and copy the "Share Link".
3. Open `src/data.js`. Under `lectures: { "course-id": [ ... ] }`, add:
   `{ id: 4, title: "Week 2: New Video", type: "video", url: "YOUR_DRIVE_LINK" }`
4. The portal will automatically display a new card with a video icon linking to your file.

## 5. Simple Database Structure (For Future Backend)
If you decide to build a backend (e.g., Node.js + MongoDB or Firebase), here is the proposed schema:
- **Users Collection:** `_id`, `name`, `email`, `whatsapp`, `role` (student/admin), `passwordHash`.
- **Courses Collection:** `_id`, `title`, `description`, `fee`, `isActive`.
- **Enrollments Collection:** `_id`, `studentId` (ref), `courseId` (ref), `status` (pending/active), `paymentStatus`.
- **Lectures Collection:** `_id`, `courseId` (ref), `title`, `type` (video/pdf/colab), `fileUrl`.

## 6. Deployment Instructions
To put this website live on the internet for free:
1. Push this code to a GitHub repository.
2. Create a free account on [Vercel](https://vercel.com/) or [Netlify](https://netlify.com/).
3. Click "Import Project" and select your GitHub repository.
4. The build settings (`npm run build` and output directory `dist`) will be detected automatically.
5. Click Deploy. Your site will be live on a free `.vercel.app` domain. You can later buy a custom domain (e.g., `draliacademy.com`) and link it in the Vercel dashboard.

## 7. Future Upgrade Plan
Phase 1 (Current): Static site, manual registration via email, manual fee collection, manual link sharing for lectures.
**Phase 2 (Login & Auth):**
- Integrate Firebase Authentication.
- Lock the `/portal` route so only logged-in users with active enrollments can view lecture links.
**Phase 3 (Payments):**
- Integrate Stripe Checkout.
- When a student registers, route them to Stripe. On successful payment, automatically mark their Enrollment as `active` in the database.
**Phase 4 (Certificates):**
- Add a "Complete Course" button in the portal.
- Use a library like `pdf-lib` or a service like `Certifier.io` API to automatically generate a PDF certificate with the student's name upon completion.

---
### Running Locally
```bash
cd ali-ai-academy
npm install
npm run dev
```
