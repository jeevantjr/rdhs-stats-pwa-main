# 🏥 Regional Health Statistics Dashboard — PWA

<p align="center">
  <a href="https://jeevantjr.github.io/rdhs-stats-pwa-main/">
    <img src="https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github" alt="Live Demo" />
  </a>
  <img src="https://img.shields.io/badge/PWA-Offline%20Capable-brightgreen?style=for-the-badge" alt="PWA" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
  <img src="https://img.shields.io/badge/Made%20in-Sri%20Lanka%20🇱🇰-orange?style=for-the-badge" alt="Sri Lanka" />
  <a href="https://drjeevaraj.com/dev.html">
    <img src="https://img.shields.io/badge/Developer-Dr.%20T.%20Jeevaraj-navy?style=for-the-badge" alt="Developer" />
  </a>
</p>

---

> A modern, responsive, offline-capable **Progressive Web Application (PWA)** for visualizing and managing public health statistics across MOH divisions and hospital institutions — built as a portfolio demonstration of health informatics applied to real administrative workflows.

🌐 **Live Site**: [https://jeevantjr.github.io/rdhs-stats-pwa-main/](https://jeevantjr.github.io/rdhs-stats-pwa-main/)

> ⚠️ **Note:** All institution names, division names, and statistical figures shown in this demo are **sample data only** and do not represent any specific real-world institution, individual, or region.

---

## 📸 Quick Navigation

| Section | URL | Description |
|---|---|---|
| 🏠 Home | [`/`](https://jeevantjr.github.io/rdhs-stats-pwa-main/) | Main dashboard landing page |
| 📊 Statistics | [`/statistics/`](https://jeevantjr.github.io/rdhs-stats-pwa-main/statistics/index.html) | Health Statistics Dashboard – 2024 |
| 📅 Monthly Stats | [`/MonthlyStatistics/`](https://jeevantjr.github.io/rdhs-stats-pwa-main/MonthlyStatistics/index.html) | Monthly Health Statistics – 2025 |
| 👥 Cadre Details | [`/CardDetails/`](https://jeevantjr.github.io/rdhs-stats-pwa-main/CardDetails/index.html) | MSD Approved Cadre Details – 2025 |
| 🏥 Institutions | [`/institutions/`](https://jeevantjr.github.io/rdhs-stats-pwa-main/institutions/index.html) | Institution Directory & Schedules |
| 🎓 Health Education | [`/healtheducation/`](https://jeevantjr.github.io/rdhs-stats-pwa-main/healtheducation/index.html) | Health Education Resources |

---

## ✅ Features

**Progressive Web App**
- Installable on Android, iOS, and desktop via Add-to-Home-Screen
- Offline functionality using a Service Worker and pre-cached routes
- App manifest with custom icons and theme colour

**Health Statistics Dashboard (2024)**
- Vital statistics (2020–2024 trends)
- Hospital bed facilities by institution type
- Inward and outdoor patient volumes
- Health personnel numbers
- Registered and unprotected births by MOH division
- Maternal deaths and communicable disease surveillance
- MOH division-wise dengue case tracking

**Monthly Statistics (2025)**
- Dengue cases by MOH division (monthly)
- Anaemia in pregnant mothers (% by division)
- Teenage pregnancies by MOH area
- Child deaths under 5 (monthly)
- Underweight preschoolers (2–5 years)
- Monthly leprosy updates

**Cadre Details**
- Regional Director Office cadre and positions
- MOH Office workforce distribution
- Hospital cadre with approved vs. existing vs. vacancies

**Institutions Module**
- Outpatient clinic schedules by division and hospital
- Laboratory services
- Mobile dental clinic schedules
- Special clinic timetables

**Health Education**
- Baby and infant feeding guidance
- Disease awareness materials (Leptospirosis — Sinhala & Tamil)

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, JavaScript (ES6) |
| Charts | Chart.js 4.x |
| Tables | DataTables.js + Bootstrap 5 |
| Layout | Bootstrap 5, Flexbox, CSS Grid |
| Icons | Font Awesome 6 |
| Fonts | Google Fonts (Roboto, Poppins, Inter) |
| PWA | Service Worker, Web App Manifest |
| Hosting | GitHub Pages |

---

## ⚙️ PWA Capabilities

**Offline Support** — Service Worker pre-caches all major pages and assets so users can navigate with limited connectivity.

**Install Prompt** — Add-to-Home-Screen supported on Android, iOS, and desktop browsers.

**Automatic Caching** — Key assets loaded instantly on repeat visits.

---

## 📁 Repository Structure

```
rdhs-stats-pwa-main/
│
├── index.html                    # Home / landing page
├── manifest.json                 # PWA manifest
├── service-worker.js             # Offline caching
├── offline.html                  # Offline fallback page
│
├── statistics/                   # Annual health statistics (2024)
│   ├── index.html                # Statistics dashboard menu
│   ├── VitalStatistics.html
│   ├── Bed.html
│   ├── Inward.html
│   ├── Outdoor.html
│   ├── hospitals-by-ds.html
│   ├── health-personnel.html
│   ├── registered-births.html
│   ├── unprotected-births.html
│   ├── maternal-deaths.html
│   ├── communicable-diseases.html
│   └── Dengue.html
│
├── MonthlyStatistics/            # Monthly reports (2025)
│   ├── index.html                # Monthly statistics menu
│   ├── Anaemia.html
│   ├── TeenagePregnant.html
│   ├── ChildDeaths.html
│   ├── Underweight.html
│   └── Leprosy.html
│
├── CardDetails/                  # Cadre and workforce data
│   ├── index.html                # Cadre summary (sample tables)
│   ├── MOHCadreDetails.html
│   └── HospitalCadreDetails.html
│
├── institutions/                 # Institution directory
│   ├── index.html
│   ├── institutionschedule.html
│   ├── lab.html
│   ├── mobiledentalclinic.html
│   ├── specialclinicsdetails.html
│   └── moh.html
│
├── healtheducation/              # Patient education resources
│   ├── index.html
│   ├── FeedYourBaby.html
│   ├── Leptospirosistamil.html
│   └── Leptospirosissinhala.html
│
├── clinicopddetails/             # OPD and clinic detail pages
├── images/                       # Icons and images
└── hams.html                     # HAMS data view
```

---

## 🚀 Getting Started (Local)

```bash
# Clone the repository
git clone https://github.com/jeevantjr/rdhs-stats-pwa-main.git
cd rdhs-stats-pwa-main

# Serve locally (required for Service Worker to register)
python -m http.server 8000
# OR
npx serve .

# Open in browser
http://localhost:8000
```

> ⚠️ Open via a local server (not `file://`) — Service Workers require HTTP/HTTPS.

---

## ⚠️ Data Notice

All statistical figures, institution names, MOH division names, and cadre data shown in this application are **illustrative sample data** for demonstration purposes. No real patient records, individual identifiers, or specific institutional data are included. This repository is safe for public sharing on GitHub.

---

## 📄 License

MIT License — free to adapt for health informatics education, research, or local health authority applications.  
See [LICENSE](LICENSE) for full terms.

---

## 👨‍💻 Developer

<table>
  <tr>
    <td width="120" align="center">
      <img src="https://drjeevaraj.com/T. Jeevaraj.jpg" width="96" height="96" style="border-radius:50%; object-fit:cover;" alt="Dr. T. Jeevaraj" />
    </td>
    <td>
      <strong>Dr. Thangarasa Jeevaraaj (Dr. T. Jeevaraj)</strong><br/>
      MBBS · MCGP · MSc Biomedical Informatics<br/>
      MD Trainee, Health Informatics · PGIM, University of Colombo · Sri Lanka<br/><br/>
      <a href="https://drjeevaraj.com">🌐 Website</a> &nbsp;|&nbsp;
      <a href="https://drjeevaraj.com/cv.html">📄 CV</a> &nbsp;|&nbsp;
      <a href="https://drjeevaraj.com/dev.html">💻 Dev Portfolio</a> &nbsp;|&nbsp;
      <a href="https://www.linkedin.com/in/geevanathy/">LinkedIn</a> &nbsp;|&nbsp;
      <a href="https://x.com/drjeevaraj">X / Twitter</a> &nbsp;|&nbsp;
      <a href="mailto:tjeevaraj78@gmail.com">Email</a>
    </td>
  </tr>
</table>

---

## 🗂 Other Projects

| Project | Description | Link |
|---|---|---|
| 🚗 VMS | Vehicle Management System — PHP/MySQL healthcare fleet management | [GitHub](https://github.com/jeevantjr/vmsrdhstrinco) |
| 🌊 FloodTrackerApp | Community resilience PWA (flood, health, education reporting) | [GitHub](https://github.com/jeevantjr/FloodTrackerApp) |
| 🦠 OutbreakWatch | Community health early warning system PWA | [GitHub](https://github.com/jeevantjr/OutbreakWatch) |

---

## 🙏 Acknowledgements

- [Chart.js](https://www.chartjs.org) — Interactive charts
- [DataTables.js](https://datatables.net) — Sortable/searchable tables
- [Bootstrap 5](https://getbootstrap.com) — Responsive layout
- [Font Awesome](https://fontawesome.com) — Icons
- [GitHub Pages](https://pages.github.com) — Free static hosting

---

<p align="center">
  Built with ❤️ by <a href="https://drjeevaraj.com"><strong>Dr. T. Jeevaraj</strong></a> &nbsp;·&nbsp;
  <a href="https://drjeevaraj.com/cv.html">CV</a> &nbsp;·&nbsp;
  <a href="https://drjeevaraj.com/dev.html">Portfolio</a>
</p>
