# Dental Avenue Clinic website

Node.js + Express site with scroll animations.

## Run locally
```
npm install
npm start
```
Open http://localhost:3000

## Deploy on Render
1. Push this folder to a GitHub repository.
2. On Render: New > Web Service > connect the repository.
3. Settings: Runtime `Node`, Build Command `npm install`, Start Command `npm start`.
   (Or choose New > Blueprint to use the included `render.yaml`.)
4. Deploy. Render sets `PORT` automatically.

## Things to update
- Opening hours: `public/index.html` (search "Call to confirm").
- Appointment form: requests are logged in the Render service logs. To receive them by email,
  add an email service (for example Nodemailer or Resend) inside the `/api/appointment` route in `server.js`.
- Prices are approximate figures from the clinic's website. Confirm before publishing.
- Free Render services sleep after inactivity, so the first visit can take about a minute.
