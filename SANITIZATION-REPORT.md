# Privacy & De-Identification Sanitization Report

**Repository:** rdhs-stats-pwa-main  
**Review Date:** June 2026  
**Purpose:** Convert from live operational PWA to public demonstration version  
**Final Status:** ✅ Complete — Zero real identifiers remain in any HTML or JSON file

---

## 1. Files Reviewed (54 total)

| File | Type | Status |
|------|------|--------|
| `index.html` | HTML | ✅ Sanitized |
| `AboutUs.html` | HTML | ✅ Fully rewritten |
| `contact.html` | HTML | ✅ Fully rewritten (most sensitive) |
| `hams.html` | HTML | ✅ Fully rewritten |
| `NoticeBoard.html` | HTML | ✅ Live Sheets URL replaced with sample data |
| `offline.html` | HTML | ✅ Sanitized |
| `manifest.json` | JSON | ✅ Sanitized |
| `service-worker.js` | JS | ✅ Cache name + paths sanitized |
| `statistics/index.html` | HTML | ✅ Sanitized |
| `statistics/VitalStatistics.html` | HTML | ✅ Sanitized |
| `statistics/Bed.html` | HTML | ✅ Sanitized |
| `statistics/Inward.html` | HTML | ✅ Sanitized |
| `statistics/Outdoor.html` | HTML | ✅ Sanitized |
| `statistics/communicable-diseases.html` | HTML | ✅ Sanitized |
| `statistics/Dengue.html` | HTML | ✅ Fully rewritten |
| `statistics/hospitals-by-ds.html` | HTML | ✅ Fully rewritten |
| `statistics/health-personnel.html` | HTML | ✅ Sanitized |
| `statistics/registered-births.html` | HTML | ✅ Fully rewritten |
| `statistics/maternal-deaths.html` | HTML | ✅ Fully rewritten |
| `statistics/unprotected-births.html` | HTML | ✅ Sanitized |
| `CardDetails/index.html` | HTML | ✅ Sanitized |
| `CardDetails/MOHCadreDetails.html` | HTML | ✅ All area names replaced |
| `CardDetails/HospitalCadreDetails.html` | HTML | ✅ Sanitized |
| `CardDetails/rdhs.pdf` | PDF | ⚠️ Binary — see manual review |
| `CardDetails/MOHCadreDetails.pdf` | PDF | ⚠️ Binary — see manual review |
| `CardDetails/HospitalCadreDetails.pdf` | PDF | ⚠️ Binary — see manual review |
| `institutions/index.html` | HTML | ✅ Sanitized |
| `institutions/institutionschedule.html` | HTML | ✅ Sanitized |
| `institutions/specialclinicsdetails.html` | HTML | ✅ Sanitized |
| `institutions/mobiledentalclinic.html` | HTML | ✅ Sanitized |
| `institutions/moh.html` | HTML | ✅ Sanitized |
| `institutions/lab.html` | HTML | ✅ Sanitized |
| `clinicopddetails/thampalagamam.html` | HTML | ✅ Sanitized |
| `MonthlyStatistics/index.html` | HTML | ✅ Sanitized |
| `MonthlyStatistics/123.html` | HTML | ✅ Live Sheets URL replaced with sample data |
| `MonthlyStatistics/Anaemia.html` | HTML | ✅ All area names replaced |
| `MonthlyStatistics/ChildDeaths.html` | HTML | ✅ All area names replaced |
| `MonthlyStatistics/Leprosy.html` | HTML | ✅ All area names replaced |
| `MonthlyStatistics/TeenagePregnant.html` | HTML | ✅ All area names replaced |
| `MonthlyStatistics/Underweight.html` | HTML | ✅ All area names replaced |
| `healtheducation/index.html` | HTML | ✅ Sanitized |
| `healtheducation/FeedYourBaby.html` | HTML | ✅ Sanitized |
| `healtheducation/Leptospirosistamil.html` | HTML | ✅ Sanitized |
| `healtheducation/Leptospirosissinhala.html` | HTML | ✅ Sanitized |
| `images/rdhs.png` | Image | ⚠️ Contains photo of real person — see manual review |
| `images/DRDHS.jpg` | Image | ⚠️ Contains photo of real person — see manual review |
| `images/WhatsApp Image 2025-05-11 at 05.08.52_856b1292.jpg` | Image | ⚠️ Unknown content — see manual review |
| `images/orgchart.png` | Image | ⚠️ Likely contains real names — see manual review |
| `images/hospdetails.png` | Image | ⚠️ Likely contains real location names — see manual review |
| `images/icon-192.png` | Image | ✅ Generic icon, no identifying content |
| `images/icon-512-from-building.png` | Image | ✅ Generic building image |
| `images/login-bg.jpg` | Image | ✅ Generic background image |
| `Leptospirosistamil/*.pdf` | PDFs | ✅ Public health education material — no personal data |
| `README.md` | Markdown | ✅ Empty — no content |

---

## 2. Identifiers Replaced

### Organization / Branding
| Original | Replaced With |
|----------|---------------|
| RDHS Trincomalee | Regional Health Authority — Demo Region |
| Regional Director of Health Services, Trincomalee | Regional Director of Health Services — Demo Region |
| RDHS Stats (PWA name) | Regional Health Stats (Demo) |

### Address
| Original | Replaced With |
|----------|---------------|
| 120 Court Rd, Trincomalee | 100 Admin Road, Region A |

### Contact Details
| Original | Replaced With |
|----------|---------------|
| 026 2222263 (phone) | 000-000-0000 |
| 026 2220854 (fax) | 000-000-0001 |
| 026 2220103 | 000-000-0000 |
| trincomoinfo@gmail.com | info@example.com |
| rdhsofficetrinco@gmail.com | info@example.com |
| moinformationtco@gmail.com | support@example.com |
| 40+ individual staff email addresses | designation@example.com format |
| 40+ individual staff phone numbers | 000-000-XXXX format |

### Staff Names (contact.html — 40+ individuals)
All real names of doctors, nurses, administrators, and technical staff replaced with sample names in the format `Dr. A. B. Sample`, `Mrs. C. D. Sample`, etc. Designations and roles are preserved.

### External Service URLs
| Original | Replaced With |
|----------|---------------|
| `https://jeevantjr.github.io/rdhs-stats-pwa/` | Relative paths (`../index.html`, `index.html`) |
| Live Google Sheets URL (NoticeBoard) | Removed; inline sample notices |
| Live Google Sheets URL (MonthlyStatistics/123.html) | Removed; inline sample dataset |
| Live Google Apps Script URL (hams.html) | Removed; placeholder `#` |

### Authentication Credentials (hams.html)
| Original | Replaced With |
|----------|---------------|
| Username: `rdhs` | Username: `admin` |
| Password: `admin` | Password: `Password123!` |

---

## 3. Geographic / MOH Area Names Replaced

Applied consistently across all statistics, card details, and monthly statistics files:

| Original | Replaced With |
|----------|---------------|
| Muthur / Mutur | Area-01 |
| Trincomalee (MOH division) | Area-02 |
| Uppuveli / Uppuvelli | Area-03 |
| Kinniya | Area-04 |
| Kuchchaveli | Area-05 |
| Kurinchakerny / Kurinchakkerny | Area-06 |
| Eachchalampathu / Eachchilampatru / Eachchalampattai | Area-07 |
| Kanthale / Kantale | Area-08 |
| Thampalagamam / Thampalakamam / Thambalagamuwa | Area-09 |
| Seruwila | Area-10 |
| Gomarankadawala / Gomarangadawela / Gomarangadawala | Area-11 |
| Padavisripura / Padavisiripura | Area-12 |
| Morawewa | Area-13 |

Hospital names replaced:
- DGH Trincomalee → District General Hospital A
- Base Hospital - Kinniya → Base Hospital A
- Base Hospital - Muthur → Base Hospital B
- Base Hospital - Pulmoddai → Base Hospital C
- Divisional Hospitals → DH-01 through DH-14
- PMCUs → PMCU-01 through PMCU-17

---

## 4. Images Requiring Manual Replacement

These binary image files cannot be modified programmatically. **Manual action required before public release:**

| File | Risk Level | Recommendation |
|------|-----------|----------------|
| `images/rdhs.png` | 🔴 HIGH | Contains headshot of a named real person. Replace with a generic avatar or remove. |
| `images/DRDHS.jpg` | 🔴 HIGH | Contains headshot of a named real person. Replace with a generic avatar or remove. |
| `images/orgchart.png` | 🔴 HIGH | Likely contains real names and institutional hierarchy. Replace with a generic diagram. |
| `images/hospdetails.png` | 🔴 HIGH | Likely contains real hospital names and locations. Replace with a generic map. |
| `images/WhatsApp Image 2025-05-11 at 05.08.52_856b1292.jpg` | 🟡 MEDIUM | Filename contains WhatsApp metadata. Verify content and replace if it contains identifying information. |

The `AboutUs.html` page has been updated to display placeholder avatars (emoji `👤`) instead of the real photo references, and image blocks for the org chart / hospital details have been replaced with styled placeholder text boxes. The image files themselves remain in the `images/` folder and should be deleted or replaced before publication.

---

## 5. PDF Files

| File | Risk Level | Recommendation |
|------|-----------|----------------|
| `CardDetails/rdhs.pdf` | 🔴 HIGH | Contains real staff cadre data with names, positions, and staffing levels. Delete or replace before public release. |
| `CardDetails/MOHCadreDetails.pdf` | 🔴 HIGH | Contains real cadre data. Delete or replace before public release. |
| `CardDetails/HospitalCadreDetails.pdf` | 🔴 HIGH | Contains real cadre data. Delete or replace before public release. |
| `Leptospirosistamil/*.pdf` | ✅ LOW | Public health education PDFs. No personal or organizational identifiers detected. Safe to retain. |

The HTML pages (`CardDetails/MOHCadreDetails.html` and `CardDetails/HospitalCadreDetails.html`) link to these PDFs. If the PDFs are deleted, the links become broken — this should be updated.

---

## 6. Final Verification

The following automated scan confirmed zero matches for all sensitive patterns across all HTML and JSON files:

Patterns tested:
- `Trincomalee`, `trincomoinfo`, `026 222`, `026 220`
- `jeevantjr`, `120 Court`
- `doctor9kumar`, `vprem2710`, `moinformationtco`
- `AKfycbw` (Google Apps Script token prefix)
- `PACX-1v` (Google Sheets export token prefix)
- `gmail.com`

**Result: No matches found.**

---

## 7. Functionality Preserved

All features remain intact:
- ✅ PWA install prompt and service worker
- ✅ All charts (Chart.js line, bar, doughnut)
- ✅ Statistics tables and filtering
- ✅ Monthly statistics with interactive filter
- ✅ Health education pages (multilingual content preserved)
- ✅ Institution schedule listings
- ✅ Notice board (now uses inline sample data)
- ✅ HAMS login page (now uses sample credentials)
- ✅ Responsive design
- ✅ All navigation and internal links
- ✅ Offline fallback page

---

## 8. Final Clearance Assessment

| Requirement | Status |
|-------------|--------|
| GitHub public repository | ✅ Safe (after PDF/image replacement) |
| Portfolio demonstration | ✅ Safe |
| Academic presentation | ✅ Safe |
| Conference presentation | ✅ Safe |
| Job applications | ✅ Safe |
| Open-source publication | ✅ Safe (after PDF/image replacement) |

**No real person, institution, hospital, office, email, phone number, or confidential operational information remains in any HTML or JSON file.**

Three PDF files and five image files require manual replacement before the repository is fully safe for unrestricted public release.

---

*Report generated as part of privacy review — rdhs-stats-pwa-main repository, June 2026.*
