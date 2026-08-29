# Corelane Systems: CRM Data Dictionary

This document defines the specific fields required in the Corelane Systems CRM.

## Prospect Record Fields

| Field Name | Purpose | Type | Required? | Allowed Values / Examples |
| :--- | :--- | :--- | :--- | :--- |
| **Lead ID** | Unique identifier for the prospect | Text/Auto | Yes | `L-1001` |
| **Company Name** | Registered or trading name of the prospect | Text | Yes | `Acme Legal Group` |
| **Industry** | Business vertical | Dropdown | Yes | Law Firms, Real Estate, Healthcare, E-commerce, etc. |
| **Country** | Geographic location | Dropdown | Yes | Pakistan, UAE, UK, USA, Canada |
| **City** | Specific location (must be verified) | Text | Yes | `Karachi`, `London` |
| **Area** | Local district (mainly for Pakistan) | Text | Optional | `DHA`, `Clifton` |
| **Website** | Prospect's current URL | URL | Optional | `https://acme.com` |
| **Website Status** | Objective classification of digital presence | Dropdown | Yes | NO WEBSITE, OUTDATED WEBSITE, POOR MOBILE EXPERIENCE, WEAK CONVERSION, MODERN WEBSITE |
| **Google Maps URL** | Link to verified local business listing | URL | Optional | `https://maps.google.com/...` |
| **LinkedIn URL** | Company or personal LinkedIn profile | URL | Optional | `https://linkedin.com/...` |
| **Instagram / Facebook** | Social media profiles | URL | Optional | `https://instagram.com/...` |
| **Public Email** | Verified outreach email | Email | Optional | `contact@acme.com` |
| **Public Phone / WhatsApp**| Verified contact numbers | Phone | Optional | `+92 300 0000000` |
| **Decision Maker** | Verified name of the primary contact | Text | Yes | `John Doe`, or `Not verified` if unknown |
| **Decision Maker Role** | Job title of the decision maker | Dropdown | Yes | Owner, Founder, CEO, MD, Partner, Director, Marketing Director, Operations Director, IT Manager, CTO, CIO, Head of IT, Procurement, Unknown |
| **Source** | Where the prospect was discovered | Dropdown | Yes | Google Maps, Google Search, LinkedIn, Website, Referral, Facebook, Instagram, Networking, Other |
| **Date Added** | When the record was created | Date | Yes | `2024-01-01` |
| **Research Date** | When prospect data was verified | Date | Yes | `2024-01-02` |
| **Sales Owner** | Corelane team member responsible | User | Yes | `Zaid` |

## Qualification & Pipeline Fields

| Field Name | Purpose | Type | Required? | Allowed Values / Examples |
| :--- | :--- | :--- | :--- | :--- |
| **Lead Score** | Objective priority level | Dropdown | Yes | A (High), B (Medium), C (Low) |
| **Lead Status** | Internal engagement assessment | Dropdown | Yes | HOT, WARM, EXPLORING, NOT QUALIFIED |
| **Sales Stage** | Current pipeline position | Dropdown | Yes | NEW PROSPECT, RESEARCHED, CONTACTED, CONNECTED, RESPONDED, INTERESTED, DISCOVERY CALL, PROPOSAL, NEGOTIATION, WON, LOST |
| **Potential Opportunity** | Primary solution required | Dropdown | Yes | Website Development, Web Application, Custom Software, Mobile Application, UI/UX, Cloud Engineering, DevOps, Data Engineering, Data Analytics, Automation, Other |
| **Service Interest** | Primary / Secondary services | Text | Yes | `Web Application` |

## Activity & Tracking Fields

| Field Name | Purpose | Type | Required? | Allowed Values / Examples |
| :--- | :--- | :--- | :--- | :--- |
| **First Contact Date** | Date of initial outreach | Date | Optional | `2024-01-03` |
| **Last Contact Date** | Most recent outreach/reply | Date | Optional | `2024-01-05` |
| **Number of Attempts** | Count of outreach efforts | Number | Yes | `3` |
| **Next Action** | Mandatory next step | Text | Yes (if active)| `Send personalized email` |
| **Next Follow-up Date** | Deadline for the Next Action | Date | Yes (if active)| `2024-01-10` |
| **Sample Homepage Status**| Tracks the free sample strategy | Dropdown | Yes | Not Started, In Progress, Sent, Viewed/Discussed, Converted, Not Relevant |
| **Lost Reason** | Why an opportunity failed | Dropdown | If LOST | No Budget, Not a Priority, Chose Another Vendor, Project Cancelled, Timeline Changed, No Response, Requirements Changed, Not a Good Fit, Other |
| **Nurture Reason** | Why an opportunity is on hold | Text | If NURTURE| `Evaluating in Q3` |

## Won Record Fields

| Field Name | Purpose | Type | Required? | Allowed Values / Examples |
| :--- | :--- | :--- | :--- | :--- |
| **Client Name** | Official client entity | Text | If WON | `Acme Legal Group` |
| **Project Name** | Title of the engagement | Text | If WON | `Client Portal App` |
| **Contract Value** | Agreed investment | Currency | If WON | `$15,000` |
| **Start Date / Delivery** | Project timeline markers | Date | If WON | `2024-02-01` |
| **Delivery Owner** | Team member executing the work | User | If WON | `Engineering Team` |
